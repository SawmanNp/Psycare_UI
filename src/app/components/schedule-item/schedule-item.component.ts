import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Schedule } from "src/app/models/Schedule";

@Component({
  selector: "app-schedule-item",
  templateUrl: "./schedule-item.component.html",
  styleUrls: ["./schedule-item.component.css"]
})
export class ScheduleItemComponent implements OnInit {
  @Output() getSchedule = new EventEmitter();
  day: number;
  time1: string;
  time2: string;
  schedule: Schedule;
  isAdded: boolean = false;

  constructor() {}

  ngOnInit() {}
  changed1() {
    console.log(this.time1);
  }
  changed2() {
    console.log(this.time2);
  }

  setSchedule() {
    if (this.time1 && this.time2 && this.day && this.time1 < this.time2) {
      this.schedule = new Schedule(this.time1, this.time2, this.day);
      this.getSchedule.emit(this.schedule);
      this.isAdded = true;
    }
  }
}
