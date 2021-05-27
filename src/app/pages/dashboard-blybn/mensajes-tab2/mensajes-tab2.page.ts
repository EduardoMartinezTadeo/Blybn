import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DetalleMensajePage } from '../../detalle-mensaje/detalle-mensaje.page';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-mensajes-tab2',
  templateUrl: './mensajes-tab2.page.html',
  styleUrls: ['./mensajes-tab2.page.scss'],
})
export class MensajesTab2Page implements OnInit {
  @ViewChild(IonList) ionList: IonList;

  contentLoaded = false;
  constructor(
    private modalCtrl: ModalController,
    private provider: ProviderService,
    private storage: Storage
  ) {}

  ngOnInit() {}

  mensaje: any = [];
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

  delete() {
    console.log('chat eliminado');
    this.ionList.closeSlidingItems();
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
    const modal = await this.modalCtrl.create({
      component: DetalleMensajePage,
      componentProps: {
        datos: this.informacionChat,
      },
    });
    await modal.present();
  }
}
