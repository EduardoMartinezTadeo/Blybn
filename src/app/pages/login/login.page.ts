import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { ForgotPage } from '../forgot/forgot.page';
import { DataService } from '../../services/data.service';
import { Storage } from '@ionic/storage';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    correoElectronico: '',
    contrasena: ''
  }
  responseData: any;

  showPassword = false;
  passwordToggleIcon = 'eye';
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private service: DataService,
    private alertController: AlertController,
    private loading: LoadingController,
    private provider: PerfilService,
    private storage: Storage
    ) { }

  onLogin() {
    let body = {
      aksi: 'perfil',
      bly_correoElectronico: this.usuario.correoElectronico,
      bly_contrasena: this.usuario.contrasena
    };
    this.provider.postData(body, 'db_cargarPerfil.php').subscribe(async data => {
      if(data.success) {
        this.storage.set('perfil', data.result);
      }
    });
    this.service.iniciarSesion(this.usuario.correoElectronico, this.usuario.contrasena).subscribe(
      data => {
        this.responseData = data;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  async presentAlertServer() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Ha ocurrido un error, verifique su conexión!!!',
      buttons: [{
        text: 'Reintentar',
        handler: () => {
          this.router.navigateByUrl('/login');
        }
      }
      ]
    });
    await alert.present();
  }

  async presentLoadingServer() {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      duration: 1500,
      spinner: "bubbles"
    });
    await loading.present();
    setTimeout(() => {
      this.presentAlertServer();
    }, 2000);
  }


  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ForgotPage,
    });    
    await modal.present();
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  ngOnInit() {

  }

  onRegister() {
    this.router.navigateByUrl('/register');
  }

  onFacebook() {

  }

}
