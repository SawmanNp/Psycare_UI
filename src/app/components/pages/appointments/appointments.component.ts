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
  appointments: Appointment[] = [];
  pagetype: string = this.route.snapshot.paramMap.get("page");
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aps: AppointmentsService
  ) {
    route.params.subscribe(val => {
      this.pagetype = this.route.snapshot.paramMap.get("page");
      if (this.pagetype == "user")
        this.aps.getUserAppointments().subscribe(res => {
          if (res["status"] == 200) this.appointments = res["data"];
        });
      else if (this.pagetype == "advisor")
        this.aps.getAdvisorAppointments().subscribe(res => {
          if (res["status"] == 200) this.appointments = res["data"];
        });
      else this.router.navigateByUrl("/panel");
    });
  }

  ngOnInit() {}

  onCancel(id: number) {
    this.appointments[id].Cancelled = true;
  }
}
