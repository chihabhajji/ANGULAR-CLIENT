import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatPreviewCardsComponent } from './stat-preview-cards.component';

describe('StatPreviewCardsComponent', () => {
  let component: StatPreviewCardsComponent;
  let fixture: ComponentFixture<StatPreviewCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatPreviewCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatPreviewCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
