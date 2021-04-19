import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop5PageRoutingModule } from './registrop5-routing.module';

import { Registrop5Page } from './registrop5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop5PageRoutingModule
  ],
  declarations: [Registrop5Page]
})
export class Registrop5PageModule {}
