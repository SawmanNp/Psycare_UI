import { Component, OnInit, Input } from "@angular/core";
import { Advisor } from "../../models/Advisor";
import { User } from "../../models/User";

@Component({
  selector: "app-advisor-item",
  templateUrl: "./advisor-item.component.html",
  styleUrls: ["./advisor-item.component.css"]
})
export class AdvisorItemComponent implements OnInit {
  @Input() advisor: Advisor;
  constructor() {}

  ngOnInit() {}
}
