import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb03',
  templateUrl: './animacionb03.page.html',
  styleUrls: ['./animacionb03.page.scss'],
})
export class Animacionb03Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop3');
    }, 3000);
   }

  ngOnInit() {
  }

}
