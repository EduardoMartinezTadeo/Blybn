import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion4',
  templateUrl: './animacion4.page.html',
  styleUrls: ['./animacion4.page.scss'],
})
export class Animacion4Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/dashboard2/menutabs2/registrar-propiedad2');
    }, 3000);
   }

  ngOnInit() {
  }

}
