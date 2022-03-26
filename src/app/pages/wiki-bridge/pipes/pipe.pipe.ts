import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class PipePipe implements PipeTransform {
  transform(value: any, arg: any): any {
    //if (arg === '' || arg.length < 1) return value;
    const resultadoWiki = [];
    for (const wiki of value) {
      if (arg.length === 1) {
        if (wiki.title.charAt(0).toLowerCase() === arg.toLowerCase()) {
          resultadoWiki.push(wiki);
        }
      } else {
        if (wiki.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
          resultadoWiki.push(wiki);
        }
      }
    }
    return resultadoWiki;
  }
}
