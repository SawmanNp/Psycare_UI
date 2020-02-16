import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { RegisterComponent } from "./components/pages/register/register.component";
import { PanelComponent } from "./components/pages/panel/panel.component";
import { AdvisorsComponent } from "./components/pages/advisors/advisors.component";
import { UpgradeComponent } from "./components/pages/upgrade/upgrade.component";
import { AdvisorViewComponent } from "./components/pages/advisor-view/advisor-view.component";
import { ScheduleComponent } from "./components/pages/schedule/schedule.component";
import { AppointmentsComponent } from "./components/pages/appointments/appointments.component";
import { BookingComponent } from "./components/pages/booking/booking.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "panel", component: PanelComponent },
  { path: "advisors", component: AdvisorsComponent },
  { path: "upgrade", component: UpgradeComponent },
  { path: "advisor/view/:advId", component: AdvisorViewComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "appointments/:page", component: AppointmentsComponent },
  { path: "advisor/book/:advId", component: BookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
