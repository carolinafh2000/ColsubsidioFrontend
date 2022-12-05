import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/model/user';
import { UserService } from '../../shared/service/userservice';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users!: User[];

  selectedUser!: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
        this.cargarProductos();

  }

  cargarProductos(): void {
    this.userService.list().subscribe(
      data => {
        this.users = data;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
