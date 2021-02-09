import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ForgotPage } from '../forgot/forgot.page';
import { DataService } from '../../services/data.service';


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
  constructor(private router: Router, private modalCtrl: ModalController, private service: DataService) { 
    if(localStorage.getItem('userdata')){
      this.router.navigate(['/dashboard/menutabs/inicio-menu']);
    }
  }

  onLogin() {
    this.service.iniciarSesion(this.usuario.correoElectronico, this.usuario.contrasena).subscribe(
      data => {
        this.responseData = data;
      });
  }


  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: ForgotPage
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
