import { Component, OnInit } from '@angular/core';
import { AvisoService } from '../services/aviso.service';


@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.page.html',
  styleUrls: ['./aviso.page.scss'],
})
export class AvisoPage implements OnInit {

  constructor(
    private aviso:AvisoService) { 

    }

  ngOnInit() {
 
  }

  onlogin(){
    this.aviso.aviso();
  }
  

}
