import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameConcat'
})
export class NameConcatPipe implements PipeTransform {

  transform(nameuser: string, username: string): string {
    console.log('nameConcat',nameuser,username)
    return (nameuser + ' ('+username+')');
  }

}
