import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion5',
  templateUrl: './animacion5.page.html',
  styleUrls: ['./animacion5.page.scss'],
})
export class Animacion5Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-p5');
    }, 3000);
   }

  ngOnInit() {
  }

}
