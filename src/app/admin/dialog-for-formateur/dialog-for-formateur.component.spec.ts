import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForFormateurComponent } from './dialog-for-formateur.component';

describe('DialogForFormateurComponent', () => {
  let component: DialogForFormateurComponent;
  let fixture: ComponentFixture<DialogForFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
