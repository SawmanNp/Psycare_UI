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
    // this.aps.getAdvisorSchedule(this.advisorId).subscribe(res => {
    //   if (res["status"] == 200) this.advisorSchedule = res("data");
    // });
    // this.aps.getAdvisorAppointmentsById(this.advisorId).subscribe(res => {
    //   if (res["status"] == 200) this.advisorAppointments = res("data");
    // });
    this.advisorSchedule = [
      {
        day_of_week: 4,
        start_time: new Date("2020-02-14T12:04:47+03:30"),
        end_time: new Date("2020-02-14T12:34:47+03:30")
      },
      {
        day_of_week: 0,
        start_time: new Date("2020-02-14T12:04:47+03:30"),
        end_time: new Date("2020-02-14T12:34:47+03:30")
      },
      {
        day_of_week: 3,
        start_time: new Date("2020-02-14T12:04:47+03:30"),
        end_time: new Date("2020-02-14T12:34:47+03:30")
      },
      {
        day_of_week: 2,
        start_time: new Date("2020-02-17T12:04:47+03:30"),
        end_time: new Date("2020-02-17T16:34:47+03:30")
      },
      {
        day_of_week: 6,
        start_time: new Date("2020-02-14T12:04:47+03:30"),
        end_time: new Date("2020-02-14T12:34:47+03:30")
      }
    ];
    this.advisorAppointments = [
      {
        ID: 1,
        UserID: 1,
        advisor_id: 2,
        start_datetime: new Date("2020-02-18T13:19:53.148+03:30"),
        end_datetime: new Date("2020-02-18T14:49:53.148+03:30"),
        Cancelled: false
      },
      {
        ID: 2,
        UserID: 1,
        advisor_id: 2,
        start_datetime: new Date("2020-02-16T22:19:53.148+03:30"),
        end_datetime: new Date("2020-02-16T22:49:53.148+03:30"),
        Cancelled: false
      },
      {
        ID: 2,
        UserID: 1,
        advisor_id: 2,
        start_datetime: new Date("2020-02-18T22:19:53.148+03:30"),
        end_datetime: new Date("2020-02-18T22:49:53.148+03:30"),
        Cancelled: false
      }
    ];
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);

    this.set(today);
    console.log(today);
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
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  set(today: Date): void {
    for (var i = 0; i < 7; i++) {
      var bookingItemSchedule: Schedule[] = [];
      var bookingitemAppointments: Appointment[] = [];
      this.advisorSchedule.forEach(schd => {
        if (schd.day_of_week == today.getDay()) {
          bookingItemSchedule.push(schd);
        }
      });
      this.advisorAppointments.forEach(appt => {
        if (this.sameDay(appt.start_datetime, today)) {
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
