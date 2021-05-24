import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ProviderService } from '../../../services/provider.service';

@Component({
  selector: 'app-historial-renta',
  templateUrl: './historial-renta.page.html',
  styleUrls: ['./historial-renta.page.scss'],
})
export class HistorialRentaPage implements OnInit {
  constructor(
    private router: Router,
    private storage: Storage,
    private provider: ProviderService
  ) {
    this.server = this.provider.server;
  }
  server: string;
  ngOnInit() {}

  responseData: any;
  bly_usuario: number;
  ionViewWillEnter() {
    this.storage.get('perfil').then((res) => {
      this.responseData = res;
      this.bly_usuario = this.responseData.bly_usuario;
      this.cargarHistorial(this.bly_usuario);
    });
  }

  historial: any = [];
  cargarHistorial(data) {
    return new Promise((resolve) => {
      let body = {
        aksi: 'historial-renta',
        bly_usuario: data,
      };
      this.provider
        .cargarHistorialRentaPropiedades(body, 'db_cargarHistorialRenta.php')
        .subscribe((data) => {
          for (let exclusivo of data.result) {
            this.historial.push(exclusivo);
          }
          resolve(true);
        });
    });
  }
  salir() {
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }
}
