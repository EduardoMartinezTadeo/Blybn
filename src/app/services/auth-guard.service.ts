import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AvisoService } from './aviso.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private avisoService: AvisoService) { }

  canActivate():boolean {
    return this.avisoService.isAuthenticated();
  }
}

