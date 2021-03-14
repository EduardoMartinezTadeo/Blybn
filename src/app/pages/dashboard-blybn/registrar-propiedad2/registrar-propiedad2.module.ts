import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarPropiedad2PageRoutingModule } from './registrar-propiedad2-routing.module';

import { RegistrarPropiedad2Page } from './registrar-propiedad2.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarPropiedad2PageRoutingModule
   ],
  declarations: [RegistrarPropiedad2Page]
})
export class RegistrarPropiedad2PageModule {}
