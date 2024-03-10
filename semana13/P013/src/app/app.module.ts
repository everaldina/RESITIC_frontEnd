import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { DetailsComponent } from './components/details/details.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HeaderStyledComponent } from './components/header-styled/header-styled.component';
import { ButtonStyledComponent } from './components/button-styled/button-styled.component';

const rotasApp: Routes = [
  { path: 'cadastro', component: FormComponent },
  { path: 'lista', component: AppointmentListComponent },
  { path: 'detalhe/:id', component: DetailsComponent },
  { path: 'editar/:id', component: FormComponent },
  { path: '', redirectTo: '/lista', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent,
    DetailsComponent,
    FormComponent,
    HeaderStyledComponent,
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
