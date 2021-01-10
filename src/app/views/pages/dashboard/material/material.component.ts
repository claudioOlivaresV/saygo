import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SolicitudMaterialesComponent } from '../solicitud-materiales/solicitud-materiales.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  solicitudMaterial() {
    const client = {
      isEdit: false,
      data: null,
    }
    const modalRef = this.modalService.open(SolicitudMaterialesComponent, {size: 'lg', scrollable: true,  backdrop: 'static',
    keyboard: false});
    modalRef.componentInstance.client = client;
    modalRef.result.then((result) => {
      if (result) {
        // this.tryAgain();
      }
    });

  }

}
