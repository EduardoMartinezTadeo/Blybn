import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-renta2',
  templateUrl: './historial-renta2.page.html',
  styleUrls: ['./historial-renta2.page.scss'],
})
export class HistorialRenta2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
  }

}
