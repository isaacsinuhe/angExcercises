import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let str = ''
    value.forEach(element => {
      str += `${element}`
    })
    return str
  }

}
