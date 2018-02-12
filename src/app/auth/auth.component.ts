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
    this.userService.signInWithGoogle();
  }

  signInWithFB(): void {
    this.userService.signInWithFB();
  }

  signInWithLinkedIN(): void {
    this.userService.signInWithLinkedIN();
  }

  signOut(): void {
    this.userService.signOut();
  }


}
