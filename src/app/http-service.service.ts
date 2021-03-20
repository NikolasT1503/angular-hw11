import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User, Users } from './user.interface';


@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {
  user;
  users;

  constructor(private httpclient: HttpClient) { }

  getUsers(): Observable<Users>{
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users') as Observable<Users>;
  }

  loadUsers(){
    this.users=this.getUsers();
  }

  loadUser(){
    //this.posts=this.getPosts();
    /* this.user=this.postUser(); */
  }

  deleteUser(i: number) {
    return this.httpclient
      .delete('https://jsonplaceholder.typicode.com/users/' + i)
      .pipe(
        map((data) => {
          return data;
        })
      )
      .subscribe((data) => {
        console.log('delete', data);
      });
  }

  postUser(user: User) {
    return this.httpclient
      .post('https://jsonplaceholder.typicode.com/users', user)
      .pipe(
        map((data) => {
          return data;
        })
      )
      .subscribe((data) => {
        console.log('Добавление POST', data);
      });
  }
  
}