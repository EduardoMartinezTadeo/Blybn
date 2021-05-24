import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-historial-renta2',
  templateUrl: './historial-renta2.page.html',
  styleUrls: ['./historial-renta2.page.scss'],
})
export class HistorialRenta2Page implements OnInit {
  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {}

  responseData: any;
  bly_usuario: number;
  ionViewWillEnter() {
    this.storage.get('perfil').then((res) => {
      this.responseData = res;
      this.bly_usuario = this.responseData.bly_usuario;
      console.log(this.bly_usuario);
    });
  }

  salir() {
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
  }
}
