import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonList, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { DetalleMensajePage } from '../../detalle-mensaje/detalle-mensaje.page';
import { ProviderService } from '../../../services/provider.service';
import { Storage } from '@ionic/storage';
import { ModalArchivedPage } from '../../../Modals/modal-archived/modal-archived.page';

@Component({
  selector: 'app-mensajes-tab',
  templateUrl: './mensajes-tab.page.html',
  styleUrls: ['./mensajes-tab.page.scss'],
})
export class MensajesTabPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;

  contentLoaded = false;
  public noRentas: boolean = false;
  public chatArchivado: boolean = false;

  constructor(
    public modalController: ModalController,
    private provider: ProviderService,
    private storage: Storage,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {
    this.server = this.provider.server;
  }

  server: string;
  ngOnInit() {}
  mensajeArchivado: any = [];
  id: number;
  ionViewWillEnter() {
    this.chatArchivado = false;
    this.noRentas = false;
    this.mensaje = [];
    this.mensajeArchivado = [];
    this.storage.get('perfil').then((data) => {
      this.id = data.bly_usuario;
      let body = {
        aksi: 'mensaje',
        id: this.id,
      };
      this.provider
        .CargarMensajesIndividuales(body, 'db_cargarChatIndividuales.php')
        .subscribe((data) => {
          this.mensaje = data.result;
          if (this.mensaje == 0) {
            this.noRentas = true;
          }
        });
      let body2 = {
        aksi: 'mensaje',
        id: this.id,
      };
      this.provider
        .CargarChatArchivado(body2, 'db_cargarChatArchivados.php')
        .subscribe((data) => {
          this.mensajeArchivado = data.result;
          if (this.mensajeArchivado == 0) {
            this.mensajeArchivado = [];
            this.chatArchivado = false;
          } else {
            this.chatArchivado = true;
          }
        });
    });
    setTimeout(() => {
      this.contentLoaded = true;
      console.log(this.mensaje);
    }, 6000);
  }

  mensaje: any = [];

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
        aksi: 'actualizarChat',
        id2: this.id,
        id: datosU,
      };
      console.log(body);
      this.provider
        .ArchivarChat(body, 'db_archivarChat.php')
        .subscribe((data) => {
          this.toatsActualizar();
          this.ionViewWillEnter();
        });
    });
    this.ionList.closeSlidingItems();
  }

  async toatsActualizar() {
    const toast = await this.toastController.create({
      message: 'Se ha archivado esta conversación...',
      duration: 2000,
      mode: 'ios',
    });
    toast.present();
  }

  async mostrarModal() {
    const modal = await this.modalController.create({
      component: DetalleMensajePage,
    });
    return await modal.present();
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
      mode: 'ios',
      component: DetalleMensajePage,
      componentProps: {
        datos: this.informacionChat,
      },
    });
    await modal.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 2000);
  }

  async modalArchivado() {
    const modal = await this.modalController.create({
      component: ModalArchivedPage,
      mode: 'ios',
    });
    return await modal.present();
  }
}
