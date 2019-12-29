import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperyBComponent } from './propery-b.component';

describe('ProperyBComponent', () => {
  let component: ProperyBComponent;
  let fixture: ComponentFixture<ProperyBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProperyBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperyBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
