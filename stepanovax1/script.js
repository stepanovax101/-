const easyJS = {
    sum: (a, b) => a + b, // Сумма двух чисел
    
    difference: (a, b) => a - b, // Разность двух чисел
  
    umnozhenie: (a, b) => a * b, // Произведение двух чисел
  
    chast: (a, b) => (b === 0) ? "Деление на ноль!" : a / b, // Частное двух чисел (с проверкой на деление на ноль)
  
    toUpperCase: (str) => str.toUpperCase(), // Преобразование строки в верхний регистр
  
    toLowerCase: (str) => str.toLowerCase(), // Преобразование строки в нижний регистр
  
    concatenateStrings: (str1, str2) => str1 + str2, // Объединение двух строк

    isChet: (num) => num % 2 === 0, // Проверка, является ли число четным

    isNeChet: (num) => num % 2 !== 0, // Проверка, является ли число нечетным
  };

  window.easyJS = easyJS;

console.log(easyJS.concatenateStrings('Привет ', 'Как дела'));
alert(easyJS.umnozhenie(7, 89));
alert(easyJS.difference(30, 15));