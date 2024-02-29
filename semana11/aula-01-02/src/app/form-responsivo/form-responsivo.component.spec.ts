import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResponsivoComponent } from './form-responsivo.component';

describe('FormResponsivoComponent', () => {
  let component: FormResponsivoComponent;
  let fixture: ComponentFixture<FormResponsivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormResponsivoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormResponsivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
