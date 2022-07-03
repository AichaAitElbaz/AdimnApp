import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteDevisDetailsComponent } from './attente-devis-details.component';

describe('AttenteDevisDetailsComponent', () => {
  let component: AttenteDevisDetailsComponent;
  let fixture: ComponentFixture<AttenteDevisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttenteDevisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteDevisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
