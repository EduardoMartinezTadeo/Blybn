import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ProviderService } from '../../services/provider.service';
import { ModalDetallePage } from '../modal-detalle/modal-detalle.page';
import { Storage } from '@ionic/storage';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-busqueda',
  templateUrl: './modal-busqueda.page.html',
  styleUrls: ['./modal-busqueda.page.scss'],
})
export class ModalBusquedaPage implements OnInit {
  datos: any = [];
  server: string;
  constructor(
    private modalController: ModalController,
    private provider: ProviderService,
    private datalocalService: DataService,
    private storage: Storage
  ) {
    this.server = this.provider.server;
  }

  ngOnInit() {}

  salir() {
    this.modalController.dismiss();
  }

  onError(img) {
    img.src = '../../../../assets/imgs/default-inicio.svg';
  }

  informacionDetalle: any = [];
  mostrarDetalle(bly_registroPropiedad, bly_usuario) {
    this.informacionDetalle = {
      propiedad: bly_registroPropiedad,
      usuario: bly_usuario,
    };
    this.mostrarModalResultado();
  }

  async mostrarModalResultado() {
    const modal = await this.modalController.create({
      component: ModalDetallePage,
      componentProps: {
        datos: this.informacionDetalle,
      },
    });
    await modal.present();
  }

  responseData: any;
  perfilData: any;
  bly_tituloPropiedad: string;
  bly_ciudad: string;
  bly_calificacion: string;
  bly_imagen: string;
  bly_estado: string;
  bly_precioBase: string;
  bly_duenoPropiedad: number;
  bly_usuario: number;
  bly_registroPropiedad: number;
  infoFavoritos(datos: any) {
    this.bly_tituloPropiedad = datos.bly_tituloPropiedad;
    this.bly_ciudad = datos.bly_ciudad;
    this.bly_calificacion = datos.calificacion;
    this.bly_imagen = datos.bly_imagen;
    this.bly_estado = datos.bly_estado;
    this.bly_precioBase = datos.bly_precioBase;
    this.bly_duenoPropiedad = datos.bly_usuario;
    this.bly_registroPropiedad = datos.bly_registroPropiedad;
    this.storage.get('perfil').then((res) => {
      this.perfilData = res;
      this.bly_usuario = this.perfilData.bly_usuario,
      this.datalocalService.registrarFavoritos(this.bly_tituloPropiedad, this.bly_ciudad, this.bly_calificacion, this.bly_imagen, this.bly_estado, this.bly_precioBase, this.bly_duenoPropiedad, this.bly_usuario, this.bly_registroPropiedad).subscribe(data => {
        this.responseData = data;
      });
    });
  }

  bly_vPropiedad: number;
  bly_vbly_tituloPropiedad: string;
  bly_vbly_ciudad: string;
  bly_vbly_calificacion: string;
  bly_vbly_imagen: string;
  bly_vbly_estado: string;
  bly_vbly_precioBase: number;
  bly_vbly_duenoPropiedad: number;
  responseDataVista: any;
  registrarVisita(vistas: any){
    console.log(vistas);
    this.bly_vPropiedad = vistas.bly_registroPropiedad;
    this.bly_vbly_tituloPropiedad = vistas.bly_tituloPropiedad;
    this.bly_vbly_ciudad = vistas.bly_ciudad;
    this.bly_vbly_calificacion = vistas.calificacion;
    this.bly_vbly_imagen = vistas.bly_imagen;
    this.bly_vbly_estado = vistas.bly_estado;
    this.bly_vbly_precioBase = vistas.bly_precioBase;
    this.bly_vbly_duenoPropiedad = vistas.bly_usuario;
    this.storage.get('perfil').then((res) => {
      this.perfilData = res;
      this.bly_usuario = this.perfilData.bly_usuario,
      this.datalocalService.registrarVisitasPropiedad(this.bly_vPropiedad, this.bly_vbly_tituloPropiedad, this.bly_vbly_ciudad, this.bly_vbly_calificacion, this.bly_vbly_imagen, this.bly_vbly_estado, this.bly_vbly_precioBase, this.bly_vbly_duenoPropiedad ).subscribe(data => {
        this.responseData = data;
      });
    });    
  }
}
