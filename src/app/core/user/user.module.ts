import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { NbTabsetModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbTabsetModule,
    SharedModule,
    HomeModule
  ]
})
export class UserModule { }
