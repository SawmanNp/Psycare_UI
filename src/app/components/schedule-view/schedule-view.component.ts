import { Component, OnInit, Input } from "@angular/core";
import { Schedule } from "src/app/models/Schedule";

@Component({
  selector: "app-schedule-view",
  templateUrl: "./schedule-view.component.html",
  styleUrls: ["./schedule-view.component.css"]
})
export class ScheduleViewComponent implements OnInit {
  @Input() schedule: Schedule[];
  constructor() {}

  ngOnInit() {}
  timeHM(time: Date): string {
    var date = new Date(time);
    return date.getHours().toString() + ":" + date.getMinutes().toString();
  }
  setDay(day: number): string {
    const days: string[] = [
      "یک شنبه",
      "دو شنبه",
      "سه شنبه",
      "چهار شنبه",
      "پنج شنبه",
      "جمعه",
      "شنبه"
    ];
    return days[day];
  }
}
