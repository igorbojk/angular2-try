import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	public currentUser = null;
  constructor() { }

  setCurrentUser(user){
  	this.currentUser = user;
  }
}
