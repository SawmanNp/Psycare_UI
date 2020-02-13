import { Component, OnInit } from "@angular/core";
import { Schedule } from "src/app/models/Schedule";
import { AdvisorsService } from "../../../services/advisors.service";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"]
})
export class ScheduleComponent implements OnInit {
  periods: Schedule[];
  constructor(private adv: AdvisorsService) {}

  ngOnInit() {
    this.periods = [];
    //get current schedule
    //add view for current schedule
  }
  addSchedule(sch: Schedule) {
    this.periods.push(sch);
  }
  send() {
    this.adv.setSchedule(this.periods);
  }
}
