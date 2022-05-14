import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAttentePaiementComponent } from './en-attente-paiement.component';

describe('EnAttentePaiementComponent', () => {
  let component: EnAttentePaiementComponent;
  let fixture: ComponentFixture<EnAttentePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnAttentePaiementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAttentePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
