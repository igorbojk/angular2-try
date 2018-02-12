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
) {
  }

  ngOnInit() {
  }

  get user() {
    return this.userService.currentUser;
  }


  signOut(): void {
    this.userService.signOut();
  }

}
