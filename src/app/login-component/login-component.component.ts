import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User} from "../shared/models/user.model";
import {LoginService} from "../shared/services/login.service";
import { faGithub, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {AppService} from "../shared/services/app.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../auth/api.service";


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
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  public loginError: string;

  constructor(
    private app: AppService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    if(this.loginForm.valid) {
      this.apiService.login(this.loginForm.value)
        .subscribe((data) => {
          console.log(data);
          if(data.status === 200 && !data.body.statusText) {
            this.router.navigate(['/']);
          } else {
            this.loginError = data.body.statusText;
          }
        },
          error => this.loginError = error
        )
    }
  }
}
