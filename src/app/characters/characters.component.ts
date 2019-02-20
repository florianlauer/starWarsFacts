import { CharacterModalComponent } from './../character-modal/character-modal.component';
import { Router } from '@angular/router';
import { People } from './../model/people';
import { ApiService } from './../api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  characters: People[] = [];


  constructor(private router: Router, private apiService: ApiService, private modalService: NgbModal) {
  }

  ngOnInit() {
    let i;
    for (i = 1; i < 5; i++) {
      this.subscription = this.apiService.getCharacter(i).subscribe(s => {
        if (s !== undefined) {
          this.characters.push(s);
        }
      });
    }

  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  open(character: People) {
    this.apiService.getFilms(character);
    this.apiService.getHomeWorld(character);
    this.apiService.getSpecies(character);
    this.apiService.getVehicles(character);
    this.apiService.getStarships(character);
    const modalRef = this.modalService.open(CharacterModalComponent,
      { windowClass: 'modal-holder dark-modal', size: 'lg', centered: true });
    modalRef.componentInstance.character = character;


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
