import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion6',
  templateUrl: './animacion6.page.html',
  styleUrls: ['./animacion6.page.scss'],
})
export class Animacion6Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-p6');
    }, 3000);
   }

  ngOnInit() {
  }

}
