import { UsaChartModel } from './../models/states.model';
import { Injectable } from '@angular/core';
import { COVID_COLORS } from './../../constants/colors';
import { forkJoin, map, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Columns, IState } from '../models/states.model';
@Injectable()
export class StatesService {
  constructor(private apiService: ApiService) {}

  getStates(params: any = {}): Observable<IState[]> {
    return this.apiService.getStates(params);
  }
  getData(): Observable<{ states: IState[]; usData: IState }> {
    let states: Observable<IState[]> = this.apiService.getStates();
    let usData: Observable<IState> = this.apiService.getUsData();
    return forkJoin([states, usData]).pipe(
      map((result: any) => ({
        states: result[0],
        usData: result[1],
      }))
    );
  }

  modifyData(data: any): UsaChartModel[] {
    return Object.keys(data)
      .filter(
        (key: string) =>
          key === Columns.death ||
          key === Columns.positive ||
          key === Columns.recovered ||
          key === Columns.totalResults
      )
      .map((key: string) => ({
        status: [key],
        value: data[key],
        color: COVID_COLORS[key],
        date: new Date(data.dateChecked),
      }));
  }
}
