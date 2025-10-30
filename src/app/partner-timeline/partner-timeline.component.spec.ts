import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerTimelineComponent } from './partner-timeline.component';

describe('PartnerTimelineComponent', () => {
  let component: PartnerTimelineComponent;
  let fixture: ComponentFixture<PartnerTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
