import dayjs from 'dayjs/esm';

import { IPerfil, NewPerfil } from './perfil.model';

export const sampleWithRequiredData: IPerfil = {
  id: 11875,
  nome: 'hit gosh',
};

export const sampleWithPartialData: IPerfil = {
  id: 14306,
  nome: 'rend',
  descricao: '../fake-data/blob/hipster.txt',
};

export const sampleWithFullData: IPerfil = {
  id: 169,
  nome: 'mockingly instead',
  descricao: '../fake-data/blob/hipster.txt',
  createdAt: dayjs('2024-05-28T21:28'),
  updatedAt: dayjs('2024-05-28T17:26'),
  deletedAt: dayjs('2024-05-28T15:21'),
};

export const sampleWithNewData: NewPerfil = {
  nome: 'terribly droopy',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
