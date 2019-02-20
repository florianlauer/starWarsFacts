import { StarshipModalComponent } from './../starship-modal/starship-modal.component';
import { Starship } from './../model/starship';
import { ApiService } from './../api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  subscription: Subscription;
  starships: Starship[] = [];



  constructor(private router: Router, private apiService: ApiService, private modalService: NgbModal) {

  }

  ngOnInit() {
    let i;
    for (i = 1; i < 11; i++) {
      this.subscription = this.apiService.getStarship(i).subscribe(s => {
        if (s !== undefined) {
          this.starships.push(s);
        }
      });
    }

  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }

  open(starship: Starship) {
    this.apiService.getPilots(starship);
    this.apiService.getFilms(starship);
    const modalRef = this.modalService.open(StarshipModalComponent, { windowClass: 'modal-holder dark-modal', size: 'lg', centered: true });
    modalRef.componentInstance.starship = starship;


  }

}
