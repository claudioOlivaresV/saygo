import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-nueva-obra',
  templateUrl: './nueva-obra.component.html',
  styleUrls: ['./nueva-obra.component.scss']
})
export class NuevaObraComponent implements OnInit {
  form: FormGroup;
  formItem: FormGroup;

  status = {
    data: null,
    loading: null,
    error: null
  }
  items:any = [];
  readonly DELIMITER = '-';


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      codigo: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      fechaFin: new FormControl(''),
      jefeObra: new FormControl('', Validators.required),
      supervisor: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required)
    })
    this.formItem = new FormGroup({
      nombre: new FormControl('', Validators.required),
      codigo: new FormControl('', Validators.required)
    })
  }
  save(values) {

    console.log(values);
    this.status.loading = true;
    setTimeout(() => {
      this.status.loading = false;
      this.activeModal.close(true);
      Swal.fire(
        { toast: true, position: 'top-end', showConfirmButton: true, timer: 10000, title: 'Obra agregada correctamente', icon: 'success'}
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
  agregarItem(value){
    console.log(value);
    
    this.items.push(value);
    this.formItem.reset();
  }
  eliminarItem(index) {
    this.items.splice(index, 1);
  }
}
