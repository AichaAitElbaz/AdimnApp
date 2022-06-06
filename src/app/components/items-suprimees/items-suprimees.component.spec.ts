import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSuprimeesComponent } from './items-suprimees.component';

describe('ItemsSuprimeesComponent', () => {
  let component: ItemsSuprimeesComponent;
  let fixture: ComponentFixture<ItemsSuprimeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsSuprimeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSuprimeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
