/*
Задача 3-4
Суммирование значений свойств объекта
Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
Функция считает общую сумму зарплаты работников и возвращает ее. 
Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
*/
const countTotalSalary = function (employees) {
  "use strict";
  let symbol = Object.values(employees);
  let result = 0;
  for (let i = 0; i < symbol.length; i += 1) {
    result += symbol[i];
  }
  return result;
  // Write code under this line
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
