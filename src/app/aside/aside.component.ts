import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }

  get currentUser() {
    return this.userService.currentUser;
  }

  get userAvatar() {
    return {backgroundImage: `url('${this.currentUser.photoUrl}')`};
  }

}
