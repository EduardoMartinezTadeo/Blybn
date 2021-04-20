import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb06',
  templateUrl: './animacionb06.page.html',
  styleUrls: ['./animacionb06.page.scss'],
})
export class Animacionb06Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop6');
    }, 3000);
   }

  ngOnInit() {
  }

}
