import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb04',
  templateUrl: './animacionb04.page.html',
  styleUrls: ['./animacionb04.page.scss'],
})
export class Animacionb04Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop4');
    }, 1500);
   }

  ngOnInit() {
  }

}
