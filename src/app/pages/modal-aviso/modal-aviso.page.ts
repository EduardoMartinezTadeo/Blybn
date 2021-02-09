import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-aviso',
  templateUrl: './modal-aviso.page.html',
  styleUrls: ['./modal-aviso.page.scss'],
})
export class ModalAvisoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cerrar(){
    this.router.navigate(['/aviso']);
  }


}
