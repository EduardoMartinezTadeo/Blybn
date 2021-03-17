import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { NavController, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

export enum ConnectionStatus {
  Online,
  Offline
}
@Component({
  selector: 'app-offline',
  templateUrl: './offline.page.html',
  styleUrls: ['./offline.page.scss'],
})
export class OfflinePage implements OnInit {
  private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);
  constructor(
    private router: Router,
    public network: Network,
    private navCtrl: NavController,
    private toastController: ToastController
  ) { 
    this.initializeNetworkEvents(); 
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.initializeNetworkEvents();
    let status =  this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
    this.status.next(status);
  }

  public initializeNetworkEvents() {
 
    this.network.onDisconnect().subscribe(() => {
      if (this.status.getValue() === ConnectionStatus.Online) {
        this.navCtrl.navigateRoot('/offline');
        this.updateNetworkStatus(ConnectionStatus.Offline);
      }
    });
 
    this.network.onConnect().subscribe(() => {
      if (this.status.getValue() === ConnectionStatus.Offline) {
        this.navCtrl.navigateRoot('/splash');
        this.updateNetworkStatus(ConnectionStatus.Online);
      }
    });
  }
 
  private async updateNetworkStatus(status: ConnectionStatus) {
    this.status.next(status);
 
    let connection = status == ConnectionStatus.Offline ? 'desconectado' : 'en línea';
    let toast = this.toastController.create({
      message: `Ahora estas ${connection}`,
      duration: 3000,
      position: 'bottom'
    });
    toast.then(
      toast => toast.present());
  }
 
  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.status.asObservable();
  }
 
  public getCurrentNetworkStatus(): ConnectionStatus {
    return this.status.getValue();
  }
}
