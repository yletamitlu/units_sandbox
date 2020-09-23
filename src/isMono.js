/** Проверка массива на монотонность */
/** Например, isMono([0, 1, 5, 9, 15]) вернет true */
export function isMono(values) {
  let increase = true;
  let decrease = true;
  let i = 0;

  for (i; i < values.length - 1; ++i) {
    if (values[i] > values[i+1]) {
      increase = false;
    }

    if (values[i] < values[i+1]) {
      decrease = false;
    }
  }

  return increase || decrease;
}
