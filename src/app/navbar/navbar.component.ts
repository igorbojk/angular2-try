import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {AuthService} from 'ng4-social-login';
import { StateService } from '@uirouter/angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public userService: UserService,
    private authService: AuthService,
    public stateService: StateService) {
  }

  ngOnInit() {
  }

  get user() {
    return this.userService.currentUser;
  }


  get userAvatar() {
    return {backgroundImage: `url(${this.user.photoUrl}`}
  }

  signOut(): void {
    this.authService.signOut().then(
        () => {
          this.userService.setCurrentUser(null);
          this.stateService.go('login');
        }
      )
  }

}
