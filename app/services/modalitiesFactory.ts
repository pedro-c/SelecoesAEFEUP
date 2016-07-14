import {Injectable} from '@angular/core';

const modalities: any[] = [
  {
    id: 0, name: 'Andebol Masculino'
  },
  {
    id: 1, name: 'Andebol Feminino'
  },
  {
    id: 2, name: 'Basquetebol Masculino'
  },
  {
    id: 3, name: 'Basquetebol Feminino'
  },
  {
    id: 4, name: 'Futebol 11 Masculino'
  },
  {
    id: 5, name: 'Futebol 11 Feminino'
  },
  {
    id: 6, name: 'Futsal Masculino'
  },
  {
    id: 7, name: 'Futsal Feminino'
  },
  {
    id: 8, name: 'Voleibol Masculino'
  },
  {
    id: 9, name: 'Voleibol Feminino'
  },
  {
    id: 10, name: 'Rugby 7 Masculino'
  }
];

@Injectable()
export class ModalitiesFactory {
  getModalities() {
    return modalities;
  }

  getModalityById(id) {
    return modalities[id];
  }
}
