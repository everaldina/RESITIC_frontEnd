import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteDiretivaDirective } from './teste-diretiva.directive';
import { ForModificadoDirective } from './for-modificado.directive';

@NgModule({
  declarations: [
    AppComponent,
    TesteDiretivaDirective,
    ForModificadoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
