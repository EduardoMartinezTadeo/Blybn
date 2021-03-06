import { Component, Input } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showToolbar = false;
  
  constructor(
    private loadingControlloer: LoadingController,
    private servicio: DataService){
   
  }
  @Input() titulo: string = '';

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
}
