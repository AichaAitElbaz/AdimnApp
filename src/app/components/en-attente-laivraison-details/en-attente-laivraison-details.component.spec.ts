import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAttenteLaivraisonDetailsComponent } from './en-attente-laivraison-details.component';

describe('EnAttenteLaivraisonDetailsComponent', () => {
  let component: EnAttenteLaivraisonDetailsComponent;
  let fixture: ComponentFixture<EnAttenteLaivraisonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnAttenteLaivraisonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAttenteLaivraisonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
