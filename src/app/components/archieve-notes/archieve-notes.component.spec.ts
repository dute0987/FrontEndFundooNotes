import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchieveNotesComponent } from './archieve-notes.component';

describe('ArchieveNotesComponent', () => {
  let component: ArchieveNotesComponent;
  let fixture: ComponentFixture<ArchieveNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchieveNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchieveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
