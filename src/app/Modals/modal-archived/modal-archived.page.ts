import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../services/provider.service';
import { DetalleMensajePage } from '../../pages/detalle-mensaje/detalle-mensaje.page';

@Component({
  selector: 'app-modal-archived',
  templateUrl: './modal-archived.page.html',
  styleUrls: ['./modal-archived.page.scss'],
})
export class ModalArchivedPage implements OnInit {
  contentLoaded = false;
  public noRentas: boolean = false;

  @ViewChild(IonList) ionList: IonList;

  constructor(
    private storage: Storage,
    private provider: ProviderService,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    private modalController: ModalController
  ) {
    this.server = this.provider.server;
  }

  server: string;
  mensaje: any = [];
  mensajeArchivado: any = [];
  id: number;
  ionViewWillEnter() {
    this.storage.get('perfil').then((data) => {
      this.id = data.bly_usuario;
      let body2 = {
        aksi: 'mensaje',
        id: this.id,
      };
      console.log(body2);
      this.provider
        .CargarChatArchivado(body2, 'db_cargarChatArchivados.php')
        .subscribe((data) => {
          this.mensaje = data.result;
          if (this.mensaje == 0) {
            this.noRentas = true;
          } else {
            this.noRentas = false;
          }
        });
    });
    setTimeout(() => {
      this.contentLoaded = true;
    }, 6000);
  }

  ngOnInit() {}

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 2000);
  }

  async delete(id: any) {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'Confirmación',
      message: '¿Esta seguro de eliminar esta conversación?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            this.ionList.closeSlidingItems();
          },
        },
        {
          text: 'Eliminar',
          cssClass: 'iconCancelar',
          handler: () => {
            let body = {
              aksi: 'retirar-chat',
              id2: this.id,
              id: id,
            };
            console.log(body);
            this.provider
              .EliminarMensajeIndividual(body, 'db_eliminar_Chat.php')
              .subscribe((data) => {
                this.cargaAccion();
                setTimeout(() => {
                  this.ionViewWillEnter();
                  this.toastEliminacion();
                }, 1500);
              });
          },
        },
      ],
    });

    await alert.present();
  }

  async cargaAccion() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      mode: 'ios',
      spinner: 'bubbles',
      duration: 2000,
    });
    await loading.present();
  }

  async toastEliminacion() {
    const toast = await this.toastController.create({
      header: 'Eliminación',
      message: 'Se ha eliminado correctamente esta conversación...',
      position: 'bottom',
      duration: 1500,
    });
    await toast.present();
  }

  archived(datosU: any) {
    this.storage.get('perfil').then((data) => {
      this.id = data.bly_usuario;
      let body = {
        aksi: 'desarchivar',
        id2: this.id,
        id: datosU,
      };
      console.log(body);
      this.provider
        .DesarchivarChat(body, 'db_desarchivarChat.php')
        .subscribe((data) => {
          this.toatsActualizar();
          this.ionViewWillEnter();
        });
    });
    this.ionList.closeSlidingItems();
  }

  async toatsActualizar() {
    const toast = await this.toastController.create({
      message: 'Espere un momento',
      duration: 2000,
      mode: 'ios',
    });
    toast.present();
  }

  informacionChat: any = [];
  mostrarChat(bly_duenoPropiedad) {
    this.informacionChat = {
      usuario: bly_duenoPropiedad,
    };
    this.mostrarModalChat();
  }

  async mostrarModalChat() {
    const modal = await this.modalController.create({
      component: DetalleMensajePage,
      componentProps: {
        datos: this.informacionChat,
      },
    });
    await modal.present();
  }

  salir(){
    this.modalController.dismiss();
  }
}
