import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './user.interface';


@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {

  transform(users: Users, filterStr: string): unknown {
    return users.filter(user => {
      return (
        user.name.includes(filterStr) ||
        user.username.includes(filterStr) ||
        user.email.includes(filterStr) ||
        user.address.street.includes(filterStr) ||
        user.address.suite.includes(filterStr) ||
        user.address.city.includes(filterStr) ||
        user.address.zipcode.includes(filterStr) ||
        user.address.geo.lat.includes(filterStr) ||
        user.address.geo.lng.includes(filterStr) ||
        user.phone.includes(filterStr) ||
        user.website.includes(filterStr) ||
        user.company.name.includes(filterStr) ||
        user.company.catchPhrase.includes(filterStr) ||
        user.company.bs.includes(filterStr)
      );
    });
  }

}