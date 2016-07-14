import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixUrl'
})
export class FixUrl implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
