import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauBesoinSendedComponent } from './tableau-besoin-sended.component';

describe('TableauBesoinSendedComponent', () => {
  let component: TableauBesoinSendedComponent;
  let fixture: ComponentFixture<TableauBesoinSendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauBesoinSendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauBesoinSendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
