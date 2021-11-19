import {
  Columns,
  IStateChartStat,
  DataStateModel,
  UsaChartModel,
} from './../../core/models/states.model';
import { StatesService } from './../../core/services/states.service';
import { COVID_COLORS } from './../../constants/colors';
import { Component, OnInit, OnDestroy } from '@angular/core';
import format from 'date-fns/format';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import * as utils from 'src/app/core/utils';
import { takeUntil } from 'rxjs/operators';
import { IState } from 'src/app/core/models/states.model';

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  componentDestroyed$: Subject<boolean> = new Subject();
  chartData: BehaviorSubject<IStateChartStat[]> = new BehaviorSubject(
    [] as IStateChartStat[]
  );
  data$: Observable<DataStateModel> = this.statesService.getData();
  data: any;

  globalStats: UsaChartModel[] = [];

  displayedColumns: string[] = [
    Columns.state,
    Columns.death,
    Columns.positive,
    Columns.total,
    Columns.hospitalizedCurrently,
  ];
  clickedRows = new Set<PeriodicElement>();

  constructor(private statesService: StatesService) {}

  ngOnInit(): void {
    this.data$
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((subscriber: any) => {
        this.data = subscriber;
        this.globalStats = this.statesService.modifyData(this.data.usData);
      });
  }
  getLabels(): string[] {
    let labels = Object.keys(this.clickedRows.values().next().value).filter(
      (item: any) => {
        if (
          item === Columns.death ||
          item === Columns.positive ||
          item === Columns.total ||
          item === Columns.hospitalizedCurrently
        ) {
          return item;
        }
      }
    );
    return labels;
  }

  getChart(): IStateChartStat[] {
    const state: IState | any = this.data.states.find(
      (item: IState) =>
        item.state === this.clickedRows.values().next().value.state
    );
    const chartData = this.getLabels().map((item: string) => {
      return {
        label: utils.deCamelize(item),
        data: [
          { x: format(new Date(2015, 6, 25), 'yyyy-MM-dd'), y: 0 },
          {
            x: format(new Date(state.dateChecked), 'yyyy-MM-dd'),
            y: state[item],
          },
        ],
        borderColor: (COVID_COLORS as any)[item],
        borderWidth: 1,
      };
    });
    return chartData;
  }

  handleTableRowClick(item: any): void {
    this.clickedRows.clear();
    this.clickedRows.add(item);
    this.chartData.next(this.getChart());
  }
  ngOnDestroy(): void {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
