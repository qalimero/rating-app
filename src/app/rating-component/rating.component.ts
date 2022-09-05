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
  radios = [1, 2, 3, 4, 5];
  isChecked = false;
  focus = false;
  selected = '';

  constructor() {
  }

  submitResult() {
    this.display = !this.display;
  }

  onFocus() {
    this.focus = true;
  }

  onChange(target: EventTarget | null) {
    this.isChecked = true;
    const radio = target as HTMLInputElement;
    this.selected = radio.value;
  }
}
