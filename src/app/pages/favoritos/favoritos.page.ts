import { Component, OnInit, Input } from '@angular/core';
import {
  ActionSheetController,
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../services/provider.service';
import { ModalDetallePage } from '../../Modals/modal-detalle/modal-detalle.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataService } from '../../services/data.service';

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
    private socialSharing: SocialSharing,
    private loadingController: LoadingController,
    private servicio: DataService
  ) {
    this.server = this.provider.server;
  }

  ngOnInit() {}

  public favorito: boolean = false;
  public vistas: boolean = false;

  ionViewWillEnter() {
    this.dataVistas = [];
    this.cargarVistas();
    setTimeout(() => {
      this.contentLoaded = true;
    }, 5000);
  }

  @Input() titulo: string = '';

  perfilData: any;
  body: any = [];
  customers: any = [];
  segmentChanged(event) {
    this.vistas = false;
    this.dataVistas = [];
    this.favoritos = [];
    this.valor = event.detail.value;
    if (this.valor == 'Favoritos') {
      this.storage.get('perfil').then((res) => {
        this.perfilData = res;
        (this.bly_usuario = this.perfilData.bly_usuario),
          this.cargarFavoritos();
      });
    } else {
      this.favorito = false;
      this.favoritos = [];
      this.cargarVistas();
    }
  }

  dataVistas: any = [];
  cargarVistas(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'mas-buscados'
      };
      this.provider.cargarVistasPropiedades(body, 'db_CargarVistasPropiedades.php').subscribe((data) => {
        console.log(data.result);
        if (data.result == 0) {
          this.vistas = true;
        } else {
          for (let vista of data.result){
            this.dataVistas.push(vista);
          }
          resolve(true);
        }
      });
    });
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
          console.log(data.result);
          if (data.result == 0) {
            this.favorito = true;
          } else {
            for (let requisito of data.result) {
              this.favoritos.push(requisito);
            }
            resolve(true);
          }
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

  informacionDetalleVista: any = [];
  mostrarDetalleVista(bly_propiedad, bly_duenoPropiedad) {
    this.informacionDetalleVista = {
      propiedad: bly_propiedad,
      usuario: bly_duenoPropiedad,
    };
    this.mostrarModalResultadoVista();
  }

  async mostrarModalResultadoVista() {
    const modal = await this.modalController.create({
      component: ModalDetallePage,
      componentProps: {
        datos: this.informacionDetalleVista,
      },
    });
    await modal.present();
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

  async infoFavoritos(
    bly_registroPropiedad,
    bly_usuario,
    bly_tituloPropiedad,
    bly_ciudad
  ) {
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
              'https://www.facebook.com/Blybnmx/'
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
  }

  buscar: string;
  onSearchChange(event) {
    this.buscar = event.detail.value;
    if (this.buscar == '') {
      this.buscar == '';
      console.log('no buscar');
    } else {
      setTimeout(() => {
        this.buscarPropiedadLoading();
      }, 500);
    }
  }

  responseData: any;
  async buscarPropiedadLoading() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento',
      mode: 'ios',
      spinner: 'bubbles',
      duration: 1500,
    });
    await loading.present();
    setTimeout(() => {
      this.servicio.buscarPropiedad(this.buscar).subscribe((data) => {
        this.responseData = data;
      });
    }, 1600);
  }
}
