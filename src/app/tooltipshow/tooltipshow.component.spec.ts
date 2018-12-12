import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipshowComponent } from './tooltipshow.component';

describe('TooltipshowComponent', () => {
  let component: TooltipshowComponent;
  let fixture: ComponentFixture<TooltipshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
