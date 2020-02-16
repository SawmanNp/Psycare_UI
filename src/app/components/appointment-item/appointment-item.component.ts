import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentsService } from '../../services/appointments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {
  @Input() viewer: string;
  @Input() appointment: Appointment;
  userViewer: boolean = false;
  isPast: boolean = false;
  isCanceled: boolean = false;

  day: string = '' ;

  constructor(private aps: AppointmentsService, private router: Router) {}

  ngOnInit() {
    var today = new Date();
    if (this.appointment.end_datetime <= today) this.isPast = true;
    if (this.viewer == 'user') this.userViewer = true;
    this.isCanceled = this.appointment.Cancelled;
    this.day = this.persianDay(this.appointment.start_datetime.getDay());
  }

  cancel(): void {
    //send the request
    // this.aps.cancel(this.appointment.ID)
    this.isCanceled = true;
  }
  rate(): void {
    //send the request
    // this.aps.rate(this.appointment.ID, leRate);
  }

  viewAdvisor() {
    this.router.navigateByUrl("advisor/view/" + this.appointment.advisor_id);
  }

  persianDay(num: number): string {
    let d = '';
    switch (num) {
      case 0:
        d = 'یکشنبه';
        break;
      case 1:
        d = 'دوشنبه';
        break;
      case 2:
        d = 'سه شنبه';
        break;
      case 3:
        d = 'چهارشنبه';
        break;
      case 4:
        d = 'پنج شنبه';
        break;
      case 5:
        d = 'جمعه';
        break;
      case 6:
        d = 'شنبه';
        break;
    }
    return d;
  }
}
