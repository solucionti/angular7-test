import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {Graficas1Component} from './pages/graficas1/graficas1.component';
import {NopagesfoundComponent} from './shared/nopagesfound/nopagesfound.component';
import {RegistroComponent} from './login/registro.component';

const appRoute: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'progress', component: ProgressComponent},
      {path: 'graficas', component: Graficas1Component},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: '**', component: NopagesfoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoute, {useHash: true});
