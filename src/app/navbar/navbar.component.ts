import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import { StateService } from '@uirouter/angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public userService: UserService,
    public stateService: StateService) {
  }

  ngOnInit() {
  }

  get user() {
    return this.userService.currentUser;
  }


  get userAvatar() {
    return {backgroundImage: `url(${this.user.photoUrl}`};
  }

  signOut(): void {
    this.userService.signOut();
  }

}
