import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterModalComponent } from './character-modal.component';

describe('CharacterModalComponent', () => {
  let component: CharacterModalComponent;
  let fixture: ComponentFixture<CharacterModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterModalComponent],
      providers: [
        NgbActiveModal
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
