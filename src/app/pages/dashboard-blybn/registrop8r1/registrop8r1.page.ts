import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrop8r1',
  templateUrl: './registrop8r1.page.html',
  styleUrls: ['./registrop8r1.page.scss'],
})
export class Registrop8r1Page implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  contentLoaded = false;
  ionViewWillLeave(){
    setTimeout(() => {
      this.contentLoaded = false;
    }, 1500); 
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true;      
    }, 2500); 
  }
  cancelar(){
    this.router.navigate(['/registro-p8']);
  }

  guardarInformacion(){
    this.router.navigate(['/dashboard2/menutabs2/registrar-propiedad2']);
  }

}
