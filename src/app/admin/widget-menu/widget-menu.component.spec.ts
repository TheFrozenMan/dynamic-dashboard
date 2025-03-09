import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMenuComponent } from './widget-menu.component';

describe('WidgetMenuComponent', () => {
  let component: WidgetMenuComponent;
  let fixture: ComponentFixture<WidgetMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
