import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion1',
  templateUrl: './animacion1.page.html',
  styleUrls: ['./animacion1.page.scss'],
})
export class Animacion1Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-p1');
    }, 2500);
   }

  ngOnInit() {
  }

}
