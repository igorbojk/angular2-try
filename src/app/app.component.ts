import {Component, OnInit} from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {StateService} from '@uirouter/angular';
import {UserService} from './user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  constructor(
    private localSt: LocalStorageService,
    public stateService: StateService,
    public userService: UserService) {
  }

  ngOnInit() {
    if (!this.localSt.retrieve('storageUser')) {
      this.stateService.go('login');
      return;
    }
    this.userService.currentUser = this.localSt.retrieve('storageUser');
  }

}
