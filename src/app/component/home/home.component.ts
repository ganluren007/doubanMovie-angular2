import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { httpService } from "../../srevice";
import param from "./meta.json";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(
    private jsonp: httpService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  hotMovie = param.hotMovie;
  newMovie = param.newMovie;
  count = param.count;
  hotLoadingState = param.hotLoadingState;
  newLoadingState = param.newLoadingState;

  getHotMovieList(): void {
    this.jsonp.getMovie({
      url: this.hotMovie.url,
      param: {
        count: this.count
      },
      success: res => {
        this.hotMovie.list = res.subjects;
        this.hotLoadingState = false;
        // 检测变化
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  getNewMovieList(): void {
    this.jsonp.getMovie({
      url: this.newMovie.url,
      param: {
        start: this.count,
        count: this.count + 5
      },
      success: res => {
        this.newMovie.list = res.subjects;
        this.newLoadingState = false;
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  ngOnInit() {
    this.getHotMovieList();
    this.getNewMovieList();
  }
}
