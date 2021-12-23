import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/models/user.model";
import { faGithub, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';



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
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem('token', '');
  }

  login() {

    let url = "localhost:8088/login";
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

}
