import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonList, ModalController } from '@ionic/angular';
import { DetalleMensajePage } from '../../detalle-mensaje/detalle-mensaje.page';
import { ProviderService } from '../../../services/provider.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-mensajes2',
  templateUrl: './mensajes2.page.html',
  styleUrls: ['./mensajes2.page.scss'],
})
export class Mensajes2Page implements OnInit {
  @ViewChild(IonList) ionList: IonList;

  contentLoaded = false;
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private provider: ProviderService,
    private storage: Storage
  ) {
    this.server = this.provider.server;
  }

  server: string;
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

  salir() {
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
  }
}
