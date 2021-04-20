import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb11',
  templateUrl: './animacionb11.page.html',
  styleUrls: ['./animacionb11.page.scss'],
})
export class Animacionb11Page implements OnInit {

  constructor(private router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop11');
    }, 3000);
   }

  ngOnInit() {
  }

}
