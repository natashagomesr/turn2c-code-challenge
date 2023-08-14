import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed, Dog } from '../models/dog.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'https://api.thedogapi.com/v1/';

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders().set(
    'x-api-key',
    'live_1s84k1nD20mfEsJow1Cx9mHgLGh1DUHDfsvVA93uaAky6LmfT5fDZX7vCxFSgtP1'
  );

  listDogs(selectedBreed?: Number): Observable<Dog[]> {
    let handledUrl = this.API_URL + 'images/search?limit=8&has_breeds=1&page=0';

    if (Number.isInteger(selectedBreed)) {
      handledUrl = handledUrl + '&breed_id=' + selectedBreed;
    }

    return this.http.get<Dog[]>(handledUrl, { headers: this.headers });
  }

  listBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.API_URL + 'breeds?limit=10', {
      headers: this.headers,
    });
  }
}
