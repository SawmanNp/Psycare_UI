import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdvisorsService } from "../../../services/advisors.service";
import { AuthenticationService } from "../../../services/authentication.service";
import { Advisor } from "src/app/models/Advisor";

@Component({
  selector: "app-advisor-view",
  templateUrl: "./advisor-view.component.html",
  styleUrls: ["./advisor-view.component.css"]
})
export class AdvisorViewComponent implements OnInit {
  advisorid: string;
  advisor?: Advisor;
  isMyself: boolean = false;
  isAdmin: boolean = false;
  ratingConfig = {
    //showLabels: false
    labels: ["بد", "ضعیف", "متوسط", "خوب", "عالی"]
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adv: AdvisorsService,
    private auth: AuthenticationService
  ) {}

  ngOnInit() {
    this.advisorid = this.route.snapshot.paramMap.get("advId");
    // this.adv.getAdvisor(this.advisorid).subscribe(adv => {
    //   this.advisor = adv;
    // });
    //TODO: delete these later
    this.advisor = {
      id: 1,
      first_name: "pepe",
      last_name: "le frog",
      description: "le true pepega",
      rating: 5,
      hourly_fee: 100
    };
    if (this.auth.user) {
      if (this.auth.user.id.toString() == this.advisorid) this.isMyself = true;
      if (this.auth.user.roles.includes("admin")) this.isAdmin = true;
    }
  }
  book() {
    this.router.navigateByUrl("advisor/book/" + this.advisorid);
  }
}
