import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAttenteViremenetComponent } from './en-attente-viremenet.component';

describe('EnAttenteViremenetComponent', () => {
  let component: EnAttenteViremenetComponent;
  let fixture: ComponentFixture<EnAttenteViremenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnAttenteViremenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAttenteViremenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
