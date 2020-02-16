import { Component, OnInit, Input } from "@angular/core";
import { BookingItem } from "src/app/models/BookingItem";
import { Appointment } from "src/app/models/Appointment";
import { AppointmentsService } from "src/app/services/appointments.service";
import { Schedule } from "src/app/models/Schedule";

@Component({
  selector: "app-booking-item",
  templateUrl: "./booking-item.component.html",
  styleUrls: ["./booking-item.component.css"]
})
export class BookingItemComponent implements OnInit {
  @Input() item: BookingItem;
  @Input() advisorId: string;
  date: Date;
  schedules: Schedule[];
  appointments: Appointment[];
  isPast: boolean = false;
  hasAppointments: boolean = false;
  today: Date = new Date();
  time1: string;
  time2: string;
  constructor(private aps: AppointmentsService) {}

  ngOnInit() {
    this.date = this.item.day;
    this.today.setHours(0);
    this.today.setMinutes(0);
    this.today.setSeconds(0);
    if (this.item.day < this.today) this.isPast = true;
    this.schedules = this.item.schedules;
    this.appointments = this.item.appointments;
    if (
      typeof this.appointments !== "undefined" &&
      this.appointments.length > 0
    )
      this.hasAppointments = true;
  }
  setAppointment() {
    var start = this.setDate(this.item.day, this.time1);
    var end = this.setDate(this.item.day, this.time2);
    this.aps.setAppointment(this.advisorId, start, end);
  }
  setDate(date: Date, time: string): Date {
    date.setHours(+time.split(":")[0], +time.split(":")[1], 0);
    return date;
  }
}
