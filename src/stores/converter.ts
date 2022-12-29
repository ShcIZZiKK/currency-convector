import { defineStore } from "pinia";
import { StateConverter } from "@/interfaces/converter";
import { useValuteStore } from "@/stores";
import { ResultConvertValute } from "@/interfaces/converter";
import Utils from "@/helpers/Utils";

export const useConverterStore = defineStore("converter", {
  state: (): StateConverter => {
    return {
      selectedLeft: "",
      selectedRight: "",
    };
  },

  getters: {
    getSelected(state) {
      return {
        from: state.selectedLeft,
        to: state.selectedRight,
      };
    },

    getConvertValute(state) {
      const valuteStore = useValuteStore();

      if (!valuteStore.getValute.length) {
        return null;
      }

      const result = {
        from: null,
        to: null,
      } as ResultConvertValute;

      const leftValute = valuteStore.getValute.find((item) => {
        return item.ID === state.selectedLeft;
      });
      const rightValute = valuteStore.getValute.find((item) => {
        return item.ID === state.selectedRight;
      });

      if (leftValute && rightValute) {
        const { from: CurrencyRateFrom, to: CurrencyRateTo } =
          Utils.convertValute(
            leftValute.Value,
            rightValute.Value,
            leftValute.Nominal,
            rightValute.Nominal
          );

        result.from = {
          ...leftValute,
          CurrencyRateFrom,
          CurrencyRateTo,
        };

        result.to = {
          ...rightValute,
          CurrencyRateFrom: CurrencyRateTo,
          CurrencyRateTo: CurrencyRateFrom,
        };
      }

      return result;
    },
  },

  actions: {
    changeSelectedLeftValute(leftValuteID: string) {
      this.selectedLeft = leftValuteID;
    },

    changeSelectedRightValute(rightValuteID: string) {
      this.selectedRight = rightValuteID;
    },

    swapValute() {
      const tempId = this.selectedRight;

      this.selectedRight = this.selectedLeft;
      this.selectedLeft = tempId;
    },
  },
});
