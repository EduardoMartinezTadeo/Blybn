import { Component, OnInit } from '@angular/core';
import { Modal5Page } from '../../Modals/modal5/modal5.page';
import { Modal4Page } from '../../Modals/modal4/modal4.page';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ajustes2',
  templateUrl: './ajustes2.page.html',
  styleUrls: ['./ajustes2.page.scss'],
})
export class Ajustes2Page implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  showPassword = false;
  passwordToggleIcon = 'eye';

  ngOnInit() {
  }

  salir() {
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu');
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
