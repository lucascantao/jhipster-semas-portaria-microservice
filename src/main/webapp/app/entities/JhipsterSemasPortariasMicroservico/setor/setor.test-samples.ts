import dayjs from 'dayjs/esm';

import { ISetor, NewSetor } from './setor.model';

export const sampleWithRequiredData: ISetor = {
  id: 25940,
  nome: 'that blanket',
  sigla: 'disadvantage via likewise',
};

export const sampleWithPartialData: ISetor = {
  id: 29929,
  nome: 'project awe balalaika',
  sigla: 'porcelain sometimes',
};

export const sampleWithFullData: ISetor = {
  id: 27179,
  nome: 'damp what poorly',
  sigla: 'obfuscate',
  createdAt: dayjs('2024-05-29T09:10'),
  updatedAt: dayjs('2024-05-29T10:01'),
  deletedAt: dayjs('2024-05-28T17:16'),
};

export const sampleWithNewData: NewSetor = {
  nome: 'banter undress retreat',
  sigla: 'neat obediently meh',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
