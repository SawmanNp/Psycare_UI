import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AdvisorsService } from "../../../services/advisors.service";

@Component({
  selector: "app-upgrade",
  templateUrl: "./upgrade.component.html",
  styleUrls: ["./upgrade.component.css"]
})
export class UpgradeComponent implements OnInit {
  upgradeForm: FormGroup;
  constructor(private fb: FormBuilder, private adv: AdvisorsService) {
    this.upgradeForm = this.fb.group({
      first_name: this.fb.control(""),
      last_name: this.fb.control(""),
      description: this.fb.control("")
    });
  }

  ngOnInit() {}
  upgrade() {
    const formValue = this.upgradeForm.value;
    this.adv.upgrade(
      formValue.first_name,
      formValue.last_name,
      formValue.description
    );
    console.log(formValue);
  }
}
