import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioMenu2PageRoutingModule } from './inicio-menu2-routing.module';

import { InicioMenu2Page } from './inicio-menu2.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioMenu2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [InicioMenu2Page]
})
export class InicioMenu2PageModule {}
