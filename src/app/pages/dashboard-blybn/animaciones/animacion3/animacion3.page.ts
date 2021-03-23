import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion3',
  templateUrl: './animacion3.page.html',
  styleUrls: ['./animacion3.page.scss'],
})
export class Animacion3Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-p3');
    }, 3000);
   }
  ngOnInit() {
  }

}
