import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodo-pago2',
  templateUrl: './metodo-pago2.page.html',
  styleUrls: ['./metodo-pago2.page.scss'],
})
export class MetodoPago2Page implements OnInit {

  favorito: boolean = false;
  favorito2: boolean = false;
  favorito3: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard2/menutabs/inicio-menu');
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
