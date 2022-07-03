import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteDevisFournisseursComponent } from './attente-devis-fournisseurs.component';

describe('AttenteDevisFournisseursComponent', () => {
  let component: AttenteDevisFournisseursComponent;
  let fixture: ComponentFixture<AttenteDevisFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteDevisFournisseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteDevisFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
