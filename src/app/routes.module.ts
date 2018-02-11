import { NgModule } from '@angular/core';
import { UIRouterModule} from '@uirouter/angular';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';

const routes = [
  {
    name: 'home',
    url: '/home',
    component: MainComponent,
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
      otherwise: {state: 'login'},
      states: routes,
      useHash: true
    }),
  ],
  exports: [ UIRouterModule ]
})
export class RoutesModule { }
