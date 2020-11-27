import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbDropdownModule, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";

// Ng2-charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DetalleObraComponent } from './detalle-obra/detalle-obra.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'detalle',
    component: DetalleObraComponent
  }
]

@NgModule({
  declarations: [DashboardComponent, DetalleObraComponent, PresupuestoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeahterIconModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    ChartsModule,
    NgbModule
  ]
})
export class DashboardModule { }