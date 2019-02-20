import { People } from './../model/people';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-character-modal',
  templateUrl: './character-modal.component.html',
  styleUrls: ['./character-modal.component.scss']
})
export class CharacterModalComponent implements OnInit {

  @Input() character: People;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
