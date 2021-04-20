import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder,
  NativeGeocoderOptions,
  NativeGeocoderResult,
} from '@ionic-native/native-geocoder/ngx';
import { Storage } from '@ionic/storage';

declare var google;
@Component({
  selector: 'app-registro-p2r22',
  templateUrl: './registro-p2r22.page.html',
  styleUrls: ['./registro-p2r22.page.scss'],
})
export class RegistroP2r22Page implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  lat: string;
  long: string;
  address: string;
  constructor(
    private router: Router,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private storage: Storage
  ) {}

  ngOnInit() {
    
  }

  contentLoaded = false;
  ionViewWillLeave() {
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500);
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true;
      this.loadMap();
    }, 2500);
  }

  loadMap() {
    //OBTENEMOS LAS COORDENADAS DESDE EL TELEFONO.
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        let latLng = new google.maps.LatLng(
          resp.coords.latitude,
          resp.coords.longitude
        );
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
          console.log('accuracy', this.map, this.map.center.lat());
          this.getAddressFromCoords(
            this.map.center.lat(),
            this.map.center.lng()
          );
          this.lat = this.map.center.lat();
          this.long = this.map.center.lng();
        });
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log('getAddressFromCoords ' + lattitude + ' ' + longitude);
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

  cancelar() {
    this.router.navigate(['/registrop2']);
  }

  informacionR2: any;
  guardarInformacion() {
    this.informacionR2 = {
      latitud: this.lat,
      longitud: this.long,
      registro2: true,
    };
    this.storage.set('registroP2', this.informacionR2).then((res) => {
      this.router.navigateByUrl('/dashboard/menutabs/registrar-propiedad');
    });
  }
}
