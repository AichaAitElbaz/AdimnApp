import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefuseeItemsComponent } from './refusee-items.component';

describe('RefuseeItemsComponent', () => {
  let component: RefuseeItemsComponent;
  let fixture: ComponentFixture<RefuseeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefuseeItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefuseeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
