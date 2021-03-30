import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetallePerfil2Page } from '../../detalle-perfil2/detalle-perfil2.page';
import { Storage } from '@ionic/storage';
import { OperacionesService } from '../../../services/operaciones.service';
import { ProviderService } from '../../../services/provider.service';
@Component({
  selector: 'app-perfil2',
  templateUrl: './perfil2.page.html',
  styleUrls: ['./perfil2.page.scss'],
})
export class Perfil2Page {

  constructor(
     private router: Router,
     private modalCtrl: ModalController,
     private storage: Storage, 
     private service: OperacionesService,
     private provider: ProviderService) {
      this.server = this.provider.server;
    }

     contentLoaded = false;
     contentLoadedF = false;

  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true; 
      this.contentLoadedF = true; 
      this.cargarFotoPerfil();         
    }, 2500);    
  }

  salir(){
    this.router.navigate(['/dashboard2/menutabs2/inicio-menu']);
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: DetallePerfil2Page,
      mode: 'ios',
    });
    await modal.present();
  }

  server: string;
  foto: string;
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

  fotoPerfil : any = [];
  cargarFotoPerfil(){
    return new Promise(resolve => {
      let body = {
        aksi: 'perfilFoto',
        bly_usuario: this.id
      }
      this.provider.postDataCFPA(body, 'db_cargarFotoPerfilAct.php').subscribe(data => {
        this.fotoPerfil = data;
        this.foto = this.fotoPerfil.bly_fotografia;
        resolve(true);
      });
    });      
  }
}
