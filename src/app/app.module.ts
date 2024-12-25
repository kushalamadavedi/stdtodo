import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { stdtodocomponent } from 'src/shared/component/stdtodo/stdtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    stdtodocomponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
