import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { Routes, RouterModule } from '@angular/router';

const rotasApp: Routes = [
  { path: 'cadastro', component: FormCadastroComponent },
  { path: 'lista', component: AppointmentListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormCadastroComponent,
    AppointmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotasApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
