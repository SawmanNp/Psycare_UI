import { Component, OnInit } from "@angular/core";
import { Schedule } from "src/app/models/Schedule";
import { AdvisorsService } from "../../../services/advisors.service";
import { AppointmentsService } from "src/app/services/appointments.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent implements OnInit {
  periods: Schedule[];
  hasSchedule: boolean = false;
  editMode: boolean = false;
  constructor(private adv: AdvisorsService, private aps: AppointmentsService) {}

  ngOnInit() {
    this.periods = [];
    this.adv.getSchedule().subscribe(res => {
      if (res["status"] == 200) {
        this.periods = res["data"]["periods"];
        console.log("schedules set");
      }
    });
    if (typeof this.periods !== "undefined" && this.periods.length > 0) {
      this.hasSchedule = true;
      this.periods = this.periods.sort((a, b) => a.day_of_week - b.day_of_week);
    } else this.editMode = true;
  }
  addSchedule(sch: Schedule) {
    console.log(sch);
    console.log(this.periods);
    this.periods = this.periods || [];
    this.periods.push(sch);
  }
  send() {
    if (this.hasSchedule)
      this.adv.updateSchedule(this.periods).subscribe(res => {
        if (res["status"] == 200) console.log("successfully updated!");
      });
    else
      this.adv.setSchedule(this.periods).subscribe(res => {
        if (res["status"] == 200) console.log("successfully sent!");
      });
  }
  edit() {
    this.editMode = true;
    this.periods = [];
  }
}
