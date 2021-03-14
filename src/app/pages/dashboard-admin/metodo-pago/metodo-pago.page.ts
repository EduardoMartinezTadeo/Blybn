import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.page.html',
  styleUrls: ['./metodo-pago.page.scss'],
})
export class MetodoPagoPage implements OnInit {

  favorito: boolean = false;
  favorito2: boolean = false;
  favorito3: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }

  onClick() {
    this.favorito = !this.favorito;
  }

  onClick2() {
    this.favorito2 = !this.favorito2;
  }
  onClick3() {
    this.favorito3 = !this.favorito3;
  }

}
