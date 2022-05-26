import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEnCoursComponent } from './item-en-cours.component';

describe('ItemEnCoursComponent', () => {
  let component: ItemEnCoursComponent;
  let fixture: ComponentFixture<ItemEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEnCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
