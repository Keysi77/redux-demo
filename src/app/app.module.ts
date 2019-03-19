import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';



// REDUX2 - design pattern ktory pomnecha vsetky data v jednom JS objekte



@NgModule({
  
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
