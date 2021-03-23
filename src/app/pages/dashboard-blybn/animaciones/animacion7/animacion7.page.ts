import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion7',
  templateUrl: './animacion7.page.html',
  styleUrls: ['./animacion7.page.scss'],
})
export class Animacion7Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-p7');
    }, 3000);
   }

  ngOnInit() {
  }

}
