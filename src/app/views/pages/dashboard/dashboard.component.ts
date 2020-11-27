import { Component, OnInit } from '@angular/core';

import { ApexAxisChartSeries, ApexNonAxisChartSeries, ApexGrid, ApexChart, ApexXAxis, ApexYAxis, ApexMarkers, ApexStroke, ApexLegend, ApexResponsive, ApexTooltip, ApexFill, ApexDataLabels, ApexPlotOptions, ApexTitleSubtitle } from 'ng-apexcharts';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

// Ng2-charts
import { ChartOptions, ChartType, ChartDataSets, RadialChartOptions } from 'chart.js';
import { Label, Color, SingleDataSet } from 'ng2-charts';

// Progressbar.js
import ProgressBar from 'progressbar.js';

export type apexChartOptions = {
  series: ApexAxisChartSeries;
  nonAxisSeries: ApexNonAxisChartSeries;
  colors: string[];
  grid: ApexGrid;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  markers: ApexMarkers,
  stroke: ApexStroke,
  legend: ApexLegend,
  responsive: ApexResponsive[],
  tooltip: ApexTooltip,
  fill: ApexFill
  dataLabels: ApexDataLabels,
  plotOptions: ApexPlotOptions,
  labels: string[],
  title: ApexTitleSubtitle
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  preserveWhitespaces: true
})

export class DashboardComponent implements OnInit {
  data = [
    {
      id: 1,
      nombre: 'Obra 1',
      presupuesto : '4.000.000',
      ingresos : '1.000.000',
      gastos: '300.000',
    },
    {
      id: 2,
      nombre: 'Obra 2',
      presupuesto : '3.000.000',
      ingresos : '500.000',
      gastos: '100.000',
    },
    {
      id: 3,
      nombre: 'Obra 3',
      presupuesto : '51.000.000',
      ingresos : '10.000.000',
      gastos: '3.000.000',
    },
    {
      id: 4,
      nombre: 'Obra 4',
      presupuesto : '7.000.000',
      ingresos : '2.000.000',
      gastos: '100.000',
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }

}
