import dayjs from 'dayjs/esm';

import { IPortaria, NewPortaria } from './portaria.model';

export const sampleWithRequiredData: IPortaria = {
  id: 20511,
  numero: 229,
};

export const sampleWithPartialData: IPortaria = {
  id: 2744,
  numero: 8834,
  data: dayjs('2024-05-28'),
  createdAt: dayjs('2024-05-29T08:36'),
  deletedAt: dayjs('2024-05-28T18:11'),
};

export const sampleWithFullData: IPortaria = {
  id: 12236,
  numero: 7659,
  data: dayjs('2024-05-29'),
  createdAt: dayjs('2024-05-29T00:22'),
  updatedAt: dayjs('2024-05-29T07:09'),
  deletedAt: dayjs('2024-05-29T12:32'),
};

export const sampleWithNewData: NewPortaria = {
  numero: 3364,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
