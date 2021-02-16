import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetallePerfil2Page } from '../detalle-perfil2/detalle-perfil2.page';


@Component({
  selector: 'app-perfil2',
  templateUrl: './perfil2.page.html',
  styleUrls: ['./perfil2.page.scss'],
})
export class Perfil2Page implements OnInit {

  constructor(private router: Router,  private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard2/menutabs/inicio-menu');
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: DetallePerfil2Page
    });
    await modal.present();
  }

}
