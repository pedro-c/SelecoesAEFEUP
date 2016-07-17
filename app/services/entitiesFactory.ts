import {Injectable} from '@angular/core';

const entities : any[] = [
  {
    id: 0,
    shortName: 'AEFEUP'
  },
  {
    id: 1,
    shortName: 'AEFMUP'
  },
  {
    id: 2,
    shortName: 'AEFADEUP'
  },
  {
    id: 3,
    shortName: 'AEISEP'
  }
];

@Injectable()
export class EntitiesFactory {
  getEntities() {
    return entities;
  };

  getEntityById(id) {
    return entities[id];
  };
}
