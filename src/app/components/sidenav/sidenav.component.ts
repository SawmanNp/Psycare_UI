import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";
import { User } from "../../models/User";
@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  user?: User;
  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    if (!this.auth.user) this.router.navigateByUrl("/login");
    else this.user = this.auth.user;
  }

  isAdvisor(): boolean {
    if (this.user.roles.includes("advisor")) return true;
    else return false;
  }
}
