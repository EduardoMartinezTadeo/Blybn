import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb07',
  templateUrl: './animacionb07.page.html',
  styleUrls: ['./animacionb07.page.scss'],
})
export class Animacionb07Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop7');
    }, 1800);
   }

  ngOnInit() {
  }

}
