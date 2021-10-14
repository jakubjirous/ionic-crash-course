import { ISwapResponse } from './response';

export interface IPeopleResponse extends ISwapResponse {
    results: People[];
}

export type People = {
    name: string;
    height: string;
    mass: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    hair_color: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    skin_color: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    eye_color: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}
