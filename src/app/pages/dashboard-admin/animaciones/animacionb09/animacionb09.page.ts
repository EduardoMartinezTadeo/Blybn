import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb09',
  templateUrl: './animacionb09.page.html',
  styleUrls: ['./animacionb09.page.scss'],
})
export class Animacionb09Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop9');
    }, 3000);
   }

  ngOnInit() {
  }

}
