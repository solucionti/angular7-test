import {NgModule} from '@angular/core';
import {BradcrumbsComponent} from './bradcrumbs/bradcrumbs.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NopagesfoundComponent} from './nopagesfound/nopagesfound.component';

@NgModule({
  declarations: [
    BradcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    NopagesfoundComponent
  ],
  exports: [
    BradcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    NopagesfoundComponent
  ],
  imports: []
})

export class SharedModule {

}
