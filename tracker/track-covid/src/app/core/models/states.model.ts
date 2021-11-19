export interface IState {
  checkTimeEt: string;
  commercialScore: number;
  dataQualityGrade: number;
  date: number;
  dateChecked: Date;
  dateModified: Date;
  death: number;
  deathConfirmed: number;
  deathIncrease: number;
  deathProbable: number;
  fips: string;
  grade: string;
  hash: string;
  hospitalized: number;
  hospitalizedCumulative: number;
  hospitalizedCurrently: number;
  hospitalizedDischarged: number;
  hospitalizedIncrease: number;
  inIcuCumulative: number;
  inIcuCurrently: number;
  lastUpdateEt: string;
  negative: number;
  negativeIncrease: number;
  negativeRegularScore: number;
  negativeScore: number;
  negativeTestsAntibody: number;
  negativeTestsPeopleAntibody: number;
  negativeTestsViral: number;
  onVentilatorCumulative: number;
  onVentilatorCurrently: number;
  pending: number;
  posNeg: number;
  positive: number;
  positiveCasesViral: number;
  positiveIncrease: number;
  positiveScore: number;
  positiveTestsAntibody: number;
  positiveTestsAntigen: number;
  positiveTestsPeopleAntibody: number;
  positiveTestsPeopleAntigen: number;
  positiveTestsViral: number;
  probableCases: number;
  recovered: number;
  score: number;
  state: string;
  total: number;
  totalTestEncountersViral: number;
  totalTestResults: number;
  totalTestResultsIncrease: number;
  totalTestResultsSource: string;
  totalTestsAntibody: number;
  totalTestsAntigen: number;
  totalTestsPeopleAntibody: number;
  totalTestsPeopleAntigen: number;
  totalTestsPeopleViral: number;
  totalTestsViral: number;
}

export interface IStateChartStat {
  label: string;
  data: { x: Date | string; y: number }[];
  borderColor: string;
  borderWidth: number;
}
export enum Columns {
  state = 'state',
  death = 'death',
  positive = 'positive',
  total = 'total',
  hospitalizedCurrently = 'hospitalizedCurrently',
  recovered = 'recovered',
  totalResults = 'totalResults',
}
export interface UsaChartModel {
  status: any;
  value: number;
  color: string;
  date: Date | string;
}
export interface DataStateModel {
  states: IState[];
  usData: IState;
}
