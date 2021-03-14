import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioMenuPageRoutingModule } from './inicio-menu-routing.module';

import { InicioMenuPage } from './inicio-menu.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioMenuPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InicioMenuPage]
})
export class InicioMenuPageModule {}
