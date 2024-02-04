import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';

import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './highlight.pipe';
import { ContinuePipe } from './continue.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    HighlightPipe,
    ContinuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
