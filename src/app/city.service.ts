import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CityComponentComponent } from './city-component/city-component.component'; // <-- Import HttpModule

@Injectable()
export class CityService {

  url = "http://api.openweathermap.org/data/2.5/weather?id=";
  key = "&appid=413b5f44f21c0660d14b3a3c844dffcd";
  cityids = {
    'seattle': '5809844',
    'sanjose': '5392171',
    'burbank': '5331836',
    'dallas': '5722064',
    'washington': '5815135',
    'chicago': '4887398'
  };
  currentcity = {
    name:'service',
    weather: {
      humidity:'service',
      temp:'service',
      temp_max:'service',
      temp_min:'service',
      main:'service'
    }
  };

  constructor(private _http: Http) {}

  retrieveCity(cityname, callback) {
    this._http.get(this.url + this.cityids[cityname] + this.key).subscribe(
      (response) => { 
        callback(response.json());
      },
      (error) => { 
        console.log(error)    
      }
    );
  }
}
