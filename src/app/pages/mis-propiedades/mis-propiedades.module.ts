import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPropiedadesPageRoutingModule } from './mis-propiedades-routing.module';

import { MisPropiedadesPage } from './mis-propiedades.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPropiedadesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisPropiedadesPage]
})
export class MisPropiedadesPageModule {}
