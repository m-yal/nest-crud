import { FilmsImage, PeopleImage, PlanetsImage, SpeciesImage, StarshipsImage, VehiclesImage } from "src/modules/files/entities/image.entity";
import { Repository } from "typeorm";
import { Films } from "../modules/crud/entities/films.entity";
import { People } from "../modules/crud/entities/people.entity";
import { Planets } from "../modules/crud/entities/planets.entity";
import { Species } from "../modules/crud/entities/species.entity";
import { Starships } from "../modules/crud/entities/starships.entity";
import { Vehicles } from "../modules/crud/entities/vehicles.entity";

export enum UnitTypeEnum {
    People = "people",
    Films = "films",
    Planets = "planets",
    Starships = "starships",
    Species = "species",
    Vehicles = "vehicles"
}
export type UnitImage = PeopleImage | FilmsImage | PlanetsImage | SpeciesImage | StarshipsImage | VehiclesImage; 
export type Unit = People | Films | Planets | Starships | Species | Vehicles;
export type UnitTypes = UnitTypeEnum.People | UnitTypeEnum.Films 
    | UnitTypeEnum.Planets | UnitTypeEnum.Starships 
    | UnitTypeEnum.Species | UnitTypeEnum.Vehicles;
export type CrudRepositories = Repository<Unit>;
export type RelationField = "homeworldRel" | "filmsRel" | "speciesRel" | "vehiclesRel" 
    | "starshipsRel" | "charactersRel" | "planetsRel" | "residentsRel" 
    | "pilotsRel" | "peopleRel" | "images";
export type UnitRecordValue = typeof People | typeof Planets | typeof Starships | typeof Vehicles | typeof Species | typeof Species;
export type Images = PeopleImage | FilmsImage | PlanetsImage | SpeciesImage | StarshipsImage | VehiclesImage;
export interface UpToTenUnitsPage {
    units: Unit[],
    hasNext: boolean,
    hasPrev: boolean
}
export type FileMymeTypeFilter = (req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => void;
export type ApplyDecorators = <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
