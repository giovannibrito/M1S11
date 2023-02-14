import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaptalizePhilipsPipe } from './pipes/captalize-philips.pipe';
import { Ex1Component } from './components/ex1/ex1.component';
import { Ex2Component } from './components/ex2/ex2.component';
import { Ex3Component } from './components/ex3/ex3.component';
import { Ex4Component } from './components/ex4/ex4.component';
import { Ex5Component } from './components/ex5/ex5.component';
import { Ex6Component } from './components/ex6/ex6.component';
import { Ex7Component } from './components/ex7/ex7.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhilipsPipe,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex4Component,
    Ex5Component,
    Ex6Component,
    Ex7Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
