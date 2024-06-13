import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import * as $ from 'jquery';
declare var $: any;

declare var moment: any;

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  dateControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    let that = this;
    $(document).ready(function() {
      $('#config-text').keyup(((event:any)=>{
        const value = $(event.currentTarget).val() as string;
        eval(value);
      }));
      
      $('.configurator input, .configurator select').change(function() {
        updateConfig();
      });

      $('.demo i').click(function(this: HTMLButtonElement) {
        $(this).parent().find('input').click();
      });

      $('#startDate').daterangepicker({
        singleDatePicker: true,
        startDate: moment().subtract(6, 'days')
      });

      $('#endDate').daterangepicker({
        singleDatePicker: true,
        startDate: moment()
      });

      updateConfig();

      function updateConfig() {
        var options:any = {
          showDropdowns: true,
          timePicker: true,
          ranges : {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
          },
          startDate: "06/22/2024",
          endDate: "06/12/2024",
          // "autoApply" :true,
          showCustomRangeLabel:true,
          autoUpdateInput:true,
          alwaysShowCalendars :false,
          singleDatePicker:false,
          applyClass:'btn-danger',
          minDate:'',
          maxDate:''
        };
        
        $('#config-demo').daterangepicker(options, function(start:any, end:any, label:any) { 
          console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')'); 
          that.dateControl.setValue(start.format('YYYY-MM-DD HH:mm:ss') +" "+end.format('YYYY-MM-DD HH:mm:ss'));
        });;
        
      }
    });
  }

}
