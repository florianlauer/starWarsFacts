import { Starship } from './model/starship';
import { Planet } from './model/planet';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { People } from './model/people';

/* Service which retrieves data from API */

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiEndpoint = 'https://swapi.co/api';

  constructor(private httpClient: HttpClient) { }

  getResidents(object: any): void {
    const resObs: Observable<any>[] = [];
    if (object.residents.length === 0) {
      object.residents.push('N/A');
    }
    if (object.residents.length !== 0 && object.residents[0].includes('http')) {
      for (const s of object.residents) {
        resObs.push(this.getUrl(s));
      }
      object.residents = [];
      forkJoin(resObs).subscribe(dataArray => {
        dataArray.map(a => {
          object.residents.push(a.name);
        });
      });
    }

  }

  getFilms(object: any) {
    const filmObs: Observable<any>[] = [];
    if (object.films.length === 0) {
      object.films.push('N/A');
    }
    if (object.films.length !== 0 && object.films[0].includes('http')) {
      for (const s of object.films) {
        filmObs.push(this.getUrl(s));
      }
      object.films = [];
      forkJoin(filmObs).subscribe(dataArray => {

        dataArray.map(a => {
          object.films.push(a.title);
        });
      });
    }
  }

  getSpecies(object: any) {
    const speciesObs: Observable<any>[] = [];
    if (object.species.length === 0) {
      object.species.push('N/A');
    }
    if (object.species.length !== 0 && object.species[0].includes('http')) {
      for (const s of object.species) {
        speciesObs.push(this.getUrl(s));
      }
      object.species = [];
      forkJoin(speciesObs).subscribe(dataArray => {

        dataArray.map(a => {
          object.species.push(a.name);
        });
      });
    }
  }

  getVehicles(object: any) {
    const vehiclesObs: Observable<any>[] = [];
    if (object.vehicles.length === 0) {
      object.vehicles.push('N/A');
    }
    if (object.vehicles.length !== 0 && object.vehicles[0].includes('http')) {
      for (const s of object.vehicles) {
        vehiclesObs.push(this.getUrl(s));
      }
      object.vehicles = [];
      forkJoin(vehiclesObs).subscribe(dataArray => {
        dataArray.map(a => {
          object.vehicles.push(a.name);
        });

      });
    }
  }

  getStarships(object: any) {
    const starshipsObs: Observable<any>[] = [];
    if (object.starships.length === 0) {
      object.starships.push('N/A');
    }
    if (object.starships.length !== 0 && object.starships[0].includes('http')) {
      for (const s of object.starships) {
        starshipsObs.push(this.getUrl(s));
      }
      object.starships = [];
      forkJoin(starshipsObs).subscribe(dataArray => {
        dataArray.map(a => {
          object.starships.push(a.name);
        });

      });
    }
  }

  getPilots(object: any) {
    const pilotsObs: Observable<any>[] = [];
    if (object.pilots.length === 0) {
      object.pilots.push('N/A');
    }
    if (object.pilots.length !== 0 && object.pilots[0].includes('http')) {
      for (const s of object.pilots) {
        pilotsObs.push(this.getUrl(s));
      }
      object.pilots = [];
      forkJoin(pilotsObs).subscribe(dataArray => {
        dataArray.map(a => {
          object.pilots.push(a.name);
        });

      });
    }
  }

  getHomeWorld(object: any) {
    if (object.homeworld.length === 0) {
      object.homeworld.push('N/A');
    }
    if (object.homeworld.length !== 0 && object.homeworld.includes('http')) {
      this.getUrl(object.homeworld).subscribe(a => {
        object.homeworld = '';
        if (a !== undefined) {
          object.homeworld = a.name;
        }
      });
    }
  }

  getUrl(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  getPlanet(id: number): Observable<Planet> {
    return this.httpClient.get<Planet>(`${this.apiEndpoint}/planets/` + id).pipe(
      map(res => new Planet(res))
    );
  }

  getCharacter(id: number): Observable<People> {
    return this.httpClient.get<People>(`${this.apiEndpoint}/people/` + id).pipe(
      map(res => new People(res))
    );
  }

  getStarship(id: number): Observable<Starship> {
    return this.httpClient.get<Starship>(`${this.apiEndpoint}/starships/` + id).pipe(
      map(res => new Starship(res))
    );
  }

}
