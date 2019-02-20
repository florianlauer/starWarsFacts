import { Starship } from './../model/starship';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-starship-modal',
  templateUrl: './starship-modal.component.html',
  styleUrls: ['./starship-modal.component.scss']
})
export class StarshipModalComponent implements OnInit {

  @Input() starship: Starship;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
}
