import { Component, OnInit, Input } from "@angular/core";
import { AppointmentsService } from "src/app/services/appointments.service";
import { ActivatedRoute } from "@angular/router";
import { Schedule } from "src/app/models/Schedule";
import { Appointment } from "src/app/models/Appointment";
import { BookingItem } from "src/app/models/BookingItem";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})
export class BookingComponent implements OnInit {
  advisorId: string;
  advisorSchedule: Schedule[] = [];
  advisorAppointments: Appointment[] = [];
  bookingItems: BookingItem[] = [];
  weekNumber: number = 0;
  constructor(
    private route: ActivatedRoute,
    private aps: AppointmentsService
  ) {}

  ngOnInit() {
    this.advisorId = this.route.snapshot.paramMap.get("advId");
    this.aps.getAdvisorSchedule(this.advisorId).subscribe(res => {
      if (res["status"] == 200) this.advisorSchedule = res["data"]["periods"];
      this.aps.getAdvisorAppointmentsById(this.advisorId).subscribe(res => {
        if (res["status"] == 200) this.advisorAppointments = res["data"];
        var today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);

        this.set(today);
        console.log(today);
        console.log(this.advisorSchedule);
        console.log(this.advisorAppointments);
      });
    });
  }

  nextWeek() {
    this.weekNumber += 1;
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today = new Date(
      today.getTime() + this.weekNumber * 7 * 24 * 60 * 60 * 1000
    );
    this.bookingItems = [];
    this.set(today);
  }
  prevWeek() {
    this.weekNumber -= 1;
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today = new Date(
      today.getTime() + this.weekNumber * 7 * 24 * 60 * 60 * 1000
    );
    this.bookingItems = [];
    this.set(today);
  }

  sameDay(d1: Date, d2: Date): boolean {
    var date1 = new Date(d1);
    var date2 = new Date(d2);
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  set(tod: Date): void {
    var today = new Date(tod);
    for (var i = 0; i < 7; i++) {
      var bookingItemSchedule: Schedule[] = [];
      var bookingitemAppointments: Appointment[] = [];
      if (this.advisorSchedule.length > 0)
        this.advisorSchedule.forEach(schd => {
          if (schd.day_of_week == today.getDay()) {
            bookingItemSchedule.push(schd);
          }
        });
      if (this.advisorAppointments.length > 0)
        this.advisorAppointments.forEach(appt => {
          if (!appt.Cancelled && this.sameDay(appt.start_datetime, today)) {
            bookingitemAppointments.push(appt);
          }
        });
      if (
        typeof bookingItemSchedule !== "undefined" &&
        bookingItemSchedule.length > 0
      ) {
        var BI = new BookingItem(
          today,
          bookingItemSchedule,
          bookingitemAppointments
        );
        this.bookingItems.push(BI);
      }
      today = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000);
    }
  }
}
