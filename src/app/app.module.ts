import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpConcatAddressInterceptor } from './http-concat-address.interceptor';
import { MyHttpServiceService } from './http-service.service';
import { NameConcatPipe } from './name-concat.pipe';
import { TableComponentComponent } from './table-component/table-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipePipe } from './filter-pipe.pipe';
import { MaterialTableComponent } from './material-table/material-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { Comp404Component } from './comp404/comp404.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    NameConcatPipe,
    FilterPipePipe,
    MaterialTableComponent,
    Comp404Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    MyHttpServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConcatAddressInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
