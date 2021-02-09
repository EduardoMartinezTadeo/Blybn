import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AvisoService } from '../services/aviso.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public router: Router, private avisoService: AvisoService) {
    setTimeout(() => {
      this.avisoService.authenticationState.subscribe(state => {
        console.log('Estado', state);
        if ( state ) {
          this.router.navigate(['login']);
        } else {
          this.router.navigate(['aviso']);
        }
      });
    },3000);
   }

  ngOnInit() {
  }
}
