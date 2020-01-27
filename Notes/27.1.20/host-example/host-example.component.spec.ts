import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostExampleComponent } from './host-example.component';

describe('HostExampleComponent', () => {
  let component: HostExampleComponent;
  let fixture: ComponentFixture<HostExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
