import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from './http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-homework11-httpclientInterceptor';
  navbarOpen = false;

  constructor(public myHttp: MyHttpServiceService, private router: Router){

  }

  ngOnInit(){
  }

  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen;
  }

  goTable1() {
    this.router.navigate(['table1']);
  }

  goTable2() {
    this.router.navigate(['table2']);
  }

}
