import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orbitalData'
})
export class OrbitalDataPipe implements PipeTransform {
  transform(obj: any, keys: string): any {
    if (!obj || !keys) return null;

    const keyArray = keys.split('.');
    return keyArray.reduce((accumulator, currentKey) => {
      return accumulator?.[currentKey];
    }, obj);
  }
}
