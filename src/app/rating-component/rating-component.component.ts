import {Component, ElementRef, Renderer2} from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.scss']
})
export class RatingComponent {
  faStar = faStar;
  radios = ['1', '2', '3', '4', '5'];

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef
  ) {
  }
}

