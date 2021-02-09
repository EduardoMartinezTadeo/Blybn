import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetallePerfilPage } from '../detalle-perfil/detalle-perfil.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router,  private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu');
  }


  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: DetallePerfilPage
    });
    await modal.present();
  }
}
