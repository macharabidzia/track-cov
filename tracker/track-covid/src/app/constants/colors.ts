export enum COLORS {
  success = '#1CB142',
  danger = '#6236FF',
  warning = '#F9345E',
  palette = '#FA6400',
  black = '#000000',
  darkBlue = '#001b66',
}
export const COVID_COLORS: any = {
  recovered: COLORS.success,
  death: COLORS.danger,
  positive: COLORS.warning,
  totalResults: COLORS.palette,
  total: COLORS.black,
  hospitalizedCurrently: COLORS.darkBlue,
};
