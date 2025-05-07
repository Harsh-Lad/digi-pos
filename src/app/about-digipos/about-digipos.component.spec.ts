import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDigiposComponent } from './about-digipos.component';

describe('AboutDigiposComponent', () => {
  let component: AboutDigiposComponent;
  let fixture: ComponentFixture<AboutDigiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutDigiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDigiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
