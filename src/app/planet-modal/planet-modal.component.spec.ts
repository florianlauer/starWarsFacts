import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetModalComponent } from './planet-modal.component';

describe('PlanetModalComponent', () => {
  let component: PlanetModalComponent;
  let fixture: ComponentFixture<PlanetModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetModalComponent],
      providers: [NgbActiveModal]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
