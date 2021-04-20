import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb05',
  templateUrl: './animacionb05.page.html',
  styleUrls: ['./animacionb05.page.scss'],
})
export class Animacionb05Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop5');
    }, 3000);
   }

  ngOnInit() {
  }

}
