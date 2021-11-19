import { IStateChartStat } from './../../../core/models/states.model';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss'],
})
export class AreaChartComponent implements OnInit {
  @Input() chartData: BehaviorSubject<IStateChartStat[]> = new BehaviorSubject(
    [] as IStateChartStat[]
  );
  componentDestroyed$: Subject<boolean> = new Subject();
  myChart: any;
  constructor() {}
  ngOnInit(): void {
    this.chartData
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((subscriber: IStateChartStat[]) => {
        if (this.myChart) this.myChart.destroy();
        const data = {
          datasets: subscriber,
        };
        const config: any = {
          type: 'line',
          data: data,
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        };
        this.myChart = new Chart('myChart', config);
      });
  }

  ngOnDestroy() {
    this.componentDestroyed$.next(true);
    this.componentDestroyed$.complete();
  }
}
