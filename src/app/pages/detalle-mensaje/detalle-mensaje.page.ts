import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-mensaje',
  templateUrl: './detalle-mensaje.page.html',
  styleUrls: ['./detalle-mensaje.page.scss'],
})
export class DetalleMensajePage implements OnInit {

  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  salir() {
    this.modalCtrl.dismiss();
  }

  messages = [
    {
      user: 'simmon',
      createdAt: 1554090856000,
      msg: 'Buen dia, aun esta disponible?'
    },
    {
      user: 'max',
      createdAt: 1554090956000,
      msg: 'La casa esta disponible aun'
    },
    {
      user: 'simmon',
      createdAt:  1554091056000,
      msg: 'Deseo una cita para la casa'
    },
    {
      user: 'max',
      createdAt: 1554099156000,
      msg: 'Se agendara la previa cita'
    },
  ];


  currentUser = 'simmon';
  newMsg = '';

  sendMessage() {
      this.messages.push({
        user: 'simmon',
        createdAt: new Date().getTime(),
        msg: this.newMsg
      });

      this.newMsg = '';
  }
}
