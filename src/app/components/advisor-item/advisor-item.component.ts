import { Component, OnInit, Input } from "@angular/core";
import { Advisor } from "../../models/Advisor";

@Component({
  selector: "app-advisor-item",
  templateUrl: "./advisor-item.component.html",
  styleUrls: ["./advisor-item.component.css"]
})
export class AdvisorItemComponent implements OnInit {
  @Input() advisor: Advisor;
  constructor() {}

  ngOnInit() {}
  viewAdvisor() {
    //this.router.navigate(['advisor-view', advId: this.advisor.id}]);
    // add the line below to router.module
    //{ path: '/advisor-view/:advId', name: 'advisor-view', component: advisor-view}
  }
}
