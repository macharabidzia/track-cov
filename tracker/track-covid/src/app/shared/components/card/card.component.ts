import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() totalCount!: number;
  @Input() covidStatus!: any;
  @Input() color!: string;
  @Input() date!: Date | string;
  constructor() {}

  ngOnInit(): void {}
}
