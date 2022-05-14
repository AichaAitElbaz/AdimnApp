import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAttenteLivraisonComponent } from './en-attente-livraison.component';

describe('EnAttenteLivraisonComponent', () => {
  let component: EnAttenteLivraisonComponent;
  let fixture: ComponentFixture<EnAttenteLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnAttenteLivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAttenteLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
