import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.page.html',
  styleUrls: ['./promociones.page.scss'],
})
export class PromocionesPage implements OnInit {

  contentLoaded = false;
  constructor(
    private provider: ProviderService
  ) { 
    this.server = this.provider.server;
  }
  server: string;
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.cargarPromociones();
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2500);    
  }


  promociones: any = [];
  cargarPromociones(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'promocion'
      };
      this.provider.cargarPropiedadPromocion(body, 'db_CargarPromocionesGenerales.php').subscribe((data) => {
        for (let promocion of data.result){
          this.promociones.push(promocion);
          console.log(data.result);
        }
        resolve(true);
      });
    });
  }

  showToolbar = false;


  onError(img) {
    img.src = '../../../../assets/imgs/default-inicio.svg';
  }
}
