import {Component, OnInit} from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'ng4-social-login';
import {UserService} from '../user.service';
import {StateService} from '@uirouter/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private loggedIn: boolean;

  constructor(private authService: AuthService,
              public userService: UserService,
              public stateService: StateService) {
  }

  ngOnInit() {
    // this.authService.authState.subscribe(
    //   (user) => {
    //     this.userService.setCurrentUser(user);
    //     if(user){
    //       this.stateService.go('home');
    //     }else{
    //       this.stateService.go('login');
    //     }
    //     this.loggedIn = (user !== null);
    //   }
    // );
  }

  get currentUser() {
    return this.userService.currentUser;
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user) => {
        this.userService.setCurrentUser(user);
        this.stateService.go('home');
        console.log(user);

      }
    );
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (user) => {
        this.userService.setCurrentUser(user);
        this.stateService.go('home');
        console.log(user);

      }
    );
  }

  signInWithLinkedIN(): void {
    this.authService.signIn(LinkedinLoginProvider.PROVIDER_ID).then(
      (user) => {
        this.userService.setCurrentUser(user);
        this.stateService.go('home');
        console.log(user);

      }
    );
  }

  signOut(): void {
    this.authService.signOut().then(
      () => {
        this.userService.setCurrentUser(null);
        this.stateService.go('login');
      }
    );
  }
}
