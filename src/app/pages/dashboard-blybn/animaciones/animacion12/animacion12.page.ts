import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacion12',
  templateUrl: './animacion12.page.html',
  styleUrls: ['./animacion12.page.scss'],
})
export class Animacion12Page implements OnInit {

  constructor(private router:Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-f');
    }, 3000);
  }

  ngOnInit() {
  }

}
