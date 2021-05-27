import { Component, OnInit, Provider, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonList, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DetalleMensajePage } from '../../detalle-mensaje/detalle-mensaje.page';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {
  @ViewChild(IonList) ionList: IonList;

  contentLoaded = false;

  constructor(
    public modalController: ModalController,
    private router: Router,
    private storage: Storage,
    private provider: ProviderService
  ) {}

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

  ngOnInit() {}

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
}
