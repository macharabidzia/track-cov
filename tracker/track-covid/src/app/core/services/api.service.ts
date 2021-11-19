import { IState } from './../models/states.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getStates(params: any = {}): Observable<IState[]> {
    return this.http.get<any>(`http://localhost:3000`, {
      params,
    });
  }
  getUsData(params: any = {}): Observable<IState> {
    return this.http.get<any>(`http://localhost:3000/us`, {
      params,
    });
  }
}
