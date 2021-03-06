import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'ng4-social-login';
import { RoutesModule } from './routes.module';
import { Ng2Webstorage } from 'ngx-webstorage';

import {UserService} from './user.service';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AuthComponent} from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('235249930835-6njnc8lrl2r7ll2p7gn38fv50vjakorn.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2195311474022211')
  },
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider('86791ju63s70s9')
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    MainComponent,
    AsideComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RoutesModule,
    Ng2Webstorage
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
