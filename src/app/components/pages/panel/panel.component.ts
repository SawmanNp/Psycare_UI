import { Component, OnInit } from "@angular/core";
import { User } from "../../../models/User";
import { AuthenticationService } from "../../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.css"]
})
export class PanelComponent implements OnInit {
  user: User;
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    if (!this.auth.user) this.router.navigateByUrl("");
  }
}
