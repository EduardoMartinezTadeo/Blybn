import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envia-comentarios2',
  templateUrl: './envia-comentarios2.page.html',
  styleUrls: ['./envia-comentarios2.page.scss'],
})
export class EnviaComentarios2Page implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
  }

}
