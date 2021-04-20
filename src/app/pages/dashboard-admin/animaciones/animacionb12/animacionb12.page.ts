import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animacionb12',
  templateUrl: './animacionb12.page.html',
  styleUrls: ['./animacionb12.page.scss'],
})
export class Animacionb12Page implements OnInit {

  constructor(private router:Router) { 
    setTimeout(()=>{
      this.router.navigateByUrl('/registro-final');
    }, 3000);
  }

  ngOnInit() {
  }

}
