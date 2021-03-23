import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion11',
  templateUrl: './animacion11.page.html',
  styleUrls: ['./animacion11.page.scss'],
})
export class Animacion11Page implements OnInit {

  constructor(private router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-p11');
    }, 3000);
   }

  ngOnInit() {
  }

}
