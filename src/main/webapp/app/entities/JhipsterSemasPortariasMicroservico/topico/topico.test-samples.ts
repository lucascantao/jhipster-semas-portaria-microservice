import { ITopico, NewTopico } from './topico.model';

export const sampleWithRequiredData: ITopico = {
  id: '27cb6e14-a6c6-4ed9-a7f1-fb9bc0ec754a',
  titulo: 'absentmindedly',
};

export const sampleWithPartialData: ITopico = {
  id: '21c2cc8e-aafe-49a5-95f8-dc9360acce8b',
  titulo: 'when till indeed',
};

export const sampleWithFullData: ITopico = {
  id: '388aa0e3-836d-452d-b2b0-e285a97b188b',
  titulo: 'yahoo yum',
};

export const sampleWithNewData: NewTopico = {
  titulo: 'a sparkling curate',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
