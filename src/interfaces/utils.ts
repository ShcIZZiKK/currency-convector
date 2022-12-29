export abstract class UtilsInterface {
  static convertValute: (
    valute1: number,
    valute2: number,
    nominal1: number,
    nominal2: number
  ) => ConvertValute;
}

interface ConvertValute {
  from: number;
  to: number;
}
