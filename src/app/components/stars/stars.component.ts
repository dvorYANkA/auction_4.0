import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
})
export class StarsComponent {
  public maxStars: number = 5;
  stars: boolean[] = [];
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();
  @Input() readOnly: boolean = true;
  private _rating: number = 0;
  get rating(): number {
    return this._rating;
  }
  @Input() set rating(value: number) {
    this._rating = value || 0;
    this.stars = Array(this.maxStars).fill(true, 0, this.rating);
  }

  fillStarsWithColor(index: number) {
    if (!this.readOnly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
