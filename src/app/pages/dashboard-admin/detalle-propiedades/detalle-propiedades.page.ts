import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ProviderService } from 'src/app/services/provider.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder,
  NativeGeocoderOptions,
  NativeGeocoderResult,
} from '@ionic-native/native-geocoder/ngx';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DataService } from 'src/app/services/data.service';
declare var google;
@Component({
  selector: 'app-detalle-propiedades',
  templateUrl: './detalle-propiedades.page.html',
  styleUrls: ['./detalle-propiedades.page.scss'],
})
export class DetallePropiedadesPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  lat: string;
  long: string;
  address: string;
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private provider: ProviderService,
    private storage: Storage,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private iab: InAppBrowser,
    private servicio: DataService,
    private toastController: ToastController
  ) {
    this.server = this.provider.server;
  }
  id_usuario: number;
  id_propiedad: number;
  usuario: string;
  correo: string;
  id: string;
  tipoRol: number;
  bly_placeId: string;
  ngOnInit() {
    this.closep1();
    this.closep2();
    this.closep3();
    this.closep4();
    this.closep5();
    this.closep6();
    this.closep7();
    this.closep8();
  }
  server: string;
  perfilData: any;
  informacionPropiedades: any = [];
  ionViewWillEnter() {
    this.closep1();
    this.closep2();
    this.closep3();
    this.closep4();
    this.closep5();
    this.closep6();
    this.closep7();
    this.closep8();
    this.actRoute.params.subscribe((data: any) => {
      this.id_propiedad = data.bly_registroPropiedad;
      this.id_usuario = data.bly_usuario;
      this.cargarImagenesP();
      this.cargarP1();
      this.cargarP2();
      this.cargarP3();
      this.cargarP4();
      this.cargarP5();
      this.cargarP6();
      this.cargarP7();
      this.cargarP8();
      this.cargarP9();
      this.comoLlegar();
    });
    this.storage.get('perfil').then((res) => {
      this.perfilData = res;
      (this.usuario = this.perfilData.bly_nombre),
        (this.correo = this.perfilData.bly_correoElectronico),
        (this.id = this.perfilData.bly_usuario),
        (this.tipoRol = this.perfilData.bly_rol);
      this.cargarFotoPerfil();
    });
  }

  datosPromocionesR: any;
  obtenerPromociones(){
    this.storage.get('informacionPromocion').then((res)=>{
      this.datosPromocionesR = res;
    });
    this.confirmacionPropmocion();
  }

  eliminarPromocion(){
    this.storage.get('informacionPromocion').then((res)=>{
      this.datosPromocionesR = res;
    });
    this.eliminarPromosion();
  }

  async eliminarPromosion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      mode: 'ios',
      message: '¿Está apunto de quitar su casa de promociones?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Retirar',
          handler: () => {
            this.cargaEliminarPromosion();
          }
        }
      ]
    });

    await alert.present();
  }

  async confirmacionPropmocion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      mode: 'ios',
      message: '¿Está apunto de anunciar su casa en promociones?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Anunciar',
          handler: () => {
            this.cargaRegistroPromocion();
          }
        }
      ]
    });

    await alert.present();
  }

  async cargaRegistroPromocion() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();
    setTimeout(()=>{
      this.registrarPromocion();
    },1500);
  }

  async cargaEliminarPromosion() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();
    setTimeout(()=>{
      this.eleminarPromocion();
    },1500);
  }

  toast: any;
  eleminarPromocion() {
    let body = {
        aksi: 'Retirar-promocion',
        id_propiedad: this.datosPromocionesR.propiedad
      };

    this.provider.eliminarPromocion(body, 'db_QuitarPropiedadPromociones.php').subscribe(data => {
      this.toast = this.toastController
      .create({
        message: 'Se ha retirado tu propiedad de promociones...',
        duration: 2000,
        mode: 'ios',
      })
      .then((toastData) => {
        toastData.present();
      });
      });
  }

  responseDataRPromocion: any;
  registrarPromocion(){
    this.servicio.registrarPropiedadPromocion(this.datosPromocionesR.dueno, this.datosPromocionesR.propiedad).subscribe(data => {
      this.responseDataRPromocion = data;
    }, (error) => {
      this.presentLoadingServer();
    });
  }


  foto: string;
  fotoPerfil: any = [];
  cargarFotoPerfil() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'perfilFoto',
        bly_usuario: this.id,
      };
      this.provider
        .postDataCFPA(body, 'db_cargarFotoPerfilAct.php')
        .subscribe((data) => {
          this.fotoPerfil = data;
          this.foto = this.fotoPerfil.bly_fotografia;
          resolve(true);
        }, (error) => {
          this.presentLoadingServer();
        });
    });
  }

  salir() {
    this.router.navigate(['/dashboard/mis-propiedades']);
    this.horaLimiteReservacion = '';
    this.llegadaAntes = '';
    this.llegadaSalida = '';
    this.llegadaDespues = '';
    this.preavisoPropiedad = '';
    this.anticipacionRenta = '';
    this.informacionP1 = [];
    this.informacionP2 = [];
    this.informacionP3 = [];
    this.informacionP4 = [];
    this.informacionP5 = [];
    this.informacionP6 = [];
    this.informacionP7 = [];
    this.infoComoLlegar = [];
    this.storage.remove('informacionPromocion');
  }

  onError(img) {
    img.src = '../../../../assets/imgs/default-inicio.svg';
  }

  informacionPropiedad: any = [];
  cargarImagenesP() {
    let body = {
      aksi: 'imagenPropiedad',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .postDataCFPI(body, 'db_cargarImagenesPropiedadIndividualmente.php')
      .subscribe((data) => {
        this.informacionPropiedad = data.result;
      },(error)  =>{
        this.presentLoadingServer();
      });
  }

  tituloPropiedad: string;
  cantidadHabitacion: number;
  cantidadBano: number;
  tipoBano: string;
  status: string;
  id_tipoPropiedad: number;
  id_alojamiento: number;
  id_aventura: number;
  id_historial: number;
  id_frecuencia: string;
  huespedes: number;
  exclusividad: string;
  latitude: number;
  longitude: number;
  direccionGeneral: string;
  fecha_registro: string;
  fecha: string;
  calle: string;
  ciudad: string;
  estado: string;
  id_registroPropiedad: number;
  id_duenocasa: number;
  informacionP1: any;
  cargarP1() {
    let body = {
      aksi: 'detallePropiedad',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .detalleP1(body, 'db_CargarDetallePropiedad.php')
      .subscribe((data) => {
        this.informacionP1 = data.result;
        this.tituloPropiedad = this.informacionP1.bly_tituloPropiedad;
        this.cantidadHabitacion = this.informacionP1.bly_numHabitaciones;
        this.cantidadBano = this.informacionP1.bly_numBanos;
        this.tipoBano = this.informacionP1.bly_tipoBano;
        this.status = this.informacionP1.bly_status;
        this.id_propiedad = this.informacionP1.bly_tipoPropiedad;
        this.id_alojamiento = this.informacionP1.bly_tipoAlojamiento;
        this.id_aventura = this.informacionP1.bly_tipoAventura;
        this.id_historial = this.informacionP1.bly_historialPrevioPropiedad;
        this.id_frecuencia = this.informacionP1.bly_frecuenciaRenta;
        this.huespedes = this.informacionP1.bly_numHuespedes;
        this.exclusividad = this.informacionP1.bly_tipoExclusividad;
        this.latitude = parseFloat(this.informacionP1.bly_latitud);
        this.longitude = parseFloat(this.informacionP1.bly_longitud);
        this.direccionGeneral = this.informacionP1.bly_direccionGeneral;
        this.fecha_registro = this.informacionP1.bly_fechaRegistro;
        this.fecha = this.fecha_registro.split(' ')[0];
        this.ciudad = this.informacionP1.bly_ciudad;
        this.estado = this.informacionP1.bly_estado;
        this.calle = this.informacionP1.bly_calle;
        this.bly_placeId = this.informacionP1.bly_placeid;
        this.id_registroPropiedad = this.informacionP1.bly_registroPropiedad;
        this.id_duenocasa = this.informacionP1.bly_usuario;
        this.cargarTipoPropiedad();
        this.cargarAlojamiento();
        this.cargarTipoAventuraIndividual();
        this.cargarHistorial();
        this.loadMap();
        this.informacionPropiedades = {
          propiedad: this.id_registroPropiedad,
          dueno: this.id_duenocasa
        }
        this.storage.set('informacionPromocion', this.informacionPropiedades);
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  url: string;
  infoComoLlegar: any = [];
  comoLlegar(){
    let body = {
      aksi: 'placeId',
      bly_registroPropiedad: this.id_propiedad,
    };
    this.provider
      .cargarPlaceID(body, 'db_CargarPlaceIDPropiedad.php')
      .subscribe((data) => {
        this.infoComoLlegar = data.result;
        this.bly_placeId = this.infoComoLlegar.bly_placeid;
        //this.url = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id='+this.bly_placeId;
      }, (error) => {
        this.presentLoadingServer();
      }); 
  }

  llegarComo(){
    this.iab.create(
      `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=`+this.bly_placeId,
      `_system`
    );
  }

  informacionP2: any = [];
  cargarP2() {
    let body = {
      aksi: 'tipo1',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .detalleP2(body, 'db_CargarAmenidadesPropiedades.php')
      .subscribe((data) => {
        this.informacionP2 = data.result;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  informacionP3: any = [];
  cargarP3() {
    let body = {
      aksi: 'tipo4',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .detalleP3(body, 'db_CargarCostosPropiedad.php')
      .subscribe((data) => {
        this.informacionP3 = data.result;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  informacionP4: any = [];
  cargarP4() {
    console.log('numero casa',this.id_propiedad);
    let body = {
      aksi: 'tipo5',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .detalleP4(body, 'db_CargarMueblesPropiedades.php')
      .subscribe((data) => {
        this.informacionP4 = data.result;
        console.log(this.informacionP4);
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  informacionP5: any = [];
  cargarP5() {
    let body = {
      aksi: 'restriccionP',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .detalleP5(body, 'db_CargarRestriccionesPropiedad.php')
      .subscribe((data) => {
        this.informacionP5 = data.result;
      },(error) => {
        this.presentLoadingServer();
      });
  }

  informacionP6: any = [];
  cargarP6() {
    let body = {
      aksi: 'requisitos',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .detalleP6(body, 'db_CargarSeguridadPropiedad.php')
      .subscribe((data) => {
        this.informacionP6 = data.result;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  informacionP7: any = [];
  cargarP7() {
    let body = {
      aksi: 'requisitos',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .detalleP7(body, 'db_CargarRequisitosPropiedad.php')
      .subscribe((data) => {
        this.informacionP7 = data.result;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  informacionP8: any = [];
  dato1: string;
  dato2: string;
  dato3: string;
  dato4: string;
  dato5: string;
  dato6: string;
  dato7: string;
  dato8: string;
  dato9: string;
  dato10: string;
  dato11: string;
  dato12: string;
  cargarP8() {
    let body = {
      aksi: 'tipo6',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .detalleP8(body, 'db_CargarDisponibilidadPropiedad.php')
      .subscribe((data) => {
        this.informacionP8 = data.result;
        this.dato1 = this.informacionP8.bly_fechaInicio;
        this.dato2 = this.informacionP8.bly_fechaFinal;
        this.dato3 = this.informacionP8.bly_fechaInicialND;
        this.dato4 = this.informacionP8.bly_fechaFinalND;
        this.dato5 = this.informacionP8.bly_horaLimiteReservacion;
        this.dato6 = this.informacionP8.bly_llegadaAntes;
        this.dato7 = this.informacionP8.bly_llegadaDespues;
        this.dato8 = this.informacionP8.bly_preaviso;
        this.dato9 = this.informacionP8.bly_propiedad;
        this.dato10 = this.informacionP8.bly_salidaAntes;
        this.dato11 = this.informacionP8.bly_tiempoAnticipacionReservacion;
        this.dato12 = this.informacionP8.bly_tiempoSalidadH;
        this.cargarLLegadaAntes();
        this.cargarLlegadaDespues();
        this.cargarLlegadaSalida();
        this.cargarHoraLimiteReservacion();
        this.cargarPreaviso();
        this.cargarVentanaDisponibilidad();
        this.cargarSalidaTerminoServicio();
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  fechaLlegada: any;
  fechaSalida: any;
  horaLimiteReservacion: string;
  llegadaAntes: string;
  llegadaSalida: string;
  llegadaDespues: string;
  preavisoPropiedad: string;
  anticipacionRenta: string;
  salidaTerminoServicio: string;

  cargarLLegadaAntes() {
    let body = {
      aksi: 'tipoLlegada',
      bly_llegada: this.dato6,
    };
    this.provider
      .cargarLlegadaIndividual(body, 'db_CargarLLegadasIndividuales.php')
      .subscribe((data) => {
        this.llegadaAntes = data.result.bly_descripcionLlegadas;
      }, (error) => {
        this.presentLoadingServer();
      });
  }
  cargarLlegadaDespues() {
    let body = {
      aksi: 'tipoLlegada',
      bly_llegada: this.dato7,
    };
    this.provider
      .cargarLlegadaIndividual(body, 'db_CargarLLegadasIndividuales.php')
      .subscribe((data) => {
        this.llegadaDespues = data.result.bly_descripcionLlegadas;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  cargarLlegadaSalida() {
    let body = {
      aksi: 'tipoLlegada',
      bly_llegada: this.dato10,
    };
    this.provider
      .cargarLlegadaIndividual(body, 'db_CargarLLegadasIndividuales.php')
      .subscribe((data) => {
        this.llegadaSalida = data.result.bly_descripcionLlegadas;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  cargarHoraLimiteReservacion() {
    let body = {
      aksi: 'horas',
      bly_hora: this.dato5,
    };
    this.provider
      .cargarHoraIndividual(body, 'db_CargarHorasPropiedades.php')
      .subscribe((data) => {
        this.horaLimiteReservacion = data.result.bly_Horas;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  cargarPreaviso() {
    let body = {
      aksi: 'preaviso',
      bly_numPreaviso: this.dato8,
    };
    this.provider
      .cargarPreavisoIndividual(body, 'db_CargarPreavisoPropiedades.php')
      .subscribe((data) => {
        this.preavisoPropiedad = data.result.bly_preavisoDescripcion;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  cargarVentanaDisponibilidad() {
    let body = {
      aksi: 'ventanaDisponibilidad',
      bly_numventanaDisponibilidad: this.dato11,
    };
    this.provider
      .cargarVentanaDisponibilidadIndividual(
        body,
        'db_CargarVentanaDisponibilidadIndividual.php'
      )
      .subscribe((data) => {
        this.anticipacionRenta =
          data.result.bly_descripcionVentanaDisponibilidad;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  cargarSalidaTerminoServicio() {
    let body = {
      aksi: 'tipoLlegada',
      bly_llegada: this.dato12,
    };
    this.provider
      .cargarLlegadaIndividual(body, 'db_CargarLLegadasIndividuales.php')
      .subscribe((data) => {
        this.salidaTerminoServicio = data.result.bly_descripcionLlegadas;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  informacionCasa: any = [];
  cargarTipoPropiedad() {
    let body = {
      aksi: 'tipo_propiedad',
      bly_tipoPropiedad: this.id_propiedad,
    };
    this.provider
      .cargarTipoPropiedadIndividual(body, 'db_cargarTipoPropiedad.php')
      .subscribe((data) => {
        this.informacionCasa = data.result;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  informacionAlojamiento: any = [];
  cargarAlojamiento() {
    let body = {
      aksi: 'tipo_alojamiento',
      bly_tipoAlojamiento: this.id_alojamiento,
    };
    this.provider
      .cargarAlojamientoIndividual(body, 'db_cargarAlojamientoPropiedad.php')
      .subscribe((data) => {
        this.informacionAlojamiento = data.result;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  informacionAventura: any = [];
  cargarTipoAventuraIndividual() {
    let body = {
      aksi: 'tipo_aventura',
      bly_tipoAventura: this.id_aventura,
    };
    this.provider
      .cargarAventuraIndividual(body, 'db_cargarTipoAventuraPropiedad.php')
      .subscribe((data) => {
        this.informacionAventura = data.result;
      });
  }

  informacionHistorial: any = [];
  cargarHistorial() {
    let body = {
      aksi: 'historial',
      bly_historial: this.id_historial,
    };
    this.provider
      .cargarHistorialRenta(body, 'db_CargarHistorialPrevioPropiedad.php')
      .subscribe((data) => {
        this.informacionHistorial = data.result;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  informacionP9: any = [];
  cargarP9() {
    let body = {
      aksi: 'tipo2',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .detalleP9(body, 'db_CargarEspaciosPropiedades.php')
      .subscribe((data) => {
        this.informacionP9 = data.result;
      }, (error) => {
        this.presentLoadingServer();
      });
  }

  slideOpts = {
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    on: {
      beforeInit: function () {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };

        this.params = Object.assign(this.params, overwriteParams);
        this.originalParams = Object.assign(
          this.originalParams,
          overwriteParams
        );
      },
      setTranslate: function () {
        const swiper = this;
        const {
          $el,
          $wrapperEl,
          slides,
          width: swiperWidth,
          height: swiperHeight,
          rtlTranslate: rtl,
          size: swiperSize,
        } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = swiper.$(
                '<div class="swiper-cube-shadow"></div>'
              );
              $wrapperEl.append($cubeShadowEl);
            }
            $cubeShadowEl.css({ height: `${swiperWidth}px` });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = swiper.$(
                '<div class="swiper-cube-shadow"></div>'
              );
              $el.append($cubeShadowEl);
            }
          }
        }

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let slideIndex = i;
          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }
          let slideAngle = slideIndex * 90;
          let round = Math.floor(slideAngle / 360);
          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }
          const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          let tx = 0;
          let ty = 0;
          let tz = 0;
          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }
          if (rtl) {
            tx = -tx;
          }

          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }

          const transform$$1 = `rotateX(${
            isHorizontal ? 0 : -slideAngle
          }deg) rotateY(${
            isHorizontal ? slideAngle : 0
          }deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;
            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          }
          $slideEl.transform(transform$$1);
          if (params.slideShadows) {
            // Set shadows
            let shadowBefore = isHorizontal
              ? $slideEl.find('.swiper-slide-shadow-left')
              : $slideEl.find('.swiper-slide-shadow-top');
            let shadowAfter = isHorizontal
              ? $slideEl.find('.swiper-slide-shadow-right')
              : $slideEl.find('.swiper-slide-shadow-bottom');
            if (shadowBefore.length === 0) {
              shadowBefore = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? 'left' : 'top'
                }"></div>`
              );
              $slideEl.append(shadowBefore);
            }
            if (shadowAfter.length === 0) {
              shadowAfter = swiper.$(
                `<div class="swiper-slide-shadow-${
                  isHorizontal ? 'right' : 'bottom'
                }"></div>`
              );
              $slideEl.append(shadowAfter);
            }
            if (shadowBefore.length)
              shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length)
              shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
        $wrapperEl.css({
          '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
          '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
          '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
          'transform-origin': `50% 50% -${swiperSize / 2}px`,
        });

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform(
              `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${
                -swiperWidth / 2
              }px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`
            );
          } else {
            const shadowAngle =
              Math.abs(wrapperRotate) -
              Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            const multiplier =
              1.5 -
              (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2 +
                Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2);
            const scale1 = params.shadowScale;
            const scale2 = params.shadowScale / multiplier;
            const offset$$1 = params.shadowOffset;
            $cubeShadowEl.transform(
              `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${
                swiperHeight / 2 + offset$$1
              }px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`
            );
          }
        }

        const zFactor =
          swiper.browser.isSafari || swiper.browser.isUiWebView
            ? -swiperSize / 2
            : 0;
        $wrapperEl.transform(
          `translate3d(0px,0,${zFactor}px) rotateX(${
            swiper.isHorizontal() ? 0 : wrapperRotate
          }deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`
        );
      },
      setTransition: function (duration) {
        const swiper = this;
        const { $el, slides } = swiper;
        slides
          .transition(duration)
          .find(
            '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
          )
          .transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      },
    },
  };

  currentPositionp1;
  heightp1;
  minimumThresholdp1;
  startPositionp1;

  openp1() {
    
    (<HTMLStyleElement>document.querySelector('.bottomSheetp1')).style.bottom =
      '0px';
    (<HTMLStyleElement>document.querySelector('.bgp1')).style.display = 'block';
  }

  closep1() {
    this.currentPositionp1 = 0;
    this.startPositionp1 = 0;
    (<HTMLStyleElement>document.querySelector('.bottomSheetp1')).style.bottom =
      '-1000px';
    (<HTMLStyleElement>(
      document.querySelector('.bottomSheetp1')
    )).style.transform = 'translate3d(0px,0px,0px)';
    (<HTMLStyleElement>document.querySelector('.bgp1')).style.display = 'none';
  }

  touchMovep1(evt: TouchEvent) {
    if (this.startPositionp1 == 0) {
      this.startPositionp1 = evt.touches[0].clientY;
    }

    this.heightp1 = document.querySelector('.bottomSheetp1').clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPositionp1 = y - this.startPositionp1;

    if (this.currentPositionp1 > 0 && this.startPositionp1 > 0) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp1')
      )).style.transform =
        'translate3d(0px,' + this.currentPositionp1 + 'px,0px)';
    }
  }

  touchEndp1() {
    this.minimumThresholdp1 = this.heightp1 - 150;

    if (this.currentPositionp1 < this.minimumThresholdp1) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp1')
      )).style.transform = 'translate3d(0px,0px,0px)';
    } else {
      this.closep1();
    }
  }

  currentPositionpc2;
  heightpc2;
  minimumThresholdpc2;
  startPositionpc2;

  openp2() {
    (<HTMLStyleElement>document.querySelector('.bottomSheetp2')).style.bottom =
      '0px';
    (<HTMLStyleElement>document.querySelector('.bgp2')).style.display = 'block';
  }

  closep2() {
    this.currentPositionpc2 = 0;
    this.startPositionpc2 = 0;
    (<HTMLStyleElement>document.querySelector('.bottomSheetp2')).style.bottom =
      '-1000px';
    (<HTMLStyleElement>(
      document.querySelector('.bottomSheetp2')
    )).style.transform = 'translate3d(0px,0px,0px)';
    (<HTMLStyleElement>document.querySelector('.bgp2')).style.display = 'none';
  }

  touchMovepc2(evt: TouchEvent) {
    if (this.startPositionpc2 == 0) {
      this.startPositionpc2 = evt.touches[0].clientY;
    }

    this.heightpc2 = document.querySelector('.bottomSheetp2').clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPositionpc2 = y - this.startPositionpc2;

    if (this.currentPositionpc2 > 0 && this.startPositionpc2 > 0) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp2')
      )).style.transform =
        'translate3d(0px,' + this.currentPositionpc2 + 'px,0px)';
    }
  }

  touchEndpc2() {
    this.minimumThresholdpc2 = this.heightpc2 - 150;

    if (this.currentPositionpc2 < this.minimumThresholdpc2) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp2')
      )).style.transform = 'translate3d(0px,0px,0px)';
    } else {
      this.closep2();
    }
  }

  currentPositionpc3;
  heightpc3;
  minimumThresholdpc3;
  startPositionpc3;

  openp3() {
    (<HTMLStyleElement>document.querySelector('.bottomSheetp3')).style.bottom =
      '0px';
    (<HTMLStyleElement>document.querySelector('.bgp3')).style.display = 'block';
  }

  closep3() {
    this.currentPositionpc3 = 0;
    this.startPositionpc3 = 0;
    (<HTMLStyleElement>document.querySelector('.bottomSheetp3')).style.bottom =
      '-1000px';
    (<HTMLStyleElement>(
      document.querySelector('.bottomSheetp3')
    )).style.transform = 'translate3d(0px,0px,0px)';
    (<HTMLStyleElement>document.querySelector('.bgp3')).style.display = 'none';
  }

  touchMovepc3(evt: TouchEvent) {
    if (this.startPositionpc3 == 0) {
      this.startPositionpc3 = evt.touches[0].clientY;
    }

    this.heightpc3 = document.querySelector('.bottomSheetp3').clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPositionpc3 = y - this.startPositionpc3;

    if (this.currentPositionpc3 > 0 && this.startPositionpc3 > 0) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp3')
      )).style.transform =
        'translate3d(0px,' + this.currentPositionpc3 + 'px,0px)';
    }
  }

  touchEndpc3() {
    this.minimumThresholdpc3 = this.heightpc3 - 150;

    if (this.currentPositionpc3 < this.minimumThresholdpc3) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp3')
      )).style.transform = 'translate3d(0px,0px,0px)';
    } else {
      this.closep3();
    }
  }

  currentPositionpc4;
  heightpc4;
  minimumThresholdpc4;
  startPositionpc4;

  openp4() {
    (<HTMLStyleElement>document.querySelector('.bottomSheetp4')).style.bottom =
      '0px';
    (<HTMLStyleElement>document.querySelector('.bgp4')).style.display = 'block';
  }

  closep4() {
    this.currentPositionpc4 = 0;
    this.startPositionpc4 = 0;
    (<HTMLStyleElement>document.querySelector('.bottomSheetp4')).style.bottom =
      '-1000px';
    (<HTMLStyleElement>(
      document.querySelector('.bottomSheetp4')
    )).style.transform = 'translate3d(0px,0px,0px)';
    (<HTMLStyleElement>document.querySelector('.bgp4')).style.display = 'none';
  }

  touchMovepc4(evt: TouchEvent) {
    if (this.startPositionpc4 == 0) {
      this.startPositionpc4 = evt.touches[0].clientY;
    }

    this.heightpc4 = document.querySelector('.bottomSheetp4').clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPositionpc4 = y - this.startPositionpc4;

    if (this.currentPositionpc4 > 0 && this.startPositionpc4 > 0) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp4')
      )).style.transform =
        'translate3d(0px,' + this.currentPositionpc4 + 'px,0px)';
    }
  }

  touchEndpc4() {
    this.minimumThresholdpc4 = this.heightpc4 - 150;

    if (this.currentPositionpc4 < this.minimumThresholdpc4) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp4')
      )).style.transform = 'translate3d(0px,0px,0px)';
    } else {
      this.closep4();
    }
  }

  currentPositionpc5;
  heightpc5;
  minimumThresholdpc5;
  startPositionpc5;

  openp5() {
    (<HTMLStyleElement>document.querySelector('.bottomSheetp5')).style.bottom =
      '0px';
    (<HTMLStyleElement>document.querySelector('.bgp5')).style.display = 'block';
  }

  closep5() {
    this.currentPositionpc5 = 0;
    this.startPositionpc5 = 0;
    (<HTMLStyleElement>document.querySelector('.bottomSheetp5')).style.bottom =
      '-1000px';
    (<HTMLStyleElement>(
      document.querySelector('.bottomSheetp5')
    )).style.transform = 'translate3d(0px,0px,0px)';
    (<HTMLStyleElement>document.querySelector('.bgp5')).style.display = 'none';
  }

  touchMovepc5(evt: TouchEvent) {
    if (this.startPositionpc5 == 0) {
      this.startPositionpc5 = evt.touches[0].clientY;
    }

    this.heightpc5 = document.querySelector('.bottomSheetp5').clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPositionpc5 = y - this.startPositionpc5;

    if (this.currentPositionpc5 > 0 && this.startPositionpc5 > 0) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp5')
      )).style.transform =
        'translate3d(0px,' + this.currentPositionpc5 + 'px,0px)';
    }
  }

  touchEndpc5() {
    this.minimumThresholdpc5 = this.heightpc5 - 150;

    if (this.currentPositionpc5 < this.minimumThresholdpc5) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp5')
      )).style.transform = 'translate3d(0px,0px,0px)';
    } else {
      this.closep5();
    }
  }

  currentPositionpc6;
  heightpc6;
  minimumThresholdpc6;
  startPositionpc6;

  openp6() {
    (<HTMLStyleElement>document.querySelector('.bottomSheetp6')).style.bottom =
      '0px';
    (<HTMLStyleElement>document.querySelector('.bgp6')).style.display = 'block';
  }

  closep6() {
    this.currentPositionpc6 = 0;
    this.startPositionpc6 = 0;
    (<HTMLStyleElement>document.querySelector('.bottomSheetp6')).style.bottom =
      '-1000px';
    (<HTMLStyleElement>(
      document.querySelector('.bottomSheetp6')
    )).style.transform = 'translate3d(0px,0px,0px)';
    (<HTMLStyleElement>document.querySelector('.bgp6')).style.display = 'none';
  }

  touchMovepc6(evt: TouchEvent) {
    if (this.startPositionpc6 == 0) {
      this.startPositionpc6 = evt.touches[0].clientY;
    }

    this.heightpc6 = document.querySelector('.bottomSheetp6').clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPositionpc6 = y - this.startPositionpc6;

    if (this.currentPositionpc6 > 0 && this.startPositionpc6 > 0) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp6')
      )).style.transform =
        'translate3d(0px,' + this.currentPositionpc6 + 'px,0px)';
    }
  }

  touchEndpc6() {
    this.minimumThresholdpc6 = this.heightpc6 - 150;

    if (this.currentPositionpc6 < this.minimumThresholdpc6) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp6')
      )).style.transform = 'translate3d(0px,0px,0px)';
    } else {
      this.closep6();
    }
  }

  currentPositionpc7;
  heightpc7;
  minimumThresholdpc7;
  startPositionpc7;

  openp7() {
    (<HTMLStyleElement>document.querySelector('.bottomSheetp7')).style.bottom =
      '0px';
    (<HTMLStyleElement>document.querySelector('.bgp7')).style.display = 'block';
  }

  closep7() {
    this.currentPositionpc7 = 0;
    this.startPositionpc7 = 0;
    (<HTMLStyleElement>document.querySelector('.bottomSheetp7')).style.bottom =
      '-1000px';
    (<HTMLStyleElement>(
      document.querySelector('.bottomSheetp7')
    )).style.transform = 'translate3d(0px,0px,0px)';
    (<HTMLStyleElement>document.querySelector('.bgp7')).style.display = 'none';
  }

  touchMovepc7(evt: TouchEvent) {
    if (this.startPositionpc7 == 0) {
      this.startPositionpc7 = evt.touches[0].clientY;
    }

    this.heightpc7 = document.querySelector('.bottomSheetp7').clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPositionpc7 = y - this.startPositionpc7;

    if (this.currentPositionpc7 > 0 && this.startPositionpc7 > 0) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp7')
      )).style.transform =
        'translate3d(0px,' + this.currentPositionpc7 + 'px,0px)';
    }
  }

  touchEndpc7() {
    this.minimumThresholdpc7 = this.heightpc7 - 150;

    if (this.currentPositionpc7 < this.minimumThresholdpc7) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp7')
      )).style.transform = 'translate3d(0px,0px,0px)';
    } else {
      this.closep7();
    }
  }

  currentPositionpc8;
  heightpc8;
  minimumThresholdpc8;
  startPositionpc8;

  openp8() {
    (<HTMLStyleElement>document.querySelector('.bottomSheetp8')).style.bottom =
      '0px';
    (<HTMLStyleElement>document.querySelector('.bgp8')).style.display = 'block';
  }

  closep8() {
    this.currentPositionpc8 = 0;
    this.startPositionpc8 = 0;
    (<HTMLStyleElement>document.querySelector('.bottomSheetp8')).style.bottom =
      '-1000px';
    (<HTMLStyleElement>(
      document.querySelector('.bottomSheetp8')
    )).style.transform = 'translate3d(0px,0px,0px)';
    (<HTMLStyleElement>document.querySelector('.bgp8')).style.display = 'none';
  }

  touchMovepc8(evt: TouchEvent) {
    if (this.startPositionpc8 == 0) {
      this.startPositionpc8 = evt.touches[0].clientY;
    }

    this.heightpc8 = document.querySelector('.bottomSheetp8').clientHeight;

    var y = evt.touches[0].clientY;

    this.currentPositionpc8 = y - this.startPositionpc8;

    if (this.currentPositionpc8 > 0 && this.startPositionpc8 > 0) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp8')
      )).style.transform =
        'translate3d(0px,' + this.currentPositionpc8 + 'px,0px)';
    }
  }

  touchEndpc8() {
    this.minimumThresholdpc8 = this.heightpc8 - 150;

    if (this.currentPositionpc8 < this.minimumThresholdpc8) {
      (<HTMLStyleElement>(
        document.querySelector('.bottomSheetp8')
      )).style.transform = 'translate3d(0px,0px,0px)';
    } else {
      this.closep8();
    }
  }

  onErrorf(img) {
    img.src = '../../../../assets/imgs/avatar.svg';
  }

  loadMap() {
    //OBTENEMOS LAS COORDENADAS DESDE EL TELEFONO.
 
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        let latLng = new google.maps.LatLng(this.latitude, this.longitude);
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
        };

        //CUANDO TENEMOS LAS COORDENADAS SIMPLEMENTE NECESITAMOS PASAR AL MAPA DE GOOGLE TODOS LOS PARAMETROS.
        this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
        this.map.addListener('tilesloaded', () => {
          this.getAddressFromCoords(
            this.map.center.lat(),
            this.map.center.lng()
          );
          this.lat = this.map.center.lat();
          this.long = this.map.center.lng();
        });
      })
      .catch((error) => {
      });
  }

  getAddressFromCoords(lattitude, longitude) {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5,
    };
    this.nativeGeocoder
      .reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = '';
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0) responseAddress.push(value);
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ', ';
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = 'Address Not Available!';
      });
  }

  async presentAlertServer() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Ha ocurrido un error, verifique su conexión!!!',
      mode: 'ios',
      buttons: [{
        text: 'Reintentar',
        handler: () => {
          this.router.navigateByUrl('/dashboard/mis-propiedades');
        }
      }
      ]
    });
    await alert.present();
  }

  async presentLoadingServer() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 1500,
      spinner: "bubbles",
      mode: 'ios',
    });
    await loading.present();
    setTimeout(() => {
      this.presentAlertServer();
    }, 2000);
  }


  actualizarDisponible(){
    this.storage.get('informacionPromocion').then((res)=>{
      this.datosPromocionesR = res;
    });
    this.confirmarCambiarDisponible();
  }

  async confirmarCambiarDisponible() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      mode: 'ios',
      message: '¿Está apunto de establecer su propiedad como Disponible?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Cambiar',
          handler: () => {
            this.cargarDisponible();
          }
        }
      ]
    });

    await alert.present();
  }

  async cargarDisponible() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();
    setTimeout(()=>{
      this.actualizarDisponibleDB();
    },1500);
  }

  actualizarDisponibleDB(){
    let body = {
      aksi: 'actualizarDispo',
      bly_status: 1,
      bly_colorStatus: "success",
      bly_registroPropiedad: this.datosPromocionesR.propiedad
    }
    this.provider.actualizarDisponibilidadPropiedad(body, 'db_actualizarDisponibilidadPropiedad.php').subscribe(data =>{
      this.toast = this.toastController
      .create({
        message: 'Se ha actualizado su estatus...',
        duration: 2000,
        mode: 'ios',
      })
      .then((toastData) => {
        toastData.present();
      });
    });
  }

  actualizarnoDisponible(){
    this.storage.get('informacionPromocion').then((res)=>{
      this.datosPromocionesR = res;
    });
    this.confirmarCambiarNoDisponible();
  }

  async confirmarCambiarNoDisponible() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      mode: 'ios',
      message: '¿Está apunto de establecer su propiedad como No Disponible?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Cambiar',
          handler: () => {
            this.cargarNoDisponible();
          }
        }
      ]
    });

    await alert.present();
  }

  async cargarNoDisponible() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 2000,
      mode: 'ios'
    });
    await loading.present();
    setTimeout(()=>{
      this.actualizarNoDisponibleDB();
    },1500);
  }

  actualizarNoDisponibleDB(){
    let body = {
      aksi: 'actualizarDispo',
      bly_status: 2,
      bly_colorStatus: "danger",
      bly_registroPropiedad: this.datosPromocionesR.propiedad
    }
    this.provider.actualizarDisponibilidadPropiedad(body, 'db_actualizarDisponibilidadPropiedad.php').subscribe(data =>{
      this.toast = this.toastController
      .create({
        message: 'Se ha actualizado su estatus...',
        duration: 2000,
        mode: 'ios',
      })
      .then((toastData) => {
        toastData.present();
      });
    });
  }
}
