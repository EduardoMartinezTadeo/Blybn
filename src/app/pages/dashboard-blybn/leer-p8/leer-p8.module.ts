import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP8PageRoutingModule } from './leer-p8-routing.module';

import { LeerP8Page } from './leer-p8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP8PageRoutingModule
  ],
  declarations: [LeerP8Page]
})
export class LeerP8PageModule {}
