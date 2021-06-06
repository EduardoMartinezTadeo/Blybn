import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ModalController,
  AlertController,
  LoadingController,
  NavParams,
  ToastController,
  IonContent,
} from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-detalle-mensaje',
  templateUrl: './detalle-mensaje.page.html',
  styleUrls: ['./detalle-mensaje.page.scss'],
})
export class DetalleMensajePage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private storage: Storage,
    private navParams: NavParams,
    private provider: ProviderService,
    private loadingController: LoadingController
  ) {
    this.server = this.provider.server;
  }

  server: string;
  ngOnInit() {}
  id_usuario: number;
  id_propiedad: number;
  usuario: string;
  bly_placeId: string;
  datos: any = [];

  perfilData: any;
  informacionPropiedades: any = [];
  ionViewWillEnter() {
    this.datos = this.navParams.get('datos');
    this.id_propiedad = this.datos.propiedad;
    this.storage.get('perfil').then((data) => {
      this.bly_nombre = data.bly_nombre;
      this.bly_correo = data.bly_correoElectronico;
      this.currentUser = this.bly_nombre;
      this.bly_id = data.bly_usuario;

      let body1 = {
        aksi: 'mensaje-id',
        id: this.bly_id,
        id2: this.datos.usuario,
      };
      console.log(body1);
      this.provider
        .CargarMisMensajes(body1, 'db_cargarMisMensajes.php')
        .subscribe((data) => {
          console.log(data.result);
          this.messages = data.result;
        });
    });
    this.cargarInformacionBasica();
  }

  bly_nombre: string;
  bly_correo: string;
  bly_id: number;
  informacionPersonal: any = [];
  cargarInformacionBasica() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'info-propietario',
        bly_propietario: this.datos.usuario,
      };
      this.provider
        .cargarInformacionPropietario(
          body,
          'db_CargarInformacionPropietario.php'
        )
        .subscribe((data) => {
          this.informacionPersonal = data.result;

          resolve(true);
        });
    });
  }

  foto: string;
  fotoPerfil: any = [];
  cargarFotoPerfil() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'perfilFoto',
        bly_usuario: this.datos.usuario,
      };
      this.provider
        .postDataCFPA(body, 'db_cargarFotoPerfilAct.php')
        .subscribe((data) => {
          this.fotoPerfil = data;
          this.foto = this.fotoPerfil.bly_fotografia;
          resolve(true);
        });
    });
  }

  salir() {
    this.modalCtrl.dismiss();
  }

  body: any;
  messages = [];
  messagesE = [];
  currentUser = '';
  newMsg = '';
  @ViewChild(IonContent) content: IonContent;
  usuario1: string;
  sendMessage(datos: any) {
    this.storage.get('perfil').then((data) => {
      this.usuario1 = data.bly_nombre;
      let body = {
        aksi: 'chat',
        user: this.usuario1,
        createdAt: new Date().getTime(),
        msg: this.newMsg,
        id: data.bly_usuario,
        id2: datos.usuario,
      };

      this.provider
        .enviarMensaje(body, 'db_registrarChat.php')
        .subscribe((data) => {});
      this.messages.push(body);
      this.newMsg = '';
      this.content.scrollToBottom(200);
    });
  }

  doRefresh(event) {
    this.ionViewWillEnter();
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  async actualizarMensajes() {
    const loading = await this.loadingController.create({
      mode: 'ios',
      spinner: 'bubbles',
      message: 'Espere un momento...',
      duration: 2000,
    });
    await loading.present();

    setTimeout(() => {
      this.ionViewWillEnter();
    }, 1500)
  }
}
