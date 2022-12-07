import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
declare var vietmapgl:any;
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }
  map:any;
  ngOnInit(): void {
    this.addTileMap();
    this.addMarker();
  }
  addTileMap(){
    this.map = new vietmapgl.Map({
      container: 'map',
      style: 'https://maps.vietmap.vn/mt/tm/style.json?apikey=YOUR_API_KEY', // stylesheet location
      center: [106.69799977311857,10.772520403841128], // starting position [lng, lat]
      zoom: 15,
      pitch:90 // starting zoom
      });
  }
  addMarker(){
    //add marker to map
    new vietmapgl.Marker()
    .setLngLat([106.69799977311857, 10.772520403841128])
    .addTo(this.map);
  }
}
