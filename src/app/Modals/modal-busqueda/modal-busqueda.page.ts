import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-busqueda',
  templateUrl: './modal-busqueda.page.html',
  styleUrls: ['./modal-busqueda.page.scss'],
})
export class ModalBusquedaPage implements OnInit {
  datos: any = [];
  constructor(
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.datos = this.navParams.get('datos');
    console.log(this.datos);
  }

}
