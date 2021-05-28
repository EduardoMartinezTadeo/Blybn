import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ModalController } from '@ionic/angular';
import { DetalleMensajePage } from '../../detalle-mensaje/detalle-mensaje.page';
import { ProviderService } from '../../../services/provider.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mensajes-tab',
  templateUrl: './mensajes-tab.page.html',
  styleUrls: ['./mensajes-tab.page.scss'],
})
export class MensajesTabPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;

  contentLoaded = false;

  constructor(
    public modalController: ModalController,
    private provider: ProviderService,
    private storage: Storage
  ) {
     this.server = this.provider.server;
  }

  server: string;
  ngOnInit() {}

  id: number;
  ionViewWillEnter() {
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
          console.log(this.mensaje);
          console.log(data.result);
        });
    });
    setTimeout(() => {
      this.contentLoaded = true;
    }, 6000);
  }

  mensaje: any = [];

  delete() {
    console.log('chat eliminado');
    this.ionList.closeSlidingItems();
  }

  archived() {
    console.log('chat archivado');
    this.ionList.closeSlidingItems();
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
      component: DetalleMensajePage,
      componentProps: {
        datos: this.informacionChat,
      },
    });
    await modal.present();
  }
}
