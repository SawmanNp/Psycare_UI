import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { NavigatorComponent } from './components/navigator/navigator.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavigatorComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
