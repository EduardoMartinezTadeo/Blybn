import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetallePerfil2Page } from '../../detalle-perfil2/detalle-perfil2.page';
import { Storage } from '@ionic/storage';
import { OperacionesService } from '../../../services/operaciones.service';
@Component({
  selector: 'app-perfil2',
  templateUrl: './perfil2.page.html',
  styleUrls: ['./perfil2.page.scss'],
})
export class Perfil2Page implements OnInit {

  constructor(
     private router: Router,
     private modalCtrl: ModalController,
     private storage: Storage, 
     private service: OperacionesService ) { }

     contentLoaded = false;
     contentLoadedF = false;
  ngOnInit() {   
  }
  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true; 
      this.contentLoadedF = true;          
    }, 2500);    
  }

  salir(){
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
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
  facturacionData: any;
  responseData: any;
  bly_correoElectronico: string;
  bly_direccionFiscal: string;
  bly_razonSocial: string;
  bly_rfc: string;
  bly_statusBtn: string;
  ionViewDidEnter(){
    this.storage.get('perfil').then((res) => {
      this.perfilData = res;
      this.usuario = this.perfilData.bly_nombre,
      this.correo = this.perfilData.bly_correoElectronico,
      this.id = this.perfilData.bly_usuario,
      this.tipoRol = this.perfilData.bly_rol,
      this.service.consultarDatosFacturacion(this.id).subscribe(data => {
        this.responseData = data;
      });
    });
    this.storage.get('facturacion').then((factura) =>{
      this.facturacionData = factura;
      this.bly_correoElectronico = this.facturacionData.bly_correoElectronico,
      this.bly_direccionFiscal = this.facturacionData.bly_direccionFiscal,
      this.bly_razonSocial = this.facturacionData.bly_razonSocial,
      this.bly_rfc = this.facturacionData.bly_rfc
    });
  }
}
