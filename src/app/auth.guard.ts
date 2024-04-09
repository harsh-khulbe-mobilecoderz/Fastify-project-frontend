import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
    providedIn:"root",
})
export class AuthGuard {
    constructor(private loginService:LoginService,private router:Router) {}

    canActivate(): boolean {
        const token = this.loginService.getToken();
        if (token && this.isTokenValid(token)) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }


      private isTokenValid(token: string): boolean {
        
        const tokenPayload = this.decodeToken(token);
        if (tokenPayload && tokenPayload.exp) {
          const currentTime = Math.floor(Date.now() / 1000);
          return tokenPayload.exp > currentTime;
        }
    
        return false;
      }

      private decodeToken(token: string): any {
        
        const tokenParts = token.split('.');
        if (tokenParts.length === 3) {
          const payload = JSON.parse(atob(tokenParts[1]));
          return payload;
        }
    
        return null;
      }
}