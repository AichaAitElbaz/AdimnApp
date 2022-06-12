import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAttenteDevisComponent } from './en-attente-devis.component';

describe('EnAttenteDevisComponent', () => {
  let component: EnAttenteDevisComponent;
  let fixture: ComponentFixture<EnAttenteDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnAttenteDevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAttenteDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
