import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProviderService } from '../../../services/provider.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registro-f',
  templateUrl: './registro-f.page.html',
  styleUrls: ['./registro-f.page.scss'],
})
export class RegistroFPage implements OnInit {

  constructor(
    private storage: Storage,
    private alertController: AlertController,
    private router: Router,
    private provider: ProviderService,
  ) { }

  ngOnInit() {
  }

  informacionPerfil: any;
  bly_usuario: string;

  informacionP5: any;
  bly_tituloPropiedad: string;

  informacionMapa: any;
  bly_pais: string;
  bly_calle: string;
  bly_ciudad: string;
  bly_estado: string;
  bly_codigoPostal: string;
  bly_direccionGeneral: string;
  
  informacionP2: any;
  bly_latitud: string;
  bly_longitud: string;

  informacionP10: any;
  bly_numHabitaciones: string;
  bly_numHuespedes: string;
  bly_numCamas: string;

  informacionMuebles: any = [];
  bly_mueble: string;
  bly_cantidad: string;

  informacionP11: any;
  bly_numBanos: string;
  bly_tipoBano: string;

  informacionP1: any;
  tipoPropiedad: any = [];
  tipoAlojamiento: any = [];
  tipoAventura: any = [];
  tipoExclusividad: any = [];
  tipoMoneda: any = [];

  bly_tipoPropiedad: string;
  bly_tipoAlojamiento: string;
  bly_tipoAventura: string;
  bly_frecuenciaRenta: string;
  bly_historialPrevioPropiedad: string;
  bly_tipoAprobacionRenta: string;
  bly_exclusividad: string;

  informacionDisponibilidad: any;
  informacionFrecuenciaRecepcion: any;
  informacionHistorialPrevio: any;
  informacionTipoAprobacion: any;

  bly_statusAceptacionContrato = "true";

  informacionCostosPropiedad: any;
  bly_precioBase: string;
  bly_cargoLimpieza: string;
  bly_tipoMoneda: string;

  informacionP8: any;
  bly_descuentoSemana: string; 
  bly_descuentoMes: string;

  informacionP3: any;
  informacionAmenidades: any;
  informacionAreasComunes: any;
  informacionSeguridad: any;
  
  bly_tipoAmenidad: number;
  bly_espacios: number;
  bly_seguridad: number;

  informacionP6: any;
  informacionRestricciones: any;

  bly_restriccion: number;

  informacionRequisitosRenta: any;
  informacionRequisitos: any;

  bly_tipoRequisito:number;

  ionViewWillEnter(){
    this.storage.get('perfil').then((res) => {
      this.informacionPerfil = res;
      this.bly_usuario = this.informacionPerfil.bly_usuario;
    });
    this.storage.get('registroP5').then((res) =>{
      this.informacionP5 = res;
      this.bly_tituloPropiedad = this.informacionP5.tituloPropiedad;
    });
    this.storage.get('mapaInformacion').then((res) => {
      this.informacionMapa = res;
      this.bly_pais = this.informacionMapa.pais;
      this.bly_estado = this.informacionMapa.estado;
      this.bly_ciudad = this.informacionMapa.ciudad;
      this.bly_calle = this.informacionMapa.calle;
      this.bly_codigoPostal = this.informacionMapa.codigoPostal;
      this.bly_direccionGeneral = this.informacionMapa.direccion;
    });
    this.storage.get('registroP2').then((res) => {
      this.informacionP2 = res;
      this.bly_latitud = this.informacionP2.latitud;
      this.bly_longitud = this.informacionP2.longitud;
    });
    this.storage.get('registroP10').then((res) => {
      this.informacionP10 = res;
      this.bly_numHuespedes = this.informacionP10.huespedes;
      this.bly_numHabitaciones = this.informacionP10.habitaciones;
      this.bly_numCamas = this.informacionP10.camas;
    });
    this.storage.get('mueblesInformacion').then((res) => {
      this.informacionMuebles = res;
    });
    this.storage.get('registroP11').then((res) => {
      this.informacionP11 = res;
      this.bly_numBanos = this.informacionP11.cantidadBano;
      this.bly_tipoBano = this.informacionP11.tipoBano;
    });
    this.storage.get('registroP1').then((res) => {
      this.informacionP1 = res;
      this.bly_tipoPropiedad = this.informacionP1.propiedad;
      this.bly_tipoAlojamiento = this.informacionP1.alojamiento;
      this.bly_tipoAventura = this.informacionP1.aventura;
      this.bly_exclusividad = this.informacionP1.exclusividad;
      this.cargarAlojamiento();
      this.cargarAventura();
      this.cargarExclusividad();
      return new Promise((resolve) => {
        let body = {
          aksi: 'tipo_propiedad',
          bly_tipoPropiedad: this.bly_tipoPropiedad
        };
        this.provider.postDataCPRF(body, 'db_cargarTipoPropiedad.php').subscribe((data) => {
          for (let propiedad of data.result){
            this.tipoPropiedad.push(propiedad);
          }
        });
      });
    });
    this.storage.get('requisitosDisponibilidad').then((res) => {
      this.informacionDisponibilidad = res;
      this.informacionFrecuenciaRecepcion = this.informacionDisponibilidad.frecuenciaRecepcion;
      this.informacionHistorialPrevio = this.informacionDisponibilidad.historialPrevio;
      this.informacionTipoAprobacion = this.informacionDisponibilidad.tipoAprobacion;
      this.bly_frecuenciaRenta = this.informacionFrecuenciaRecepcion.bly_frecuenciaRenta;
      this.bly_historialPrevioPropiedad = this.informacionHistorialPrevio.bly_historialPrevioPropiedad;
      this.bly_tipoAprobacionRenta = this.informacionTipoAprobacion.bly_statusRenta;
    });
    this.storage.get('costosPropiedad').then((res) => {
      this.informacionCostosPropiedad = res;
      this.bly_precioBase = this.informacionCostosPropiedad.precioBase;
      this.bly_cargoLimpieza = this.informacionCostosPropiedad.precioLimpieza;
      this.bly_tipoMoneda = this.informacionCostosPropiedad.tipoMoneda;
      this.cargarMoneda();
    });
    this.storage.get('registroP8').then((res)=>{
      this.informacionP8 = res;
      this.bly_descuentoSemana = this.informacionP8.descuentoSemanal;
      this.bly_descuentoMes = this.informacionP8.descuentoMensual;
    });
    this.storage.get('registroP3').then((res) => {
      this.informacionP3 = res;
      this.informacionAmenidades = this.informacionP3.amenidades;
      this.informacionAreasComunes = this.informacionP3.areasComunes;
      this.informacionSeguridad = this.informacionP3.seguridad;
    });
    this.storage.get('registroP6').then((res) => {
      this.informacionP6 = res;
      this.informacionRestricciones = this.informacionP6.restriccion;
      console.log(this.informacionRestricciones);
    });
    this.storage.get('requisitosRenta').then((res)=>{
      this.informacionRequisitosRenta = res;
      this.informacionRequisitos = this.informacionRequisitosRenta.requisitos;
      console.log(this.informacionRequisitos);
    });
  }

