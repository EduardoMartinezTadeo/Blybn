import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-propiedad',
  templateUrl: './registrar-propiedad.page.html',
  styleUrls: ['./registrar-propiedad.page.scss'],
})
export class RegistrarPropiedadPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }
}
