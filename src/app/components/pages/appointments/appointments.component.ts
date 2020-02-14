import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Route } from "@angular/router";
import { Appointment } from "src/app/models/Appointment";
import { AppointmentsService } from "../../../services/appointments.service";

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.css"]
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[];
  pagetype: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aps: AppointmentsService
  ) {}

  ngOnInit() {
    this.pagetype = this.route.snapshot.paramMap.get("page");
    // if (this.pagetype == "user")
    //   this.aps.getUserAppointments().subscribe(res => {
    //     this.appointments = res;
    //   });
    // else if (this.pagetype == "advisor")
    //   this.aps.getAdvisorAppointments().subscribe(res => {
    //     this.appointments = res;
    //   });
    // else this.router.navigateByUrl("/panel");
    this.appointments = [
      {
        ID: 1,
        UserID: 1,
        advisor_id: 2,
        start_datetime: new Date("2020-02-14T22:19:53.148+03:30"),
        end_datetime: new Date("2020-02-14T22:49:53.148+03:30"),
        Cancelled: false
      },
      {
        ID: 2,
        UserID: 1,
        advisor_id: 2,
        start_datetime: new Date("2020-02-16T22:19:53.148+03:30"),
        end_datetime: new Date("2020-02-16T22:49:53.148+03:30"),
        Cancelled: false
      }
    ];
  }
}
