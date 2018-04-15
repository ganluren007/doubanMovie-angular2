import {
  Component,
  ElementRef,
  AfterViewInit,
  Renderer2,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnInit
} from "@angular/core";
import { carousels } from "../../../srevice";
import { animations, defineAnimate, isDefined } from "./animation";
import param from "./meta.json";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"],
  animations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private changeDetectorRef: ChangeDetectorRef,
    private carousels: carousels
  ) {}
  public ol;
  appCarousels = param.appCarousels;
  btnRight = param.btnRight;
  btnLeft = param.btnLeft;
  animateOption = param.animateOption;
  animateTime = param.animateTime;
  index = param.index;
  btnState = param.btnState;
  width = param.width;
  movieMessage = param.movieMessage;

  getCarouselList(): void {
    this.carousels.getList().subscribe(carousels => {
      if (!carousels) return;
      this.appCarousels = [].concat(carousels);
      this.appCarousels.push(carousels[0]);
      this.setMessage();
      this.createTime();
    });
  }

  setMessage(): void {
    let i = this.index;
    if (i === this.appCarousels.length) {
      i = 0;
    }
    this.movieMessage = Object.assign({}, this.appCarousels[i]);
  }

  btnsMouseleave(): void {
    this.btnState = "fadeOut";
    this.createTime();
  }

  btnsMouseenter(): void {
    this.btnState = "fadeIn";
    this.clearTime();
  }

  firstClick(): void {
    if (this.index === 0) {
      this.index = this.appCarousels.length - 1;
      this.renderer2.setStyle(this.ol, "left", `${-this.index * this.width}px`);
    }
    this.index--;
    defineAnimate(this.ol, {
      left: -this.width * this.index
    });
    this.setMessage();
  }

  nextClick(): void {
    if (this.index === this.appCarousels.length - 1) {
      this.index = 0;
      this.renderer2.setStyle(this.ol, "left", `${this.index}px`);
    }
    this.index++;
    defineAnimate(this.ol, {
      left: -this.width * this.index
    });
    this.setMessage();
  }

  clearTime(): void {
    if (!isDefined(this.animateOption)) {
      clearInterval(this.animateOption);
      this.animateOption = undefined;
    }
  }

  createTime(): void {
    if (isDefined(this.animateOption)) {
      this.animateOption = setInterval(() => {
        this.nextClick();
        this.changeDetectorRef.detectChanges();
      }, this.animateTime);
    }
  }

  ngOnDestroy(): void {
    this.clearTime();
  }

  ngAfterViewInit(): void {
    this.width = this.elementRef.nativeElement.querySelector(
      ".Shuffling"
    ).clientWidth;
    this.ol = this.elementRef.nativeElement.querySelector("ol");
  }

  ngOnInit(): void {
    this.getCarouselList();
  }
}
