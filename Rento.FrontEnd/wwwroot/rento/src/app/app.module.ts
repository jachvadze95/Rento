import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRountes } from '../Routing/RounterConfig';
import { AppComponent } from './app.component';
import { TripComponent } from '../Pages/Trip/trip.component';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from '../Compontents/Map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      AppRountes.Pages
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAuP9KInYJsAhrlwMBjK9OD_pxRFLORzvo'
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
 }
