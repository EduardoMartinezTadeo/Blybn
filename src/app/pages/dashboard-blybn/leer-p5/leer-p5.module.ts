import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeerP5PageRoutingModule } from './leer-p5-routing.module';

import { LeerP5Page } from './leer-p5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeerP5PageRoutingModule
  ],
  declarations: [LeerP5Page]
})
export class LeerP5PageModule {}
