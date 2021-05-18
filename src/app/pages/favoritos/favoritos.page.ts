import { Component, OnInit, Input } from '@angular/core';
import {
  ActionSheetController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../services/provider.service';
import { ModalDetallePage } from '../../Modals/modal-detalle/modal-detalle.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  server: string;
  contentLoaded = false;
  valor: string = '';
  bly_usuario: number;
  toast: any;
  constructor(
    private storage: Storage,
    private provider: ProviderService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private socialSharing: SocialSharing
  ) {
    this.server = this.provider.server;
  }

  ngOnInit() {}

  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 5000);
  }

  @Input() titulo: string = '';

  perfilData: any;
  body: any = [];
  customers: any = [];
  segmentChanged(event) {
    this.favoritos = [];
    this.valor = event.detail.value;
    if (this.valor == 'Favoritos') {
      this.storage.get('perfil').then((res) => {
        this.perfilData = res;
        (this.bly_usuario = this.perfilData.bly_usuario),
          this.cargarFavoritos();
      });
    } else {
      this.storage.get('perfil').then((res) => {
        this.perfilData = res;
        (this.bly_usuario = this.perfilData.bly_usuario),
          (this.body = {
            aksi: 'mas-buscados',
            bly_usuario: this.bly_usuario,
          });
        console.log(this.body);
      });
    }
  }

  favoritos: any = [];
  cargarFavoritos() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'favoritos',
        bly_usuario: this.bly_usuario,
      };
      this.provider
        .cargarFavoritos(body, 'db_CargarFavoritos.php')
        .subscribe((data) => {
          for (let requisito of data.result) {
            this.favoritos.push(requisito);
            console.log(this.favoritos);
          }
          resolve(true);
        });
    });
  }

  informacionDetalle: any = [];
  mostrarDetalle(bly_registroPropiedad, bly_usuario) {
    this.informacionDetalle = {
      propiedad: bly_registroPropiedad,
      usuario: bly_usuario,
    };
    this.mostrarModalResultado();
  }

  async mostrarModalResultado() {
    const modal = await this.modalController.create({
      component: ModalDetallePage,
      componentProps: {
        datos: this.informacionDetalle,
      },
    });
    await modal.present();
  }

  onError(img) {
    img.src = '../../../../assets/imgs/default-inicio.svg';
  }

  bly_url: 'https://www.facebook.com/Blybnmx/';
  async infoFavoritos(bly_registroPropiedad, bly_usuario, bly_tituloPropiedad, bly_ciudad) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Favoritos',
      mode: 'ios',
      buttons: [
        {
          text: 'Eliminar de favoritos ',
          icon: 'trash',
          cssClass: 'elminar',
          handler: () => {
            let body = {
              aksi: 'retirar-favorito',
              bly_registroPropiedad: bly_registroPropiedad,
              bly_usuario: bly_usuario,
            };
            this.provider
              .eliminarFavoritos(body, 'db_eliminarFavoritos.php')
              .subscribe((data) => {
                this.toast = this.toastController
                  .create({
                    message: 'Se ha retirado de favoritos...',
                    duration: 2000,
                    mode: 'ios',
                  })
                  .then((toastData) => {
                    this.favoritos = [];
                    toastData.present();
                    this.cargarFavoritos();
                  });
              });
          },
        },
        {
          text: 'Compartir',
          icon: 'share',
          cssClass: 'shared',
          handler: () => {
            this.socialSharing.share(
              bly_tituloPropiedad,
              bly_ciudad,
              '',
              this.bly_url
            );
          },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle-outline',
          role: 'cancel',
          cssClass: 'iconCancelar',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
