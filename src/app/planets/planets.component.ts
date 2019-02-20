import { PlanetModalComponent } from './../planet-modal/planet-modal.component';
import { Planet } from './../model/planet';
import { ApiService } from './../api.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit, OnDestroy {


  subscription: Subscription;
  planets: Planet[] = [];



  constructor(private router: Router, private apiService: ApiService, private modalService: NgbModal) {

  }

  ngOnInit() {
    let i;
    for (i = 1; i < 7; i++) {
      this.subscription = this.apiService.getPlanet(i).subscribe(s => {
        if (s !== undefined) {
          this.planets.push(s);
        }
      });
    }

  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }



  open(planet: Planet) {
    this.apiService.getResidents(planet);
    this.apiService.getFilms(planet);
    const modalRef = this.modalService.open(PlanetModalComponent, { windowClass: 'modal-holder dark-modal', size: 'lg', centered: true });
    modalRef.componentInstance.planet = planet;


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) { }
}
