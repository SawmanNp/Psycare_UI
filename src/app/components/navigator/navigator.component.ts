import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.css"]
})
export class NavigatorComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    if (this.auth.user) this.isLoggedIn = true;
    else this.isLoggedIn = false;
  }

  logOut() {
    this.auth.logOut();
  }
}
