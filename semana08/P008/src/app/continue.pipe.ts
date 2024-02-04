import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'continue'
})
export class ContinuePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if (value) {
      return value + '...';
    }
    return value;
  }

}
