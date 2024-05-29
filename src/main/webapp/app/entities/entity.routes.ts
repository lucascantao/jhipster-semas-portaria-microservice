import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'topico',
    data: { pageTitle: 'Topicos' },
    loadChildren: () => import('./JhipsterSemasPortariasMicroservico/topico/topico.routes'),
  },
  {
    path: 'ajuda',
    data: { pageTitle: 'Ajudas' },
    loadChildren: () => import('./JhipsterSemasPortariasMicroservico/ajuda/ajuda.routes'),
  },
  {
    path: 'portaria',
    data: { pageTitle: 'Portarias' },
    loadChildren: () => import('./JhipsterSemasPortariasMicroservico/portaria/portaria.routes'),
  },
  {
    path: 'assunto',
    data: { pageTitle: 'Assuntos' },
    loadChildren: () => import('./JhipsterSemasPortariasMicroservico/assunto/assunto.routes'),
  },
  {
    path: 'setor',
    data: { pageTitle: 'Setors' },
    loadChildren: () => import('./JhipsterSemasPortariasMicroservico/setor/setor.routes'),
  },
  {
    path: 'usuario',
    data: { pageTitle: 'Usuarios' },
    loadChildren: () => import('./JhipsterSemasPortariasMicroservico/usuario/usuario.routes'),
  },
  {
    path: 'perfil',
    data: { pageTitle: 'Perfils' },
    loadChildren: () => import('./JhipsterSemasPortariasMicroservico/perfil/perfil.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
