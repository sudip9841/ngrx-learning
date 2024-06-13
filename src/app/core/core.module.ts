import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NbCardModule, NbTableModule, NbTabsetModule } from '@nebular/theme';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NbTableModule,
    NbCardModule,
    NbTabsetModule,
    SharedModule
  ]
})
export class CoreModule { }
