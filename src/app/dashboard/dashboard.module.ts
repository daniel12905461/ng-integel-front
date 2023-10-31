import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '../core/layout/layout.module';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { CreateUsuariosComponent } from './list-usuarios/create-usuarios/create-usuarios.component';


@NgModule({
  declarations: [
    ListUsuariosComponent,
    CreateUsuariosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule
  ]
})
export class DashboardModule { }
