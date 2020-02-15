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
    //get current schedule
    // this.adv.getSchedule().subscribe(res => {
    //   if (res["status"] == 200) {
    //     this.periods = res["data"];
    //   }
    // });
    this.periods = [
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
        start_time: new Date("2020-02-15T12:04:47+03:30"),
        end_time: new Date("2020-02-15T12:34:47+03:30")
      },
      {
        day_of_week: 6,
        start_time: new Date("2020-02-14T12:04:47+03:30"),
        end_time: new Date("2020-02-14T12:34:47+03:30")
      }
    ];
    if (this.periods) {
      this.hasSchedule = true;
      this.periods = this.periods.sort((a, b) => a.day_of_week - b.day_of_week);
    } else this.editMode = true;
  }
  addSchedule(sch: Schedule) {
    this.periods.push(sch);
  }
  send() {
    if (this.hasSchedule) this.adv.updateSchedule(this.periods);
    else this.adv.setSchedule(this.periods);
  }
  edit() {
    this.editMode = true;
    this.periods = [];
  }
}
