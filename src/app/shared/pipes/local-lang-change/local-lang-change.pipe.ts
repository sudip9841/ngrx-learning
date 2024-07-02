import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localLangChange',
  pure:false
})
export class LocalLangChangePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const lang = localStorage.getItem('lang');
    return lang==='np'?args:value;
  }

}
