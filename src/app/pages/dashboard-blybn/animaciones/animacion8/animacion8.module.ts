import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Animacion8PageRoutingModule } from './animacion8-routing.module';

import { Animacion8Page } from './animacion8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Animacion8PageRoutingModule
  ],
  declarations: [Animacion8Page]
})
export class Animacion8PageModule {}
