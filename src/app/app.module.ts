import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angular4-social-login';
import { RoutesModule } from './routes.module';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AuthComponent} from './auth/auth.component';
import { MainComponent } from './main/main.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('235249930835-6njnc8lrl2r7ll2p7gn38fv50vjakorn.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2195311474022211')
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
    MainComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RoutesModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
