import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GradebookComponent } from './gradebook/gradebook.component';

@NgModule({
  declarations: [
    AppComponent,
    GradebookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Module Import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
