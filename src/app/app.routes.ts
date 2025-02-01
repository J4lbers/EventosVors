import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListSorteosComponent } from './dashboard/list-sorteos/list-sorteos.component';
import { ListParticipantesComponent } from './dashboard/list-participantes/list-participantes.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'lista-sorteos',
        component: ListSorteosComponent,
      },
      {
        path: 'lista-participantes',
        component: ListParticipantesComponent,
      },
    ],
  },
  {
    path: '**',
    component: AppComponent,
  },
];
