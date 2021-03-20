import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Comp404Component } from './comp404/comp404.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { NavbarComponent } from './navbar.component';
import { TableComponentComponent } from './table-component/table-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'table2', 
    pathMatch: 'full'
  },
  {
    path: 'table1',
    component: TableComponentComponent,   
  },
  {
    path: 'table2',
    component: MaterialTableComponent,   
  },
  {
    path: '404',
    component: Comp404Component,
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
