import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoAventuraPageRoutingModule } from './tipo-aventura-routing.module';

import { TipoAventuraPage } from './tipo-aventura.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TipoAventuraPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TipoAventuraPage]
})
export class TipoAventuraPageModule {}
