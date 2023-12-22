import { Component , OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{


  appointmentList: any[] = [];
  constructor(private master: MasterService){

  }

  ngOnInit(): void {
    this.getTodaysAppointments();
  }

  getTodaysAppointments() {
    this.master.getAllTodaysAppointment().subscribe((res:any) => {
      this.appointmentList =  res.data;
    },
    error=> {
      alert('API error Occoured')
    })
  }

  getAllAppointments() {
    this.master.getAllAppointment().subscribe((res:any) => {
      this.appointmentList =  res.data;
    },
    error=> {
      alert('API error Occoured')
    })
  }

  markDone(appointmentId:number) {

    this.master.markAppointmentDone(appointmentId).subscribe((res:any) => {
      this.getTodaysAppointments();
    },
    error=> {
      alert('API error Occoured')
    })
  }

}
