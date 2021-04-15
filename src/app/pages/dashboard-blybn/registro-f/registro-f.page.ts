import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ProviderService } from '../../../services/provider.service';
import { Storage } from '@ionic/storage';
import { DataService } from '../../../services/data.service';

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
    private servicio: DataService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  public dato1: boolean = true;
  public dato2: boolean = false;

  public dato3: boolean = true;
  public dato4: boolean = false;

  public dato5: boolean = true;
  public dato6: boolean = false;

  public dato7: boolean = false;
  public dato7p: boolean = true;
  public dato8: boolean = false;

  public dato9: boolean = false;
  public dato9p: boolean = true;
  public dato10: boolean = false;

  public dato11: boolean = true;
  public dato12: boolean = false;

  informacionPerfil: any;
  bly_usuario: number;

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
  bly_numHabitaciones: number;
  bly_numHuespedes: number;
  bly_numCamas: number;

  informacionMuebles: any = [];
  bly_mueble: number;
  bly_cantidad: number;

  informacionP11: any;
  bly_numBanos: string;
  bly_tipoBano: string;

  informacionP1: any;
  tipoPropiedad: any = [];
  tipoAlojamiento: any = [];
  tipoAventura: any = [];
  tipoExclusividad: any = [];
  tipoMoneda: any = [];
  tipoPreaviso: any = [];
  tipoSalidaH: any = [];
  tipoHoras: any = [];
  tipoVentanaDisponibilidad: any = [];
  tipoHoraLlegada: any = [];
  tipoHoraLlegadaAntes: any = [];
  tipoSalida: any = [];

  bly_tipoPropiedad: number;
  bly_tipoAlojamiento: number;
  bly_tipoAventura: number;
  bly_frecuenciaRenta: number;
  bly_historialPrevioPropiedad: number;
  bly_tipoAprobacionRenta: number;
  bly_exclusividad: string;

  informacionDisponibilidad: any;
  informacionFrecuenciaRecepcion: any = [];
  informacionHistorialPrevio: any = [];
  informacionTipoAprobacion: any = [];

  bly_statusAceptacionContrato = "true";

  informacionCostosPropiedad: any;
  bly_precioBase: number;
  bly_cargoLimpieza: number;
  bly_tipoMoneda: number;

  informacionP8: any;
  bly_descuentoSemana: number; 
  bly_descuentoMes: number;

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
  
  informacionP7: any;
  bly_preaviso: string;
  bly_tiempoSalidadH: string;
  bly_horaLimiteReservacion: string;
  bly_tiempoAnticipacionReservacion: string;
  bly_llegadaDespues: string;
  bly_llegadaAntes: string;
  bly_salidaAntes: string;
  bly_fechaInicio: string;
  bly_fechaFinal: string;
  bly_fechaInicialND: string;
  bly_fechaFinalND: string;

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
    });
    this.storage.get('requisitosRenta').then((res)=>{
      this.informacionRequisitosRenta = res;
      this.informacionRequisitos = this.informacionRequisitosRenta.requisitos;
    });
    this.storage.get('registroP7').then((res) => {
      this.informacionP7 = res;
      this.bly_preaviso = this.informacionP7.preaviso;
      this.bly_tiempoSalidadH = this.informacionP7.tiempoSalidaHuesped;
      this.bly_horaLimiteReservacion = this.informacionP7.limiteReservacion;
      this.bly_tiempoAnticipacionReservacion = this.informacionP7.ventanaDisponibilidad;
      this.bly_llegadaDespues = this.informacionP7.llegadaDespues;
      this.bly_llegadaAntes = this.informacionP7.llegadaAntes;
      this.bly_salidaAntes = this.informacionP7.salidaAntes;
      this.bly_fechaInicio = this.informacionP7.fechainicialD;
      this.bly_fechaFinal = this.informacionP7.fechafinalD;
      this.bly_fechaInicialND = this.informacionP7.fechainicialND;
      this.bly_fechaFinalND = this.informacionP7.fechafinalND;
      this.cargarPreaviso();
      this.cargarSalidaHuesped();
      this.cargarHorasReservacion();
      this.cargarVentanaDisponibilidad();
      this.cargarHoraLlegadaDespues();
      this.cargarHoraLlegadaAntes();
      this.cargarSalida();
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

  cargarPreaviso(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'preaviso',
        bly_numPreaviso: this.bly_preaviso
      };
      this.provider.postDataCPARF(body, 'db_cargarPreaviso.php').subscribe((data) => {
        for (let preaviso of data.result){
          this.tipoPreaviso.push(preaviso);
        }
      });
    });
  }

  cargarSalidaHuesped(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'preaviso',
        bly_numPreaviso: this.bly_tiempoSalidadH
      };
      this.provider.postDataCPARF(body, 'db_cargarPreaviso.php').subscribe((data) => {
        for (let salidaH of data.result){
          this.tipoSalidaH.push(salidaH);
        }
      });
    });
  }

  cargarHorasReservacion(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'horas',
        bly_numHora: this.bly_horaLimiteReservacion
      };
      this.provider.postDataCHRF(body, 'db_cargarHoras.php').subscribe((data) => {
        for (let horas of data.result){
          this.tipoHoras.push(horas);
        }
      });
    });
  }

  cargarVentanaDisponibilidad(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'ventanaDisponibilidad',
        bly_numventanaDisponibilidad: this.bly_tiempoAnticipacionReservacion
      };
      this.provider.postDataCVDRF(body, 'db_cargarVentanaDisponibilidad.php').subscribe((data) => {
        for (let ventanaDisponibilidad of data.result){
          this.tipoVentanaDisponibilidad.push(ventanaDisponibilidad);
        }
      });
    });
  }

  cargarHoraLlegadaDespues(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'horas',
        bly_numHora: this.bly_llegadaDespues
      };
      this.provider.postDataCHRF(body, 'db_cargarHoras.php').subscribe((data) => {
        for (let horas of data.result){
          this.tipoHoraLlegada.push(horas);
        }
      });
    });
  }

  cargarHoraLlegadaAntes(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'horas',
        bly_numHora: this.bly_llegadaAntes
      };
      this.provider.postDataCHRF(body, 'db_cargarHoras.php').subscribe((data) => {
        for (let horas of data.result){
          this.tipoHoraLlegadaAntes.push(horas);
        }
      });
    });
  }

  cargarSalida(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'horas',
        bly_numHora: this.bly_salidaAntes
      };
      this.provider.postDataCHRF(body, 'db_cargarHoras.php').subscribe((data) => {
        for (let horas of data.result){
          this.tipoSalida.push(horas);
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

  obtenerFrecuenciaRenta(rentas: any){
    this.bly_frecuenciaRenta = rentas;
    this.dato1 = false;
    this.dato2 = true;
  }

  obtenerTipoHistorial(historial: any){
    this.bly_historialPrevioPropiedad = historial;
    this.dato3 = false;
    this.dato4 = true;
  }

  obtenerTipoAprobacion(aprobacion: any){
    this.bly_tipoAprobacionRenta  = aprobacion;
    this.dato5 = false;
    this.dato6 = true;
    this.dato7p = false;
    this.dato7 = true;
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

  async informacionVerificada() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Validación',
      mode: 'ios',
      subHeader: 'Información verificada',
      message: 'La información ha sido verificada.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
  publicar(){
    
  }

  async cargaRegistroPropiedad() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();
    setTimeout(()=>{
      this.dato7 = false;
      this.dato8 = true;
      this.registrarInfoGeneral();
      this.dato9 = true;
      this.dato9p = false;
    },1500);
  }
  responseData: any;
  registrarInfoGeneral(){
    this.servicio.registrarPropiedad(this.bly_tituloPropiedad, this.bly_pais, this.bly_calle, this.bly_ciudad, this.bly_estado, this.bly_codigoPostal, this.bly_direccionGeneral, this.bly_latitud, this.bly_longitud, this.bly_numHabitaciones, this.bly_numHuespedes, this.bly_numCamas, this.bly_numBanos, this.bly_tipoBano, this.bly_tipoPropiedad, this.bly_tipoAlojamiento, this.bly_tipoAventura, this.bly_frecuenciaRenta, this.bly_historialPrevioPropiedad, this.bly_tipoAprobacionRenta, this.bly_usuario, this.bly_statusAceptacionContrato).subscribe(data => {
      this.responseData = data;
    });
  }

  async cargarRegistroAmenidades(){
    this.storage.get('historial-Registro').then((res) => {
      this.informacionRegistroPropiedad = res;
      this.bly_propiedad = this.informacionRegistroPropiedad.id_registro;
    });
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();
    setTimeout(()=>{
      this.registrarAmenidad();
    },1500);
  }

  responseDataA: any;
  registrarAmenidad(){
    this.servicio.registrarAmenidades(this.bly_tipoAmenidad, this.bly_propiedad).subscribe(data => {
      this.responseDataA = data;
    });
  }

  bly_propiedad: number;
  informacionRegistroPropiedad: any;
  async cargaRegistroCostos() {
    this.storage.get('historial-Registro').then((res) => {
      this.informacionRegistroPropiedad = res;
      this.bly_propiedad = this.informacionRegistroPropiedad.id_registro;
    });
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();
    setTimeout(()=>{
      this.dato9 = false;
      this.dato10 = true;
      this.registrarCostos();
    },1500);
  }

  responseDataC: any;
  registrarCostos(){
    this.servicio.registrarCostos(this.bly_tipoMoneda, this.bly_precioBase, this.bly_cargoLimpieza, this.bly_descuentoSemana, this.bly_descuentoMes, this.bly_propiedad).subscribe(data => {
      this.responseDataC = data;
    });
  }

  async cargaRegistroMueble() {
    this.storage.get('historial-Registro').then((res) => {
      this.informacionRegistroPropiedad = res;
      this.bly_propiedad = this.informacionRegistroPropiedad.id_registro;
    });
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();
    setTimeout(()=>{
      this.registrarMuebles();
    },1500);
  }

  responseDataM: any;
  registrarMuebles(){
    this.servicio.registrarMuebles(this.bly_cantidad, this.bly_mueble, this.bly_propiedad).subscribe(data => {
      this.responseDataM = data;
    });
  }

  async cargaRegistroEspacio() {
    this.storage.get('historial-Registro').then((res) => {
      this.informacionRegistroPropiedad = res;
      this.bly_propiedad = this.informacionRegistroPropiedad.id_registro;
    });
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();
    setTimeout(()=>{
    this.registrarEspacios();
    },1500);
  }

  responseDataES: any;
  registrarEspacios(){
    this.servicio.registrarEspacio(this.bly_espacios, this.bly_propiedad).subscribe(data => {
      this.responseDataES = data;
    });
  }

}
