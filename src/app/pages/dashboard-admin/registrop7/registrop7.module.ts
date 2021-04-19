import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop7PageRoutingModule } from './registrop7-routing.module';

import { Registrop7Page } from './registrop7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop7PageRoutingModule
  ],
  declarations: [Registrop7Page]
})
export class Registrop7PageModule {}
