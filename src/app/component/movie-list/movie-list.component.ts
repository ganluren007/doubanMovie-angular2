import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  Renderer2,
  Input
} from "@angular/core";
import param from "./mate.json";
import { httpService } from "../../srevice/index";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent implements OnInit {
  public firstBtn: ElementRef;
  public nextBtn: ElementRef;
  constructor(
    private jsonp: httpService,
    private activatedRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) {}
  loadingState = param.loadingState;
  movieList = param.movieList;
  page = param.page;
  btns = param.btns;

  btnState(tag, state: boolean): void {
    state
      ? this.renderer2.setAttribute(tag, "disabled", "true")
      : this.renderer2.removeAttribute(tag, "disabled");
  }

  getMovieList(): void {
    this.jsonp.getMovie({
      url: this.activatedRoute.routeConfig.path,
      param: {
        count: this.page.pageSize,
        start: (this.page.pageIndex - 1) * this.page.pageSize,
        q: this.activatedRoute.params["value"].q || ""
      },
      success: ({ total, subjects }) => {
        this.page.pageCount = Math.ceil(total / this.page.pageSize);
        this.page.total = total;
        this.movieList.data = subjects;
        this.loadingState = false;
        this.btns.first.disabled = this.page.pageIndex === 1;
        this.btns.next.disabled = this.page.pageIndex === this.page.pageCount;
        this.changeDetectorRef.detectChanges();
        this.btnState(
          this.elementRef.nativeElement.querySelector(".prev"),
          this.btns.first.disabled
        );
        this.btnState(
          this.elementRef.nativeElement.querySelector(".next"),
          this.btns.next.disabled
        );
      }
    });
  }

  upDatePage(pageIndex): void {
    if (pageIndex < 1) {
      this.page.pageIndex = 1;
      return;
    } else if (pageIndex > this.page.pageCount) {
      this.page.pageIndex = this.page.pageCount;
      return;
    }
    if (this.loadingState) {
      return;
    }
    this.loadingState = true;
    this.getMovieList();
  }

  ngOnInit() {
    this.getMovieList();
  }
}
