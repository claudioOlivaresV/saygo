import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbDropdownModule, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";

// Ng2-charts
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DetalleObraComponent } from './detalle-obra/detalle-obra.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { PartidasComponent } from './partidas/partidas.component';
import { MaterialComponent } from './material/material.component';
import { FacturaComponent } from './factura/factura.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { NuevaObraComponent } from './nueva-obra/nueva-obra.component';
import {MatDatepickerModule} from '@angular/material/datepicker';



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
  declarations: [DashboardComponent, DetalleObraComponent, PresupuestoComponent, PartidasComponent, MaterialComponent, FacturaComponent, NuevaObraComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeahterIconModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    ChartsModule,
    NgbModule,
    MatExpansionModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule

  ]
})
export class DashboardModule { }
