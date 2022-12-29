export type ID = string | null;

export interface StateCurrenciesList {
  valute: Valute[];
  selectedValute: ID;
}

export interface Valute {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export interface ValuteRatio extends Valute {
  CurrencyRateFrom: number;
  CurrencyRateTo: number;
  Increased: number;
}
