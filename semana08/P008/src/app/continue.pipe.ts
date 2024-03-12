import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continue'
})
export class ContinuePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (value) {
      if (typeof value !== 'string') {
        return value;
      }

      const isUpperCase = (str:string) => str === str.toUpperCase();
      let transform = value as string;
      transform = transform.trim();
      if (isUpperCase(transform[0]))
        return value + '...';
      else
        return '... ' + value + '...';
    }
    return value;
  }

}
