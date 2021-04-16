import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ProviderService } from 'src/app/services/provider.service';
@Component({
  selector: 'app-mis-propiedades',
  templateUrl: './mis-propiedades.page.html',
  styleUrls: ['./mis-propiedades.page.scss'],
})
export class MisPropiedadesPage implements OnInit {

  constructor(
    private router: Router,
    private storage: Storage,
    private provider: ProviderService) { }

  ngOnInit() {
  }

  informacionPerfil: any;
  bly_usuario: number;
  ionViewWillEnter() {  
    this.storage.get('perfil').then((res) => {
      this.informacionPerfil = res;
      this.bly_usuario = this.informacionPerfil.bly_usuario;
      this.cargarPropiedad();
    }); 
    console.log(this.propiedades);
  }

  propiedades: any = [];
  cargarPropiedad(){
    return new Promise((resolve) => {
      let body = {
        aksi: 'propiedadUsuario',
        bly_usuario: this.bly_usuario
      };
      this.provider.postDataCPUF(body, 'db_cargarPropiedadesUsuario.php').subscribe((data) => {
        for (let exclusivo of data.result){
          this.propiedades.push(exclusivo);
        }
        resolve(true);
      });
    });
  }
  salir(){
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }

}
