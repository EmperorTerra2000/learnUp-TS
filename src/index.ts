// Работа с простыми типами
// Напиши тип функции, конкатенирующей две строки

function concat(str1: string, str2: string):string {
  return str1 + ' ' + str2;
}

console.log(concat('hello', 'world'));

// Работа с интерфейсами
// Написать интерфейс для описания след данных

interface myFirstInterface {
  howIDoIt: string,
  simeArray: Array<string | number>,
}

interface mySecondInterface extends myFirstInterface {
  withData: Array<myFirstInterface>,
}

const myHometask: mySecondInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

console.log(myHometask);

// Типизация функций, используя Generic

interface MyArr<T> {
  [n: number]: T,

  map<U>(func: (el: T) => U): U[],

  reduce<U>(func: (accumulator: T, currentValue: T, index: number, arr: Array<T>) => U): U, 
}

const arr: MyArr<number> = [1,2,3,4];
// const arr: MyArr<string> = ['a','b','c','d'];

console.log(arr.map((index) => `${index} + 1`));

console.log(arr.reduce((oneV, twoV) => oneV + " потом " + twoV));
