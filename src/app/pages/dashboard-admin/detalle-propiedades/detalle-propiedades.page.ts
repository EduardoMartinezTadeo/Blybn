import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-propiedades',
  templateUrl: './detalle-propiedades.page.html',
  styleUrls: ['./detalle-propiedades.page.scss'],
})
export class DetallePropiedadesPage implements OnInit {

  constructor(
    private actRoute: ActivatedRoute) { }

    id_usuario: number;
    id_propiedad: number;
  ngOnInit() {
    this.actRoute.params.subscribe((data: any)=>{
      this.id_propiedad = data.bly_registroPropiedad;
      this.id_usuario = data.bly_usuario;
    });
  }

}
