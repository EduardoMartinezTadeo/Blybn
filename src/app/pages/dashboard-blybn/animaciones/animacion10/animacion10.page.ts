import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion10',
  templateUrl: './animacion10.page.html',
  styleUrls: ['./animacion10.page.scss'],
})
export class Animacion10Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-p10');
    }, 1500);
   }

  ngOnInit() {
  }

}
