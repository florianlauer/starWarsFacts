import { Film } from './film';
import { Planet } from './planet';
import { Species } from './species';
import { Vehicle } from './vehicle';
import { Starship } from './starship';

export class People {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}


