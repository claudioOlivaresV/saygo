import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudMaterialesComponent } from './solicitud-materiales.component';

describe('SolicitudMaterialesComponent', () => {
  let component: SolicitudMaterialesComponent;
  let fixture: ComponentFixture<SolicitudMaterialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudMaterialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudMaterialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
