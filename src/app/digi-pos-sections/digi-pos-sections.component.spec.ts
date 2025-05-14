import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigiPosSectionsComponent } from './digi-pos-sections.component';

describe('DigiPosSectionsComponent', () => {
  let component: DigiPosSectionsComponent;
  let fixture: ComponentFixture<DigiPosSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigiPosSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigiPosSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
