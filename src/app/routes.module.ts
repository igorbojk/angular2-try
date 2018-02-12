import { NgModule} from '@angular/core';
import { UIRouterModule} from '@uirouter/angular';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';


// import { MainGuard } from ' main.guard ';

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
      otherwise: {state: 'home'},
      states: routes,
      useHash: true
    }),
  ],
  exports: [ UIRouterModule ]
})
export class RoutesModule {
}


