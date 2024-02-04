import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(texto: string): string {
    if (!texto) {
      return texto;
    }

    const regex = /<span class="searchmatch">(.*?)<\/span>/gi;
    const match = regex.exec(texto);

    if (match) {
      const termo = match[1];
      return texto.replace(regex, `<b>${termo}</b>`);
    } else {
      return texto;
    }
  }

}
