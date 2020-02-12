import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-navigator",
  templateUrl: "./navigator.component.html",
  styleUrls: ["./navigator.component.css"]
})
export class NavigatorComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    if (this.auth.user) this.isLoggedIn = true;
    else this.isLoggedIn = false;
  }
}
