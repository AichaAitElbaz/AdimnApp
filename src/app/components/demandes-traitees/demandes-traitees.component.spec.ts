import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesTraiteesComponent } from './demandes-traitees.component';

describe('DemandesTraiteesComponent', () => {
  let component: DemandesTraiteesComponent;
  let fixture: ComponentFixture<DemandesTraiteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesTraiteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesTraiteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
