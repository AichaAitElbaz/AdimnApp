import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressionBesoinItemComponent } from './expression-besoin-item.component';

describe('ExpressionBesoinItemComponent', () => {
  let component: ExpressionBesoinItemComponent;
  let fixture: ComponentFixture<ExpressionBesoinItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpressionBesoinItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressionBesoinItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
