import { ISwapResponse } from './response';

export interface IPlanetResponse extends ISwapResponse {
    results: Planet[];
}

export type Planet = {
    name: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    rotation_period: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: string;
    edited: string;
    url: string;
};
