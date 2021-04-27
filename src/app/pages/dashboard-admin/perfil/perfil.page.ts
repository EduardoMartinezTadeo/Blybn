import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { OperacionesService } from 'src/app/services/operaciones.service';
import { ProviderService } from 'src/app/services/provider.service';
import { DetallePerfilPage } from '../../detalle-perfil/detalle-perfil.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

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

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true; 
      this.contentLoadedF = true;          
    }, 2500);    
  }

  salir(){
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }


  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: DetallePerfilPage
    });
    await modal.present();
  }

  server: string;
  foto: string;
  usuario: string;
  correo: string;
  rol = 'Propietario Blybn';
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
      this.service.consultarDatosFacturacionAdmin(this.id).subscribe(data => {
        this.responseData = data;
        this.cargarFotoPerfil();  
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

  onError(img) {
    img.src = '../../../../assets/imgs/avatar.svg';
  }
}
