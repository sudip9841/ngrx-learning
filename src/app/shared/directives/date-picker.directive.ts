import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
declare var $: any;

declare var moment: any;

@Directive({
  selector: '[appDatePicker]'
})
export class DatePickerDirective implements AfterViewInit {
  @Input() showDropDownns:boolean = true;
  @Input() startDate:string = '';
  @Input() endDate:string = '';
  @Input() timePicker:boolean = false;
  @Input() singleDatePicker:boolean = true;
  @Input() minDate:string = '';
  @Input() maxDate:string = ''
  @Input() showCustomRangeLabel:boolean = true;


  
  private element:any;
  private dateRanges = {
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  };

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
        const {Today,Yesterday} = that.dateRanges;
        var options:any = {
          showDropdowns: that.showDropDownns,
          timePicker: that.timePicker,
          ranges : that.singleDatePicker ? {Today,Yesterday} : that.dateRanges,
          autoApply :true,
          showCustomRangeLabel:that.showCustomRangeLabel,
          autoUpdateInput:true,
          alwaysShowCalendars :true,
          singleDatePicker:that.singleDatePicker,
          applyClass:'btn-danger',
          minDate:that.minDate ?  moment(new Date(that.minDate)).format('MM/DD/YYYY'):'',
          maxDate:that.maxDate ?  moment(new Date(that.maxDate)).format('MM/DD/YYYY'):'',
        };
        if(that.startDate) options['startDate'] = moment(new Date(that.startDate)).format('MM/DD/YYYY');
        if(that.endDate) options['endDate'] = moment(new Date(that.endDate)).format('MM/DD/YYYY');


        
        that.element.daterangepicker(options, function(start:any, end:any, label:any) { 
          // console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
         
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
