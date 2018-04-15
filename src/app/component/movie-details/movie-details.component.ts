import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { httpService } from "../../srevice";
import param from "./mate.json";

@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private jsonp: httpService,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  loadingState = param.loadingState;
  detailLabel = param.detailLabel;
  detailsUrl = param.detailsUrl;
  movies = param.movies;

  getMovieDetails(): void {
    this.jsonp.getMovie({
      url: `${this.detailsUrl}/${this.activatedRoute.params["value"].id}`,
      success: res => {
        this.movies = res;
        this.loadingState = false;
        this.changeDetectorRef.detectChanges();
      }
    });
  }
  ngOnInit() {
    this.getMovieDetails();
  }
}
