import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ResponseObject } from './login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private service:LoginService
  ) {}

  loginForm:FormGroup;

  ngOnInit():void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const data = {
        email:this.loginForm.value.email,
        password:this.loginForm.value.password,
      }

      this.service.userLogin(data).subscribe(
        (response:ResponseObject) => {
          this.service.setToken(response.token);

          setTimeout(() => {
            console.log('Login successful: ',response);
            this.router.navigate(['home']);
          }, 5000);

          alert("Successfully logged in...")
          
        },
        (error) => {
          console.log("Error while login: ",error.message);
        }
      )
    }
  }
  goToRegisterPage() {
    this.router.navigate(["register"]);
  }
}
