import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationsMarqueeComponent } from './integrations-marquee.component';

describe('IntegrationsMarqueeComponent', () => {
  let component: IntegrationsMarqueeComponent;
  let fixture: ComponentFixture<IntegrationsMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegrationsMarqueeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrationsMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
