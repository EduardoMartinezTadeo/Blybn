import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP6PageRoutingModule } from './leer-p6-routing.module';

import { LeerP6Page } from './leer-p6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP6PageRoutingModule
  ],
  declarations: [LeerP6Page]
})
export class LeerP6PageModule {}
