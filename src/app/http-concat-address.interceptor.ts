import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpConcatAddressInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // возвращает Observable - наблюдаемый объект
    return next.handle(request).pipe(
      //метод который применяется для предварительного преобразования отправляемых объектом Observable данных и содержит разные операторы для преобразования или управления объектом
      map((event: HttpEvent<any>) => {
        // применяет функцию, которая написана в {} к каждому объекту Observable, который указан в (), в данном случае к event
        if (event instanceof HttpResponse) {
          // если тип eventa HttpResponse, то
          //const modEvent = event.clone({body: {addressStr: event.body.address.zipcode+' '+event.body.address.city+' '+event.body.address.street+' '+event.body.address.suite}});
          //верхняя строчка не получилась, потому что event.body содержит массив объектов, а уж потом в каждом из них есть поля address.zipcode и  тд.

          console.log('event body', event.body); // - это массив объектов, нужно для каждого элемента из массива применить map

          let new_body = event.body.map((item) => {
            //console.log(item);
            item['addrstr'] =
              item.address.zipcode +
              ' ' +
              item.address.city +
              ' ' +
              item.address.street +
              ' ' +
              item.address.suite;
            return item;
          });

          console.log('new_body', new_body);

          const modEvent = event.clone({ body: new_body }); //здесь внутри {} для каждого объекта внутри response пробежаться и преобразовать address с помощью стрелочной функции

          return modEvent;
        }
      })
    );
  }
}
