import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less'],
})
export class CardComponent {
  @Input()
  imgUrl!: string;

  @Input()
  title!: string;

  @Input()
  subTitle!: string;

  constructor() {}
}
