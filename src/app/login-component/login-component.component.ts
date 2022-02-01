import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/models/user.model";
import {LoginService} from "../shared/services/login.service";
import { faGithub, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {AppService} from "../shared/services/app.service";



@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.sass']
})
export class LoginComponentComponent implements OnInit {
  user: User = new User();
  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faGithub = faGithub;

  constructor(
    private app: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.app.authenticate(undefined, undefined);
  }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }

  login() {
    let url = "http://localhost:8088/login";
    let result = this.httpClient.post(url, {
           username: this.user.username,
           password: this.user.password
       }).subscribe(isValid => {
           if (isValid) {
               sessionStorage.setItem(
                 'token',
                 btoa(this.user.username + ':' + this.user.password)
               );
        this.router.navigate(['']);
           } else {
               alert("Authentication failed.")
           }
       });
    }
  logout() {
    this.httpClient.post('logout', {}).finally(() => {
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');
    }).subscribe();
  }
}
