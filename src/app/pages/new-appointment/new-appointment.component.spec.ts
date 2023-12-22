import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppointmentComponent } from './new-appointment.component';

describe('NewAppointmentComponent', () => {
  let component: NewAppointmentComponent;
  let fixture: ComponentFixture<NewAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAppointmentComponent]
    });
    fixture = TestBed.createComponent(NewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
