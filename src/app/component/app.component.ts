import { Component, ElementRef, Renderer } from "@angular/core";
import { param, Nav } from "./meta.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  logo = param.logo;
  search = param.search;
  btn = param.btn;
  navList: Nav[] = param.navList;
  footer = param.footer;
}
