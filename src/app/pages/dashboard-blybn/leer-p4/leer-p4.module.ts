import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP4PageRoutingModule } from './leer-p4-routing.module';

import { LeerP4Page } from './leer-p4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP4PageRoutingModule
  ],
  declarations: [LeerP4Page]
})
export class LeerP4PageModule {}
