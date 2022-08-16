import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.scss']
})
export class RatingComponent{
  faStar = faStar;
  public isActive = false;
  radios = ['1', '2', '3', '4', '5'];

  constructor() {}
  checkActive(){
    this.isActive = !this.isActive;
  }
}

