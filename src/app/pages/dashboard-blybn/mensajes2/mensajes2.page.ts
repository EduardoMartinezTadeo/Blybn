import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonList, ModalController } from '@ionic/angular';
import { DetalleMensajePage } from '../../detalle-mensaje/detalle-mensaje.page';

@Component({
  selector: 'app-mensajes2',
  templateUrl: './mensajes2.page.html',
  styleUrls: ['./mensajes2.page.scss'],
})
export class Mensajes2Page implements OnInit {

  @ViewChild(IonList) ionList: IonList;

  contentLoaded = false;
  constructor(
    private router:Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    setTimeout(() => {
      this.contentLoaded = true;
      this.mensaje;
    }, 6000);
  }


  mensaje = [
    {
      usr: 'Simmon',
      createdAt: 1554090856000,
      msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi soluta beatae consequuntur! Necessitatibus alias, blanditiis velit animi dignissimos repellat optio, id dicta, hic perferendis officia. A voluptatem maxime eaque fugit.'
    },
    {
      usr: 'Simmon',
      createdAt: 1554091156000,
      msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi soluta beatae consequuntur! Necessitatibus alias, blanditiis velit animi dignissimos repellat optio, id dicta, hic perferendis officia. A voluptatem maxime eaque fugit.'
    },
    {
      usr: 'Alex',
      createdAt: 1554090956000,
      msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi soluta beatae consequuntur! Necessitatibus alias, blanditiis velit animi dignissimos repellat optio, id dicta, hic perferendis officia. A voluptatem maxime eaque fugit.'
    },
    {
      usr: 'Alex',
      createdAt: 1554090856000,
      msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi soluta beatae consequuntur! Necessitatibus alias, blanditiis velit animi dignissimos repellat optio, id dicta, hic perferendis officia. A voluptatem maxime eaque fugit.'
    },
    {
      usr: 'Hugo',
      createdAt: 1554090856000,
      msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi soluta beatae consequuntur! Necessitatibus alias, blanditiis velit animi dignissimos repellat optio, id dicta, hic perferendis officia. A voluptatem maxime eaque fugit.'
    }
  ];

  delete() {
    console.log('chat eliminado');
    this.ionList.closeSlidingItems();
  }

  archived() {
    console.log('chat archivado');
    this.ionList.closeSlidingItems();
  }

  async mostrarModal() {
    const modal = await this.modalCtrl.create({
      component: DetalleMensajePage
    });
    return await modal.present();
  }

  salir(){
    this.router.navigateByUrl('/dashboard2/menutabs2/inicio-menu');
  }
}
