import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-propiedades',
  templateUrl: './mis-propiedades.page.html',
  styleUrls: ['./mis-propiedades.page.scss'],
})
export class MisPropiedadesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }

}
