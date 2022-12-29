import { Valute } from "@/interfaces/currenciesList";

interface ValuteConvert extends Valute {
  CurrencyRateFrom: number;
  CurrencyRateTo: number;
}

export interface StateConverter {
  selectedLeft: string;
  selectedRight: string;
}

export interface ResultConvertValute {
  from: ValuteConvert | null;
  to: ValuteConvert | null;
}
