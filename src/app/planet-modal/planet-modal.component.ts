import { Planet } from './../model/planet';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-planet-modal',
  templateUrl: './planet-modal.component.html',
  styleUrls: ['./planet-modal.component.scss']
})
export class PlanetModalComponent implements OnInit {

  @Input() planet: Planet;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
}
