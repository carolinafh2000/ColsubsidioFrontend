import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNull } from 'util';
import { Phones, User } from '../../shared/model/user';
import { UserService } from '../../shared/service/userservice';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  number = null;
  citycode = null;
  countrycode = null;
  name = '';
  email = '';
  password = '';
  phones = Array<Phones>;
  constructor(
    private userService: UserService, 
    private toastr: ToastrService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const phones: Array<Phones> = [
      {number: this.number, citycode: this.citycode, countrycode: this.countrycode}
    ]
    const user = new User(this.name, this.email, this.password, phones);    
    this.userService.save(user).subscribe(
      data =>{
        var message:string = data;
        console.log("DATAAAAAAAAAAAAA");
        console.log(data);
        console.log("MESSAGE");
        console.log(message);

        this.toastr.success(data.mensaje , 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/list']);
      },
      err =>{
        this.toastr.error(err.error.mensaje, 'Fail', 
        {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/create']);
      }
    );
  }
}
