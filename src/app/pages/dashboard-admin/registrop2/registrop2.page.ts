import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

declare var google;
@Component({
  selector: 'app-registrop2',
  templateUrl: './registrop2.page.html',
  styleUrls: ['./registrop2.page.scss'],
})
export class Registrop2Page {

  autocomplete: { input: string };
  autocompleteItems: any[];
  main_text: any;
  secondary_text: any;
  terms: any = [];
  value: any = [];
  types: any;
  GoogleAutocomplete: any;

  contentLoaded = false;
  ionViewWillLeave(){
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true;      
    }, 2500); 
  }

  constructor(
    public zone: NgZone,
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController,
    private storage: Storage
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
    place_id: ''
  };
  //FUNCION QUE LLAMAMOS DESDE EL ITEM DE LA LISTA.
  SelectSearchResult(item) {
    this.verificarInformacion();    
    this.Dataubicacion.place_id = item.place_id;
    this.main_text = item.structured_formatting.main_text;
    this.secondary_text = item.structured_formatting.secondary_text;
    this.types = item.types;
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

  async verificarInformacion() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Verificaci??n',
      message: '??Verifica que la informaci??n sea correcta o este posicionada en el lugar correcto!',
      buttons: [
          {
          text: 'Aceptar',
          handler: () => {
            this.ClearAutocomplete();
          }
        }
      ]
    });

    await alert.present();
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
      mode:'ios',
      header: 'Cancelar operaci??n',
      message: '??Esta seguro que desea cancelar el registro de la propiedad?',
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
            this.router.navigateByUrl('/dashboard/menutabs/registrar-propiedad');
          },
        },
      ],
    });

    await alert.present();
  }

  informacionMapa: any;
  async guardarInformacion() {
    if(this.Dataubicacion.pais == ""){
      const toast = await this.toastController.create({
        message: 'El pa??s es requerido...',
        duration: 2000,
        mode: 'ios'
      });
      toast.present();
    } else if(this.Dataubicacion.calle == ""){
      const toast = await this.toastController.create({
        message: 'La calle es requerida...',
        duration: 2000,
        mode: 'ios'
      });
      toast.present();
    } else if(this.Dataubicacion.ciudad == ""){
      const toast = await this.toastController.create({
        message: 'La ciudad es requerida...',
        duration: 2000,
        mode: 'ios'
      });
      toast.present();
    } else if(this.Dataubicacion.estado == ""){
      const toast = await this.toastController.create({
        message: 'El estado es requerido...',
        duration: 2000,
        mode: 'ios'
      });
      toast.present();
    } else if(this.Dataubicacion.direccion == ""){
      const toast = await this.toastController.create({
        message: 'La direcci??n es requerida...',
        duration: 2000,
        mode: 'ios'
      });
      toast.present();
    } else if (this.Dataubicacion.codigo == ""){
      const toast = await this.toastController.create({
        message: 'El c??digo postal es requerido...',
        duration: 2000,
        mode: 'ios'
      });
      toast.present();
    }
    else {
      this.informacionMapa = {
        pais: this.Dataubicacion.pais,
        calle: this.Dataubicacion.calle,
        ciudad: this.Dataubicacion.ciudad,
        estado: this.Dataubicacion.estado,
        direccion: this.Dataubicacion.direccion,
        codigoPostal: this.Dataubicacion.codigo,
        place_id: this.Dataubicacion.place_id
      }
      this.storage.set('mapaInformacion', this.informacionMapa).then((res) => {
        this.router.navigate(['/registro-p2r22']);
      });
    }
  }
}
