import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
declare var $: any;

declare var moment: any;

@Directive({
  selector: '[appDatePicker]'
})
export class DatePickerDirective implements AfterViewInit {
  private element:any;

  constructor(private elementRef:ElementRef, private control:NgControl) { 
    this.element = $(this.elementRef.nativeElement);
  }

  ngAfterViewInit(): void {

    let that = this;
    $(document).ready(function() {

      $('.configurator input, .configurator select').change(function() {
        updateConfig();
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
          // startDate: moment(new Date("2024-06-11")).format('DD/MM/YYYY'),
          // endDate: moment(new Date("2024-06-11")).format('DD/MM/YYYY'),
          autoApply :true,
          showCustomRangeLabel:true,
          autoUpdateInput:true,
          alwaysShowCalendars :false,
          singleDatePicker:true,
          applyClass:'btn-danger',
          minDate:'',
          maxDate:'',
        };
        
        that.element.daterangepicker(options, function(start:any, end:any, label:any) { 
          console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
         
          const startDate = options?.timePicker ? start.format('YYYY-MM-DD HH:mm:ss') : start.format('YYYY-MM-DD');
          const endDate = options?.timePicker ? end.format('YYYY-MM-DD HH:mm:ss') : end.format('YYYY-MM-DD');
          const value = options?.singleDatePicker ? startDate : [startDate,endDate];

          //set the formcontrol value;
          that.control.control?.setValue(value);
        });;
        
      }
    });
    
  }

}
