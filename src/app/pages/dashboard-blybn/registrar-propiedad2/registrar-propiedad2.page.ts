import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-propiedad2',
  templateUrl: './registrar-propiedad2.page.html',
  styleUrls: ['./registrar-propiedad2.page.scss'],
})
export class RegistrarPropiedad2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
  }

}
