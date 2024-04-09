import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { ResponseObject } from './home.interface';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service: HomeService, private loginService: LoginService, private router: Router) { }
  users: any[] = [];
  editIndex: number = -1;
  loadAllUsers() {
    this.service.listAllUsers().subscribe(
      (response: ResponseObject) => {
        console.log('Successfully displayed all the users: ', response);
        this.users = response.users;
      },
      (error) => {
        console.log("Error while login: ", error.message);
      }
    )
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  onEditUser(index: number) {
    this.editIndex = index;
  }
  onSaveUser(index: number) {

    const updatedUser = this.users[index];
    this.service.editUser(updatedUser).subscribe((response: ResponseObject) => {
      console.log('Successfully edited user: ', response);
      this.editIndex = -1;
    },
      (error) => {
        console.log("Error while editing user: ", error.message);
      });
  }

  onDeleteUser(index: number) {
    // const deletedUser = this.users[index];
    this.service.deleteUser().subscribe((response: ResponseObject) => {
      console.log('Successfully deleted user: ', response);
      this.loadAllUsers();
      this.editIndex = -1;
    },
      (error) => {
        console.log("Error while deleting the user: ", error.message);
      });
  }

  onLogout() {
    this.loginService.removeToken();
      this.router.navigate(['/login']);
  //   this.service.logoutUser().subscribe(response=> {
  //     console.log('Successfully logged out: ', response);
      
  //   },
  //     (error:any) => {
  //       console.log("Error while deleting the user: ", error.message);
  //     });

  // }
  }
}
