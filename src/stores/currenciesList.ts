import { defineStore } from "pinia";
import axios from "axios";
import {
  StateCurrenciesList,
  Valute,
  ValuteRatio,
} from "@/interfaces/currenciesList";
import Utils from "@/helpers/Utils";

export const useValuteStore = defineStore("valute", {
  state: (): StateCurrenciesList => {
    return {
      valute: [],
      selectedValute: "",
    };
  },

  getters: {
    getValute(state) {
      return state.valute;
    },

    getSelectedCurrency(state): Valute | undefined {
      return state.valute.find((item) => item.ID === state.selectedValute);
    },

    getCalculatedValute(state) {
      if (!this.getSelectedCurrency) {
        return [];
      }

      const {
        ID: selectedCurrencyID,
        Value: selectedCurrencyValue,
        Nominal: selectedCurrencyNominal,
      } = this.getSelectedCurrency;

      return state.valute.reduce((result, item) => {
        if (item.ID !== selectedCurrencyID) {
          const { from: CurrencyRateFrom, to: CurrencyRateTo } =
            Utils.convertValute(
              selectedCurrencyValue,
              item.Value,
              selectedCurrencyNominal,
              item.Nominal
            );

          result.push({
            ...item,
            CurrencyRateFrom,
            CurrencyRateTo,
            Increased: (item.Value - item.Previous) / item.Nominal,
          });
        }

        return result;
      }, [] as ValuteRatio[]);
    },
  },

  actions: {
    async fetchValute() {
      await axios
        .get("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((data) => {
          this.valute = Object.keys(data.data.Valute).map(
            (key) => data.data.Valute[key]
          );
        })
        .catch((error) => {
          throw new Error(`Ошибка получения данных в fetchValute ${error}`);
        });
    },

    setSelectedValute(id: string) {
      this.selectedValute = id;
    },
  },
});
