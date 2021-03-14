import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-renta',
  templateUrl: './historial-renta.page.html',
  styleUrls: ['./historial-renta.page.scss'],
})
export class HistorialRentaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }

}
