import {Component, OnInit} from '@angular/core';
import {AuthService, SocialUser} from 'angular4-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user: SocialUser;
  public style: object;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.authState.subscribe(
      (user) => {
        this.user = user;
        if (this.user) {
          this.generateUserAvatarUrl();
        }
      }
    );
  }


  generateUserAvatarUrl() {
    this.style = {
      backgroundImage: `url(${this.user.photoUrl}`
    };
  }

}
