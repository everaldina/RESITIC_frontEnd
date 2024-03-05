import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DetailsComponent } from './components/details/details.component';
import { FormComponent } from './components/form/form.component';

import { Router, Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { VerticalLineComponent } from './components/vertical-line/vertical-line.component';
import { ButtonStyledComponent } from './components/button-styled/button-styled.component';


const rotasApp: Routes = [
  { path: 'cadastro', component: FormComponent },
  { path: 'lista', component: AppointmentListComponent },
  { path: 'detalhe/:id', component: DetailsComponent },
  { path: 'editar/:id', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    DetailsComponent,
    FormComponent,
    LoginComponent,
    VerticalLineComponent,
    ButtonStyledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rotasApp),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
