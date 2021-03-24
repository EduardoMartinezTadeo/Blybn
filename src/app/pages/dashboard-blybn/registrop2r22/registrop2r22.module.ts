import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registrop2r22PageRoutingModule } from './registrop2r22-routing.module';

import { Registrop2r22Page } from './registrop2r22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registrop2r22PageRoutingModule
  ],
  declarations: [Registrop2r22Page]
})
export class Registrop2r22PageModule {}
