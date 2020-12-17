import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nueva-obra',
  templateUrl: './nueva-obra.component.html',
  styleUrls: ['./nueva-obra.component.scss']
})
export class NuevaObraComponent implements OnInit {
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
      nombre: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      fechaFin: new FormControl('', Validators.required),
      jefeObra: new FormControl('', Validators.required),
      supervisor: new FormControl('', Validators.required),
    })
  }
  save(values) {

    console.log(values);
    
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
