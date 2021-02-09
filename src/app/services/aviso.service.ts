import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() =>{
      this.checkToken();
    });
   }

   aviso(){
     return this.storage.set(TOKEN_KEY, 'Aviso aceptado').then(res => {
      this.authenticationState.next(true);
     });
   }

   isAuthenticated() {
     return this.authenticationState.value;
   }

   checkToken(){
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res){
        this.authenticationState.next(true);
      }      
     });
   }
}

