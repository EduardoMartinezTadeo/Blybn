import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb08',
  templateUrl: './animacionb08.page.html',
  styleUrls: ['./animacionb08.page.scss'],
})
export class Animacionb08Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop8');
    }, 3000);
   }

  ngOnInit() {
  }

}
