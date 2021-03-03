import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetallePerfil2Page } from '../detalle-perfil2/detalle-perfil2.page';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-perfil2',
  templateUrl: './perfil2.page.html',
  styleUrls: ['./perfil2.page.scss'],
})
export class Perfil2Page implements OnInit {

  constructor(private router: Router,  private modalCtrl: ModalController, private storage: Storage) { }

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

  usuario: string;
  correo: string;
  rol = 'Blybn';
  tipoRol: number;
  id: string;
  perfilData: any;
  ionViewDidEnter(){
    this.storage.get('perfil_data').then((res) => {
      this.perfilData = res;
      this.usuario = this.perfilData.bly_nombre,
      this.correo = this.perfilData.bly_correoElectronico,
      this.id = this.perfilData.bly_usuario,
      this.tipoRol = this.perfilData.bly_rol
    });
  }
}
