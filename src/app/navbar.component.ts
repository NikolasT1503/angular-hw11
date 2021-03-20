import { Component, OnInit } from '@angular/core';
import { MyHttpServiceService } from './http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  constructor(public myHttp: MyHttpServiceService, private router: Router){}

  ngOnInit(): void {
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
