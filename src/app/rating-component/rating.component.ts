import {Component} from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-rating-component',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  display = false;
  faStar = faStar;
  radios = [false, false, false, false, false];

  constructor() {

  }

  submitResult() {
    this.display = !this.display;
  }

  allChecked() {
    return this.radios.indexOf(false) === -1;
  }
}
