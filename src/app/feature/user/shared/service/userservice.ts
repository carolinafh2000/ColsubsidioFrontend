import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'http://localhost:8080/api/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.userUrl + 'listuser');
  }

  public save(user: User): Observable<any>{
    return this.httpClient.post<any>(this.userUrl + 'createuser', user);
  }

}