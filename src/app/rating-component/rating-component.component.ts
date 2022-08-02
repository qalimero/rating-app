import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.scss']
})
export class RatingComponent implements AfterViewInit {
  faStar = faStar;
  @ViewChild("rating") ratingSelect: ElementRef | undefined;
  constructor() {}
  ngAfterViewInit() {
    console.log(this.ratingSelect?.nativeElement);
  }
}
