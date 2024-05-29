import { IAjuda } from 'app/entities/JhipsterSemasPortariasMicroservico/ajuda/ajuda.model';
import { IAssunto } from 'app/entities/JhipsterSemasPortariasMicroservico/assunto/assunto.model';

export interface ITopico {
  id: string;
  titulo?: string | null;
  ajudas?: IAjuda[] | null;
  assuntos?: IAssunto[] | null;
}

export type NewTopico = Omit<ITopico, 'id'> & { id: null };
