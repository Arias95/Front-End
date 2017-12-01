import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniBoxComponent } from './uni-box.component';

describe('UniBoxComponent', () => {
  let component: UniBoxComponent;
  let fixture: ComponentFixture<UniBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
