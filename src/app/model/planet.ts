import { Film } from './film';
import { People } from './people';
export class Planet {
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: number;
    population: number;
    residents: string[];
    films: string[];

    constructor(obj?: any) {
        Object.assign(this, obj);
    }

}
