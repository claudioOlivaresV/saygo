import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-materiales',
  templateUrl: './solicitud-materiales.component.html',
  styleUrls: ['./solicitud-materiales.component.scss']
})
export class SolicitudMaterialesComponent implements OnInit {

  form: FormGroup;

  status = {
    data: null,
    loading: null,
    error: null
  }
  readonly DELIMITER = '-';


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      material: new FormControl('', Validators.required),
      cantidad: new FormControl('', Validators.required),
      fechaEntrega: new FormControl('', Validators.required),
      responsable: new FormControl('', Validators.required),
    })
  }
  save(values) {

    console.log(values);
    this.status.loading = true;
    setTimeout(() => {
      this.status.loading = false;
      this.activeModal.close(true);
      Swal.fire(
        { toast: true, position: 'top-end', showConfirmButton: true, timer: 10000, title: 'Material solicitado agregada correctamente', icon: 'success'}
      );
    }, 3000);
    
  }
  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }
  closeModal() {
    this.activeModal.close();
  }

}
