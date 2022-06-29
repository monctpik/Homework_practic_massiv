// Задачи на работу с массивами в JavaScript
// В комментариях к коду описать задание.
// Пользуемся только встроенными объектами!
// concat
// 1.	Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);
// reverse
// 2.	Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const array11 = [1, 2, 3];
const array22 = array11.reverse();
console.log(array22);
// push, unshift
// 3.	Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const push1 = [1, 2, 3];
const push2 = push1.push(4, 5, 6);
console.log(push1);
// 4.	Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const unshift1 = [1, 2, 3];
const unshift2 = unshift1.unshift(4, 5, 6);
console.log(unshift1);
// shift, pop
// 5.	Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.
const shift1 = ["js", "css", "html"];
const shift2 = shift1.shift();
console.log(shift1);
// 6.	 Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.
const pop1 = ["js", "css", "html"];
const pop2 = pop1.pop();
console.log(pop1);
// slice
// 7.	Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const slice1 = [1, 2, 3, 4, 5];
const slice2 = slice1.slice(0, 3);
console.log(slice2);
// 8.	Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const slice11 = [1, 2, 3, 4, 5];
const slice22 = slice11.slice(3);
console.log(slice22);
// splice
// 9.	 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const splice1 = [1, 2, 3, 4, 5];
const splice2 = splice1.splice(1, 2);
console.log(splice1);
// 10.	Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const splice11 = [1, 2, 3, 4, 5];
const splice22 = splice11.splice(1, 3);
console.log(splice22);
// 11.	 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const splic1 = [1, 2, 3, 4, 5];
const splic2 = splic1.splice(3, 0, "a", "b", "c");
console.log(splic1);
// 12.	 Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const splic11 = [1, 2, 3, 4, 5];
const splic22 = splic11.splice(1, 0, "a", "b");
const splic23 = splic11.splice(6, 0, "c");
const splic24 = splic11.splice(8, 0, "e");
console.log(splic11);
// sort
// 13.	Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const sort1 = [3, 4, 1, 2, 7];
const sort2 = sort1.sort();
console.log(sort1);
// Object.keys
// 14.	Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
const keys1 = { js: "test", 
jq: "hello", 
css: "world", };
console.log(Object.keys(keys1))

// Во всех задания ниже сделать функцию!!!
// В комментариях к коду описать задание.
// =========================================================
// 1.	Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

const arr = ["one", "two", "three", "for", "five"];
const hasElem = function (arr, string) {
  return arr.includes(string);
};
console.log(hasElem(arr, "six"));

// 2.	Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.
const numbers = [1,2,3,4,5,6,7,8,9,10]
const hasNumber = function(number){
    return numbers.includes(number)
}
console.log(hasNumber(55));
// 3.	Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true  [2,2,1], а если нет - вернуть false [1,2,1].
const numbers1= [1,2,33,33,4,5]
const dublicates = function(numbers1){
    return numbers1.some(function(element, i, numbers1){
        return element === numbers1[i+1];
    })
}
console.log(dublicates(numbers1))
// 4.	Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()
function randomNumbers(min,max){
let arr = []    
for(let i=0; i<10; i++){
    arr.push(Math.random() * (max-min)+min)
}
return arr
}
console.log(randomNumbers(5,33))
// 5.	Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
const arr1 = [12, 15, 20, 25, 59, 79];

const arithmeticAverage = function(arr1) {
if(arr1.length !== 0 ){    return (
    arr1.reduce(function (prevNum, currentNum) {
      return prevNum + currentNum;
    }) / arr1.length
  );
}
return 'Error'
};

 console.log(arithmeticAverage(arr1))

