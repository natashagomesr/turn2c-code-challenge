import { Component, Input } from '@angular/core';
import { Breed } from 'src/app/models/dog.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
  @Input()
  breedsList!: Breed[];

  @Input()
  onBreedChange!: Function;
}
