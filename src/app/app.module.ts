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

@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    NameConcatPipe,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
