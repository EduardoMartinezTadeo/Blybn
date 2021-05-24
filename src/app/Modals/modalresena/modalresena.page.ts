import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ProviderService } from 'src/app/services/provider.service';
import {
  AlertController,
  LoadingController,
  ModalController,
  NavParams,
  ToastController,
} from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CalendarComponentOptions } from 'ion2-calendar';
import { ModalPagoExitosoPage } from '../modal-pago-exitoso/modal-pago-exitoso.page';
import { ModalPagoFallidoPage } from '../modal-pago-fallido/modal-pago-fallido.page';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-modalresena',
  templateUrl: './modalresena.page.html',
  styleUrls: ['./modalresena.page.scss'],
})
export class ModalresenaPage implements OnInit {
  dateRange: { from: string; to: string };
  type: 'string';

  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
    weekdays: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
    monthPickerFormat: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
    ],
  };

  public calendario: boolean = false;

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private provider: ProviderService,
    private storage: Storage,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private iab: InAppBrowser,
    private navParams: NavParams,
    private modalController: ModalController,
    private toastController: ToastController,
    private servicio: DataService
  ) {
    this.server = this.provider.server;
  }
  id_usuario: number;
  id_propiedad: number;
  usuario: string;
  bly_placeId: string;
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  title = 'angular-paypal-payment';
  ngOnInit() {
    this.actualizarnoDisponible();
  }
  datos: any = [];
  server: string;
  perfilData: any;
  informacionPropiedades: any = [];
  ionViewWillEnter() {
    this.actualizarnoDisponible();
    this.datos = this.navParams.get('datos');
    console.log(this.datos);
    this.id_propiedad = this.datos.propiedad;
    this.actRoute.params.subscribe((data: any) => {
      this.cargarImagenesP();
      this.cargarP1();
      this.cargarP3();
      this.comoLlegar();
      this.cargarFotoPerfil();
      this.cargarInformacionBasica();
    });
    this.storage.get('perfil').then((data) => {
      this.bly_nombre = data.bly_nombre;
      this.bly_correo = data.bly_correoElectronico;
    });
  }

  bly_nombre: string;
  bly_correo: string;
  informacionPersonal: any = [];
  cargarInformacionBasica() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'info-propietario',
        bly_propietario: this.datos.usuario,
      };
      this.provider
        .cargarInformacionPropietario(
          body,
          'db_CargarInformacionPropietario.php'
        )
        .subscribe((data) => {
          this.informacionPersonal = data.result;
          resolve(true);
        });
    });
  }

  foto: string;
  fotoPerfil: any = [];
  cargarFotoPerfil() {
    return new Promise((resolve) => {
      let body = {
        aksi: 'perfilFoto',
        bly_usuario: this.datos.usuario,
      };
      this.provider.postDataCFPA(body, 'db_cargarFotoPerfilAct.php').subscribe(
        (data) => {
          this.fotoPerfil = data;
          this.foto = this.fotoPerfil.bly_fotografia;
          resolve(true);
        },
        (error) => {
          this.presentLoadingServer();
        }
      );
    });
  }

  salir() {
    this.modalController.dismiss();
    this.horaLimiteReservacion = '';
    this.llegadaAntes = '';
    this.llegadaSalida = '';
    this.llegadaDespues = '';
    this.preavisoPropiedad = '';
    this.anticipacionRenta = '';
    this.informacionP1 = [];
    this.informacionP3 = [];
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
      .subscribe(
        (data) => {
          this.informacionPropiedad = data.result;
        },
        (error) => {
          this.presentLoadingServer();
        }
      );
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
    this.provider.detalleP1(body, 'db_CargarDetallePropiedad.php').subscribe(
      (data) => {
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
        this.informacionPropiedades = {
          propiedad: this.id_registroPropiedad,
          dueno: this.id_duenocasa,
          direccion: this.direccionGeneral,
        };
        this.storage.set('informacionPromocion', this.informacionPropiedades);
      },
      (error) => {
        this.presentLoadingServer();
      }
    );
  }

  url: string;
  infoComoLlegar: any = [];
  comoLlegar() {
    let body = {
      aksi: 'placeId',
      bly_registroPropiedad: this.id_propiedad,
    };
    this.provider
      .cargarPlaceID(body, 'db_CargarPlaceIDPropiedad.php')
      .subscribe(
        (data) => {
          this.infoComoLlegar = data.result;
          this.bly_placeId = this.infoComoLlegar.bly_placeid;
          //this.url = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id='+this.bly_placeId;
        },
        (error) => {
          this.presentLoadingServer();
        }
      );
  }

  llegarComo() {
    this.iab.create(
      `https://www.google.com/maps/search/?api=1&query=Google&query_place_id=` +
        this.bly_placeId,
      `_system`
    );
  }

  bly_precio: number;
  bly_limpieza: number;
  informacionP3: any = [];
  cargarP3() {
    let body = {
      aksi: 'tipo4',
      bly_propiedad: this.id_propiedad,
    };
    this.provider.detalleP3(body, 'db_CargarCostosPropiedad.php').subscribe(
      (data) => {
        this.informacionP3 = data.result;
        this.bly_precio = this.informacionP3.bly_precioBase;
        console.log(this.informacionP3);
      },
      (error) => {
        this.presentLoadingServer();
      }
    );
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
      .subscribe(
        (data) => {
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
        },
        (error) => {
          this.presentLoadingServer();
        }
      );
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

  onErrorf(img) {
    img.src = '../../../../assets/imgs/avatar.svg';
  }

  async presentAlertServer() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Ha ocurrido un error, verifique su conexión!!!',
      mode: 'ios',
      buttons: [
        {
          text: 'Reintentar',
          handler: () => {
            this.router.navigateByUrl('/dashboard/mis-propiedades');
          },
        },
      ],
    });
    await alert.present();
  }

  async presentLoadingServer() {
    const loading = await this.loadingController.create({
      duration: 1500,
      spinner: 'bubbles',
      mode: 'ios',
    });
    await loading.present();
    setTimeout(() => {
      this.presentAlertServer();
    }, 2000);
  }

  toast: any;
  datosPromocionesR: any;
  datosPerfilR: any;
  actualizarnoDisponible() {
    this.storage.get('informacionPromocion').then((res) => {
      this.datosPromocionesR = res;
    });
    this.storage.get('perfil').then((res) => {
      this.datosPerfilR = res;
    });
  }

  actualizarNoDisponibleDB() {
    let body = {
      aksi: 'actualizarDispo',
      bly_status: 3,
      bly_colorStatus: 'warning',
      bly_registroPropiedad: this.datosPromocionesR.propiedad,
    };
    this.provider
      .actualizarDisponibilidadPropiedad(
        body,
        'db_actualizarDisponibilidadPropiedad.php'
      )
      .subscribe((data) => {
        this.toast = this.toastController
          .create({
            message: 'Espere un momento...',
            duration: 2000,
            mode: 'ios',
          })
          .then((toastData) => {
            this.modalController.dismiss();
            toastData.present();
            this.mostrarModalResultado();
          });
      });
  }

  async mostrarModalResultado() {
    const modal = await this.modalController.create({
      component: ModalPagoExitosoPage,
    });
    await modal.present();
  }

  async mostrarModalErrorPago() {
    const modal = await this.modalController.create({
      component: ModalPagoFallidoPage,
    });
    await modal.present();
  }

  //informacion order capture
  informacionPagoFinalizado: any = [];
  bly_fechapago: string;
  bly_idPago: string;
  bly_correoUsuario: string;
  bly_paisCompra: string;
  bly_nombreUsuario: string;
  bly_apellidoUsuario: string;
  bly_idUsuario: string;
  bly_montoFinal: string;
  bly_descripcionPago: string;
  bly_statusPago: string;

  descuentoSemana: number;
  descuentoMes: number;
  arregloPayPal: any = [];
  totalCargoPay: string;
  totalFinal: number;
  totalFinalSemana: number;
  totalFinalMes: number;
  total1: number;
  total2: number;
  datosFactura: any = [];
  totalFinalPay: number;
  bly_correoFactura: string;
  bly_descripcionFactura: string;
  bly_nombreRentador: string;
  fecha1: any = [];
  fecha2: any = [];
  diaInicial: any;
  diaFinal: any;
}
