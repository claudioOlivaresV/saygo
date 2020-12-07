import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions } from 'chart.js';
import { Label, Color, SingleDataSet } from 'ng2-charts';
import { PresupuestoService } from 'src/app/services/presupuesto/presupuesto.service';


@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent implements OnInit {
  panelOpenState = false;
  public isCollapsed = false;
  public groupedBarChartOptions: ChartOptions = {
    responsive: true,
  };
  public groupedBarChartLabels: Label[] = ['Terminacicones', 'Trazado y limpieza', 'Instalación de faenas', 'Obra gruesa', 'Proyecto electronico', 'Proyecto sanitario', 'Adicionales y otros'];
  public groupedBarChartType: ChartType = 'bar';
  public groupedBarChartData: ChartDataSets[] = [
    {
      label: 'Suma presupuesto',
      backgroundColor: '#727cf5',
      data: [53.0, 35.8, 1030.9, 729.8, 104.4, 85.9, 809.9]
    },
    {
      label: 'Suma costo UF',
      backgroundColor: '#fbbc06',
      data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 140.0]
    },
    {
      label: 'Suma de diferencia',
      backgroundColor: '#b1cfec',
      data: [53.0, 35.8, 1030.9, 729.8, 104.4, 85.9, 699.9]
    }
  ];
  items: any;

  status = {
    data: null,
    loading: null,
    error: null
  }

  constructor(private servicios: PresupuestoService) { }

  ngOnInit(): void {
    this.getData();
  }

   getData() {
     this.status.loading = true;
     setTimeout(() => {
       this.servicios.getData().toPromise().then((rsp: any) => {
         this.items = rsp;
         console.log(this.items);
         this.status.loading = false;
       }, err => {
        this.status.loading = false;
         console.log(err);
       });
     }, 3000);
  }


}
