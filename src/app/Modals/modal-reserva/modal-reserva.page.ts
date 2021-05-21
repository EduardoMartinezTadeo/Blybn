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
import { ModalPagoPage } from '../modal-pago/modal-pago.page';
import {
  PayPal,
  PayPalPayment,
  PayPalConfiguration,
} from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-modal-reserva',
  templateUrl: './modal-reserva.page.html',
  styleUrls: ['./modal-reserva.page.scss'],
})
export class ModalReservaPage implements OnInit {
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
    private alertController: AlertController,
    private loadingController: LoadingController,
    private iab: InAppBrowser,
    private navParams: NavParams,
    private modalController: ModalController,
    private toastController: ToastController,
    private payPal: PayPal
  ) {
    this.server = this.provider.server;
  }
  id_usuario: number;
  id_propiedad: number;
  usuario: string;
  bly_placeId: string;
  ngOnInit() {}
  datos: any = [];
  server: string;
  perfilData: any;
  informacionPropiedades: any = [];
  ionViewWillEnter() {
    this.datos = this.navParams.get('datos');
    this.id_propiedad = this.datos.propiedad;
    this.actRoute.params.subscribe((data: any) => {
      this.cargarImagenesP();
      this.cargarP1();
      this.cargarP2();
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
    this.informacionP2 = [];
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

  informacionP2: any = [];
  cargarP2() {
    let body = {
      aksi: 'tipo1',
      bly_propiedad: this.id_propiedad,
    };
    this.provider
      .detalleP2(body, 'db_CargarAmenidadesPropiedades.php')
      .subscribe(
        (data) => {
          this.informacionP2 = data.result;
        },
        (error) => {
          this.presentLoadingServer();
        }
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
      cssClass: 'my-custom-class',
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
  actualizarnoDisponible() {
    this.storage.get('informacionPromocion').then((res) => {
      this.datosPromocionesR = res;
    });
    this.confirmarCambiarNoDisponible();
  }

  async confirmarCambiarNoDisponible() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      mode: 'ios',
      message:
        '¿Está apunto de realizar el pago de reservación de esta propiedad?',
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
          text: 'Proceder',
          handler: () => {
            this.cargarNoDisponible();
          },
        },
      ],
    });

    await alert.present();
  }

  async cargarNoDisponible() {
    const loading = await this.loadingController.create({
      message: 'Espere un momento...',
      duration: 2000,
      mode: 'ios',
    });
    await loading.present();
    setTimeout(() => {
      this.actualizarNoDisponibleDB();
    }, 1500);
  }

  actualizarNoDisponibleDB() {
    let body = {
      aksi: 'actualizarDispo',
      bly_status: 2,
      bly_colorStatus: 'danger',
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
            message: 'Se redireccionará a seleccionar su método de pago...',
            duration: 2000,
            mode: 'ios',
          })
          .then((toastData) => {
            toastData.present();
            this.mostrarModalResultado();
          });
      });
  }

  async mostrarModalResultado() {
    const modal = await this.modalController.create({
      component: ModalPagoPage,
    });
    await modal.present();
  }

  totalFinal: number;
  total1: number;
  total2: number;
  datosFactura: any = [];
  totalFinalPay: string;
  subtotal(
    bly_precioBase: number,
    bly_cargoLimpieza: number,
    bly_nombre: string,
    bly_correo: string
  ) {
    this.totalFinal =
      parseInt(bly_precioBase.toString()) +
      parseInt(bly_cargoLimpieza.toString());
    this.totalFinalPay = this.totalFinal.toString();
    console.log(this.totalFinalPay);
    this.payPal
      .init({
        PayPalEnvironmentProduction:
          'AS6GpXmXXEOGHh8CjQXAiq_S95Ookwd7tgiSdDWH9yFucP8kYUxlhVrr3q48x-p0QI22lQi8Okj49cBP',
        PayPalEnvironmentSandbox:
          'AfiDthdPUJXvz6kkuoOriRoQaieknEqXyVzmAFcYhSBJcrtZXGwriMSZ3jtcRsNzvpRWdhtLc6SV5Vf9',
      })
      .then(
        () => {
          // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
          this.payPal
            .prepareToRender(
              'PayPalEnvironmentSandbox',
              new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
              })
            )
            .then(
              () => {
                let payment = new PayPalPayment(
                  this.totalFinalPay,
                  'USD',
                  'Description',
                  'sale'
                );
                this.payPal.renderSinglePaymentUI(payment).then(
                  () => {},
                  () => {
                    // Error or render dialog closed without being successful
                  }
                );
              },
              () => {
                // Error in configuration
              }
            );
        },
        () => {
          // Error in initialization, maybe PayPal isn't supported or something else
        }
      );
  }
}
