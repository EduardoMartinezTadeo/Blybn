import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion9',
  templateUrl: './animacion9.page.html',
  styleUrls: ['./animacion9.page.scss'],
})
export class Animacion9Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-p9');
    }, 3000);
   }

  ngOnInit() {
  }

}
