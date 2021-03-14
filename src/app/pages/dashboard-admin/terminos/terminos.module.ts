import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosPageRoutingModule } from './terminos-routing.module';

import { TerminosPage } from './terminos.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TerminosPage]
})
export class TerminosPageModule {}
