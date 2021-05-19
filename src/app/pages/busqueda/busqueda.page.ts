import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ModalBusquedaAvanzadaPage } from '../../Modals/modal-busqueda-avanzada/modal-busqueda-avanzada.page';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  constructor(
    private loadingControlloer: LoadingController,
    private servicio: DataService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  buscar: string;
  onSearchChange(event){
    this.buscar = event.detail.value;
    if(this.buscar == ''){
      this.buscar == "";
      console.log('no buscar'); 
    }else {
      setTimeout(()=>{
        this.buscarPropiedadLoading();
      }, 500);
    }    
  }
  
  responseData: any;
  async buscarPropiedadLoading() {
    const loading = await this.loadingControlloer.create({
      message: 'Espere un momento',
      mode: 'ios',
      spinner: 'bubbles',
      duration: 1500
    });
    await loading.present();
    setTimeout(() => {
      this.servicio.buscarPropiedad(this.buscar).subscribe(data => {
        this.responseData = data;
      })
    },1600)
  }
 
  async modalBusquedaAvanzada() {
    const modal = await this.modalController.create({
      component: ModalBusquedaAvanzadaPage
    });
    return await modal.present();
  }
}
