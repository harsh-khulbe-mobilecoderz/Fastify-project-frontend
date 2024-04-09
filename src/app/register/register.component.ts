import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private formBuilder: FormBuilder,
    private router: Router,private service: RegisterService) { }

  registerForm: FormGroup;


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const data = {
        name:this.registerForm.value.name,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
      }

      this.service.userRegister(data).subscribe(
        (response) => {
          alert("Registration is successful...")
          setTimeout(() => {
            console.log('Register successful: ',response);
          this.router.navigate(['login']);
          }, 5000);
          
        },
        (error) => {
          console.log("Error while register: ",error);
        }
      )
    }
  }


  goToLoginPage() {
    this.router.navigate(["login"]);
  }

}
