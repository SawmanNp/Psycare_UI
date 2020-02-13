import { Component, OnInit, Input } from "@angular/core";
import { Advisor } from "../../models/Advisor";
import { Router } from "@angular/router";

@Component({
  selector: "app-advisor-item",
  templateUrl: "./advisor-item.component.html",
  styleUrls: ["./advisor-item.component.css"]
})
export class AdvisorItemComponent implements OnInit {
  @Input() advisor: Advisor;
  constructor(private router: Router) {}

  ngOnInit() {}
  viewAdvisor() {
    this.router.navigateByUrl("advisor/view/" + this.advisor.id.toString());
  }
}
