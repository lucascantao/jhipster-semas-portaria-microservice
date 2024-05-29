import { ITopico } from 'app/entities/JhipsterSemasPortariasMicroservico/topico/topico.model';

export interface IAjuda {
  id: string;
  titulo?: string | null;
  topicos?: ITopico[] | null;
}

export type NewAjuda = Omit<IAjuda, 'id'> & { id: null };
