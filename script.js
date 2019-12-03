
///////////////////////////1///////////////////////////////
let somearray = [0, 1, 2, 3, 4, 5, ];

function getMaxOfArray(somearray) {
    return Math.max.apply(null,somearray);
}

function getMinOfArray(somearray) {
    return Math.min.apply(null,somearray);
}

function exchange(arr, a, b){
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

let min = getMinOfArray(somearray);
let max = getMaxOfArray(somearray);
exchange(somearray,min,max);

console.log("Данный массив : "+somearray);
console.log('Максимальное значение в массиве = ' +max);
console.log('Минимальное значение в массиве = ' +min);
console.log('Сумма всех элементов в массиве = '+ somearray.reduce(reducer));
console.log("Поменяем местами элементы с min и max значением в массиве: "+somearray);



//////////////////////4///////////////////////////////
let array1 = "poo405ww23";
let array2 = "woo406e";
let overlap = 0;
let ln;
if (array1.length > array2.length) ln = array1.length; else ln = array2.length;


for (let i = 0; i < ln; i++)
{
    if (array1[i] === array2[i]) {
        overlap++;
           }
}
let persent = (overlap / ln)*100;
console.log('Массив_1:'+array1);
console.log('Массив_2:'+array2);
console.log('Найдено совпадений в: ' +overlap+' элементах массивов и это составляет ' +persent + "%");




