import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessaComponent } from './components/messa/messa.component';
import { MessaDetailComponent } from './components/messa-detail/messa-detail.component';
import { MessaDataComponent } from './components/messa-data/messa-data.component';

import { FedeliComponent } from './components/fedeli/fedeli.component';
import { FedeleDetailComponent } from './components/fedele-detail/fedele-detail.component';
import { FedeleDataComponent } from './components/fedele-data/fedele-data.component';
import { MesseComponent } from './components/messe/messe.component';
import { LoginComponent } from './components/login/login.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { InfoAppComponent } from './components/info-app/info-app.component';

const routes: Routes = [
  {
    path: 'jumbo',
    component: JumbotronComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'messa',
    component: MesseComponent
  },
  {
    path: '',
    redirectTo: 'jumbo',
    pathMatch: 'full'
  },
  {
    path: 'messa/new',
    component: MessaDetailComponent
  },
  {
    path: 'messa/:id',
    component: MessaDataComponent
  },
  {
    path: 'messa/:id/edit',
    component: MessaDetailComponent
  },
  {
    // la messa passarla come variabile localstorage
    path: 'fedele',
    component: FedeliComponent
  },
  {
    path: 'fedele/new',
    component: FedeleDetailComponent
  },
  {
    path: 'fedeleMessa/:id/new',
    component: FedeleDetailComponent
  },
  {
    path: 'fedele/:id',
    component: FedeleDetailComponent
  },
  {
    path: 'fedele/:id/edit',
    component: FedeleDetailComponent
  },

  {
    path: 'info',
    component: InfoAppComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }




