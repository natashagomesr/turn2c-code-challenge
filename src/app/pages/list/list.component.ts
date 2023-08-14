import { Component, OnInit } from '@angular/core';
import { Breed, Dog } from 'src/app/models/dog.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
})
export class ListComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  dogs: Dog[] = [];
  breeds: Breed[] = [];

  ngOnInit(): void {
    this.loadDogs();
    this.loadBreeds();
  }

  onBreedChange = (event: Event): void => {
    const element = event.target as HTMLInputElement;
    const selectedBreed = Number(element.value);

    this.loadDogs(selectedBreed);
  };

  onNavigationClicked = (type: string): void => {
    const element = event?.target as HTMLInputElement;
    const page = Number(element.value);

    // type: "asc" ou "desc"
    this.loadDogs(page);
  };

  loadBreeds(): void {
    this.apiService.listBreeds().subscribe(
      (breeds) => {
        this.breeds = breeds;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadDogs(selectedBreed?: number): void {
    console.log(selectedBreed);
    this.apiService.listDogs(selectedBreed).subscribe(
      (dogs) => {
        this.dogs = dogs;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
