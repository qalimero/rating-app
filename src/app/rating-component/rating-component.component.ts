import { Component, OnInit } from '@angular/core';
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating-component.component.html',
  styleUrls: ['./rating-component.component.scss']
})
export class RatingComponentComponent implements OnInit {
  faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
