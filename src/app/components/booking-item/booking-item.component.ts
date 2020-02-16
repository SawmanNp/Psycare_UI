import { Component, OnInit, Input } from "@angular/core";
import { BookingItem } from "src/app/models/BookingItem";
import { Appointment } from "src/app/models/Appointment";
import { AppointmentsService } from "src/app/services/appointments.service";

@Component({
  selector: "app-booking-item",
  templateUrl: "./booking-item.component.html",
  styleUrls: ["./booking-item.component.css"]
})
export class BookingItemComponent implements OnInit {
  @Input() item: BookingItem;
  @Input() advisorId: string;
  isPast: boolean = false;
  time1: string;
  time2: string;
  constructor(private aps: AppointmentsService) {}

  ngOnInit() {
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    if (this.item.day < today) this.isPast = true;
  }
  setAppointment() {
    var today = new Date();
    var start = this.setDate(today, this.time1);
    var end = this.setDate(today, this.time2);
    this.aps.setAppointment(this.advisorId, start, end);
  }
  setDate(date: Date, time: string): Date {
    date.setHours(+time.split(":")[0], +time.split(":")[1], 0);
    return date;
  }
}
