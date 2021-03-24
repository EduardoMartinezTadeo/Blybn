import {
  Component,
  NgZone,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {
  NativeGeocoder
} from '@ionic-native/native-geocoder/ngx';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google;

@Component({
  selector: 'app-registro-p2',
  templateUrl: './registro-p2.page.html',
  styleUrls: ['./registro-p2.page.scss'],
})
export class RegistroP2Page {
  
 
  autocomplete: { input: string };
  autocompleteItems: any[];
  main_text: any;
  secondary_text: any;
  terms: any = [];
  value: any = [];
  types: any;
  GoogleAutocomplete: any;

  constructor(
    public zone: NgZone,
    private alertController: AlertController,
    private router: Router
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }


  //AUTOCOMPLETE, SIMPLEMENTE ACTUALIZAMOS LA LISTA CON CADA EVENTO DE ION CHANGE EN LA VISTA.
  UpdateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      }
    );
  }

  Dataubicacion = {
    calle: '',
    direccion: '',
    ciudad: '',
    estado: '',
    pais: '',
    codigo: '',
  };
  //FUNCION QUE LLAMAMOS DESDE EL ITEM DE LA LISTA.
  SelectSearchResult(item) {
    this.ClearAutocomplete();
    this.main_text = item.structured_formatting.main_text;
    this.secondary_text = item.structured_formatting.secondary_text;
    this.types = item.types;
    console.log(this.secondary_text);
    //Detectar Calle
    this.Dataubicacion.calle = this.secondary_text.split(',')[0];
    //Detectar Ciudad
    if ((this.Dataubicacion.ciudad = this.secondary_text.split(',')[1])) {
      this.Dataubicacion.ciudad = this.secondary_text.split(',')[1];
    } else if (
      (this.Dataubicacion.estado = this.secondary_text.split(',')[0])
    ) {
      this.Dataubicacion.estado = this.secondary_text.split(',')[0];
    }
    //Detectar Estado
    if ((this.Dataubicacion.estado = this.secondary_text.split(',')[2])) {
      this.Dataubicacion.estado = this.secondary_text.split(',')[2];
    } else if ((this.Dataubicacion.estado = this.secondary_text.split(',')[0])) {
      this.Dataubicacion.estado = this.secondary_text.split(',')[0];
    } else if ((this.Dataubicacion.estado = this.secondary_text.split(',')[1])){
      this.Dataubicacion.estado = this.secondary_text.split(',')[1];
    }
    //Detectar Pais
    if ((this.Dataubicacion.pais = this.secondary_text.split(',')[3])) {
      this.Dataubicacion.pais = this.secondary_text.split(',')[3];
    } else if ((this.Dataubicacion.pais = this.secondary_text.split(',')[4])) {
      this.Dataubicacion.pais = this.secondary_text.split(',')[4];
    } else if ((this.Dataubicacion.pais = this.secondary_text.split(',')[5])) {
      this.Dataubicacion.pais = this.secondary_text.split(',')[5];
    } else if ((this.Dataubicacion.pais = this.secondary_text.split(',')[6])){
      this.Dataubicacion.pais = this.secondary_text.split(',')[6];
    } else if ((this.Dataubicacion.pais = this.secondary_text.split(',')[2])){
      this.Dataubicacion.pais = this.secondary_text.split(',')[2];
    } else if ((this.Dataubicacion.pais = this.secondary_text.split(',')[1])){
      this.Dataubicacion.pais = this.secondary_text.split(',')[1];
    }
    //Detectar Direccion
    this.Dataubicacion.direccion = this.main_text + " " +this.secondary_text ;
  }

  //LLAMAMOS A ESTA FUNCION PARA LIMPIAR LA LISTA CUANDO PULSAMOS IONCLEAR.
  ClearAutocomplete() {
    this.autocompleteItems = [];
    this.autocomplete.input = '';
    this.terms = [];
  }


  async cancelar() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cancelar operación',
      message: '¿Esta seguro que desea cancelar el registro de la propiedad?',
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
            this.router.navigate(['/dashboard2/registrar-propiedad2']);
          },
        },
      ],
    });

    await alert.present();
  }

  guardarInformacion() {
    this.router.navigate(['/registrop2r22']);
  }
}
