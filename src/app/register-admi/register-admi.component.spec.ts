import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAdmiComponent } from './register-admi.component';

describe('RegisterAdmiComponent', () => {
  let component: RegisterAdmiComponent;
  let fixture: ComponentFixture<RegisterAdmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAdmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
