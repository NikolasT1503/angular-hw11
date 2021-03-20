import { Pipe, PipeTransform } from '@angular/core';
import { Users } from './user.interface';


@Pipe({
  name: 'filter'
})
export class FilterPipePipe implements PipeTransform {

  transform(users: Users, filterStr: string): unknown {
    if (!users) {
      return false
    }
    return users.filter(user => {
      return (
        user.name.toLowerCase().includes(filterStr.toLowerCase()) ||
        user.username.toLowerCase().includes(filterStr.toLowerCase()) ||
        user.email.toLowerCase().includes(filterStr.toLowerCase()) ||
        user.addrstr.toLowerCase().includes(filterStr.toLowerCase())
      );
    });
  }

}