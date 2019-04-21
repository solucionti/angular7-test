import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NopagesfoundComponent} from './shared/nopagesfound/nopagesfound.component';
import {RegistroComponent} from './login/registro.component';

const appRoute: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistroComponent},
  {path: '**', component: NopagesfoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoute, {useHash: true});
