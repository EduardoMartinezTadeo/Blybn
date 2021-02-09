import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Modal4Page } from '../../Modals/modal4/modal4.page';
import { Modal5Page } from '../../Modals/modal5/modal5.page';

@Component({
  selector: 'app-detalle-perfil',
  templateUrl: './detalle-perfil.page.html',
  styleUrls: ['./detalle-perfil.page.scss'],
})
export class DetallePerfilPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  showPassword = false;
  passwordToggleIcon = 'eye';

  ngOnInit() {
  }

  salir() {
    this.modalCtrl.dismiss();
  }

  togglePassword():void {
    this.showPassword = !this.showPassword;
    if(this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

  async openModal4() {
    const presentModel = await this.modalCtrl.create({
      component: Modal4Page,
      componentProps: {
        title: 'Billing Address',
        type:'billing',
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'change-address-shipping-modal1'
    });

    presentModel.onWillDismiss().then((data)=>{
      console.log(data);
      //custom code
    });
    
    return await presentModel.present();
  }

  async openModal5() {
    const presentModel = await this.modalCtrl.create({
      component: Modal5Page,
      componentProps: {
        title: 'Billing Address',
        type:'billing',
      },
      showBackdrop: true,
      mode:	"ios",
      cssClass: 'change-address-shipping-modal1'
    });

    presentModel.onWillDismiss().then((data)=>{
      console.log(data);
      //custom code
    });
    
    return await presentModel.present();
  }


}
