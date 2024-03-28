import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { ClassesComponent } from './components/classes/classes.component';
import { LabelComponent } from './components/label/label.component';
import { ObjetosComponent } from './components/objetos/objetos.component';
import { PropriedadesComponent } from './components/propriedades/propriedades.component';
import { ValorPropriedadeComponent } from './components/valor-propriedade/valor-propriedade.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CarrinhoComponent,
    ClassesComponent,
    LabelComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
