import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaubackComponent } from './tableauback.component';

describe('TableaubackComponent', () => {
  let component: TableaubackComponent;
  let fixture: ComponentFixture<TableaubackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableaubackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaubackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
