import dayjs from 'dayjs/esm';

import { IAssunto, NewAssunto } from './assunto.model';

export const sampleWithRequiredData: IAssunto = {
  id: 31130,
  nome: 'aside ruddy',
};

export const sampleWithPartialData: IAssunto = {
  id: 8460,
  nome: 'dear',
  descricao: '../fake-data/blob/hipster.txt',
  createdAt: dayjs('2024-05-29T02:40'),
  deletedAt: dayjs('2024-05-28T16:07'),
};

export const sampleWithFullData: IAssunto = {
  id: 13684,
  nome: 'craw yahoo',
  descricao: '../fake-data/blob/hipster.txt',
  createdAt: dayjs('2024-05-29T05:31'),
  updatedAt: dayjs('2024-05-28T17:04'),
  deletedAt: dayjs('2024-05-29T08:21'),
};

export const sampleWithNewData: NewAssunto = {
  nome: 'ruddy standard',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
