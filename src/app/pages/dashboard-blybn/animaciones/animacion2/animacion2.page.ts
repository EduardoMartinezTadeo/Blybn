import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion2',
  templateUrl: './animacion2.page.html',
  styleUrls: ['./animacion2.page.scss'],
})
export class Animacion2Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-p2');
    }, 3000);
   }

  ngOnInit() {
  }

}
