import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'engToNepNumber',
  pure:false
})
export class EngToNepNumberPipe implements PipeTransform {
  constructor(private translateService:TranslateService){

  }
  transform(value: any, ...args: unknown[]): unknown {
    if (!value) return;
    var mapObj: any = {
      0: '०',
      1: '१',
      2: '२',
      3: '३',
      4: '४',
      5: '५',
      6: '६',
      7: '७',
      8: '८',
      9: '९'
    };
    if(this.translateService.currentLang==='np'){
      value = value?.toString().replace(/0|1|2|3|4|5|6|7|8|9/gi, function (matched: string) {
        return mapObj[matched];
      });
    }
    return value;
  }

}
