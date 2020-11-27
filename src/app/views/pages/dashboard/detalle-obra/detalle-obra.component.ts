import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalle-obra',
  templateUrl: './detalle-obra.component.html',
  styleUrls: ['./detalle-obra.component.scss']
})
export class DetalleObraComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
