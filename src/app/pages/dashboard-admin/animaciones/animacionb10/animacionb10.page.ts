import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb10',
  templateUrl: './animacionb10.page.html',
  styleUrls: ['./animacionb10.page.scss'],
})
export class Animacionb10Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop10');
    }, 1500);
   }

  ngOnInit() {
  }

}
