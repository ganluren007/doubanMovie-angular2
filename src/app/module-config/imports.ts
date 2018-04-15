import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "../srevice/in-memory-data.service";
import { HttpClientModule } from "@angular/common/http";

export const imports = [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    dataEncapsulation: false
  })
];
