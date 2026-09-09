import {
  printIonError
} from "./chunk-KZO45W4F.js";

// node_modules/@ionic/core/dist/esm/input.utils-rqoH22pW.js
var getCounterText = (value, maxLength, counterFormatter) => {
  const valueLength = value == null ? 0 : value.toString().length;
  const defaultCounterText = defaultCounterFormatter(valueLength, maxLength);
  if (counterFormatter === void 0) {
    return defaultCounterText;
  }
  try {
    return counterFormatter(valueLength, maxLength);
  } catch (e) {
    printIonError("[ion-input] - Exception in provided `counterFormatter`:", e);
    return defaultCounterText;
  }
};
var defaultCounterFormatter = (length, maxlength) => {
  return `${length} / ${maxlength}`;
};

export {
  getCounterText
};
//# sourceMappingURL=chunk-MFZGDIEX.js.map
