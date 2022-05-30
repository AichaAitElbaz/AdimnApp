import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnCoursItemsComponent } from './en-cours-items.component';

describe('EnCoursItemsComponent', () => {
  let component: EnCoursItemsComponent;
  let fixture: ComponentFixture<EnCoursItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnCoursItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnCoursItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
