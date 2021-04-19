import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop2PageRoutingModule } from './registrop2-routing.module';

import { Registrop2Page } from './registrop2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop2PageRoutingModule
  ],
  declarations: [Registrop2Page]
})
export class Registrop2PageModule {}
