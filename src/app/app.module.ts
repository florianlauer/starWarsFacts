import { HTTPListener, HTTPStatus } from './interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { CharactersComponent } from './characters/characters.component';
import { StarshipsComponent } from './starships/starships.component';
import { PlanetModalComponent } from './planet-modal/planet-modal.component';
import { CharacterModalComponent } from './character-modal/character-modal.component';
import { StarshipModalComponent } from './starship-modal/starship-modal.component';

const RxJS_Services = [HTTPListener, HTTPStatus];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    CharactersComponent,
    StarshipsComponent,
    PlanetModalComponent,
    CharacterModalComponent,
    StarshipModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [
    NgbActiveModal,
    ...RxJS_Services,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPListener,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    PlanetModalComponent,
    CharacterModalComponent,
    StarshipModalComponent
  ]
})
export class AppModule { }
