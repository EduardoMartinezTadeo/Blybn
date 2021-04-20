import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb01',
  templateUrl: './animacionb01.page.html',
  styleUrls: ['./animacionb01.page.scss'],
})
export class Animacionb01Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop1');
    }, 1800);
   }

  ngOnInit() {
  }

}
