import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocaltionComponent } from './housing-localtion.component';

describe('HousingLocaltionComponent', () => {
  let component: HousingLocaltionComponent;
  let fixture: ComponentFixture<HousingLocaltionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HousingLocaltionComponent]
    });
    fixture = TestBed.createComponent(HousingLocaltionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
