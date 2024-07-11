import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabIframeComponent } from './tab-iframe.component';

describe('TabIframeComponent', () => {
  let component: TabIframeComponent;
  let fixture: ComponentFixture<TabIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabIframeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
