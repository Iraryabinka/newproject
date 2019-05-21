import { Component, AfterViewInit } from '@angular/core';
import {Datas} from './datas'
import * as L from 'leaflet';
import { Identifiers} from '@angular/compiler';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements AfterViewInit {
    public title = 'My test App for Internship';
    public isShown = true;
    public myColor = "blue";
    public activeArray = [];


   datas: Datas[] =  [

  {
    id: 1,
    name: 'Parent 1',
   children: [
      {
     name: 'Child 1',
    parent_id: 1,
     },
       {
      name: 'Child 2',
      parent_id: 1,
      },
     ],
  },
  {
   id: 2,
   name: 'Parent 2',
   children: [
     {
   name: 'Child 3',
   parent_id: 2,
                },
    {
     name: 'Child 4',
    parent_id: 2,
                },
    ],
        },
        {
  id: 3,
   name: 'Parent 3',
  children: [
                {
  name: 'Child 5',
  parent_id: 3,
                },
    { name: 'Child 6', parent_id: 3 },
            ],
        },
    ];

    addItemToActive(id){
     return this.activeArray = this.datas.filter(data => data.id === id)
    
    }


    ngAfterViewInit() {

        var mymap = L.map('mapid').setView([51.505, -0.09], 12);

        L.tileLayer(
          'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaXJhY2hlcnZ5YWtvdmEiLCJhIjoiY2p2cWZ2OTB5MmMxZTRhbWdkcjhmeThzciJ9.7Hdp1dETU9f_p9lOcZX12A',
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'your.mapbox.access.token',
          },
        ).addTo(mymap);

     var popup = L.popup();

    function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

     mymap.on('click', onMapClick);
}
}
