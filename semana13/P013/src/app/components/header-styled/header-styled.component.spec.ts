import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyledComponent } from './header-styled.component';

describe('HeaderStyledComponent', () => {
  let component: HeaderStyledComponent;
  let fixture: ComponentFixture<HeaderStyledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderStyledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderStyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
