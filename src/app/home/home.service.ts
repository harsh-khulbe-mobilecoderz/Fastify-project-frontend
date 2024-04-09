import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class HomeService {
    constructor(private http: HttpClient) {}


    listAllUsers() {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.getToken()}`
        });
        return this.http.get("http://localhost:8000", { headers });
    }

    editUser(updatedUser: any) {
        
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.getToken()}`
        });
        return this.http.put("http://localhost:8000", updatedUser, { headers });
    }

    deleteUser() {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.getToken()}`
        })
        return this.http.delete("http://localhost:8000", { headers });
    }

    logoutUser() {
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${this.getToken()}`
        })
        return this.http.post("http://localhost:8000/logout", {headers});
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }
}