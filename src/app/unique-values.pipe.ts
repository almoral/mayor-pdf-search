import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueValues'
})
export class UniqueValues implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
