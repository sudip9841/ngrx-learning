import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tab-iframe',
  templateUrl: './tab-iframe.component.html',
  styleUrls: ['./tab-iframe.component.scss']
})
export class TabIframeComponent implements OnInit, OnChanges {
  @Input() src:string='';

  sanitizedUrl:SafeResourceUrl = '';
  constructor(private sanitize:DomSanitizer) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['src']?.currentValue){
      this.sanitizedUrl = this.sanitize.bypassSecurityTrustResourceUrl(changes?.['src'].currentValue);
    }
  }

}
