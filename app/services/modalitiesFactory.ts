import {Injectable} from '@angular/core';
import {Modality} from '../classes/modality';

const MODALITIES : Modality[] = [
  new Modality('Andebol Masculino'),
  new Modality('Andebol Feminino'),
  new Modality('Basquetebol Masculino'),
  new Modality('Basquetebol Feminino'),
  new Modality('Futebol 11 Masculino'),
  new Modality('Futebol 11 Feminino'),
  new Modality('Futsal Masculino'),
  new Modality('Futsal Feminino'),
  new Modality('Voleibol Masculino'),
  new Modality('Voleibol Feminino'),
  new Modality('Rugby 7 Masculino')
]

@Injectable()
export class ModalitiesFactory {
  getModalities() : Modality[] {
    return MODALITIES;
  }

  getModalityById(id) : Modality {
    return MODALITIES[id];
  }
}
