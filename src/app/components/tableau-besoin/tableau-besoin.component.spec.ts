import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBesoinComponent } from './tableau-besoin.component';

describe('TableauBesoinComponent', () => {
  let component: TableauBesoinComponent;
  let fixture: ComponentFixture<TableauBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauBesoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
