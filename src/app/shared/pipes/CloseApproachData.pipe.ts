import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'closeApproachData'
})
export class CloseApproachDataPipe implements PipeTransform {
  transform(obj: any, keys: string): any {
    if (!obj || !keys) return null;

    const keyArray = keys.split('.');
    return keyArray.reduce((accumulator, currentKey) => {
      return accumulator?.[currentKey];
    }, obj);
  }
}
