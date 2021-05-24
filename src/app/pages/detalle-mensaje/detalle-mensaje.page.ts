import { Component, OnInit } from '@angular/core';
import {
  ModalController,
  AlertController,
  LoadingController,
  NavParams,
  ToastController,
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
    private provider: ProviderService
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
    console.log(this.datos);
    this.id_propiedad = this.datos.propiedad;
    this.storage.get('perfil').then((data) => {
      this.bly_nombre = data.bly_nombre;
      this.bly_correo = data.bly_correoElectronico;
    });
    this.cargarInformacionBasica();
  }

  bly_nombre: string;
  bly_correo: string;
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
          console.log(this.informacionPersonal);
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

  messages = [
    {
      user: 'simmon',
      createdAt: 1554090856000,
      msg: 'Buen dia, aun esta disponible?',
    },
    {
      user: 'max',
      createdAt: 1554090956000,
      msg: 'La casa esta disponible aun',
    },
    {
      user: 'simmon',
      createdAt: 1554091056000,
      msg: 'Deseo una cita para la casa',
    },
    {
      user: 'max',
      createdAt: 1554099156000,
      msg: 'Se agendara la previa cita',
    },
  ];

  currentUser = 'simmon';
  newMsg = '';

  sendMessage() {
    this.messages.push({
      user: 'simmon',
      createdAt: new Date().getTime(),
      msg: this.newMsg,
    });

    this.newMsg = '';
  }
}
