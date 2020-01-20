import { Component } from '@angular/core';

@Component({
    selector: 'map',
    styles: ['agm-map { height: 300px; /* height is required */ }'],
    templateUrl: './map.component.html',
  })
  export class MapComponent {
    latitude = -28.68352;
    longitude = -147.20785;
    mapType = 'satellite';
  }