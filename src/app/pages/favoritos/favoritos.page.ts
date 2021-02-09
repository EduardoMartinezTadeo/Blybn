import { Component, OnInit, Input } from '@angular/core';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showToolbar = false;

  @Input() titulo: string = '';
  onScroll($event: CustomEvent<ScrollDetail>) {
    if ($event && $event.detail && $event.detail.scrollTop) {
      const scrollTop = $event.detail.scrollTop;
      this.showToolbar = scrollTop >= 225;
    }
  }  

}
