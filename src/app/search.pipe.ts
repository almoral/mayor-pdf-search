import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class Search implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
