/** Проверка массива на монотонность */
/** Например, isMono([0, 1, 5, 9, 15]) вернет true */

export function isMono(values) {
    const asc = (values[0] <= values[values.length - 1]);
    let result = true;
    values.forEach((item, index) => {
        if (values[index + 1]) {
            const is = asc ? item <= values[index + 1] : item >= values[index + 1];
            if (!is) result = false;
        }
    });

    return result;
}
