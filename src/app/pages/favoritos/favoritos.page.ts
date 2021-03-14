import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  contentLoaded = false;
  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    setTimeout(() => {
      this.contentLoaded = true;        
    }, 5000);    
  }



  @Input() titulo: string = '';


}
