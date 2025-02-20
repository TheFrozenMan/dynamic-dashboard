import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalStatisticComponent } from './animal-statistic.component';

describe('AnimalStatisticComponent', () => {
  let component: AnimalStatisticComponent;
  let fixture: ComponentFixture<AnimalStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalStatisticComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
