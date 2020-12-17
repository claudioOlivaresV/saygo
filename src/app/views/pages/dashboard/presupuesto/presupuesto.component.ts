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
  public groupedBarChartLabels: Label[] = []
  public groupedBarChartType: ChartType = 'bar';
  public groupedBarChartData: ChartDataSets[] = [
    {
      label: 'Suma presupuesto',
      backgroundColor: '#727cf5',
      data: []
    },
    {
      label: 'Suma costo UF',
      backgroundColor: '#fbbc06',
      data: []
    },
    {
      label: 'Suma de diferencia',
      backgroundColor: '#b1cfec',
      data: []
    }
  ];
  items: any;
  presupuesto: any;

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
     this.status.error = false;
     setTimeout(() => {
       this.servicios.getData().toPromise().then((rsp: any) => {
         this.items = rsp.items;
         const dataPresupuesto = rsp.items.map((data) => {
          const numeros = data.presu;
          return numeros;
         });
         this.groupedBarChartData[0].data = dataPresupuesto;

         const dataCostoUF  = rsp.items.map((data) => {
          const numeros = data.costoUF;
          return numeros;
         });
         this.groupedBarChartData[1].data = dataCostoUF;

         const dataDiferencia = rsp.items.map((data) => {
          const numeros = data.diferencia;
          return numeros;
         });
         this.groupedBarChartData[2].data = dataDiferencia;

         const dataLabels  = rsp.items.map((data) => {
          const labels = data.nombre;
          return labels;
         });
         this.groupedBarChartLabels = dataLabels;
         this.presupuesto = rsp;
         console.log(this.items);
         this.status.loading = false;
       }, err => {
        this.status.loading = false;
        this.status.error = true;
         console.log(err);
       });
     }, 3000);
  }
  tryAgain() {
    this.status.data = false;
    this.status.loading = false;
    this.status.error = false;
    this.getData();
  }


}
