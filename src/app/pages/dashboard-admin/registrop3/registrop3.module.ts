import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop3PageRoutingModule } from './registrop3-routing.module';

import { Registrop3Page } from './registrop3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop3PageRoutingModule
  ],
  declarations: [Registrop3Page]
})
export class Registrop3PageModule {}
