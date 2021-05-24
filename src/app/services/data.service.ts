import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {
  ToastController,
  LoadingController,
  NavController,
  ModalController,
  ActionSheetController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment.prod';
import { ModalBusquedaErrorPage } from '../Modals/modal-busqueda-error/modal-busqueda-error.page';
import { ModalBusquedaPage } from '../Modals/modal-busqueda/modal-busqueda.page';
import { ProviderService } from './provider.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

const apiUrlRegistro = environment.apiRegistroURL;
const apiUrlLogin = environment.apiLoginURL;
const apiUrlFacturacion = environment.apiRegistroFacturacionURL;
const apiUrlTerminosCondiciones =
  environment.apiConsultarTerminosCondicionesURL;
const apiURLRegistrarPropiedad = environment.apiRegistrarPropiedadURL;
const apiURLRegistrarCostos = environment.apiRegistrarCostosPropiedadURL;
const apiURLRegistrarMuebles = environment.apiRegistrarMueblesPropiedadURL;
const apiURLRegistroAmenidades = environment.apiRegistrarAmenidadesPropiedadURL;
const apiURLRegistrarEspacio = environment.apiRegistrarAreaComunPropiedadURL;
const apiURLRegistroSeguridadPropiedad =
  environment.apiRegistrarSeguridadPropiedadURL;
const apiURLRegistrarRestriccionesPropiedad =
  environment.apiRegistrarRestriccionesPropiedadURL;
const apiURLRegistroRequisitosPropiedad =
  environment.apiRegistarRequisitosPropiedadURL;
const apiURLRegistroDisponibilidadPropiedad =
  environment.apiRegistrarDisponibilidadPropiedadURL;
const apiURLRegistroExclusividadPropiedad =
  environment.apiRegistrarExclusividadPropiedadURL;
const apiURLBuscarPropiedades = environment.apiBuscarPropiedadesURL;
const apiURLBuscarPropiedadesPlaya = environment.apiBuscarPropiedadesPlayaURL;
const apiURLBuscarPropiedadesCiudad = environment.apiBuscarPropiedadesCiudadURL;
const apiURLRegistrarCasaPromocion =
  environment.apiRegistrarCasaEnPropomocionURL;
const apiURLRegistrarCalificacion = environment.apiRegistrarCalificacionURL;
const apiURLRegistrarFavoritos = environment.apiRegistrarFavoritosURL;
const apiURLRegistrarVistasPropiedad = environment.apiRegistrarVistasURL;
const apiURLRegistrarPagoPaypal = environment.apiRegistrarPagoProcesadoURL;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  result: any;
  responseData: any;
  toast: any;
  actionSheet: any;
  rol = 'Blybn';
  constructor(
    public http: HttpClient,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private actionSheetController: ActionSheetController,
    private provider: ProviderService,
    private socialSharing: SocialSharing
  ) {}

  registrarUsuario(
    nombreUsuario: string,
    correoElectronico: string,
    numTelefono: string,
    dia: any,
    mes: any,
    years: string,
    sexo: string,
    contrasena: string,
    termino: boolean
  ) {
    return this.http
      .get(
        `${apiUrlRegistro}?nombreUsuario=${nombreUsuario}&correoElectronico=${correoElectronico}&numTelefono=${numTelefono}&dia=${dia}&mes=${mes}&years=${years}&sexo=${sexo}&contrasena=${contrasena}&termino=${termino}`
      )
      .pipe(
        map((results) => {
          this.responseData = results;
          this.router.navigate(['/login']);
          if (
            correoElectronico == '' &&
            contrasena == '' &&
            nombreUsuario == '' &&
            numTelefono == '' &&
            dia == '' &&
            mes == '' &&
            years == '' &&
            sexo == '' &&
            contrasena == ''
          ) {
            this.toast = this.toastController
              .create({
                message: '¡Debe completar todos los campos solicitados!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else if (
            this.responseData == 'Ya hay un registro de este usuario'
          ) {
            this.toast = this.toastController
              .create({
                message: 'Ya hay un registro de este usuario',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else {
            this.storage.set('perfil', this.responseData);
            this.storage.set('storage_blybn', this.rol);
            this.navCtrl.navigateRoot(['/dashboard2/menutabs2/inicio-menu']);
            this.toast = this.toastController
              .create({
                message: 'Se ha registrado exitosamente',
                duration: 2000,
              })
              .then((toastData) => {
                toastData.present();
              });
          }
        })
      );
  }

  iniciarSesion(correoElectronico: string, contrasena: string) {
    return this.http
      .get(
        `${apiUrlLogin}?correoElectronico=${correoElectronico}&contrasena=${contrasena}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          if (correoElectronico == '' && contrasena == '') {
            this.toast = this.toastController
              .create({
                message: '¡Debe completar todos los campos solicitados!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else if (
            this.result == '¡Correo electronico o contrasena incorrectos!'
          ) {
            this.toast = this.toastController
              .create({
                message: '¡Correo electronico o contrasena incorrectos!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else if (this.result == 'Blybn') {
            this.loadingController
              .create({
                message: 'Espere un momento…',
                spinner: 'bubbles',
                translucent: true,
                duration: 2000,
                mode: 'ios',
              })
              .then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => {
                  this.storage.set('storage_blybn', this.result);
                  this.navCtrl.navigateRoot([
                    '/dashboard2/menutabs2/inicio-menu',
                  ]);
                });
              });
          } else if (this.result == 'Propietario Blybner') {
            this.loadingController
              .create({
                message: 'Espere un momento…',
                spinner: 'bubbles',
                translucent: true,
                duration: 2000,
                mode: 'ios',
              })
              .then((res) => {
                res.present();
                res.onDidDismiss().then((dis) => {
                  this.storage.set('storage_blybn', this.result);
                  this.navCtrl.navigateRoot([
                    '/dashboard/menutabs/inicio-menu2',
                  ]);
                });
              });
          }
        })
      );
  }

  registrarFacturacion(
    razonSocial: string,
    rfc: string,
    direccionFiscal: string,
    correoElectronico: string,
    id: string
  ) {
    return this.http
      .get(
        `${apiUrlFacturacion}?razonSocial=${razonSocial}&rfc=${rfc}&direccionFiscal=${direccionFiscal}&correoElectronico=${correoElectronico}&id=${id}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          if (
            razonSocial == '' &&
            rfc == '' &&
            direccionFiscal == '' &&
            correoElectronico == '' &&
            id == ''
          ) {
            this.toast = this.toastController
              .create({
                message: '¡Debe completar todos los campos solicitados!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else if (
            this.result ==
            'Ya hay un registro de este RFC en otro usuario verifique la informacion'
          ) {
            this.toast = this.toastController
              .create({
                message:
                  '¡Ya hay un registro de este RFC en otro usuario verifique la información!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else {
            this.storage.set('facturacion', this.result);
            this.toast = this.toastController
              .create({
                message: 'Se ha registrado exitosamente la información',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
            this.modalCtrl.dismiss();
          }
        })
      );
  }

  TerminosCondiciones() {
    return this.http.get(apiUrlTerminosCondiciones);
  }

  registrarPropiedad(
    bly_tituloPropiedad: string,
    bly_pais: string,
    bly_calle: string,
    bly_ciudad: string,
    bly_estado: string,
    bly_codigoPostal: string,
    bly_direccionGeneral: string,
    bly_latitud: string,
    bly_longitud: string,
    bly_placeid: string,
    bly_numHabitaciones: number,
    bly_numHuespedes: number,
    bly_numCamas: number,
    bly_numBanos: string,
    bly_tipoBano: string,
    bly_tipoPropiedad: number,
    bly_tipoAlojamiento: number,
    bly_tipoAventura: number,
    bly_frecuenciaRenta: number,
    bly_historialPrevioPropiedad: number,
    bly_tipoAprobacionRenta: number,
    bly_usuario: number,
    bly_statusAceptacionContrato: string
  ) {
    return this.http
      .get(
        `${apiURLRegistrarPropiedad}?bly_tituloPropiedad=${bly_tituloPropiedad}&bly_pais=${bly_pais}&bly_calle=${bly_calle}&bly_ciudad=${bly_ciudad}&bly_estado=${bly_estado}&bly_codigoPostal=${bly_codigoPostal}&bly_direccionGeneral=${bly_direccionGeneral}&bly_latitud=${bly_latitud}&bly_longitud=${bly_longitud}&bly_placeid=${bly_placeid}&bly_numHabitaciones=${bly_numHabitaciones}&bly_numHuespedes=${bly_numHuespedes}&bly_numCamas=${bly_numCamas}&bly_numBanos=${bly_numBanos}&bly_tipoBano=${bly_tipoBano}&bly_tipoPropiedad=${bly_tipoPropiedad}&bly_tipoAlojamiento=${bly_tipoAlojamiento}&bly_tipoAventura=${bly_tipoAventura}&bly_frecuenciaRenta=${bly_frecuenciaRenta}&bly_historialPrevioPropiedad=${bly_historialPrevioPropiedad}&bly_tipoAprobacionRenta=${bly_tipoAprobacionRenta}&bly_usuario=${bly_usuario}&bly_statusAceptacionContrato=${bly_statusAceptacionContrato}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          this.storage.set('historial-Registro', this.result);
          this.toast = this.toastController
            .create({
              message: 'Se ha registrado el apartado A',
              duration: 2000,
              mode: 'ios',
            })
            .then((toastData) => {
              toastData.present();
            });
        })
      );
  }

  registrarCostos(
    bly_tipoMoneda: number,
    bly_precioBase: number,
    bly_cargoLimpieza: number,
    bly_descuentoSemana: number,
    bly_descuentoMes: number,
    bly_propiedad: number
  ) {
    return this.http
      .get(
        `${apiURLRegistrarCostos}?bly_tipoMoneda=${bly_tipoMoneda}&bly_precioBase=${bly_precioBase}&bly_cargoLimpieza=${bly_cargoLimpieza}&bly_descuentoSemana=${bly_descuentoSemana}&bly_descuentoMes=${bly_descuentoMes}&bly_propiedad=${bly_propiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          this.toast = this.toastController
            .create({
              message: 'Se han registrado los costos de propiedad',
              duration: 2000,
              mode: 'ios',
            })
            .then((toastData) => {
              toastData.present();
            });
        })
      );
  }

  registrarMuebles(
    bly_cantidadMuebles: number,
    bly_mueble: number,
    bly_propiedad: number
  ) {
    return this.http
      .get(
        `${apiURLRegistrarMuebles}?bly_cantidadMuebles=${bly_cantidadMuebles}&bly_mueble=${bly_mueble}&bly_propiedad=${bly_propiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          if (
            this.result ==
            'Ya hay un mueble de este tipo registrado en esta propiedad'
          ) {
            this.toast = this.toastController
              .create({
                message:
                  '¡Ya hay un mueble de este tipo registrado en esta propiedad!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else {
            this.result = results;
            this.toast = this.toastController
              .create({
                message: 'Se han registrado los muebles de propiedad',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          }
        })
      );
  }

  registrarAmenidades(bly_tipoAmenidad: number, bly_propiedad: number) {
    return this.http
      .get(
        `${apiURLRegistroAmenidades}?bly_tipoAmenidad=${bly_tipoAmenidad}&bly_propiedad=${bly_propiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          if (
            this.result ==
            'Ya hay una amenidad de este tipo registrado en esta propiedad'
          ) {
            this.toast = this.toastController
              .create({
                message:
                  '¡Ya hay una amenidad de este tipo registrado en esta propiedad!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else {
            this.result = results;
            this.toast = this.toastController
              .create({
                message: 'Se han registrado las amenidades de la propiedad',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          }
        })
      );
  }

  registrarEspacio(bly_espacios: number, bly_propiedad: number) {
    return this.http
      .get(
        `${apiURLRegistrarEspacio}?bly_espacios=${bly_espacios}&bly_propiedad=${bly_propiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          if (
            this.result ==
            'Ya hay un espacio de este tipo registrado en esta propiedad'
          ) {
            this.toast = this.toastController
              .create({
                message:
                  '¡Ya hay un espacio de este tipo registrado en esta propiedad!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else {
            this.result = results;
            this.toast = this.toastController
              .create({
                message: 'Se han registrado los espacios de la propiedad',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          }
        })
      );
  }

  registrarSeguridadPropiedad(bly_seguridad: number, bly_propiedad: number) {
    return this.http
      .get(
        `${apiURLRegistroSeguridadPropiedad}?bly_seguridad=${bly_seguridad}&bly_propiedad=${bly_propiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          if (
            this.result ==
            'Ya hay una medida de seguridad de este tipo registrada en esta propiedad'
          ) {
            this.toast = this.toastController
              .create({
                message:
                  '¡Ya hay una medida de seguridad de este tipo registrada en esta propiedad!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else {
            this.result = results;
            this.toast = this.toastController
              .create({
                message:
                  'Se han registrado las medidas de seguridad de la propiedad',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          }
        })
      );
  }

  registrarRestricciones(bly_restriccion: number, bly_propiedad: number) {
    return this.http
      .get(
        `${apiURLRegistrarRestriccionesPropiedad}?bly_restriccion=${bly_restriccion}&bly_propiedad=${bly_propiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          if (
            this.result ==
            'Ya hay una restricción de este tipo registrada en esta propiedad'
          ) {
            this.toast = this.toastController
              .create({
                message:
                  '¡Ya hay una restricción de este tipo registrada en esta propiedad!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else {
            this.result = results;
            this.toast = this.toastController
              .create({
                message: 'Se han registrado las restricciónes de la propiedad',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          }
        })
      );
  }

  registrarRequisitos(bly_tipoRequisito: number, bly_propiedad: number) {
    return this.http
      .get(
        `${apiURLRegistroRequisitosPropiedad}?bly_tipoRequisito=${bly_tipoRequisito}&bly_propiedad=${bly_propiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          if (
            this.result ==
            'Ya hay un requisito de este tipo registrado en esta propiedad'
          ) {
            this.toast = this.toastController
              .create({
                message:
                  '¡Ya hay un requisito de este tipo registrado en esta propiedad!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else {
            this.result = results;
            this.toast = this.toastController
              .create({
                message: 'Se han registrado los requisitos de la propiedad',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          }
        })
      );
  }

  registrarDisponibilidad(
    bly_fechaInicio: string,
    bly_fechaFinal: string,
    bly_fechaInicialND: string,
    bly_fechaFinalND: string,
    bly_preaviso: number,
    bly_tiempoSalidadH: number,
    bly_horaLimiteReservacion: number,
    bly_tiempoAnticipacionReservacion: number,
    bly_llegadaDespues: number,
    bly_llegadaAntes: number,
    bly_salidaAntes: number,
    bly_propiedad: number
  ) {
    return this.http
      .get(
        `${apiURLRegistroDisponibilidadPropiedad}?bly_fechaInicio=${bly_fechaInicio}&bly_fechaFinal=${bly_fechaFinal}&bly_fechaInicialND=${bly_fechaInicialND}&bly_fechaFinalND=${bly_fechaFinalND}&bly_preaviso=${bly_preaviso}&bly_tiempoSalidadH=${bly_tiempoSalidadH}&bly_horaLimiteReservacion=${bly_horaLimiteReservacion}&bly_tiempoAnticipacionReservacion=${bly_tiempoAnticipacionReservacion}&bly_llegadaDespues=${bly_llegadaDespues}&bly_llegadaAntes=${bly_llegadaAntes}&bly_salidaAntes=${bly_salidaAntes}&bly_propiedad=${bly_propiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          this.toast = this.toastController
            .create({
              message: 'Se ha registrado la disponibilidad de la propiedad',
              duration: 2000,
              mode: 'ios',
            })
            .then((toastData) => {
              toastData.present();
            });
        })
      );
  }

  registrarExclusividad(bly_exclusividad: number, bly_propiedad: number) {
    return this.http
      .get(
        `${apiURLRegistroExclusividadPropiedad}?bly_exclusividad=${bly_exclusividad}&bly_propiedad=${bly_propiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
        })
      );
  }

  registrarPropiedadPromocion(bly_usuario: number, bly_propiedad: number) {
    return this.http
      .get(
        `${apiURLRegistrarCasaPromocion}?bly_usuario=${bly_usuario}&bly_propiedad=${bly_propiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          if (this.result == 'Tu propiedad ya está anunciada en promociones') {
            this.toast = this.toastController
              .create({
                message: '¡Tu propiedad ya está anunciada en promociones!',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          } else {
            this.result = results;
            this.toast = this.toastController
              .create({
                message: 'Se ha publicado tu propiedad en promociones',
                duration: 2000,
                mode: 'ios',
              })
              .then((toastData) => {
                toastData.present();
              });
          }
        })
      );
  }

  registrarCalificacion(
    bly_usuario: number,
    bly_propiedad: number,
    bly_calificacion: number
  ) {
    return this.http
      .get(
        `${apiURLRegistrarCalificacion}?bly_usuario=${bly_usuario}&bly_propiedad=${bly_propiedad}&bly_calificacion=${bly_calificacion}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          console.log(this.result);
        })
      );
  }

  registrarVisitasPropiedad(
    bly_propiedad: number,
    bly_tituloPropiedad: string,
    bly_ciudad: string,
    bly_calificacion: string,
    bly_imagen: string,
    bly_estado: string,
    bly_precioBase: number,
    bly_duenoPropiedad: number
  ) {
    return this.http
      .get(
        `${apiURLRegistrarVistasPropiedad}?bly_propiedad=${bly_propiedad}&bly_tituloPropiedad=${bly_tituloPropiedad}&bly_ciudad=${bly_ciudad}&bly_calificacion=${bly_calificacion}&bly_imagen=${bly_imagen}&bly_estado=${bly_estado}&bly_precioBase=${bly_precioBase}&bly_duenoPropiedad=${bly_duenoPropiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          console.log(this.result);
        })
      );
  }

  registrarCargoPayPal(
    bly_fechapago: string,
    bly_idPago: string,
    bly_montoFinal: number,
    bly_idUsuario: string,
    bly_nombreUsuario: string,
    bly_apellidoUsuario: string,
    bly_correoUsuario: string,
    bly_descripcion: string,
    bly_servicio: number,
    bly_paisCompra: string,
    bly_statusPago: string
  ) {
    return this.http
      .get(
        `${apiURLRegistrarPagoPaypal}?bly_fechapago=${bly_fechapago}&bly_idPago=${bly_idPago}&bly_montoFinal=${bly_montoFinal}&bly_idUsuario=${bly_idUsuario}&bly_nombreUsuario=${bly_nombreUsuario}&bly_apellidoUsuario=${bly_apellidoUsuario}&bly_correoUsuario=${bly_correoUsuario}&bly_descripcion=${bly_descripcion}&bly_servicio=${bly_servicio}&bly_paisCompra=${bly_paisCompra}&bly_statusPago=${bly_statusPago}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          console.log(this.result);
        })
      );
  }

  bly_url: 'https://www.facebook.com/Blybnmx/';
  registrarFavoritos(
    bly_tituloPropiedad: string,
    bly_ciudad: string,
    bly_calificacion: string,
    bly_imagen: string,
    bly_estado: string,
    bly_precioBase: string,
    bly_duenoPropiedad: number,
    bly_usuario: number,
    bly_registroPropiedad: number
  ) {
    return this.http
      .get(
        `${apiURLRegistrarFavoritos}?bly_tituloPropiedad=${bly_tituloPropiedad}&bly_ciudad=${bly_ciudad}&bly_calificacion=${bly_calificacion}&bly_imagen=${bly_imagen}&bly_estado=${bly_estado}&bly_precioBase=${bly_precioBase}&bly_duenoPropiedad=${bly_duenoPropiedad}&bly_usuario=${bly_usuario}&bly_registroPropiedad=${bly_registroPropiedad}`
      )
      .pipe(
        map((results) => {
          this.result = results;
          if (this.result == 'Ya está en favoritos…') {
            this.actionSheet = this.actionSheetController
              .create({
                header: 'Favoritos',
                mode: 'ios',
                buttons: [
                  {
                    text: 'Eliminar de favoritos ',
                    icon: 'trash',
                    cssClass: 'elminar',
                    handler: () => {
                      let body = {
                        aksi: 'retirar-favorito',
                        bly_registroPropiedad: bly_registroPropiedad,
                        bly_usuario: bly_usuario,
                      };
                      this.provider
                        .eliminarFavoritos(body, 'db_eliminarFavoritos.php')
                        .subscribe((data) => {
                          this.toast = this.toastController
                            .create({
                              message: 'Se ha retirado de favoritos...',
                              duration: 2000,
                              mode: 'ios',
                            })
                            .then((toastData) => {
                              toastData.present();
                            });
                        });
                    },
                  },
                  {
                    text: 'Compartir',
                    icon: 'share',
                    cssClass: 'shared',
                    handler: () => {
                      this.socialSharing.share(
                        bly_tituloPropiedad,
                        bly_ciudad,
                        '',
                        'https://www.facebook.com/Blybnmx/'
                      );
                    },
                  },
                  {
                    text: 'Cancelar',
                    icon: 'close-circle-outline',
                    role: 'cancel',
                    cssClass: 'iconCancelar',
                    handler: () => {
                      console.log('Cancel clicked');
                    },
                  },
                ],
              })
              .then((actionSheet) => {
                actionSheet.present();
              });
          } else {
            this.actionSheet = this.actionSheetController
              .create({
                header: 'Favoritos',
                mode: 'ios',
                buttons: [
                  {
                    text: 'Agregar a favoritos',
                    icon: 'star',
                    cssClass: 'favorito',
                    handler: () => {
                      this.toast = this.toastController
                        .create({
                          message: 'Se ha agregado a favoritos...',
                          duration: 2000,
                          mode: 'ios',
                        })
                        .then((toastData) => {
                          toastData.present();
                        });
                    },
                  },
                  {
                    text: 'Compartir',
                    icon: 'share',
                    cssClass: 'shared',
                    handler: () => {
                      this.socialSharing.share(
                        bly_tituloPropiedad,
                        bly_ciudad,
                        '',
                        'https://www.facebook.com/Blybnmx/'
                      );
                    },
                  },
                  {
                    text: 'Cancelar',
                    icon: 'close-circle-outline',
                    cssClass: 'iconCancelar',
                    role: 'cancel',
                    handler: () => {
                      console.log('Cancel clicked');
                    },
                  },
                ],
              })
              .then((actionSheet) => {
                actionSheet.present();
              });
          }
        })
      );
  }

  buscarPropiedad(bly_buscar: string) {
    return this.http
      .get(`${apiURLBuscarPropiedades}?bly_buscar=${bly_buscar}`)
      .pipe(
        map((results) => {
          this.result = results;
          if (this.result.result == null) {
            this.mostrarModalSinResultado();
          } else {
            this.mostrarModalResultado();
          }
        })
      );
  }

  async mostrarModalSinResultado() {
    const modal = await this.modalCtrl.create({
      component: ModalBusquedaErrorPage,
      componentProps: {
        datos: this.result.result,
      },
    });
    await modal.present();
  }

  async mostrarModalResultado() {
    const modal = await this.modalCtrl.create({
      component: ModalBusquedaPage,
      componentProps: {
        datos: this.result.result,
      },
    });
    await modal.present();
  }

  buscarPropiedadPlaya(bly_buscar: string) {
    return this.http
      .get(`${apiURLBuscarPropiedadesPlaya}?bly_buscar=${bly_buscar}`)
      .pipe(
        map((results) => {
          this.result = results;
          if (this.result.result == null) {
            this.mostrarModalSinResultado();
          } else {
            this.mostrarModalResultado();
          }
        })
      );
  }

  buscarPropiedadCiudad(bly_buscar: string) {
    return this.http
      .get(`${apiURLBuscarPropiedadesCiudad}?bly_buscar=${bly_buscar}`)
      .pipe(
        map((results) => {
          this.result = results;
          if (this.result.result == null) {
            this.mostrarModalSinResultado();
          } else {
            this.mostrarModalResultado();
          }
        })
      );
  }
}
