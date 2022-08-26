import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RatingComponent} from './rating-component/rating.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
