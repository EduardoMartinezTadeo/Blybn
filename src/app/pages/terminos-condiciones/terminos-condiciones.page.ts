import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.page.html',
  styleUrls: ['./terminos-condiciones.page.scss'],
})
export class TerminosCondicionesPage implements OnInit {

  showToolbar = false;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }

  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 225;
    }
  }
}
