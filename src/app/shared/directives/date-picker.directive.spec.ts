import { ElementRef } from '@angular/core';
import { DatePickerDirective } from './date-picker.directive';
import { NgControl } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

describe('DatePickerDirective', () => {
  let elementRef:ElementRef;
  let ngControl:NgControl;
  beforeEach(()=>{
    TestBed.configureTestingModule({});
    elementRef = TestBed.inject(ElementRef);
    ngControl = TestBed.inject(NgControl);
  });

  it('should create an instance', () => {
    const directive = new DatePickerDirective(elementRef,ngControl);
    expect(directive).toBeTruthy();
  });
});
