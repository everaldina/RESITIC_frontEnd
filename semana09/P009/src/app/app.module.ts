import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectComponent } from './components/project/project.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routesApp: Routes = [
  { path: 'projects/:id', component: ProjectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routesApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
