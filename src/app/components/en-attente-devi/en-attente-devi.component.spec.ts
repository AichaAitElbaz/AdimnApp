import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAttenteDeviComponent } from './en-attente-devi.component';

describe('EnAttenteDeviComponent', () => {
  let component: EnAttenteDeviComponent;
  let fixture: ComponentFixture<EnAttenteDeviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnAttenteDeviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAttenteDeviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
