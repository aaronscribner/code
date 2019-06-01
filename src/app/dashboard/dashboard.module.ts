import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuModule } from 'primeng/menu';
import { ChartModule, CheckboxModule, DropdownModule, InputTextModule, PanelModule, TabViewModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MenuModule,
    CheckboxModule,
    InputTextModule,
    PanelModule,
    DropdownModule,
    TableModule,
    FullCalendarModule,
    ChartModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
