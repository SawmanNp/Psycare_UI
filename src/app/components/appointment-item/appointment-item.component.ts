import { Component, OnInit, Input } from "@angular/core";
import { Appointment } from "src/app/models/Appointment";
import { AppointmentsService } from "../../services/appointments.service";

@Component({
  selector: "app-appointment-item",
  templateUrl: "./appointment-item.component.html",
  styleUrls: ["./appointment-item.component.css"]
})
export class AppointmentItemComponent implements OnInit {
  @Input() viewer: string;
  @Input() appointment: Appointment;
  userViewer: boolean = false;
  isPast: boolean = false;
  isCanceled: boolean = false;
  constructor(private aps: AppointmentsService) {}

  ngOnInit() {
    var today = new Date();
    if (this.appointment.end_datetime <= today) this.isPast = true;
    if (this.viewer == "user") this.userViewer = true;
    this.isCanceled = this.appointment.Cancelled;
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
}
