import dayjs from 'dayjs/esm';

import { IUsuario, NewUsuario } from './usuario.model';

export const sampleWithRequiredData: IUsuario = {
  id: 16072,
};

export const sampleWithPartialData: IUsuario = {
  id: 19446,
  nome: 'yahoo',
  email: 'Mossie.Orn@hotmail.com',
  createdAt: dayjs('2024-05-29T13:36'),
  updatedAt: dayjs('2024-05-28T16:51'),
};

export const sampleWithFullData: IUsuario = {
  id: 5404,
  nome: 'above point unacceptable',
  login: 'subtle wrest below',
  email: 'Dominique_Lemke16@hotmail.com',
  createdAt: dayjs('2024-05-28T17:38'),
  updatedAt: dayjs('2024-05-29T12:12'),
  deletedAt: dayjs('2024-05-28T19:05'),
};

export const sampleWithNewData: NewUsuario = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
