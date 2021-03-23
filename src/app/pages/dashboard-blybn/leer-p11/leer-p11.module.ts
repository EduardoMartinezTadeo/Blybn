import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP11PageRoutingModule } from './leer-p11-routing.module';

import { LeerP11Page } from './leer-p11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP11PageRoutingModule
  ],
  declarations: [LeerP11Page]
})
export class LeerP11PageModule {}
