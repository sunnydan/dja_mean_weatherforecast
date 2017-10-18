import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { CityComponentComponent } from './city-component/city-component.component'; // <-- Import HttpModule
import { CityService } from './city.service';

@NgModule({
  declarations: [
    AppComponent,
    CityComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
