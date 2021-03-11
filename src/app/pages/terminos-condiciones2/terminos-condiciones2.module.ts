import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosCondiciones2PageRoutingModule } from './terminos-condiciones2-routing.module';

import { TerminosCondiciones2Page } from './terminos-condiciones2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosCondiciones2PageRoutingModule
  ],
  declarations: [TerminosCondiciones2Page]
})
export class TerminosCondiciones2PageModule {}
