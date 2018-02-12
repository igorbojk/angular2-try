import {Injectable} from '@angular/core';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider} from 'ng4-social-login';
import {LocalStorageService} from 'ngx-webstorage';
import {StateService} from '@uirouter/angular';

@Injectable()
export class UserService {
  public currentUser = null;

  constructor(
    private authService: AuthService,
    public stateService: StateService,
    private localSt: LocalStorageService
  ) {
  }

  setCurrentUser(user) {
    this.currentUser = user;
    this.localSt.store('storageUser', user);
    this.stateService.go('home');
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user) => {
        this.setCurrentUser(user);
      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (user) => {
        this.setCurrentUser(user);
      }
    );
  }

  signInWithLinkedIN(): void {
    this.authService.signIn(LinkedinLoginProvider.PROVIDER_ID).then(
      (user) => {
        this.setCurrentUser(user);
      }
    );
  }

  signOut(): void {
    this.authService.signOut().then(
      () => {
        this.setCurrentUser(null);
        this.localSt.clear('storageUser');
        this.stateService.go('login');
      }
    );
  }


}
