import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion8',
  templateUrl: './animacion8.page.html',
  styleUrls: ['./animacion8.page.scss'],
})
export class Animacion8Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-p8');
    }, 3000);
   }

  ngOnInit() {
  }

}
