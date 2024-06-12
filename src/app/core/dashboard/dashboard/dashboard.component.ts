import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var moment: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  counter = 0;

  constructor() { }

  ngOnInit(): void {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start:any, end:any, label:any) {
      console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });
  }

}
