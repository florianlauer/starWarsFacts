import { Film } from './film';
import { People } from './people';
export class Starship {

    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: number;
    length: number;
    max_atmosphering_speed: string;
    crew: number;
    passengers: number;
    cargo_capacity: number;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: number;
    starship_class: string;
    pilots: People[];
    films: Film[];


    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}
