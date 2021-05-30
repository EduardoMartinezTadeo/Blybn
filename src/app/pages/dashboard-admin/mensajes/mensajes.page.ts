import { Component, OnInit, Provider, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, ModalController, ToastController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DetalleMensajePage } from '../../detalle-mensaje/detalle-mensaje.page';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  public noRentas: boolean = false;

  @ViewChild(IonList) ionList: IonList;

  contentLoaded = false;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private storage: Storage,
    private provider: ProviderService,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    this.server = this.provider.server;
  }

  server: string;
  mensaje: any = [];
  id: number;
  ionViewWillEnter() {
    this.noRentas = false;
    this.mensaje = [];
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
    });
    setTimeout(() => {
      this.contentLoaded = true;
      console.log(this.mensaje);
    }, 6000);
  }

  ngOnInit() {}

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
                }, 1500)
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
      duration: 1500
    });
    await toast.present();
  }

  archived() {
    console.log('chat archivado');
    this.ionList.closeSlidingItems();
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

  salir() {
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ionViewWillEnter();
      event.target.complete();
    }, 2000);
  }
}
