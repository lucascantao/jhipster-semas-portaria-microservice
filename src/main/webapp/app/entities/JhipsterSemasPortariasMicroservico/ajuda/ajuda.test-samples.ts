import { IAjuda, NewAjuda } from './ajuda.model';

export const sampleWithRequiredData: IAjuda = {
  id: 'eda659bf-d659-4920-b52d-dae5197ce0a5',
  titulo: 'if',
};

export const sampleWithPartialData: IAjuda = {
  id: '3a438bf2-72d1-45c7-8919-db7de595978d',
  titulo: 'evocation so below',
};

export const sampleWithFullData: IAjuda = {
  id: 'aeeeb30f-2680-48a1-a886-4d46841a1c56',
  titulo: 'oh',
};

export const sampleWithNewData: NewAjuda = {
  titulo: 'mortally cloak as',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
