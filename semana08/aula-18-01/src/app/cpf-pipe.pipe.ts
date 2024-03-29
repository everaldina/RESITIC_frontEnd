import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfPipe'
})
export class CpfPipePipe implements PipeTransform {

  transform(value: string): unknown {
    if (value == null || value == undefined || value == '') {
      return value;
    }else{
      if (value.length == 11) {
        return value.substring(0,3) + '.' + value.substring(3,6) + '.' + value.substring(6,9) + '-' + value.substring(9,11);
      }else{
        return value;
      }
    }
  }

}
