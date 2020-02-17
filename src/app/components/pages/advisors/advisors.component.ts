import { Component, OnInit } from "@angular/core";
import { Advisor } from "src/app/models/Advisor";
import { AdvisorsService } from "../../../services/advisors.service";

@Component({
  selector: "app-advisors",
  templateUrl: "./advisors.component.html",
  styleUrls: ["./advisors.component.css"]
})
export class AdvisorsComponent implements OnInit {
  advisors: Advisor[];
  constructor(private adv: AdvisorsService) {}

  ngOnInit() {
    this.adv.getAdvisors().subscribe(res => {
      if (res["status"] == 200) this.advisors = res["data"];
    });
  }
}
