import { Routes } from "@angular/router";
import {
  HomeComponent,
  MovieListComponent,
  MovieDetailsComponent
} from "../component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "in_theaters", component: MovieListComponent },
  { path: "coming_soon", component: MovieListComponent },
  { path: "top250", component: MovieListComponent },
  { path: "search/:q", component: MovieListComponent },
  { path: "details/:id", component: MovieDetailsComponent }
];
