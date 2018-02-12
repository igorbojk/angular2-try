import { NgModule} from '@angular/core';
import { UIRouterModule} from '@uirouter/angular';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';



// import { MainGuard } from ' main.guard ';

const routes = [
  {
    abstract: true,
    name: 'main',
    url: '',
    component: MainComponent,
  },
  {
    name: 'main.home',
    url: '/home',
    component: HomeComponent,
  },
  {
    name: 'main.about',
    url: '/about',
    component: AboutComponent,
  },
  {
    name: 'login',
    url: '/login',
    component: AuthComponent,
  }
]




@NgModule({
  imports: [
    UIRouterModule.forRoot({
      otherwise: {state: 'main.home'},
      states: routes,
      useHash: true
    }),
  ],
  exports: [ UIRouterModule ]
})
export class RoutesModule {
}


