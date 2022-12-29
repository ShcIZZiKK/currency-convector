import { UtilsInterface } from "@/interfaces/utils";

class Utils extends UtilsInterface {
  static convertValute(
    valute1: number,
    valute2: number,
    nominal1 = 1,
    nominal2 = 1
  ) {
    const from = valute1 / nominal1 / (valute2 / nominal2);
    const to = valute2 / nominal2 / (valute1 / nominal1);

    return {
      from,
      to,
    };
  }
}

export default Utils;
