import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MyHttpServiceService {
  user;
  users;

  constructor(private httpclient: HttpClient) { }

  getUsers(){
    return this.httpclient.get('https://jsonplaceholder.typicode.com/users')

  }

  loadUsers(){
    this.users=this.getUsers();
  }

  postUser() {
    return this.httpclient.post('https://jsonplaceholder.typicode.com/users',{
      name: 'Chelsey Dietrich',
      username: 'Kamren',
    }).pipe(map(data=>{
      console.log(data);
      return data
    }));
  }

  loadUser(){
    //this.posts=this.getPosts();
    this.user=this.postUser();
  }

  getPost(){

  }

  fillUserData(){
    /* this.users.forEach(user => { this.userData.name = user.name }); */
      
    
  }
}


/* #todo
loadUser(): void {
  this.httpclient.get('assets/user.json').subscribe((data)=>this.user=data)
}

getPosts() {
  return this.httpclient.get('https://jsonplaceholder.typicode.com/posts'); //здесь без subscribe но зато с пайпом async в шаблоне
}

postPosts() {
  return this.httpclient.post('https://jsonplaceholder.typicode.com/posts',{
    title: 'foo',
    body: 'bar',
    userId: 1
  }).pipe(map(data=>{
    console.log(data);
    return data
  }));
}

loadPosts(){
  //this.posts=this.getPosts();
  this.posts=this.getPosts()
}
loadPost(){
  //this.posts=this.getPosts();
  this.post=this.postPosts()
} */