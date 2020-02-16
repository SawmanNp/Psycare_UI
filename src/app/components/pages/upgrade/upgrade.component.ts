import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AdvisorsService } from "../../../services/advisors.service";
import { AuthenticationService } from "src/app/services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-upgrade",
  templateUrl: "./upgrade.component.html",
  styleUrls: ["./upgrade.component.css"]
})
export class UpgradeComponent implements OnInit {
  upgradeForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private adv: AdvisorsService,
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.upgradeForm = this.fb.group({
      first_name: this.fb.control(""),
      last_name: this.fb.control(""),
      description: this.fb.control(""),
      hourly_fee: this.fb.control("")
    });
  }

  ngOnInit() {}
  upgrade() {
    const formValue = this.upgradeForm.value;
    if (document.cookie.indexOf("jwt") > -1) {
      this.adv
        .upgrade(
          formValue.first_name,
          formValue.last_name,
          formValue.description,
          formValue.hourly_fee
        )
        .subscribe(res => {
          if (res["status"] == 200) {
            this.auth.user.roles.push("advisor");
            this.router.navigateByUrl("/panel");
          }
        });
    }
    console.log(formValue);
  }
}
