import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb02',
  templateUrl: './animacionb02.page.html',
  styleUrls: ['./animacionb02.page.scss'],
})
export class Animacionb02Page implements OnInit {

  constructor(public router: Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('/registrop2');
    }, 3000);
   }

  ngOnInit() {
  }

}
