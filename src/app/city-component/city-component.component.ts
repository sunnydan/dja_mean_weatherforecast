import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from './../city.service';

@Component({
  selector: 'app-city-component',
  templateUrl: './city-component.component.html',
  styleUrls: ['./city-component.component.css']
})

export class CityComponentComponent implements OnInit {

  cityimg = "";
  currentcity;

  constructor(private _route: ActivatedRoute, private _cityService: CityService) {
    this._route.paramMap.subscribe(params => {
      this.cityimg = params.get('cityname') + ".jpg"
      console.log(params.get('cityname'));
      let self = this;
      this._cityService.retrieveCity(params.get('cityname'), (data) => {
        self.currentcity = data;
        console.log(self);
        console.log(self.currentcity);
      });
      console.log("page loaded.")
    })
  }

  ngOnInit() {
  }

}
