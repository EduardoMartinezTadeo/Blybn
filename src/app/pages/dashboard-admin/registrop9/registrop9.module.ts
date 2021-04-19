import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop9PageRoutingModule } from './registrop9-routing.module';

import { Registrop9Page } from './registrop9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop9PageRoutingModule
  ],
  declarations: [Registrop9Page]
})
export class Registrop9PageModule {}
