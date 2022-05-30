import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAttenteItemsComponent } from './en-attente-items.component';

describe('EnAttenteItemsComponent', () => {
  let component: EnAttenteItemsComponent;
  let fixture: ComponentFixture<EnAttenteItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnAttenteItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAttenteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
