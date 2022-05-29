import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseurReponseComponent } from './fournisseur-reponse.component';

describe('FournisseurReponseComponent', () => {
  let component: FournisseurReponseComponent;
  let fixture: ComponentFixture<FournisseurReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseurReponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseurReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
