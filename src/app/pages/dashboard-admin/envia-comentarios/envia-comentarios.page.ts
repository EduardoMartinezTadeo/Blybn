import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envia-comentarios',
  templateUrl: './envia-comentarios.page.html',
  styleUrls: ['./envia-comentarios.page.scss'],
})
export class EnviaComentariosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  salir(){
    this.router.navigateByUrl('/dashboard/menutabs/inicio-menu2');
  }

}
