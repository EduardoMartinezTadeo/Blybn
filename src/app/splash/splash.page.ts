import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvisoService } from '../services/aviso.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  roleValue: any;
  constructor(
    public router: Router,
    private avisoService: AvisoService,
    private storage: Storage,
    private navCtrl: NavController) {
    setTimeout(() => {
      this.avisoService.authenticationState.subscribe(state => {
        console.log('Estado', state);
        if (state) {
          this.storage.get('storage_blybn').then((res) => {
            console.log(res);
            if (res == null) {
              this.navCtrl.navigateRoot('/login');
            } else if (res == "Blybn") {
              this.navCtrl.navigateRoot('/dashboard2');
            } else if (res == "Propietario Blybner") {
              this.navCtrl.navigateRoot('/dashboard/menutabs/inicio-menu');
            }
          });
        } else {
          this.router.navigate(['aviso']);
        }
      });
    }, 3000);
  }

  ngOnInit() {
  }
}
