import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseursResponsesDetailsComponent } from './fournisseurs-responses-details.component';

describe('FournisseursResponsesDetailsComponent', () => {
  let component: FournisseursResponsesDetailsComponent;
  let fixture: ComponentFixture<FournisseursResponsesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseursResponsesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseursResponsesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
