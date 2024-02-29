import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTesteComponent } from './formulario-teste.component';

describe('FormularioTesteComponent', () => {
  let component: FormularioTesteComponent;
  let fixture: ComponentFixture<FormularioTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioTesteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
