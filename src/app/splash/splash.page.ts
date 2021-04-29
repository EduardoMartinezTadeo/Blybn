import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvisoService } from '../services/aviso.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';

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
    private navCtrl: NavController,
    private dataService: DataService
  ) {
    setTimeout(() => {
      this.avisoService.authenticationState.subscribe(state => {
        if (state) {
          this.storage.get('storage_blybn').then((res) => {
            if (res == null) {
              this.navCtrl.navigateRoot('/login');
            } else if (res == "Blybn") {
              this.navCtrl.navigateRoot('/dashboard2/menutabs2/inicio-menu');
            } else if (res == "Propietario Blybner") {
              this.navCtrl.navigateRoot('/dashboard/menutabs/inicio-menu2');
            }
          });
        } else {
          this.router.navigate(['/aviso']);
        }
      });
    }, 4500);
  }

  ngOnInit() {
    this.dataService.TerminosCondiciones().subscribe((response) => {
      this.storage.set('licencia', response);
    });
  }
}