  cargarAlojamiento(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'tipo_alojamiento',
        bly_tipoAlojamiento: this.bly_tipoAlojamiento
      };
      this.provider.postDataCARF(body, 'db_cargarAlojamientoPropiedad.php').subscribe((data) => {
        for (let alojamiento of data.result){
          this.tipoAlojamiento.push(alojamiento);
        }
      });
    });
  }

  cargarAventura(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'tipo_aventura',
        bly_tipoAventura: this.bly_tipoAventura
      };
      this.provider.postDataCAVRF(body, 'db_cargarTipoAventuraPropiedad.php').subscribe((data) => {
        for (let aventura of data.result){
          this.tipoAventura.push(aventura);
        }
      });
    });
  }

  cargarExclusividad(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'tipo_exclusividad',
        bly_exclusividadHospedaje: this.bly_exclusividad
      };
      this.provider.postDataCEPRF(body, 'db_cargarExclusividad.php').subscribe((data) => {
        for (let exclusiva of data.result){
          this.tipoExclusividad.push(exclusiva);
        }
      });
    });
  }

  cargarMoneda(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'tipo_moneda',
        bly_tipoMoneda: this.bly_tipoMoneda
      };
      this.provider.postDataTMPRF(body, 'db_cargarMonedaPago.php').subscribe((data) => {
        for (let moneda of data.result){
          this.tipoMoneda.push(moneda);
        }
      });
    });
  }

  obtenerCantidadMueble(value:any){
    this.bly_cantidad = value;
  }

  obtenerTipoMueble(valor:any){
    this.bly_mueble = valor;
  }

  obtenerAmenidad(amenidad:any){
    this.bly_tipoAmenidad = amenidad;
  }

  obtenerAreas(areas: any){
    this.bly_espacios = areas;
  }

  obtenerSeguridad(seguridad: any){
    this.bly_seguridad = seguridad
  }

  obtenerRestriccion(restriccion: any){
    this.bly_restriccion = restriccion;
  }

  obtenerRequisito(requisito:any){
    this.bly_tipoRequisito = requisito;
  }

  registrarRequisito(){
    console.log(this.bly_tipoRequisito);
  }

  registrarAmenidad(){
    console.log(this.bly_tipoAmenidad);
  }

  registrarEspacio(){
    console.log(this.bly_espacios);
  }

  registrarSeguridad(){
    console.log(this.bly_seguridad);
  }

  registrarRestriccion(){
    console.log(this.bly_restriccion);
  }

  registrarMueble(){
    
  }
  async cancelar(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar operación',
      mode: 'ios',
      message: '¿Esta seguro que desea cancelar la publicación de la propiedad?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
          },
        },
      ],
    });

    await alert.present();
  }

  publicar(){
    
  }
}
