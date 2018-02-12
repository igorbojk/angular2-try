import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private loggedIn: boolean;


  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }

  signInWithGoogle(): void {
    this.userService.signInWithGoogle()
      .then(
        (user) => {
          this.userService.setCurrentUser(user);
        }
      );
  }

  signInWithFB(): void {
    this.userService.signInWithFB()
      .then(
        (user) => {
          this.userService.setCurrentUser(user);
        }
      );
  }

  signInWithLinkedIN(): void {
    this.userService.signInWithLinkedIN()
      .then(
        (user) => {
          this.userService.setCurrentUser(user);
        }
      );
  }

  signOut(): void {
    this.userService.signOut();
  }


}

