import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent {
  constructor(private router: Router) {}
  goToLoginPage() {
    this.router.navigate(["login"]);
  }
  goToRegisterPage() {
    this.router.navigate(["register"]);
  }
}
