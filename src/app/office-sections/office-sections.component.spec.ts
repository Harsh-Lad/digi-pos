import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSectionsComponent } from './office-sections.component';

describe('OfficeSectionsComponent', () => {
  let component: OfficeSectionsComponent;
  let fixture: ComponentFixture<OfficeSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
