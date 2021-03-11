import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Modal9PageRoutingModule } from './modal9-routing.module';

import { Modal9Page } from './modal9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Modal9PageRoutingModule
  ],
  declarations: [Modal9Page]
})
export class Modal9PageModule {}
