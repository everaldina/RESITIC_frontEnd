import { Injectable } from '@angular/core';
import { Appointment } from './appointment';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppointmentDataService {
  endpoint = 'https://p013-1bbb3-default-rtdb.firebaseio.com/appointments';
  id: number = 0;
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  addAtendimento(atendimento: Appointment) {
    atendimento.id = this.id;
    this.id++;
    this.http
      .post(this.endpoint + `/${atendimento.id}`, atendimento)
      .subscribe((response) => {
        console.log(response);
      });
  }

  getAtendimentos(): Observable<Appointment[]>{
    return this.http
      .get<Appointment[]>(this.endpoint)
      .pipe(retry(2), catchError(this.handleError));
  }

  getAtendimento(id: number): Observable<Appointment> {
    return this.http
      .get<Appointment>(this.endpoint + `/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateAtendimento(app: Appointment): Observable<Appointment> {
    return this.http
      .put<Appointment>(this.endpoint + `/${app.id}`, JSON.stringify(app), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }

    return throwError(() => new Error('errorMessage'));
  }
}
