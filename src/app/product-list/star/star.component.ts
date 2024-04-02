import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent {
  @Input() Rating: number;
  @Input() nameRating: string;
  @Output() outputRating: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  constructor(){
    this.nameRating='';
    this.Rating = 0;
    this.starWidth =this.Rating*90/5;
  }
  ngOnChanges(): void {
    this.starWidth = (this.Rating * 90) / 5
    // console.log(this.starWidth)
    }
    viewRating() {
      this.outputRating.emit(`Đánh giá của ${this.nameRating} là ${this.Rating}`)
      }

}
