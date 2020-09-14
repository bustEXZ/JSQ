export default [
// thanks to this girl
// https://github.com/lydiahallie/javascript-questions
// 1
{
question: `
function sayHi() {
    console.log(name);
    console.log(age);
    var name = "Lydia";
    let age = 21;
}

sayHi();
`,
answers: `
A: Lydia и undefined
B: Lydia и ReferenceError
C: ReferenceError и 21
D: undefined и ReferenceError
`,
rightAnswer: `D`,
explanation: `
В функции мы сначала определяем переменную name с помощью ключевого слова var. Это означает, что name поднимется в начало функции. Name будет иметь значение undefined до тех пор, пока выполнение кода не дойдет до строки, где ей присваивается значение Lydia. Мы не определили значение name, когда пытаемся вывести ее в консоль, поэтому будет выведено undefined. Переменные, определенные с помощью ключевого слова let (и const), также поднимаются, но в отличие от var, не инициализируются. Доступ к ним до инициализации невозможен. Это называется "временной мертвой зоной". Когда мы пытаемся обратиться к переменным до их определения, JavaScript выбрасывает исключение ReferenceError.
`
},

// 2
{
question: `
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}
`,
answers: `
A: 0 1 2 и 0 1 2
B: 0 1 2 и 3 3 3
C: 3 3 3 и 0 1 2
D: 3 3 3 и 3 3 3
`,
rightAnswer: `C`,
explanation: `
Из-за очереди событий в JavaScript функция setTimeout вызывается после завершения цикла. Так как переменная i в первом цикле определяется с помощью ключевого слова var, она является глобальной. В цикле мы каждый раз увеличиваем значение i на 1, используя оператор ++. К моменту выполнения setTimeout в первом примере значение i равняется 3. Во втором цикле i определяется с помощью let. Такие переменные (а также переменные, объявленные с помощью const) имеют блочную область видимости (блок - это код внутри {}). На каждой итерации i будет иметь новое значение, и это значение будет замкнуто в области видимости внутри цикла.
`
},

// 3
{
question: `
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());
`,
answers: `
A: 20 и 62.83185307179586
B: 20 и NaN
C: 20 и 63
D: NaN и 63
`,
rightAnswer: `B`,
explanation: `
Обратите внимание, что diameter - это обычная функция, а perimeter - стрелочная. У стрелочных функций, в отличие от обычных, значение this указывает на лексическое окружение. Это значит, что при вызове perimeter ее this указывает не на объект shape, а на внешнюю область видимости (объект window). У этого объекта нет свойства radius, поэтому возвращается undefined.
`
},

// 4
{
question: `
console.log(+true);
console.log(!"Lydia");
`,
answers: `
A: 1 и false
B: 0 и true
C: false и NaN
D: false и false
`,
rightAnswer: `A`,
explanation: `
Унарный плюс приводит операнд к числу. true - это 1, а false - 0. Строка 'Lydia' - это истинное значение. Мы спрашиваем, является ли это истинное значение ложным? Ответ: false.
`
},

// 5
{
question: `
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
`,
answers: `
A: Hello
B: Hey!
C: undefined
D: ReferenceError
`,
rightAnswer: `A`,
explanation: `
В JavaScript все объекты являются "ссылочными" типами данных, т.е. значения объектов передаются по ссылке. Сначала в переменной "c" создается ссылка на объект. Затем мы указываем переменной "d" ссылаться на тот же объект, что и "c". При изменении объекта меняются значения всех указывающих на него ссылок.
`
},

// 6
{
question: `
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
`,
answers: `
A: true false true
B: false false true
C: true false false
D: false true true
`,
rightAnswer: `C`,
explanation: `
new Number() - это встроенный конструктор функции. И хотя он выглядит как число, это не настоящее число: у него есть ряд дополнительных возможностей, это объект. Оператор == разрешает приведение типов, он проверяет равенство значений. Оба значения равны 3, поэтому возвращается true. При использовании оператора === значение и тип должны совпадать. В данном случае это не так: new Number() это не число, а объект. Поэтому два последних сравнения возвращают false.
`
},

// 7
{
question: `
class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }

    constructor({ newColor = "green" } = {}) {
            this.newColor = newColor;
        }
    }

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange");
`,
answers: `
A: orange
B: purple
C: green
D: TypeError
`,
rightAnswer: `D`,
explanation: `
Функция colorChange() является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как freddie - это экземпляр, статичный метод в нем не доступен. Поэтому выбрасывается исключение TypeError.
`
},

// 8
{
question: `
let greeting;
greetign = {}; // опечатка
console.log(greetign);
`,
answers: `
A: {}
B: ReferenceError: greetign is not defined
C: undefined
D: ""
`,
rightAnswer: `A`,
explanation: `
С помощью greetign = {} мы создаем новый глобальный пустой объект, который и выводится в консоль. Когда мы вместо greeting написали greetign, компилятор выполнил global.greetign = {} в Node.js (или window.greetign = {} в браузере). В строгом режиме ('use strict') будет выброшено исключение ReferenceError: greetign is not defined.
`
},

// 9
{
question: `
function bark() {
    console.log("Woof!");
}

bark.animal = "dog";

console.log(bark.animal);
`,
answers: `
A: 'dog'
B: SyntaxError
C: undefined
D: ReferenceError
`,
rightAnswer: `A`,
explanation: `
В JavaScript такое возможно, т.к. функции - это объекты. Точнее, функция — это специальный тип объекта, который можно вызывать. Кроме того, функция — это объект со свойствами. Свойства такого объекта нельзя вызывать, поскольку они не являются функциями.
`
},

// 10
{
question: `
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
    return \`&#36;{this.firstName} &#36;{this.lastName}\`;
}

console.log(member.getFullName());
`,
answers: `
A: TypeError
B: SyntaxError
C: Lydia Hallie
D: undefined undefined
`,
rightAnswer: `A`,
explanation: `
Нельзя добавлять свойства к конструктору как к обычному объекту. Если необходимо добавить свойство или метод всем экземплярам, то следует использовать прототипы. В данном случае Person.prototype.getFullName = function () { return \`&#36;{this.firstName} &#36;{this.lastName}\` } сделает метод member.getFullName() рабочим. В чем тут преимущество? Предположим, что мы добавили этот метод к конструктору. Возможно, не каждому экземпляру Person нужен этот метод. Это приведет к большим потерям памяти, т.к. все экземпляры будут иметь указанное свойство. Напротив, если мы добавим данный метод к прототипу, у нас будет только одно место в памяти, к которому смогут обращаться все экземпляры.
`
},

// 11
{
question: `
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);
`,
answers: `
A: Person {firstName: "Lydia", lastName: "Hallie"} и undefined
B: Person {firstName: "Lydia", lastName: "Hallie"} и Person {firstName: "Sarah", lastName: "Smith"}
C: Person {firstName: "Lydia", lastName: "Hallie"} и {}
D: Person {firstName: "Lydia", lastName: "Hallie"} и ReferenceError
`,
rightAnswer: `A`,
explanation: `
Мы создаем объект sarah без ключевого слова new. Использование new приводит к созданию нового объекта (экземпляра). Без new создается глобальный объект. Мы указали, что this.firstName равняется "Sarah" и this.lastName - "Smith". На самом деле, мы определили global.firstName = 'Sarah' и global.lastName = 'Smith'. sarah = undefined, поскольку мы не возвращаем значение из Person.
`
},

// 12
{
question: `
function sum(a, b) {
    return a + b;
}

console.log(sum(1, "2"));
`,
answers: `
A: NaN
B: TypeError
C: "12"
D: 3
`,
rightAnswer: `C`,
explanation: `
JavaScript - это динамически типизированный язык (язык со слабой типизацией): мы не определяем тип данных. Значения переменных могут быть автоматически преобразованы из одного типа в другой без нашего участия, что называется неявным приведением типов. Приведение - это преобразование данных из одного типа в другой. В примере JavaScript конвертировал число 1 в строку, чтобы операция в функции имела смысл и вернула хоть какое-то значение. Во время сложения числа (1) и строки ("2") число преобразовывается в строку. Мы можем конкатенировать (объединять) строки так: "Hello" + "World". Таким образом, 1 + "2" возвращает "12".
`
},

// 13
{
question: `
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
`,
answers: `
A: 1 1 2
B: 1 2 2
C: 0 2 2
D: 0 1 2
`,
rightAnswer: `C`,
explanation: `
Постфиксный оператор ++:<br>
Возвращает значение (0)<br>
Инкрементирует (увеличивает) значение (теперь number = 1)<br>
Префиксный оператор ++:<br>
Инкрементирует значение (теперь number = 2)<br>
Возвращает значение (2)<br>
Результат: 0 2 2.
`
},

// 14
{
question: `
function getPersonInfo(one, two, three) {
    console.log(one);
    console.log(two);
    console.log(three);
}

const person = "Lydia";
const age = 21;

getPersonInfo\`&#36;{person} is &#36;{age} years old\`;
`,
answers: `
A: "Lydia" 21 ["", " is ", " years old"]
B: ["", " is ", " years old"] "Lydia" 21
C: "Lydia" ["", " is ", " years old"] 21
D: undefined
`,
rightAnswer: `B`,
explanation: `
При использовании тегированных шаблонных (строковых) литералов первым аргументом является массив строковых значений. Прочими аргументами являются переданные значения.
`
},

// 15
{
question: `
function checkAge(data) {
    if (data === { age: 18 }) {
        console.log("Ты взрослый!");
    } else if (data == { age: 18 }) {
        console.log("Ты по-прежнему взрослый.");
    } else {
        console.log("Хм... Кажется, у тебя нет возраста.");
    }
}

checkAge({ age: 18 });
`,
answers: `
A: Ты взрослый!
B: Ты по-прежнему взрослый.
C: Хм... Кажется, у тебя нет возраста.
D: undefined
`,
rightAnswer: `C`,
explanation: `
В операциях сравнения примитивы сравниваются по значениям, а объекты - по ссылкам. JavaScript проверяет, чтобы объекты указывали на одну и ту же область памяти. Сравниваемые объекты в примере не такие: объект, переданный в качестве параметра, указывает на другую область памяти, нежели объекты, используемые в сравнениях. Поэтому { age: 18 } === { age: 18 } и { age: 18 } == { age: 18 } возвращают false.
`
},

// 16
{
question: `
function getAge(...args) {
    console.log(typeof args);
}

getAge(21);
`,
answers: `
A: "number"
B: "array"
C: "object"
D: "NaN"
`,
rightAnswer: `C`,
explanation: `
Оператор распространения (spread) ...args возвращает массив с аргументами. Массив - это объект, поэтому typeof args возвращает "object".
`
},

// 17
{
question: `
function getAge() {
    "use strict";
    age = 21;
    console.log(age);
}

getAge();
`,
answers: `
A: 21
B: undefined
C: ReferenceError
D: TypeError
`,
rightAnswer: `C`,
explanation: `
"use strict" позволяет избежать случайного объявления глобальных переменных. Мы не объявляли переменную age, поэтому в строгом режиме выбрасывается исключение ReferenceError. В нестрогом режиме ошибки не возникнет, а переменная age станет свойством глобального объекта.
`
},

// 18
{
question: `
const sum = eval("10*10+5");

console.log(sum);
`,
answers: `
A: 105
B: "105"
C: TypeError
D: "10*10+5"
`,
rightAnswer: `A`,
explanation: `
eval выполняет код, переданный в виде строки. Если это выражение (как в данном случае), то оно вычисляется (оценивается). Выражение 10 * 10 + 5 возвращает число 105. Использовать eval в настоящее время не рекомендуется.
`
},

// 19
{
question: `
var num = 8;
var num = 10;

console.log(num);
`,
answers: `
A: 8
B: 10
C: SyntaxError
D: ReferenceError
`,
rightAnswer: `B`,
explanation: `
С помощью ключевого слова var можно определять любое количество одноименных переменных. Переменная будет хранить последнее присвоенное значение. Но такой трюк нельзя проделать с let и const, т.к. они имеют блочную область видимости.
`
},

// 20
{
question: `
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));
console.log(set.has("1"));
console.log(set.has(1));
`,
answers: `
A: false true false true
B: false true true true
C: true true false true
D: true true true true
`,
rightAnswer: `C`,
explanation: `
Ключи объектов (кроме Symbol) являются строками, даже если заданы не в виде строк. Поэтому obj.hasOwnProperty('1') также возвращает true. Однако, это не работает применительно к set. Значение '1' отсутствует в set: set.has('1') возвращает false, а set.has(1) = true.
`
},

// 21
{
question: `
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
`,
answers: `
A: { a: "one", b: "two" }
B: { b: "two", a: "three" }
C: { a: "three", b: "two" }
D: SyntaxError
`,
rightAnswer: `C`,
explanation: `
Если имеется два ключа с одинаковым именем, то ключ перезаписывается. Его позиция сохраняется, но значением является последнее из присвоенных.
`
},

// 22
{
question: `
for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
`,
answers: `
A: 1 2
B: 1 2 3
C: 1 2 4
D: 1 3 4
`,
rightAnswer: `C`,
explanation: `
Оператор continue пропускает итерацию, если условие является истинным.
`
},

// 23
{
question: `
String.prototype.giveLydiaPizza = () => {
    return "Just give Lydia pizza already!";
};

const name = "Lydia";

console.log(name.giveLydiaPizza());
`,
answers: `
A: "Just give Lydia pizza already!"
B: TypeError: name.giveLydiaPizza is not a function
C: SyntaxError
D: undefined
`,
rightAnswer: `A`,
explanation: `
String - это встроенный конструктор, к которому можно добавлять свойства. Мы добавили метод к его прототипу. Строки-примитивы автоматически конвертируются (преобразуются) в строки-объекты. Поэтому все строки (объекты) имеют доступ к указанному методу.
`
},

// 24
{
question: `
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
`,
answers: `
A: 123
B: 456
C: undefined
D: ReferenceError
`,
rightAnswer: `B`,
explanation: `
Ключи объекта автоматически преобразуются в строки. Мы пытаемся добавить объект в качестве ключа к объекту "a" со значением 123. Однако, когда мы приводим объект к строке, он превращается в "[object Object]". Таким образом, мы говорим, что a["object Object"] = 123. Затем мы повторяем процедуру. "c" - это другой объект, который мы неявно приводим к строке. Поэтому a["object Object"] = 456. Наконец, когда мы выводим a[b] в консоль, мы на самом деле выводим a["object Object"]. Поэтому в консоль выводится 456.
`
},

// 25
{
question: `
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();
`,
answers: `
A: First Second Third
B: First Third Second
C: Second First Third
D: Second Third First
`,
rightAnswer: `B`,
explanation: `
Сначала мы вызываем функцию setTimeout. Однако, она выводится в консоль последней. Это происходит из-за того, что в браузерах у нас есть не только движок для запуска (выполнения) кода, но и WebAPI. WebAPI предоставляет нам функцию setTimeout и множество других возможностей. Например, DOM. После того, как колбек отправляется в WebAPI, функция setTimeout (но не колбек!) удаляется из стека вызовов (call stack). После этого вызывается foo, и "First" выводится в консоль. foo удаляется из стека и вызывается baz. "Third" выводится в консоль. WebAPI отправляет функцию обратного вызова в очередь событий (event loop). Event loop проверяет стек вызовов и очередь (макро)задач. Если стек является пустым, то в него помещается первый элемент из очереди. Вызывается bar и в консоль выводится "Second".
`
},

// 26
{
question: `
&lt;div onclick="console.log('div')">
    &lt;p onclick="console.log('p')">
        Нажми на меня!
    &lt;/p>
&lt;/div>
`,
answers: `
A: p div
B: div p
C: p
D: div
`,
rightAnswer: `A`,
explanation: `
После клика по "p" в консоль будет выведено "p" и "div". Цикл события имеет три фазы: захват, цель и всплытие. По умолчанию обработчики событий выполняются на фазе всплытия (если не установлен useCapture: true). Всплытие идет от самого глубоко вложенного элемента до самого внешнего.
`
},

// 27
{
question: `
const person = { name: "Lydia" };

function sayHi(age) {
    console.log(\`&#36;{this.name} is &#36;{age}\`);
}

sayHi.call(person, 21);
sayHi.bind(person, 21);
`,
answers: `
A: undefined is 21 Lydia is 21
B: function function
C: Lydia is 21 Lydia is 21
D: Lydia is 21 function
`,
rightAnswer: `D`,
explanation: `
В обоих случаях мы передаем объект, на который будет указывать this. Но call() выполняется сразу, а bind() возвращает копию функции с привязанным контекстом. Ее следует вызывать отдельно или можно сделать так: sayHi.bind(person, 21)().
`
},

// 28
{
question: `
function sayHi() {
    return (() => 0)();
}

console.log(typeof sayHi());
`,
answers: `
A: "object"
B: "number"
C: "function"
D: "undefined"
`,
rightAnswer: `B`,
explanation: `
Функция sayHi возвращает значение немедленно вызываемого функционального выражения (IIFE). Результатом является 0 типа number. Для информации: в JS имеется 8 встроенных типов данных: null, undefined, boolean, number, string, object, symbol и bigint. function не является отдельным типом, функции - это объекты.
`
},

// 29
{
question: `
console.log(typeof typeof 1);
`,
answers: `
A: "number"
B: "string"
C: "object"
D: "undefined"
`,
rightAnswer: `B`,
explanation: `
typeof 1 возвращает "number". typeof "number" возвращает "string".
`
},

// 30
{
question: `
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
`,
answers: `
A: [1, 2, 3, 7 x null, 11]
B: [1, 2, 3, 11]
C: [1, 2, 3, 7 x empty, 11]
D: SyntaxError
`,
rightAnswer: `C`,
explanation: `
Когда в массив добавляется значение, которое выходит за пределы длины массива, JavaScript создает "пустые ячейки". На самом деле они имеют значения undefined, но в консоль выводятся как [1, 2, 3, 7 x empty, 11] (в браузере, зависит от среды выполнения кода).
`
},

// 31
{
question: `
(() => {
    let x, y;
    try {
        throw new Error();
    } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();
`,
answers: `
A: 1 undefined 2
B: undefined undefined undefined
C: 1 1 2
D: 1 undefined undefined
`,
rightAnswer: `A`,
explanation: `
Блок catch получает аргумент "x". Это не тот "x", который объявлен перед try. Затем мы присваиваем этому аргументу значение 1 и присваиваем значение переменной "y". После этого выводим в консоль значение "x", т.е. 1. За пределами catch "x" все еще имеет значение undefined, а y = 2. Когда мы вызываем console.log(x) за пределами catch, возвращается undefined, а console.log(y) = 2.
`
},

// 32
{
question: `
const result =
    [[0, 1], [2, 3]].reduce(
        (acc, cur) => {
            return acc.concat(cur);
        },
        [1, 2]
    );

console.log(result);
`,
answers: `
A: [0, 1, 2, 3, 1, 2]
B: [6, 1, 2]
C: [1, 2, 0, 1, 2, 3]
D: [1, 2, 6]
`,
rightAnswer: `C`,
explanation: `
[1, 2] - начальное значение переменной acc. После первого прохода acc равняется [1, 2], а cur - [0, 1]. После конкатенации acc равняется [1, 2, 0, 1], а cur - [2, 3]. После их объединения мы получаем [1, 2, 0, 1, 2, 3].
`
},

// 33
{
question: `
console.log(!!null);
console.log(!!"");
console.log(!!1);
`,
answers: `
A: false true false
B: false false true
C: false true true
D: true true false
`,
rightAnswer: `B`,
explanation: `
null - false. !null возвращает true. !true возвращает false.<br>
"" - false. !"" возвращает true. !true возвращает false.
1 - true. !1 возвращает false. !false возвращает true.
`
},

// 34
{
question: `
console.log([..."Lydia"]);
`,
answers: `
A: ["L", "y", "d", "i", "a"]
B: ["Lydia"]
C: [[], "Lydia"]
D: [["L", "y", "d", "i", "a"]]
`,
rightAnswer: `A`,
explanation: `
Строка является итерируемой сущностью. Оператор распространения (spread) ... преобразует строку в массив, состоящий из символов этой строки.
`
},

// 35
{
question: `
function* generator(i) {
    yield i;
    yield i * 2;
}

const gen = generator(10);

console.log(gen.next().value);
console.log(gen.next().value);
`,
answers: `
A: [0, 10], [10, 20]
B: 20, 20
C: 10, 20
D: 0, 10 and 10, 20
`,
rightAnswer: `C`,
explanation: `
Выполнение обычных функций не может быть остановлено после их запуска. Однако, генераторы можно останавливать в процессе выполнения, а затем продолжать с места остановки. Каждый раз, когда в функции-генераторе встречается ключевое слово yield, функция возвращает значение, указанное после него. Обратите внимание, что в генераторе вместо return используется yield.<br>
Сначала мы инициализируем генератор с i равным 10. Мы вызываем генератор, используя метод next(). Когда мы в первый раз вызываем генератор, i равно 10. Движок JavaScript встречает первое ключевое слово yield, возвращая значение i. После этого выполнение функции приостанавливается, и 10 выводится в консоль. Затем мы снова вызываем функцию посредством next(). Она запускается с того места, где остановилась, с i = 10. Компилятор встречает следующее ключевое слово yield и возвращает i * 2. i равно 10, поэтому возвращается 10 * 2, т.е. 20.
`
},

// 36
{
question: `
const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, "один");
});

const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, "два");
});

Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
`,
answers: `
A: "один"
B: "два"
C: "два" "один"
D: "один" "два"
`,
rightAnswer: `B`,
explanation: `
Когда мы передаем несколько промисов методу Promise.race(), он возвращает первый разрешенный/отклоненный промис. В метод setTimeout мы передаем таймер: 500 мс для первого промиса и 100 мс для второго. Это означает, что secondPromise разрешается первым со значением 'два'. res имеет значение 'два', которое и выводиться в консоль.
`
},

// 37
{
question: `
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
`,
answers: `
A: null
B: [null]
C: [{}]
D: [{ name: "Lydia" }]
`,
rightAnswer: `D`,
explanation: `
Сначала мы объявляем переменную person со значением объекта со свойством name. Затем мы объявляем переменную members. Мы делаем первый элемент этого массива равным person. Объекты взаимодействуют посредством ссылок при установке их равными друг другу. Когда вы назначаете ссылку из одной переменной в другую, вы создаете копию этой ссылки (обратите внимание, что у этих переменных не одинаковые ссылки). Затем мы присваиваем переменной person значение null. Мы изменили только значение person, а не первый элемент массива, поскольку этот элемент имеет другую (скопированную) ссылку на объект. Первый элемент в members по-прежнему содержит ссылку на исходный объект. Когда мы выводим в консоль массив members, первый элемент содержит значение объекта, который и выводится в консоль.
`
},

// 38
{
question: `
const person = {
    name: "Lydia",
    age: 21
};

for (const item in person) {
    console.log(item);
}
`,
answers: `
A: { name: "Lydia" }, { age: 21 }
B: "name", "age"
C: "Lydia", 21
D: ["name", "Lydia"], ["age", 21]
`,
rightAnswer: `B`,
explanation: `
С помощью цикла for-in мы перебираем ключи объекта, в данном случае name и age. Под катом ключи объекта являются строками (если они не являются Symbol). В каждом цикле мы устанавливаем значение item равным текущему ключу, по которому он перебирается. Сначала item равен name, и выводится в консоль. Затем item равен age, что также выводится в консоль.
`
},

// 39
{
question: `
console.log(3 + 4 + "5");
`,
answers: `
A: "345"
B: "75"
C: 12
D: "12"
`,
rightAnswer: `B`,
explanation: `
Ассоциативность операторов - это порядок оценивания выражения компилятором, слева направо или справа налево. Это происходит только в том случае, если все операторы имеют одинаковый приоритет. У нас есть только один тип оператора: +. Ассоциативность - слева направо. 3 + 4 оценивается первым. Это приводит к числу 7. 7 + '5' приводит к '75' из-за неявного приведения типов. JavaScript преобразует число 7 в строку. Мы можем объединить (конкатенировать) две строки, используя оператор +. "7" + "5" = "75".
`
},

// 40
{
question: `
const num = parseInt("7*6", 10);

console.log(num);
`,
answers: `
A: 42
B: "42"
C: 7
D: NaN
`,
rightAnswer: `C`,
explanation: `
ParseInt проверяет, являются ли символы в строке допустимыми с точки зрения используемой системы счисления (второй аргумент). Как только он встречает недопустимый символ, синтаксический анализ строки прекращается и последующие символы игнорируются. * не является допустимым числом. Поэтому parseInt прекращает разбор строки и возвращает 7.
`
},

// 41
{
question: `
const result =
    [1, 2, 3].map(num => {
        if (typeof num === "number") return;
        return num * 2;
    });

console.log(result)
`,
answers: `
A: []
B: [null, null, null]
C: [undefined, undefined, undefined]
D: [ 3 x empty ]
`,
rightAnswer: `C`,
explanation: `
Метод map возвращает новый массив с обработанными каким-либо образом с помощью функции обратного вызова элементами исходного массива. В данном случае элементы исходного массива являются числами, поэтому условие if typeof num === "number" является истинным. После этого выполнение функции останавливается, в новый массив попадает значение num, равное undefined.
`
},

// 42
{
question: `
function getInfo(member, year) {
    member.name = "Lydia";
    year = 1998;
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
`,
answers: `
A: { name: "Lydia" }, "1997"
B: { name: "Sarah" }, "1998"
C: { name: "Lydia" }, "1998"
D: { name: "Sarah" }, "1997"
`,
rightAnswer: `A`,
explanation: `
Аргументы передаются по значению. Если значение аргумента является объектом, то он передается по ссылке. birthYear передается по значению, поскольку это строка, а не объект. Когда мы передаем аргументы по значению, создается копия этого значения. Переменная birthYear ссылается на значение "1997". Аргумент year также ссылается на значение "1997", но это не то значение, на которое ссылается birthYear. Когда мы обновляем значение year, устанавливая year равным "1998", мы обновляем только значение year. birthYear по-прежнему равняется "1997". Значение person является объектом. Аргумент member имеет скопированную ссылку на этот объект. Когда мы изменяем свойство объекта, на который ссылается member, значение person также меняется, поскольку они ссылаются на один и тот же объект. Свойство name объекта person становится равным значению "Lydia".
`
},

// 43
{
question: `
function greeting() {
    throw "Hello world!";
}

function sayHi() {
    try {
        const data = greeting();
        console.log("Работает!", data);
    } catch (e) {
        console.log("Ошибка:", e);
    }
}

sayHi();
`,
answers: `
A: Работает! Hello world!
B: Ошибка: undefined
C: SyntaxError: can only throw Error objects
D: Ошибка: Hello world!
`,
rightAnswer: `D`,
explanation: `
С помощью оператора throw мы можем создавать собственные ошибки. Мы можем генерировать пользовательские исключения. Исключением может быть строка, число, логическое значение или объект. В данном случае исключением является строка 'Hello world'. С помощью оператора catch мы можем указать, что делать, если в блоке try возникнет ошибка. Исключение - 'Hello world'. 'e' равняется этой строке. Это приводит к 'Ошибка: Hello world'.
`
},

// 44
{
question: `
function Car() {
    this.make = "Lamborghini";
    return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make);
`,
answers: `
A: "Lamborghini"
B: "Maserati"
C: ReferenceError
D: TypeError
`,
rightAnswer: `B`,
explanation: `
Когда возвращается свойство, его значение равняется возвращаемому значению, а не значению, установленному в конструкторе функции. Мы возвращаем строку "Maserati", поэтому значением myCar.make является "Maserati".
`
},

// 45
{
question: `
(() => {
    let x = (y = 10);
})();

console.log(typeof x);
console.log(typeof y);
`,
answers: `
A: "undefined", "number"
B: "number", "number"
C: "object", "number"
D: "number", "undefined"
`,
rightAnswer: `A`,
explanation: `
let x = y = 10 на самом деле является сокращением для:
<pre><code class="lang-js">
y = 10;
let x = y;
</code></pre>
Когда мы устанавливаем y равным 10, мы фактически добавляем свойство "y" к глобальному объекту (window в браузере, global в Node.js). В браузере window.y теперь равняется 10. Затем мы объявляем переменную "x" со значением "y". Переменные, объявленные с помощью ключевого слова let, имеют блочную область видимости, они определены только в блоке, в котором объявлены; таким блоком в данном случае является немедленно вызываемое функциональное выражение (IIFE). Когда мы используем оператор typeof, операнд "x" не определен: мы пытаемся получить доступ к "x" вне блока, в котором он объявлен. Это означает, что x = undefined. Переменные, которым не присвоено значение, имеют значение undefined. console.log(typeof x) возвращает undefined. Однако, мы создали глобальную переменную "y", присвоив ей значение 10. Это значение доступно в любом месте кода. "y" определена и содержит значение типа number. console.log(typeof y) возвращает number.
`
},

// 46
{
question: `
class Dog {
    constructor(name) {
      this.name = name;
    }
}

Dog.prototype.bark = function() {
    console.log(\`Woof I am &#36;{this.name}\`);
};

const pet = new Dog("Mara");

pet.bark();

delete Dog.prototype.bark;

pet.bark();
`,
answers: `
A: "Woof I am Mara", TypeError
B: "Woof I am Mara", "Woof I am Mara"
C: "Woof I am Mara", undefined
D: TypeError, TypeError
`,
rightAnswer: `A`,
explanation: `
Мы можем удалять свойства объектов с помощью ключевого слова delete, включая свойства прототипов. Удаленное свойство прототипа становится недоступным в цепочке прототипов. Другими словами, функция bark больше не доступна в прототипе после delete Dog.prototype.bark, однако мы пытаемся получить к ней доступ. Когда мы пытаемся вызвать нечто, не являющееся функцией, выбрасывается исключение TypeError. В данном случае TypeError: pet.bark is not a function, поскольку значением pet.bark является undefined.
`
},

// 47
{
question: `
const set = new Set([1, 1, 2, 3, 4]);

console.log(set);
`,
answers: `
A: [1, 1, 2, 3, 4]
B: [1, 2, 3, 4]
C: {1, 1, 2, 3, 4}
D: {1, 2, 3, 4}
`,
rightAnswer: `D`,
explanation: `
Объект Set является коллекцией уникальных значений. Мы передаем массив [1, 1, 2, 3, 4] с повторяющимся значением 1. Поскольку в наборе не может быть двух одинаковых значений, одно из них удаляется. Это приводит к {1, 2, 3, 4}.
`
},

// 48
{
question: `
// counter.js
let counter = 10;
export default counter;

// index.js
import myCounter from "./counter";

myCounter += 1;

console.log(myCounter);
`,
answers: `
A: 10
B: 11
C: Error
D: NaN
`,
rightAnswer: `C`,
explanation: `
Импортированный модуль доступен только для чтения: мы не можем его изменить. Это можно сделать только при экпорте. Когда мы пытаемся увеличить значение myCounter, возникает ошибка: myCounter доступен только для чтения и не может быть изменен.
`
},

// 49
{
question: `
const name = "Lydia";
age = 21;

console.log(delete name);
console.log(delete age);
`,
answers: `
A: false, true
B: "Lydia", 21
C: true, true
D: undefined, undefined
`,
rightAnswer: `A`,
explanation: `
Оператор delete возвращает логическое значение: true при успешном удалении, иначе false. Однако переменные, объявленные с помощью ключевого слова var, const или let, не могут быть удалены с помощью delete. Переменная name была объявлена ​​с помощью ключевого слова const, поэтому возвращается false. Когда мы устанавливаем age равным 21, мы фактически добавляем свойство с именем age к глобальному объекту (window.age в браузере, global.age в Node.js). Свойства объектов, включая глобальный, удалять можно, поэтому delete age возвращает true.
`
},

// 50
{
question: `
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);
`,
answers: `
A: [[1, 2, 3, 4, 5]]
B: [1, 2, 3, 4, 5]
C: 1
D: [1]
`,
rightAnswer: `C`,
explanation: `
Мы можем распаковывать элементы из массивов или свойства из объектов путем деструктуризации. Например:<br>
[a, b] = [1, 2];<br>
Значение a теперь равно 1, а значение b - 2. Что мы на самом деле сделали в примере, так это:<br>
[y] = [1, 2, 3, 4, 5];<br>
Это означает, что значение "y" равняется первому значению массива, которое является числом 1. Поэтому в консоль выводится 1.
`
},

// 51
{
question: `
const user = { name: "Lydia", age: 21 };
const admin = { admin: true, ...user };

console.log(admin);
`,
answers: `
A: { admin: true, user: { name: "Lydia", age: 21 } }
B: { admin: true, name: "Lydia", age: 21 }
C: { admin: true, user: ["Lydia", 21] }
D: { admin: true }
`,
rightAnswer: `B`,
explanation: `
С помощью оператора распространения (spread) ... можно объединять объекты. Это позволяет создавать копии пар ключ/значение одного объекта и добавлять их в другой объект. В данном случае мы создаем копию объекта user и добавляем ее в объект admin. Объект admin содержит скопированные пары ключ/значение, что приводит к {admin: true, name: "Lydia", age: 21}.
`
},

// 52
{
question: `
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));
`,
answers: `
A: { name: "Lydia", age: 21 }, ["name", "age"]
B: { name: "Lydia", age: 21 }, ["name"]
C: { name: "Lydia"}, ["name", "age"]
D: { name: "Lydia"}, ["age"]
`,
rightAnswer: `B`,
explanation: `
С помощью метода defineProperty() мы добавляем новые свойства к объекту или изменяем существующие. Когда мы добавляем свойство к объекту с помощью defineProperty(), они по умолчанию являются не перечисляемыми. Метод Object.keys() возвращает все перечисляемые свойства объекта, в данном случае только "name". Свойства, добавленные с помощью defineProperty(), по умолчанию также иммутабельны (неизменяемы). Это поведение можно переопределить, используя свойства writable, configurable и enumerable. Таким образом, метод defineProperty() дает нам гораздо больший контроль над свойствами, добавляемыми к объекту.
`
},

// 53
{
question: `
const settings = {
    username: "lydiahallie",
    level: 19,
    health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
`,
answers: `
A: "{"level": 19, "health": 90}"
B: "{"username": "lydiahallie"}"
C: "["level", "health"]"
D: "{"username": "lydiahallie", "level":19, "health":90}"
`,
rightAnswer: `A`,
explanation: `
Второй аргумент JSON.stringify() - это replacer (заменитель). Заменитель может быть либо функцией, либо массивом, и позволяет контролировать, что и как должно быть преобразовано в значения. Если заменитель является массивом, только свойства, указанные в нем, будут добавлены в JSON-строку. В данном случае в строку включаются только свойства "level" и "health", "username" исключается. data равняется "{"level": 19, "health": 90}". Если заменитель является функцией, она вызывается для каждого свойства объекта. Значение функции будет значением свойства при добавлении в строку. Если значением свойства является undefined, такое свойство исключается из строки.
`
},

// 54
{
question: `
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
`,
answers: `
A: 10, 10
B: 10, 11
C: 11, 11
D: 11, 12
`,
rightAnswer: `A`,
explanation: `
Постфиксный оператор ++ сначала возвращает значение операнда, затем увеличивает его. Значение num1 равняется 10, так как функция сначала возвращает значение num, и только после этого увеличивает его на 1. num2 - это 10, так как мы передали num1 в increasePassedNumber(). number равняется 10. Снова ++ возвращает значение операнда, а затем увеличивает его. number = 10, поэтому num2 также равняется 10.
`
},

// 55
{
question: `
const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);
`,
answers: `
A: 20, 40, 80, 160
B: 20, 40, 20, 40
C: 20, 20, 20, 40
D: NaN, NaN, 20, 40
`,
rightAnswer: `C`,
explanation: `
В ES6 мы можем инициализировать параметры со значениями по умолчанию. Параметр будет иметь значение по умолчанию, если другое значение не было передано функции, или если значением параметра является undefined. В данном случае мы распространяем свойства объекта value на новый объект, поэтому значение "x" по умолчанию равняется {number: 10}. Аргумент по умолчанию реализуется в момент вызова функции. Каждый раз, когда мы вызываем функцию, создается новый объект. Мы вызываем функцию multiply() первые два раза, не передавая значений: "x" имеет значение {number: 10}. Затем мы умножаем это значение на 2, получаем 20. В третий раз, когда мы вызываем multiply(), мы передаем ей аргумент - объект value. Оператор *= на самом деле является сокращением для x.number = x.number * 2: мы меняем значение x.number, теперь оно равняется 20. В четвертый раз мы снова передаем multiply() объект value. x.number = 20, поэтому x.number *= 2 равняется 40.
`
},

// 56
{
question: `
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
`,
answers: `
A: 1 2, 3 3 и 6 4
B: 1 2, 2 3 и 3 4
C: 1 undefined, 2 undefined, 3 undefined и 4 undefined
D: 1 2, undefined 3 и undefined 4
`,
rightAnswer: `D`,
explanation: `
Первый агрумент метода reduce - аккумулятор, в данном случае "x". Второй аргумент - текущее значение, "y". С помощью reduce мы выполняем функцию обратного вызова для каждого элемента массива, что может привести к единственному значению. В примере мы не возвращаем значений, а просто регистрируем значения аккумулятора и текущее значение. Значение аккумулятора равняется ранее возвращенному значению колбека. Если вы не передадите необязательный аргумент initialValue методу reduce, аккумулятор будет равен первому элементу при первом вызове. При первом вызове аккумулятор (x) = 1, а текущее значение (y) = 2. Мы не выходим из функции, а регистрируем аккумулятор и текущее значение: 1 и 2 регистрируются. Если вы не возвращаете значение из функции, она возвращает undefined. При следующем вызове аккумулятор = undefined, а текущее значение = 3. undefined и 3 регистрируются. При четвертом вызове мы снова не возвращаем значение из функции. Аккумулятор = undefined, а текущее значение = 4: undefined и 4 выводятся в консоль.
`
},

// 57
{
question: `
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
`,
answers: `
A: running index.js, running sum.js, 3
B: running sum.js, running index.js, 3
C: running sum.js, 3, running index.js
D: running index.js, undefined, running sum.js
`,
rightAnswer: `B`,
explanation: `
При импорте модулей с помощью ключевого слова import, они являются прераспарсенными (предварительно разобранными). Это означает, что модули запускаются первыми, а код в файле, который импортирует модуль, выполняется позже. В этом разница между require() в CommonJS и import. С помощью require() мы можем загружать зависимости динамически во время выполнения кода. При использовании require() вместо import в консоль будет выведено running index.js, running sum.js, 3.
`
},

// 58
{
question: `
console.log(Number(2) === Number(2))
console.log(Boolean(false) === Boolean(false))
console.log(Symbol('foo') === Symbol('foo'))
`,
answers: `
A: true, true, false
B: false, true, false
C: true, false, true
D: true, true, true
`,
rightAnswer: `A`,
explanation: `
Каждый Symbol уникален. Цель аргумента, переданного Symbol, состоит в том, чтобы дать Symbol описание. Значение Symbol не зависит от переданного аргумента. Когда мы проверяем равенство, мы создаем два разных Symbol: первый Symbol('foo') и второй Symbol('foo'). Эти значения уникальны и не равны друг другу, Symbol('foo') === Symbol('foo') возвращает false.
`
},

// 59
{
question: `
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
`,
answers: `
A: "Lydia Hallie", "Lydia Hallie"
B: " Lydia Hallie", " Lydia Hallie" ("[13x whitespace]Lydia Hallie", "[2x whitespace]Lydia Hallie")
C: " Lydia Hallie", "Lydia Hallie" ("[1x whitespace]Lydia Hallie", "Lydia Hallie")
D: "Lydia Hallie", "Lyd",
`,
rightAnswer: `C`,
explanation: `
С помощью метода padStart мы добавляем отступы в начало строки. Значение, передаваемое этому методу, представляет собой общую длину строки вместе с отступом. Строка "Lydia Hallie" имеет длину равную 12. name.padStart(13) вставляет 1 пробел в начало строки, потому что 12 + 1 равно 13. Если аргумент, переданный методу padStart, меньше длины строки, заполнение не выполняется.
`
},

// 60
{
question: `
console.log("📱" + "💻");
`,
answers: `
A: "📱💻"
B: 257548
C: Строка, содержащая кодовые обозначения
D: Error
`,
rightAnswer: `A`,
explanation: `
С помощью оператора + мы можем объединять строки (это называется конкатенацией). В данном случае мы объединяем строку "📱" со строкой "💻", что приводит к "📱💻".
`
},

// 61
{
question: `
function* startGame() {
    const answer = yield "Ты любишь JavaScript?";
    if (answer !== "Да") {
        return "Как интересно... В таком случае что ты здесь делаешь?";
    }
    return "JavaScript тоже тебя любит ❤️";
}

const game = startGame();
console.log(/* 1 */); // Ты любишь JavaScript?
console.log(/* 2 */); // JavaScript тоже тебя любит ❤️
`,
answers: `
A: game.next("Да").value и game.next().value
B: game.next.value("Да") и game.next.value()
C: game.next().value и game.next("Да").value
D: game.next.value() и game.next.value("Да")
`,
rightAnswer: `C`,
explanation: `
Функция-генератор "приостанавливает" выполнение, когда встречает ключевое слово yield. Во-первых, мы должны позволить функции выдать строку "Ты любишь JavaScript?", что можно сделать, вызвав game.next().value. Код выполняется последовательно до тех пор, пока не встречается ключевое слово yield. В первой строке функции есть ключевое слово yield: выполнение останавливается с первым результатом. Это означает, что переменная answer еще не определена. Когда мы вызываем game.next("Да").value, предыдущий yield заменяется значением параметров, переданных функции next(), в данном случае "Да". Значение переменной answer теперь равняется "Да". Условие if возвращает false, и "JavaScript тоже тебя любит ❤️" выводится в консоль.
`
},

// 62
{
question: `
console.log(String.raw\`Hello\\nworld\`);
`,
answers: `
A: Hello world!
B: Hello (на следующей строке) world
C: Hello\\nworld
D: Hello\\n (на следующей строке) world
`,
rightAnswer: `C`,
explanation: `
String.raw() возвращает строку, в которой обратные последовательности (\\n, \\v, \\t и т.д.) игнорируются. Обратная косая черта может стать проблемой, например:<br>
const path = \`C:\\Documents\\Projects\\table.html\`
Это приведет к:<br>
"C:DocumentsProjects able.html"<br>
С String.raw() управляющие символы будут проигнорированы:<br>
C:\\Documents\\Projects\\table.html
`
},

// 63
{
question: `
async function getData() {
    return await Promise.resolve("Я сделал это!");
}

const data = getData();
console.log(data);
`,
answers: `
A: "Я сделал это!"
B: Promise {<resolved>: "Я сделал это!"}
C: Promise {<pending>}
D: undefined
`,
rightAnswer: `C`,
explanation: `
Асинхронная функция возвращает промис. await ожидает разрешения промиса: промис возвращается, когда мы вызываем getData(), чтобы установить data равным ему. Если бы мы хотели получить доступ к разрешенному значению "Я сделал это!", мы могли бы использовать метод .then() для data: data.then(res => console.log(res)). Тогда бы в консоль было выведено "Я сделал это!"
`
},

// 64
{
question: `
function addToList(item, list) {
    return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
`,
answers: `
A: ['apple', 'banana']
B: 2
C: true
D: undefined
`,
rightAnswer: `B`,
explanation: `
Метод push возвращает длину нового массива. Ранее массив содержал только один элемент (строку "banana") и имел длину 1. После добавления в массив строки "apple", длина массива увеличивается до 2. Это значение возвращается из функции addToList(). Метод push изменяет исходный массив. Если мы хотим вернуть массив, а не его длину, необходимо вернуть list после добавления item.
`
},

// 65
{
question: `
const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);
`,
answers: `
A: { x: 100, y: 20 }
B: { x: 10, y: 20 }
C: { x: 100 }
D: ReferenceError
`,
rightAnswer: `B`,
explanation: `
Object.freeze делает невозможным добавление, удаление или изменение свойств объекта (если только значение свойства не является другим объектом). Когда мы создаем переменную shape и устанавливаем ее равной замороженному объекту box, shape ссылается на этот объект. Вы можете проверить, заморожен ли объект, используя Object.isFrozen(). В даном случае Object.isFrozen(shape) возвращает true, поскольку переменная shape ссылается на замороженный объект. Поскольку shape заморожен, а значение "x" не является объектом, мы не можем менять свойство "x". "x" по-прежнему равняется 10, и {x: 10, y: 20} выводится в консоль.
`
},

// 66
{
question: `
const { name: myName } = { name: "Lydia" };

console.log(name);
`,
answers: `
A: "Lydia"
B: "myName"
C: undefined
D: ReferenceError
`,
rightAnswer: `D`,
explanation: `
Когда мы распаковываем свойство name из правого объекта, мы присваиваем значение "Lydia" переменной myName. С помощью {name: myName} мы сообщаем JavaScript, что хотим создать новую переменную с именем myName и со значением свойства name из правой части. Поскольку мы пытаемся вывести в консоль name, переменную, которая не определена, выбрасывается исключение ReferenceError.
`
},

// 67
{
question: `
const add = () => {
    const cache = {};
    return num => {
        if (num in cache) {
            return \`Из кэша! &#36;{cache[num]}\`;
        } else {
            const result = num + 10;
            cache[num] = result;
            return \`Вычислено! &#36;{result}\`;
        }
    };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
`,
answers: `
A: Вычислено! 20 Вычислено! 20 Вычислено! 20
B: Вычислено! 20 Из кэша! 20 Вычислено! 20
C: Вычислено! 20 Из кэша! 20 Из кэша! 20
D: Вычислено! 20 Из кэша! 20 Error
`,
rightAnswer: `C`,
explanation: `
Функция add() является функцией запоминания (мемоизации). С помощью запоминания мы можем кэшировать результаты вызова функции, чтобы ускорить ее повторное выполнение. В данном случае мы создаем объект cache, в котором хранятся ранее возвращенные значения. Если мы повторно вызываем функцию addFunction() с тем же аргументом, она сначала проверяет, имеется ли соответствующее значение в кэше. Если значение имеется, оно возвращается, что экономит время на выполнение функции. Иначе, если значение в кэше отсутствует, оно вычисляется и сохраняется. Мы вызываем функцию addFunction() три раза с одним и тем же аргументом: при первом вызове значение функции, когда num = 10, еще не кэшировано. Условие if num in cache возвращает false, и выполняется блок else: Вычислено! 20 выводится в консоль, и результат добавляется в объект cache. cache теперь выглядит как {10: 20}. При повторном вызове значение для аргумента 10 возвращается из кэша. Условие if num in cache возвращает true, а 'Из кэша! 20' выводится в консоль. В третий раз мы передаем в функцию 5 * 2, что оценивается как 10. Объект cache содержит значение для аргумента 10. Условие if num in cache возвращает true, а 'Из кэша! 20' выводится в консоль.
`
},

// 68
{
question: `
const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

for (let item in myLifeSummedUp) {
  console.log(item)
}

for (let item of myLifeSummedUp) {
  console.log(item)
}
`,
answers: `
A: 0 1 2 3 и "☕" "💻" "🍷" "🍫"
B: "☕" "💻" "🍷" "🍫" и "☕" "💻" "🍷" "🍫"
C: "☕" "💻" "🍷" "🍫" и 0 1 2 3
D: 0 1 2 3 и {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}
`,
rightAnswer: `A`,
explanation: `
С помощью цикла for-in мы перебираем перечисляемые свойства. В массиве перечисляемые свойства являются "ключами" элементов массива, которые фактически являются их индексами. Вы можете представить массив как: <br>
{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"} <br>
где ключи - перечисляемые свойства. 0 1 2 3 выводится в консоль. С помощью for-of мы выполняем итерацию итераций. Массив является итеративным. Когда мы выполняем итерацию по массиву, переменная "item" равна итерируемому элементу, "☕" "💻" "🍷" "🍫" выводится в консоль.
`
},

// 69
{
question: `
const list = [1 + 2, 1 * 2, 1 / 2]
console.log(list)
`,
answers: `
A: ["1 + 2", "1 * 2", "1 / 2"]
B: ["12", 2, 0.5]
C: [3, 2, 0.5]
D: [1, 1, 1]
`,
rightAnswer: `C`,
explanation: `
Элементами массива могут быть любые типы данных. Числа, строки, объекты, другие массивы, null, логические значения, undefined и др., например, даты, функции и выражения. Элемент будет равен возвращаемому значению. 1 + 2 возвращает 3, 1 * 2 - 2, а 1 / 2 - 0.5.
`
},

// 70
{
question: `
function sayHi(name) {
    return \`Привет, &#36;{name}\`
}

console.log(sayHi())
`,
answers: `
A: Привет,
B: Привет, undefined
C: Привет, null
D: ReferenceError
`,
rightAnswer: `B`,
explanation: `
По умолчанию аргументы имеют значение undefined, если значение не было передано функции. В данном случае мы не передаем значения для аргумента name. name = undefined. В ES6 мы можем перезаписать undefined параметрами по умолчанию. Например: <br>
function sayHi(name = "Lydia") { ... } <br>
В данном случае, если мы не передали значение или если мы передали undefined, name будет иметь значение Lydia.
`
},

// 71
{
question: `
var status = "😎"

setTimeout(() => {
  const status = "😍"

  const data = {
    status: "😉",
    getStatus() {
      return this.status
    }
  }

  console.log(data.getStatus())
  console.log(data.getStatus.call(this))
}, 0)
`,
answers: `
A: "😉" и "😍"
B: "😉" и "😎"
C: "😍" и "😎"
D: "😎" и "😎"
`,
rightAnswer: `B`,
explanation: `
Значение ключевого слова this зависит от того, где оно используется. В методе getStatus() this указывает на объект, которому принадлежит метод. Метод принадлежит объекту data, поэтому this относится к объекту data. Когда мы выводим в консоль this.status, выводится свойство status объекта data или "😉". С помощью метода call мы можем изменить объект, на который ссылается this. В функциях ключевое слово this относится к объекту, которому принадлежит функция. Мы объявили функцию setTimeout для объекта global, поэтому в функции setTimeout ключевое слово this ссылается на объект global. В глобальном объекте есть переменная status со значением "😎". В консоль выводится "😎".
`
},

// 72
{
question: `
const person = {
    name: "Lydia",
    age: 21
}

let city = person.city
city = "Amsterdam"

console.log(person)
`,
answers: `
A: { name: "Lydia", age: 21 }
B: { name: "Lydia", age: 21, city: "Amsterdam" }
C: { name: "Lydia", age: 21, city: undefined }
D: "Amsterdam"
`,
rightAnswer: `A`,
explanation: `
Мы устанавливаем переменную city равной значению свойства city объекта person. У этого объекта нет свойства city, поэтому переменная city имеет значение undefined. Обратите внимание, что мы не ссылаемся на person. Мы просто устанавливаем переменную city равной текущему значению свойства city объекта person. Затем мы устанавливаем city равным строке "Amsterdam". Это не меняет person.
`
},

// 73
{
question: `
function checkAge(age) {
    if (age < 18) {
      const message = "Вы слишком молоды."
    } else {
      const message = "Вы достаточно взрослый!"
    }
    return message
}

console.log(checkAge(21))
`,
answers: `
A: "Вы слишком молоды."
B: "Вы достаточно взрослый!"
C: ReferenceError
D: undefined
`,
rightAnswer: `C`,
explanation: `
Переменные, объявленные с помощью ключевых слов const и let имеют блочную область видимости. Блок - это любой код между {}. В данном случае в фигурных скобках операторов if/else. Вы не можете ссылаться на переменную за пределами блока, в котором она объявлена, выбрасывается исключение ReferenceError.
`
},

// 74
{
question: `
function getName(name) {
    const hasName = /* ? */
}
`,
answers: `
A: !!name
B: name
C: new Boolean(name)
D: name.length
`,
rightAnswer: `A`,
explanation: `
С помощью !!name мы определяем, является ли значение name истинным. Если name = true, то !name возвращает false. А !false (это то, чем на самом деле является !!name) возвращает true. Устанавливая hasName равным name, мы устанавливаем hasName равным любому значению, которое передается функции getName(), а не логическому значению true. new Boolean(true) возвращает объектную обертку, а не само логическое значение. name.length возвращает длину переданного аргумента.
`
},

// 75
{
question: `
console.log("Я хочу пиццу!"[0])
`,
answers: `
A: ""
B: "Я"
C: SyntaxError
D: undefined
`,
rightAnswer: `B`,
explanation: `
Чтобы получить символ по определенному индексу в строке, вы можете использовать скобочную нотацию. Первый символ в строке имеет индекс 0 и т.д. В данном случае мы хотим получить элемент с индексом 0, символ 'Я', который и выводится в консоль. Альтернативой является метод charAt.
`
},

// 76
{
question: `
function sum(num1, num2 = num1) {
    console.log(num1 + num2)
}

sum(10)
`,
answers: `
A: NaN
B: 20
C: ReferenceError
D: undefined
`,
rightAnswer: `B`,
explanation: `
Мы можем установить значение параметра по умолчанию равным другому параметру функции, если такой параметр был определен до параметра по умолчанию. Мы передаем значение 10 в функцию sum(). Если sum() принимает только один аргумент, значит, значение для num2 не передано, оно получает значение по умолчанию, т.е. 10. num1 + num2 возвращает 20. Если попытаться установить значение параметра по умолчанию равным параметру, который определяется позже, то возникнет ошибка.
`
},

// 77
{
question: `
// module.js
export default () => "Hello world"
export const name = "Lydia"

// index.js
import * as data from "./module"

console.log(data)
`,
answers: `
A: { default: function default(), name: "Lydia" }
B: { default: function default() }
C: { default: "Hello world", name: "Lydia" }
D: Глобальный объект module.js
`,
rightAnswer: `A`,
explanation: `
С помощью import * as name мы импортируем все экспорты из файла module.js в файл index.js, создается новый объект data. В файле module.js имеется два экспорта: экспорт по умолчанию и именованный экспорт. Экспорт по умолчанию - это функция, которая возвращает строку "Hello World", а именованный экспорт - это переменная name, которая имеет значение "Lydia". Объект data имеет свойство default для экспорта по умолчанию, другие свойства - именованные экспорты и соответствующие значения.
`
},

// 78
{
question: `
class Person {
    constructor(name) {
      this.name = name
    }
}

const member = new Person("John")
console.log(typeof member)
`,
answers: `
A: "class"
B: "function"
C: "object"
D: "string"
`,
rightAnswer: `C`,
explanation: `
Классы являются синтаксическим сахаром для конструкторов функций. Эквивалентом класса Person в качестве конструктора функции будет:<br>
function Person() { this.name = name }<br>
Вызов конструктора функции с ключевым словом new приводит к созданию экземпляра Person. typeof member возвращает "object".
`
},

// 79
{
question: `
let newList = [1, 2, 3].push(4)

console.log(newList.push(5))
`,
answers: `
A: [1, 2, 3, 4, 5]
B: [1, 2, 3, 5]
C: [1, 2, 3, 4]
D: Error
`,
rightAnswer: `D`,
explanation: `
Метод push возвращает длину нового массива, а не сам массив. Устанавливая newList равным [1, 2, 3].push(4), мы устанавливаем newList равным 4. Затем мы пытаемся использовать метод push для newList. Поскольку newList является числом 4, мы не можем использовать push: выбрасывается исключение TypeError.
`
},

// 80
{
question: `
function giveLydiaPizza() {
    return "А вот и пицца!"
}

const giveLydiaChocolate = () => "Вот шоколад... теперь дуй в тренажерку."

console.log(giveLydiaPizza.prototype)
console.log(giveLydiaChocolate.prototype)
`,
answers: `
A: { constructor: ...} { constructor: ...}
B: {} { constructor: ...}
C: { constructor: ...} {}
D: { constructor: ...} undefined
`,
rightAnswer: `D`,
explanation: `
Обычные функции, такие как giveLydiaPizza(), имеют свойство prototype, которое является объектом (прототипом объекта) со свойством constructor. Однако стрелочные функции, такие как giveLydiaChocolate(), не имеют прототипа. Поэтому при попытке получить доступ к giveLydiaChocolate.prototype возвращается undefined.
`
},

// 81
{
question: `
const person = {
    name: "Lydia",
    age: 21
}

for (const [x, y] of Object.entries(person)) {
    console.log(x, y)
}
`,
answers: `
A: name Lydia и age 21
B: ["name", "Lydia"] и ["age", 21]
C: ["name", "age"] и undefined
D: Error
`,
rightAnswer: `A`,
explanation: `
Object.entries(person) возвращает массив вложенных массивов, содержащий ключи и значения:<br>
[ [ 'name', 'Lydia' ], [ 'age', 21 ] ]<br>
С помощью for-of мы перебираем элементы массива, в данном случае подмассивы. Мы можем деструктурировать подмассивы в цикле, используя const [x, y]. "x" равен первому элементу в подмассиве, "y" - второму. Первым подмассивом является [ "name", "Lydia" ], где "x" равняется "name", а "y" = "Lydia". Вторым подмассивом является [ "age", 21 ], где "x" = "age", и "y" равняется 21.
`
},

// 82
{
question: `
function getItems(fruitList, ...args, favoriteFruit) {
    return [...fruitList, ...args, favoriteFruit]
}

console.log(getItems(["banana", "apple"], "pear", "orange"))
`,
answers: `
A: ["banana", "apple", "pear", "orange"]
B: [["banana", "apple"], "pear", "orange"]
C: ["banana", "apple", ["pear"], "orange"]
D: SyntaxError
`,
rightAnswer: `D`,
explanation: `
...args - это прочие параметры (оператор rest). Значение rest - это массив, содержащий неиспользованные аргументы и в этой связи передаваемый последним. В примере rest является вторым аргументом. Это приводит к синтаксической ошибке.
<pre><code class="lang-js">
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}
getItems(["banana", "apple"], "pear", "orange")
</code></pre>
Данный код работает. Он возвращает массив [ 'banana', 'apple', 'orange', 'pear' ].
`
},

// 83
{
question: `
function nums(a, b) {
    if
        (a > b)
        console.log('a больше')
    else
        console.log('b больше')
        return
    a + b
}

console.log(nums(4, 2))
console.log(nums(1, 2))
`,
answers: `
A: a больше, 6 и b больше, 3
B: a больше, undefined and b больше, undefined
C: undefined and undefined
D: SyntaxError
`,
rightAnswer: `B`,
explanation: `
В JavaScript мы не должны явно указывать точку с запятой (;), однако компилятор автоматически добавляет их после операторов. Например, оператором могут быть переменные или ключевые слова, такие как throw, return, break и т.д. Здесь мы написали инструкцию return и другое значение a + b в новой строке. Однако, поскольку это новая строка, движок не знает, что это на самом деле значение, которое мы хотим вернуть. Вместо этого, он автоматически добавляет точку с запятой после return. Это выглядит так:
<pre><code class="lang-js">
return;
a + b
</code></pre>
Это означает, что a + b никогда не достигается, так как функция перестает выполняться после ключевого слова return. Если значение не возвращается, как здесь, функция возвращает undefined. Обратите внимание, что после операторов if / else точки с запятой автоматически не вставляются.
`
},

// 84
{
question: `
class Person {
    constructor() {
        this.name = "Lydia"
    }
}

Person = class AnotherPerson {
    constructor() {
        this.name = "Sarah"
    }
}

const member = new Person()
console.log(member.name)
`,
answers: `
A: "Lydia"
B: "Sarah"
C: Error: cannot redeclare Person
D: SyntaxError
`,
rightAnswer: `B`,
explanation: `
Мы можем установить классы равными другим классам/конструкторам функций. В данном случае мы устанавливаем Person равным AnotherPerson. Свойство name этого конструктора - Sarah, поэтому свойство name для нового экземпляра класса Person member - это также Sarah.
`
},

// 85
{
question: `
const info = {
    [Symbol('a')]: 'b'
}

console.log(info)
console.log(Object.keys(info))
`,
answers: `
A: {Symbol('a'): 'b'} и ["{Symbol('a')"]
B: {} и []
C: { a: "b" } и ["a"]
D: {Symbol('a'): 'b'} и []
`,
rightAnswer: `D`,
explanation: `
Symbol не является перечисляемый. Метод Object.keys возвращает все перечисляемые ключи объекта. Symbol не просматривается таким образом, и возвращается пустой массив. При выводе в консоль всего объекта будут видны все свойства, даже не перечисляемые. Это одно из многих качеств символа: помимо представления совершенно уникального значения (которое предотвращает случайное пересечение имен в объектах, например, при работе с 2 библиотеками, которые хотят добавить свойства к одному и тому же объекту). Мы также можем "скрыть" свойства объектов таким способом (хотя и не полностью. Мы можем получить доступ к символам с помощью метода Object.getOwnPropertySymbols()).
`
},

// 86
{
question: `
const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list))
console.log(getUser(user))
`,
answers: `
A: [1, [2, 3, 4]] и undefined
B: [1, [2, 3, 4]] и { name: "Lydia", age: 21 }
C: [1, 2, 3, 4] и { name: "Lydia", age: 21 }
D: Error и { name: "Lydia", age: 21 }
`,
rightAnswer: `A`,
explanation: `
Функция getList() получает массив в качестве аргумента. В getList() мы деструктурируем этот массив. Это выглядит так:<br>
[x, ...y] = [1, 2, 3, 4]<br>
С помощью прочих параметров (оператора rest) ...y мы помещаем все "оставшиеся" аргументы в массив. Такими аргументами являются 2, 3 и 4. Значение "y" является массивом, содержащим прочие параметры. В данном случае значение "x" равно 1, поэтому, мы видим в консоли [x, y], [1, [2, 3, 4]]. Функция getUser() получает объект. В случае стрелочных функций мы можем обойтись без фигурных скобок, если возвращаем только одно значение. Однако, если мы хотим вернуть объект из стрелочной функции, то должны указать его в круглых скобках, в противном случае, никакое значение не будет возвращено. Следующая функция вернула бы объект:<br>
const getUser = user => ({ name: user.name, age: user.age }) <br>
Поскольку значение не возвращается, функция возвращает undefined.
`
},

// 87
{
question: `
const name = "Lydia"

console.log(name())
`,
answers: `
A: SyntaxError
B: ReferenceError
C: TypeError
D: undefined
`,
rightAnswer: `C`,
explanation: `
Переменная name содержит значение строки, которая не является функцией, поэтому не может быть вызвана. TypeError возникает, когда значение не соответствует ожидаемому типу. JavaScript ожидал, что name будет функцией, так как мы пытаемся ее вызвать. Однако name является строкой, поэтому выбрасывается исключение TypeError: name is not a function. SyntaxError генерируются, когда мы написали нечто недопустимое с точки зрения JavaScript, например, когда слово return написано как retrun. ReferenceError генерируются, когда JavaScript не может найти ссылку на значение, к которому мы обращаемся.
`
},

// 88
{
question: `
console.log(
    \`&#36;{[] && 'Не'}вероятно!
    Вам &#36;{'' && 'не'}следует обратиться (обращаться) к врачу после такого количества JavaScript lol\`
)
`,
answers: `
A: вероятно! Вам следует обратиться к врачу после такого количества JavaScript lol
B: Невероятно! Вам следует обратиться к врачу после такого количества JavaScript lol
C: вероятно! Вам не следует обращаться к врачу после такого количества JavaScript lol
D: Невероятно! Вам не следует обращаться к врачу после такого количества JavaScript lol
`,
rightAnswer: `B`,
explanation: `
[] - истинное значение. Оператор && возвращает правое значение, если левое значение является истинным. В данном случае левое значение [] является истинным, поэтому возвращается 'Не'. "" - ложное значение. Если левое значение ложно, ничего не возвращается. "не" не возвращается.
`
},

// 89
{
question: `
const one = (false || {} || null)
const two = (null || false || "")
const three = ([] || 0 || true)

console.log(one, two, three)
`,
answers: `
A: false null []
B: null "" true
C: {} "" []
D: null null true
`,
rightAnswer: `C`,
explanation: `
Оператор || возвращает первый истинный операнд. Если все значения ложны, возвращается последний операнд. (false || {} || null): пустой объект {} является истинным значением. Это первое (и единственное) истинное значение, которое и возвращается. one = {}. (null || false ||" "): все операнды являются ложными. Это означает, что возвращается последний операнд - "". two = "". ([] || 0 ||" "): пустой массив [] является истинным. Это первое истинное значение, которое и возвращается. three = [].
`
},

// 90
{
question: `
const myPromise = () => Promise.resolve('I have resolved!')

function firstFunction() {
  myPromise().then(res => console.log(res))
  console.log('first')
}

async function secondFunction() {
  console.log(await myPromise())
  console.log('second')
}

firstFunction()
secondFunction()
`,
answers: `
A: I have resolved!, first and I have resolved!, second
B: first, I have resolved! and second, I have resolved!
C: I have resolved!, second and first, I have resolved!
D: first, I have resolved! and I have resolved!, second
`,
rightAnswer: `D`,
explanation: `
С промисами дело обстоит следующим образом: "Я хочу отложить выполнение этой функции, поскольку это может занять некоторое время". Только когда определенное значение разрешено (или отклонено), и когда стек вызовов пуст, я хочу получить это значение. Мы можем получить значение с помощью ключевого слова then и await в асинхронной функции. Хотя мы можем получить значение промиса с помощью then и await, они работают по-разному. В firstFunction мы (вроде бы) приостановили выполнение функции myPromise, и продолжили выполнение другого кода, в данном случае console.log('first'). Затем функция разрешается строкой "I have resolved!", которая выводится в консоль после освобождения стека вызовов. С помощью ключевого слова await в secondFunction, мы приостанавливаем выполнение асинхронной функции до тех пор, пока значение не будет разрешено. Это означает, что мы ожидаем разрешения myPromise со значением "I have resolved!", и только когда это произошло, мы переходим к следующей строке: second выводится в консоль последней.
`
},

// 91
{
question: `
const set = new Set()

set.add(1)
set.add("Lydia")
set.add({ name: "Lydia" })

for (let item of set) {
  console.log(item + 2)
}
`,
answers: `
A: 3, NaN, NaN
B: 3, 7, NaN
C: 3, Lydia2, [object Object]2
D: "12", Lydia2, [object Object]2
`,
rightAnswer: `C`,
explanation: `
Оператор + используется не только для сложения чисел, но и для объединения (конкатенации) строк. Всякий раз, когда движок JavaScript видит, что одно или несколько значений не являются числом, он приводит число к строке. Первым значением является 1 - число. 1 + 2 возвращает 3. Тем не менее, второе значение "Lydia". "Lydia" является строкой, а 2 является числом: 2 приводится к строке. "Lydia" и "2" объединяются, что приводит к "Lydia2". {name: "Lydia"} является объектом. Ни число, ни объект не являются строкой, поэтому они приводятся к строке. Когда объект приводится к строке он становится "[object Object]". "[object Object]", объединенный с "2", становится "[object Object]2".
`
},

// 92
{
question: `
console.log(Promise.resolve(5))
`,
answers: `
A: 5
B: Promise {<pending>: 5}
C: Promise {<resolved>: 5}
D: Error
`,
rightAnswer: `C`,
explanation: `
Мы можем передать в Promise.resolve любой тип данных. Данный метод возвращает промис с разрешенным значением. Если мы передадим ему обычную функцию, промис разрешится с обычным значением. Если мы передадим промис, промис разрешится с разрешенным значением переданного промиса. В данном случае мы передаем число 5. Возвращается разрешенный промис со значением 5.
`
},

// 93
{
question: `
function compareMembers(person1, person2 = person) {
    if (person1 !== person2) {
      console.log("Не одинаковые!")
    } else {
      console.log("Одинаковые!")
    }
}

const person = { name: "Lydia" }

compareMembers(person)
`,
answers: `
A: Не одинаковые!
B: Одинаковые!
C: ReferenceError
D: SyntaxError
`,
rightAnswer: `B`,
explanation: `
Объекты передаются по ссылке. Когда мы проверяем объекты на строгое равенство (идентичность) (===), мы сравниваем их ссылки. Мы устанавливаем значение по умолчанию для person2, равное объекту person, и передаем объект person в качестве значения для person1. Это означает, что оба значения имеют ссылку на одно и то же место в памяти, поэтому они равны. Блок кода в операторе else запускается, и в консоль выводится "Одинаковые!".
`
},

// 94
{
question: `
const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
}

const colors = ["pink", "red", "blue"]

console.log(colorConfig.colors[1])
`,
answers: `
A: true
B: false
C: undefined
D: TypeError
`,
rightAnswer: `D`,
explanation: `
В JavaScript у нас есть два способа получить доступ к свойствам объекта: скобочная нотация или точечная нотация. В данном случае мы используем точечную нотацию (colorConfig.colors) вместо скобочной (colorConfig["colors"]). При точечной нотации JavaScript пытается найти свойство объекта с указанным именем. В примере JavaScript пытается найти свойство colors в объекте colorConfig. Не существует такого свойства, поэтому возвращается undefined.<br>
Затем мы пытаемся получить доступ к значению первого элемента, используя [1]. Мы не можем сделать этого для undefined, поэтому выбрасывается исключение TypeError: Cannot read property '1' of undefined.<br>
JavaScript интерпретирует (или распаковывает) операторы. Когда мы используем скобочную нотацию, он видит открывающуюся скобку [ и продолжает работать, пока не найдет закрывающуюся скобку ]. Только тогда он оценивает выражение. Если бы мы использовали colorConfig[colors[1]], то вернулось бы значение свойства red объекта colorConfig.
`
},

// 95
{
question: `
console.log('❤️' === '❤️')
`,
answers: `
A: true
B: false
`,
rightAnswer: `A`,
explanation: `
Смайлики - это юникоды. Юникод для сердца - "U+2764 U+FE0F". Юникоды одинаковы для одних и тех же смайликов, поэтому мы сравниваем две одинаковые строки, что возвращает true.
`
},

// 96
{
question: `
const food = ['🍕', '🍫', '🍳', '🍔']
const info = { favoriteFood: food[0] }

info.favoriteFood = '🍝'

console.log(food)
`,
answers: `
A: ['🍕', '🍫', '🍳', '🍔']
B: ['🍝', '🍫', '🍳', '🍔']
C: ['🍝', '🍕', '🍫', '🍳', '🍔']
`,
rightAnswer: `A`,
explanation: `
Мы устанавливаем значение свойства favourFood объекта info равным строке '🍕'. Строка является примитивным типом данных. В JavaScript примитивные типы данных (все, что не является объектом) передаются по значению. Затем мы меняем значение свойства favourFood объекта info. Массив food не изменился, поскольку значение favourFood было скопировано из значения первого элемента в массиве и не имеет ссылки на то же место в памяти, что и food[0]. Поэтому в консоль выводится исходный массив ['🍕', '🍫', '🍳', '🍔'].
`
},

// 97
{
question: `
let name = 'Lydia'

function getName() {
  console.log(name)
  let name = 'Sarah'
}

getName()
`,
answers: `
A: Lydia
B: Sarah
C: undefined
D: ReferenceError
`,
rightAnswer: `D`,
explanation: `
Каждая функция имеет собственный контекст выполнения (или область видимости). Функция getName() сначала ищет переменную name в собственном контексте (области видимости). getName() содержит собственную переменную name: мы объявляем переменную name с помощью ключевого слова let и присваиваем ей значение 'Sarah'. Переменные, объявленные с помощью ключевого слова let (и const) не поднимаются в начало функции, в отличие от переменных, объявленных с помощью var. Они недоступны до инициализации. Это называется "временной мертвой зоной". Когда мы пытаемся получить доступ к таким переменным, JavaScript выбрасывает исключение ReferenceError. Если бы мы не объявили переменную name в функции getName(), движок JavaScript продолжал бы поиск переменной вверх по цепочке областей видимости. Внешняя область видимости содержит переменную name со значением Lydia. В этом случае в консоль было бы выведено "Lydia".
`
},

// 98
{
question: `
function* generatorOne() {
    yield ['a', 'b', 'c'];
}

function* generatorTwo() {
    yield* ['a', 'b', 'c'];
}

const one = generatorOne()
const two = generatorTwo()

console.log(one.next().value)
console.log(two.next().value)
`,
answers: `
A: a и a
B: a и undefined
C: ['a', 'b', 'c'] и a
D: a и ['a', 'b', 'c']
`,
rightAnswer: `C`,
explanation: `
С помощью ключевого слова yield мы получаем значения в функции-генераторе. С помощью yield* мы можем получить значение из другой функции-генератора или итерируемого объекта (например, массива). В generatorOne() мы получаем весь массив [' a ',' b ',' c '], используя yield. Значение свойства value, возвращаемого методом next объекта one (one.next().value), равняется массиву ['a', 'b', 'c'].
<pre><code class="lang-js">
console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
</code></pre>
В функции generatorTwo() мы используем ключевое слово yield*. Это означает, что первое значение равняется первому значению итератора. Итератор - это массив ['a', 'b', 'c']. Первым значением является a, поэтому когда мы вызываем two.next().value, возвращается a.
<pre><code class="lang-js">
console.log(two.next().value) // 'a'
console.log(two.next().value) // 'b'
console.log(two.next().value) // 'c'
console.log(two.next().value) // undefined
</code></pre>
`
},

// 99
{
question: `
console.log(\`&#36;{(x => x)('Я люблю')} писать код\`)
`,
answers: `
A: Я люблю писать код
B: undefined писать код
C: &#36;{(x => x)('Я люблю') писать код
D: TypeError
`,
rightAnswer: `A`,
explanation: `
Выражения внутри шаблонных литералов оцениваются первыми. Это означает, что строка будет содержать значение выражения, в данном случае значение немедленно вызываемого функционального выражения (x => x)('I love'). Мы передаем значение 'Я люблю' в качестве аргумента стрелочной функции x => x. x = 'Я люблю', что и возвращается. Это приводит к 'Я люблю писать код'.
`
},

// 100
{
question: `
const person = {
    name: "Lydia",
    age: 21
}

const changeAge = (x = { ...person }) => x.age += 1
const changeAgeAndName = (x = { ...person }) => {
    x.age += 1
    x.name = "Sarah"
}

changeAge(person)
changeAgeAndName()

console.log(person)
`,
answers: `
A: {name: "Sarah", age: 22}
B: {name: "Sarah", age: 23}
C: {name: "Lydia", age: 22}
D: {name: "Lydia", age: 23}
`,
rightAnswer: `C`,
explanation: `
Функции changeAge() и changeAgeAndName() имеют параметры по умолчанию, а именно: вновь созданный объект { ...person }. Этот объект имеет копии всех ключей/значений объекта person. Сначала мы вызываем функцию changeAge() и передаем ей объект person в качестве аргумента. Эта функция увеличивает значение свойства age на 1. person теперь равняется {name: "Lydia", age: 22}. Затем мы вызываем функцию changeAgeAndName() без аргументов. Поэтому значение "x" равняется новому объекту: { ...person }. Поскольку это новый объект, он не влияет на свойства объекта person. person по-прежнему равняется {name: "Lydia", age: 22}.
`
},

// 101
{
question: `
function sumValues(x, y, z) {
    return x + y + z; // 6
}
`,
answers: `
A: sumValues([...1, 2, 3])
B: sumValues([...[1, 2, 3]])
C: sumValues(...[1, 2, 3])
D: sumValues([1, 2, 3])
`,
rightAnswer: `C`,
explanation: `
С помощью оператора распространения (spread) ... мы разбиваем итерируемые сущности на отдельные элементы. Функция sumValues() принимает три аргумента: x, y и z. Для того, чтобы эта функция вернула 6, ей в качестве аргумента необходимо передать ...[1, 2, 3].
`
},

// 102
{
question: `
let num = 1;
const list = ['a', 'b', 'c', 'd'];

console.log(list[(num += 1)]);
`,
answers: `
A: b
B: c
C: SyntaxError
D: ReferenceError
`,
rightAnswer: `B`,
explanation: `
С помощью оператора += мы увеличиваем значение num на 1. Начальным значением num является 1, 1 + 1 = 2. Элементом со вторым индексом является "c", что и выводится в консоль.
`
},

// 103
{
question: `
const person = {
    firstName: 'Lydia',
    lastName: 'Hallie',
    pet: {
      name: 'Mara',
      breed: 'Dutch Tulip Hound',
    },
    getFullName() {
      return \`&#36;{this.firstName} &#36;{this.lastName}\`;
    },
};

console.log(person.pet?.name);
console.log(person.pet?.family?.name);
console.log(person.getFullName?.());
console.log(member.getLastName?.());
`,
answers: `
A: undefined undefined undefined undefined
B: Mara undefined Lydia Hallie undefined
C: Mara null Lydia Hallie null
D: null ReferenceError null ReferenceError
`,
rightAnswer: `B`,
explanation: `
Благодаря оператору опциональной цепочки ?. нам больше не нужно проверять глубоко вложенные значения на валидность. Если мы попытаемся получить доступ к свойству значения undefined или null, выражение вернет undefined. person.pet?.name: person имеет свойство pet; pet имеет свойство name, возвращается Mara. person.pet?.family?.name: person имеет свойство pet; pet не имеет свойства family; person.pet?.family отсутствует, возвращается undefined. person.getFullName?.(): person имеет метод getFullName(), возвращается Lydia Hallie. member.getLastName?.(): member не определена; member.getLastName() отсутствует, возвращается undefined.
`
},

// 104
{
question: `
const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('Нам нужно купить бананы!');
} else {
  console.log('Нам не нужно покупать бананы!');
}
`,
answers: `
A: Нам нужно купить бананы!
B: Нам не нужно покупать бананы!
C: undefined
D: 1
`,
rightAnswer: `B`,
explanation: `
Условие groceries.indexOf('banana') возвращает 0, который является ложным значением. Поскольку условие ложно, выполняется блок else, и мы получаем "Нам не нужно покупать бананы!"
`
},

// 105
{
question: `
const config = {
    languages: [],
    set language(lang) {
      return this.languages.push(lang);
    },
};

console.log(config.language);
`,
answers: `
A: function language(lang) { this.languages.push(lang }
B: 0
C: []
D: undefined
`,
rightAnswer: `D`,
explanation: `
Метод language() - это сеттер. Сеттеры не имеют собственных значений, их задача - модифицировать свойства. Поэтому вызов сеттера возвращает undefined.
`
},

// 106
{
question: `
const name = 'Lydia Hallie';

console.log(!typeof name === 'object');
console.log(!typeof name === 'string');
`,
answers: `
A: false true
B: true false
C: false false
D: true true
`,
rightAnswer: `C`,
explanation: `
typeof name возвращает 'string'. 'string' - это истинное значение, поэтому !typeof name = false. false === 'object' и false === 'string' возвращают false (если мы хотим сравнить типы значений вместо !typeof следует использовать !==).
`
},

// 107
{
question: `
const add = x => y => z => {
    console.log(x, y, z);
    return x + y + z;
};

add(4)(5)(6);
`,
answers: `
A: 4 5 6
B: 6 5 4
C: 4 function function
D: undefined undefined 6
`,
rightAnswer: `A`,
explanation: `
Функция add() возвращает стрелочную функцию, которая возвращает стрелочную функцию, которая возвращает стрелочную функцию (вы еще здесь?). Первая функция принимает аргумент "x" со значением 4. Мы вызываем вторую функцию с аргументом "y" со значением 5. Затем мы вызываем третью функцию с аргументом "z" со значением 6. Когда мы пытаемся получить доступ к значениям "x" и "y", движок JavaScript поднимается по цепочке областей видимости в поисках соответствующих значений. Возвращается 4 5 6.
`
},

// 108
{
question: `
async function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield Promise.resolve(i);
    }
  }

(async () => {
    const gen = range(1, 3);
    for await (const item of gen) {
        console.log(item);
    }
})();
`,
answers: `
A: Promise {1} Promise {2} Promise {3}
B: Promise {<pending>} Promise {<pending>} Promise {<pending>}
C: 1 2 3
D: undefined undefined undefined
`,
rightAnswer: `C`,
explanation: `
Функция-генератор range() возвращает асинхронный объект с промисами для каждого переданного значения: Promise{1}, Promise{2}, Promise{3}. Мы присваиваем переменной gen этот объект, и перебираем его элементы с помощью цикла for await... of. Мы устанавливаем значение переменной item равным значению промиса. Поскольку мы ожидаем значения item, т.е. разрешения промиса, то получаем 1, 2, 3.
`
},

// 109
{
question: `
const myFunc = ({ x, y, z }) => {
    console.log(x, y, z);
};

myFunc(1, 2, 3);
`,
answers: `
A: 1 2 3
B: {1: 1} {2: 2} {3: 3}
C: { 1: undefined } undefined undefined
D: undefined undefined undefined
`,
rightAnswer: `D`,
explanation: `
myFunc в качестве аргумента ожидает получить объект со свойствами x, y и z. Поскольку мы передаем ей 1, 2, 3, а не {x: 1, y: 2, z: 3}, то возвращается значение x, y и z по умолчанию, т.е. undefined.
`
},

// 110
{
question: `
function getFine(speed, amount) {
    const formattedSpeed = new Intl.NumberFormat({
        'en-US',
        { style: 'unit', unit: 'mile-per-hour' }
    }).format(speed)

    const formattedAmount = new Intl.NumberFormat({
        'en-US',
        { style: 'currency', currency: 'USD' }
    }).format(amount)

    return \`The driver drove &#36;{formattedSpeed} and has to pay &#36;{formattedAmount}\`
}

console.log(getFine(130, 300))
`,
answers: `
A: The driver drove 130 and has to pay 300
B: The driver drove 130 mph and has to pay $300.00
C: The driver drove undefined and has to pay undefined
D: The driver drove 130.00 and has to pay 300.00
`,
rightAnswer: `B`,
explanation: `
С помощью метода Intl.NumberFormat() мы можем форматировать числовые значению в любую локаль. Мы форматируем число 130 в локаль en-US как unit со значением mile-per-hour, что возвращает 130 mph. Число 300 в локали en-US со свойством currency и значением USD возвращает $300.00.
`
},

// 111
{
question: `
const spookyItems = ['👻', '🎃', '👿'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);
`,
answers: `
A: ["👻", "🎃", "👿"]
B: ["👻", "🎃", "👿", "💀"]
C: ["👻", "🎃", "👿", { item: "💀" }]
D: ["👻", "🎃", "👿", "[object Object]"]
`,
rightAnswer: `B`,
explanation: `
Деструктурируя объекты, мы распаковываем значения правого объекта и присваиваем это значение одноименному свойству левого объекта. В данном случае, мы присваиваем значение "💀" spookyItems[3]. Это означает, что мы модифицируем массив spookyItems, добавляя в него "💀". Поэтому получаем ["👻", "🎃", "👿", "💀"].
`
},

// 112
{
question: `
const name = 'Lydia Hallie';
const age = 21;

console.log(Number.isNaN(name));
console.log(Number.isNaN(age));

console.log(isNaN(name));
console.log(isNaN(age));
`,
answers: `
A: true false true false
B: true false false false
C: false false true false
D: false true false true
`,
rightAnswer: `C`,
explanation: `
С помощью метода Number.isNaN() мы можем проверить, является ли переданное значение числом и равняется ли оно NaN. name не является числовым значением, поэтому Number.isNaN(name) возвращает false. age является числовым значением, но не равняется NaN, поэтому Number.isNaN(age) также возвращает false. С помощью метода isNaN() мы можем проверить, что переданное значение не является числом. Значение name не является числом, поэтому isNaN(name) возвращает true. Значение age является числом, поэтому isNaN(age) возвращает false.
`
},

// 113
{
question: `
const randomValue = 21;

function getInfo() {
  console.log(typeof randomValue);
  const randomValue = 'Lydia Hallie';
}

getInfo();
`,
answers: `
A: "number"
B: "string"
C: undefined
D: ReferenceError
`,
rightAnswer: `D`,
explanation: `
Переменные, объявленные с помощью ключевого слова const недоступны до инициализации: это называется "временной мертвой зоной". В getInfo() областью видимости переменной randomValue является функция. Когда мы пытаемся вывести значение randomValue в консоль, она еще не инициализирована: выбрасывается исключение ReferenceError. Движок не спускается вниз по цепочке областей видимости, поскольку мы объявили переменную randomValue в функции getInfo().
`
},

// 114
{
question: `
const myPromise = Promise.resolve('Woah some cool data');

(async () => {
  try {
    console.log(await myPromise);
  } catch {
    throw new Error(\`Oops didn't work\`);
  } finally {
    console.log('Oh finally!');
  }
})();
`,
answers: `
A: Woah some cool data
B: Oh finally!
C: Woah some cool data Oh finally!
D: Oops didn't work Oh finally!
`,
rightAnswer: `C`,
explanation: `
В блоке try мы выводим в консоль ожидаемое значение переменной myPromise: "Woah some cool data". Поскольку в блоке try не возникло ошибки, код в блоке catch не выполняется. Код в блоке finally выполняется всегда, поэтому в консоль выводится "Oh finally!"
`
},

// 115
{
question: `
const emojis = ['💫', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));
`,
answers: `
A: ['💫', ['✨', '✨', ['🍕', '🍕']]]
B: ['💫', '✨', '✨', ['🍕', '🍕']]
C: ['💫', ['✨', '✨', '🍕', '🍕']]
D: ['💫', '✨', '✨', '🍕', '🍕']
`,
rightAnswer: `B`,
explanation: `
С помощью метода flat мы можем создать новый "плоский" массив. Глубина этого массива зависит от передаваемого значения. В данном случае, мы передаем значение 1 (чего мы могли бы не делать, поскольку это является значением по умолчанию), значит, будут объединены только массивы певрого уровня вложенности, т.е. ['💫'] и ['✨', '✨', ['🍕', '🍕']]. Результатом объединения этих массивов является ['💫', '✨', '✨', ['🍕', '🍕']].
`
},

// 116
{
question: `
class Counter {
    constructor() {
      this.count = 0;
    }

    increment() {
      this.count++;
    }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
`,
answers: `
A: 0
B: 1
C: 2
D: 3
`,
rightAnswer: `D`,
explanation: `
counterOne является экземпляром класса Counter. Класс Counter содержит свойство count в конструкторе и метод increment(). Сначала мы дважды вызываем метод increment() с помощью counterOne.increment(). Таким образом, значением counterOne.count становится 2. Затем мы создаем новую переменную counterTwo и присваиваем ей значение counterOne. Поскольку объекты взаимодействуют через ссылки, мы просто создали новую ссылку на тоже самое место в памяти, на которое указывает counterOne. Поскольку обе переменные ссылаются на одно и тоже место в памяти, любые изменения объекта, на который ссылается counterTwo также влияют на counterOne. Таким образом, значением counterTwo является 2. Мы вызываем counterTwo.increment(), который увеличивает значение count до 3. Наконец, мы выводим в консоль значение counterOne.count, которое также равняется 3.
`
},

// 117
{
question: `
const myPromise = Promise.resolve(Promise.resolve('Promise!'));

function funcOne() {
  myPromise.then(res => res).then(res => console.log(res));
  setTimeout(() => console.log('Timeout!', 0));
  console.log('Last line!');
}

async function funcTwo() {
  const res = await myPromise;
  console.log(await res);
  setTimeout(() => console.log('Timeout!', 0));
  console.log('Last line!');
}

funcOne();
funcTwo();
`,
answers: `
A: Promise! Last line! Promise! Last line! Last line! Promise!
B: Last line! Timeout! Promise! Last line! Timeout! Promise!
C: Promise! Last line! Last line! Promise! Timeout! Timeout!
D: Last line! Promise! Promise! Last line! Timeout! Timeout!
`,
rightAnswer: `D`,
explanation: `
Сначала мы вызываем функцию funcOne(). На первой строке этой функции мы вызываем промис myPromise, который является асинхронной операцией. Пока движок занят выполнением промиса, выполнение myFunc() продолжается. Следующей строкой является асинхронная функция setTimeout(), функция обратного вызова которой отправляется в Web API. Промис и setTimeout() являются асинхронными, поэтому выполнение функции не дожидается разрешения промиса и обработки setTimeout().<br>
Это означает, что сначала в консоль выводится "Last line!", поскольку console.log() не асинхронная операция. Это последняя строка кода в myFunc(), промис разрешается и в консоль выводится "Promise!".<br>
В момент вызова функции funcTwo() стек вызовов не является пустым, поэтому функция обратного вызова setTimeout() не может туда попасть. В funcTwo() мы сначала ожидаем разрешение промиса myPromise. С помощью ключевого слова await мы приостанавливаем выполнение функции до разрешения (или отклонения) промиса. Затем мы выводим в консоль ожидаемое значение res (поскольку промис возвращает промис). В консоль выводится "Promise!". На следуюей строке у нас снова асинхронная функция setTimeout(), чей колбек отправляется в Web API. Мы достигаем последней строки кода в funcTwo(), в консоль выводится "Last line!".<br>
После того, как funcTwo() удаляется из стека вызовов, он оказывается пустым. Ожидающие этого в очереди задач колбеки (() => console.log("Timeout!") из funcOne() и () => console.log("Timeout!") из funcTwo()) помещаются в стек одна за другой. Первый колбек выводит в консоль "Timeout!" и покидает стек, затем тоже самое происходит со вторым колбеком. Таким образом, мы получаем "Last line! Promise! Promise! Last line! Timeout! Timeout!".
`
},

// 118
{
question: `
// sum.js
export default function sum(x) {
  return x + x;
}

// index.js
import * as sum from './sum';
/* sum */
`,
answers: `
A: sum(4)
B: sum.sum(4)
C: sum.default(4)
D: символ * может использоваться только в именованном экспорте
`,
rightAnswer: `C`,
explanation: `
С помощью символа * мы импортируем все экспортируемые из файла значения, как дефолтные, так и именованные. Если у нас есть такой файл:
<pre><code class="lang-js">
// info.js
export const name = 'Lydia';
export const age = 21;
export default 'I love JavaScript';

// index.js
import * as info from './info';
console.log(info);
</code></pre>
В консоль будет выведено:
<pre><code class="lang-js">
{
    default: "I love JavaScript",
    name: "Lydia",
    age: 21
}
</code></pre>
В данном случае импортированное значение sum выглядит примерно так:<br>
{ default: function sum(x) { return x + x } }<br>
Мы можем вызвать эту функцию посредством sum.default().
`
},

// 119
{
question: `
const handler = {
    set: () => console.log('Added a new property!'),
    get: () => console.log('Accessed a property!'),
};

const person = new Proxy({}, handler);

person.name = 'Lydia';
person.name;
`,
answers: `
A: Added a new property!
B: Accessed a property!
C: Added a new property! Accessed a property!
D: Nothing gets logged
`,
rightAnswer: `C`,
explanation: `
С помощью прокси-объекта мы можем добавить объекту, передаваемому в качестве второго аргумента, определенное поведение. В данном случае, мы передаем объект handler, который имеет два свойства: set и get. set вызывается при установке значений, а get - при их получении. Первый аргумент прокси - пустой объект {}, который является значением person. Поведение этого объекта определено в объекте handler. При добавлении свойства объекту person вызывается set. При получении доступа к свойству person вызывается get. Сначала мы добавляем прокси-объекту новое свойство name. Вызывается set и в консоль выводится "Added a new property!". Затем мы получаем значение свойства name. Вызывается get и в консоль выводится "Accessed a property!".
`
},

// 120
{
question: `
const person = {
    name: 'Lydia Hallie',
    address: {
        street: '100 Main St',
    },
};

Object.freeze(person);
`,
answers: `
A: person.name = "Evan Bacon"
B: delete person.address
C: person.address.street = "101 Main St"
D: person.pet = { name: "Mara" }
`,
rightAnswer: `С`,
explanation: `
Метод Object.freeze() "замораживает" объект. Свойства не могут добавляться, изменяться или удаляться. Тем не менее, объект замораживается поверхностно. Это означает, что свойства первого уровня вложенности заморожены. Однако, в случае когда таким свойством является объект - address, его свойства не являются замороженными и их можно изменять.
`
},

// 121
{
question: `
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);
`,
answers: `
A: 2 4 and 3 6
B: 2 NaN and 3 NaN
C: 2 Error and 3 6
D: 2 4 and 3 Error
`,
rightAnswer: `A`,
explanation: `
Сначала мы вызываем функцию myFunc() без аргументов. Поэтому аргументам присваиваются значения по умолчанию, num - 2, а value - значение функции add(). Мы передаем add() значение num в качестве аргумента, которое равняется 2. add() возвращает 4, что является значением value. Затем мы вызываем myFunc() с аргументом 3, которое присваивается num. Поскольку мы не присваиваем значения value, его значением вновь становится значение add(). Мы передаем add() значение 3, она возвращает 6, что и является значением value.
`
},

// 122
{
question: `
class Counter {
    #number = 10

    increment() {
        this.#number++
    }

    getNum() {
        return this.#number
    }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number)
`,
answers: `
A: 10
B: 11
C: undefined
D: SyntaxError
`,
rightAnswer: `D`,
explanation: `
В ES2020 мы можем добавлять классам приватные переменные с помощью #. Мы не можем получить доступ к таким переменным за пределами класса. Поэтому, когда мы пытается вывести в консоль значение counter.#number, выбрасывается исключение SyntaxError.
`
},

// 123
{
question: `
const teams = [
    { name: 'Team 1', members: ['Paul', 'Lisa'] },
    { name: 'Team 2', members: ['Laura', 'Tim'] },
];

function* getMembers(members) {
    for (let i = 0; i < members.length; i++) {
        yield members[i];
    }
}

function* getTeams(teams) {
    for (let i = 0; i < teams.length; i++) {
        /* ? */
    }
}

const obj = getTeams(teams);
obj.next(); // { value: "Paul", done: false }
obj.next(); // { value: "Lisa", done: false }
`,
answers: `
A: yield getMembers(teams[i].members)
B: yield* getMembers(teams[i].members)
C: return getMembers(teams[i].members)
D: return yield getMembers(teams[i].members)
`,
rightAnswer: `B`,
explanation: `
Для того, чтобы перебрать members в каждом элементе массива items, нам необходимо передать teams[i].members в функцию-генератор getMembers(). Генератор возвращает объект. Для того, чтобы перебрать элементы этого объекта следует использовать yield*. Если мы не укажем yield, return yield или return, внутренняя функция-генератор не будет возвращена при первом вызове метода next.
`
},

// 124
{
question: `
const person = {
    name: 'Lydia Hallie',
    hobbies: ['coding'],
};

function addHobby(hobby, hobbies = person.hobbies) {
    hobbies.push(hobby);
    return hobbies;
}

addHobby('running', []);
addHobby('dancing');
addHobby('baking', person.hobbies);

console.log(person.hobbies);
`,
answers: `
A: ["coding"]
B: ["coding", "dancing"]
C: ["coding", "dancing", "baking"]
D: ["coding", "running", "dancing", "baking"]
`,
rightAnswer: `C`,
explanation: `
Функция addHobby() принимает два аргумента, hobby и hobbies с дефолтным значением, равным свойству hobbies объекта person. Сначала мы вызываем addHobby() и передаем ей "running" в качестве значения для hobby и пустой массив в качестве значения для hobbies. Поскольку мы передали пустой массив в качестве значения для hobbies, в него добавляется "running". Затем мы вызываем addHobby() и передаем ей "dancing" в качестве значения для hobby. Мы не передаем значения для hobbies, поэтому он получает значение по умолчанию, т.е. значение свойства hobbies объекта person. Мы добавляем в этот массив "dancing". Наконец, мы вызываем addHobby() и передаем ей "baking" в качестве значения для hobby и массив person.hobbies в качестве значения для hobbies. Мы добавляем "baking" в массив person.hobbies. После добавления dancing и baking значением person.hoobies является ["coding", "dancing", "baking"].
`
},

// 125
{
question: `
class Bird {
    constructor() {
        console.log("I'm a bird. 🐤");
    }
}

class Flamingo extends Bird {
    constructor() {
        console.log("I'm pink. 🌸");
        super();
    }
}

const pet = new Flamingo();
`,
answers: `
A: I'm pink. 🌸
B: I'm pink. 🌸 I'm a bird. 🐤
C: I'm a bird. 🐤 I'm pink. 🌸
D: Ничего.
`,
rightAnswer: `B`,
explanation: `
Мы создаем переменную pet, которая является экземпляром класса Flamingo. При создании экземпляра вызывается constructor(). В консоль выводится "I'm pink. 🌸", после чего вызывается super(). super() вызывает конструктор родительского класса. В консоль выводится "I'm a bird. 🐤".
`
},

// 126
{
question: `
const person = {
    name: "Lydia Hallie",
    age: 21
}

[...person] // ["Lydia Hallie", 21]
`,
answers: `
A: Объекты являются итерируемыми по умолчанию
B: *[Symbol.iterator]() { for (let x in this) yield* this[x] }
C: *[Symbol.iterator]() { yield* Object.values(this) }
D: *[Symbol.iterator]() { for (let x in this) yield this }
`,
rightAnswer: `C`,
explanation: `
Объекты не являются итерируемыми по умолчанию. В итерируемых сущностях имеется протокол итератора. Мы можем сделать это вручную, добавив символ итератора [Symbol.iterator], который будет возвращать объект-генератор, например, сделав исходный объект функцией-генератором *[Symbol.iterator]() {}. Эта функция-генератор должна перебирать Object.values объекта person, если мы хотим вернуть массив ["Lydia Hallie", 21]: yield* Object.values(this).
`
},

// 127
{
question: `
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach(num => {
    if (num) count += 1
})

console.log(count)
`,
answers: `
A: 1
B: 2
C: 3
D: 4
`,
rightAnswer: `C`,
explanation: `
Условие if в цикле forEach проверяет, является ли значение num истинным. Поскольку первым значением num является 0, который является ложным, код в блоке if не выполняется. Остальные значения num (1, 2, 3) являются истинными, поэтому counter увеличивается на 1 три раза. В результате значением counter является 3.
`
},

// 128
{
question: `
function getFruit(fruits) {
	console.log(fruits?.[1]?.[1])
}

getFruit([['🍊', '🍌'], ['🍍']])
getFruit()
getFruit([['🍍'], ['🍊', '🍌']])
`,
answers: `
A: null, undefined, 🍌
B: [], null, 🍌
C: [], [], 🍌
D: undefined, undefined, 🍌
`,
rightAnswer: `D`,
explanation: `
Оператор ?. позволяет нам получать опциональный доступ к глубоко вложенным свойствам объектов. Мы пытаемся вывести в консоль элемент с индексом 1 подмассива с индексом 1 массива fruits. Если подмассив с индексом 1 в массиве fruits не существует, возвращается undefined. Если подмассив с индексом 1 в массиве fruits существует, но не имеет элемента с индексом 1, также возвращается undefined. Сначала мы пытаемся вывести в консоль второй элемент подмассива ['🍍'] массива [['🍊', '🍌'], ['🍍']]]. Этот подмассив состоит из одного элемента, т.е. элемента с индексом 1 не существует, поэтому возвращается undefined. Затем мы вызываем функцию getFruits() без аргументов, поэтому массив fruits имеет значение undefined по умолчанию. Наконец, мы пытаемся вывести в консоль второй элемент подмассива ['🍊', '🍌'] массива ['🍍'], ['🍊', '🍌']. Элементом с индексом 1 этого подмассива является 🍌, который и выводится в консоль.
`
},

// 129
{
question: `
class Calc {
	constructor() {
		this.count = 0
	}

	increase() {
		this.count++
	}
}

const calc = new Calc()
new Calc().increase()

console.log(calc.count)
`,
answers: `
A: 0
B: 1
C: undefined
D: ReferenceError
`,
rightAnswer: `A`,
explanation: `
Мы присваиваем переменной calc значение нового экземпляра класса Calc. Затем мы инициализируем новый экземпляр класса Calc и вызываем метод increase() этого экземпляра. Поскольку свойство count находится в конструкторе класса Calc, данное свойство не является общим для экземпляров класса Calc. Это означает, что свойство count не обновляется для экземпляра calc, оно по-прежнему равняется 0.
`
},

// 130
{
question: `
const user = {
	email: "e@mail.com",
	password: "12345"
}

const updateUser = ({ email, password }) => {
	if (email) {
        Object.assign(user, { email })
	}

	if (password) {
        user.password = password
	}

	return user
}

const updatedUser = updateUser({ email: "new@email.com" })

console.log(updatedUser === user)
`,
answers: `
A: false
B: true
C: TypeError
D: ReferenceError
`,
rightAnswer: `B`,
explanation: `
Функция updateUser() обновляет свойства email и password объекта user, если их значения переданы в качестве аргументов, после чего функция возвращает объект user. Значение, которое вернула updateUser(), это объект user. Таким образом, переменная updatedUser ссылается на тот же объект user, на который ссылается сам user. Поэтому updatedUser === user возвращает true.
`
},

// 131
{
question: `
const fruits = ['🍌', '🍊', '🍎']

fruits.slice(0, 1)
fruits.splice(0, 1)
fruits.unshift('🍇')

console.log(fruits)
`,
answers: `
A: ['🍌', '🍊', '🍎']
B: ['🍊', '🍎']
C: ['🍇', '🍊', '🍎']
D: ['🍇', '🍌', '🍊', '🍎']
`,
rightAnswer: `C`,
explanation: `
Сначала мы вызываем метод slice() для массива fruits. Данный метод не модифицирует исходный массив, но возвращает извлеченное значение: '🍌'. Затем мы вызываем метод splice(). Данный метод модифицирует исходный массив, fruits теперь состоит из ['🍊', '🍎']. Наконец, мы вызываем метод unshift(), который модифицирует исходный массив, добавляя '🍇' в качестве первого элемента. Массив fruits теперь состоит из ['🍇', '🍊', '🍎'].
`
},

// 132
{
question: `
const animals = {};
let dog = { emoji: '🐶' }
let cat = { emoji: '🐈' }

animals[dog] = { ...dog, name: "Mara" }
animals[cat] = { ...cat, name: "Sara" }

console.log(animals[dog])
`,
answers: `
A: { emoji: "🐶", name: "Mara" }
B: { emoji: "🐈", name: "Sara" }
C: undefined
D: ReferenceError
`,
rightAnswer: `B`,
explanation: `
Ключи объекта конвертируются (преобразуются) в строки. Поскольку значением dog является объект, animals[dog] на самом деле означает, что мы создаем новое свойство с именем "object Object", значением которого является новый объект. animals["object Object"] равняется { emoji: "🐶", name: "Mara"}. Значением cat также является объект. Это означает, что мы перезаписываем свойство animals["object Object"] новым значением. Поэтому, когда мы выводим в консоль animals[dog], мы на самом деле выводим animals["object Object"], поэтому выводится { emoji: "🐈", name: "Sara" }.
`
},

// 133
{
question: `
const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)
`,
answers: `
A: my@email.com
B: new@email.com
C: undefined
D: ReferenceError
`,
rightAnswer: `A`,
explanation: `
Функция updateEmail() является стрелочной, поэтому она не привязана к объекту user. Это означает, что ключевое слово this не ссылается на объект user, в данном случае оно ссылается на глобальную область видимости (window в браузере, global в Node.js). Значение свойства email объекта user не обновляется. Поэтому, когда мы выводим в консоль значение user.email, выводится my@email.com.
`
},

// 134
{
question: `
const promise1 = Promise.resolve('First')
const promise2 = Promise.resolve('Second')
const promise3 = Promise.reject('Third')
const promise4 = Promise.resolve('Fourth')

const runPromises = async () => {
	const res1 = await Promise.all([promise1, promise2])
	const res2  = await Promise.all([promise3, promise4])
	return [res1, res2]
}

runPromises()
	.then(res => console.log(res))
	.catch(err => console.log(err))
`,
answers: `
A: [['First', 'Second'], ['Fourth']]
B: [['First', 'Second'], ['Third', 'Fourth']]
C: [['First', 'Second']]
D: 'Third'
`,
rightAnswer: `D`,
explanation: `
Метод Promise.all() выполняет переданные ему промисы одновременно. Если один из промисов отклоняется, Promise.all также отклоняется со значением отклоненного промиса. В данном случае, promise3 отклоняется со значением "Third". Мы перехватываем отклоненное значение в методе catch вызова функции runPromises(). Поэтому в консоль выводится только "Third".
`
},

// 135
{
question: `
const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = /* ? */

Object[method](keys.map((_, i) => {
	return [keys[i], values[i]]
})) // { name: "Lydia", age: 22 }
`,
answers: `
A: entries
B: values
C: fromEntries
D: forEach
`,
rightAnswer: `C`,
explanation: `
Метод fromEntries() преобразует двумерный массив в объект. Первый элемент каждого подмассива становится ключом, а второй элемент - значением. В данном случае, мы перебираем элементы массива keys, возвращая массив, первым элементом которого является элемент массива keys с текущим индексом, вторым элементом - элемент массива values с текущим индексом. Это создает массив массивов с правильными ключами и значениями, которые преобразуются в { name: "Lydia", age: 22 }.
`
},

// 136
{
question: `
const createMember = ({ email, address = {}}) => {
	const validEmail = /.+\@.+\..+/.test(email)
	if (!validEmail) throw new Error("Valid email pls")

	return {
		email,
		address: address ? address : null
	}
}

const member = createMember({ email: "my@email.com" })
console.log(member)
`,
answers: `
A: { email: "my@email.com", address: null }
B: { email: "my@email.com" }
C: { email: "my@email.com", address: {} }
D: { email: "my@email.com", address: undefined }
`,
rightAnswer: `C`,
explanation: `
Значением address по умолчанию является пустой объект {}. Когда мы присваиваем переменной member значение функции createMember(), мы не передаем значение для address, поэтому значением address становится {}. Пустой объект - это истинное значение, поэтому условие address ? address : null возвращает true. Значением address является {}.
`
},

// 137
{
question: `
let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("Это не строка!")
} else {
	console.log("Это строка!")
}
`,
answers: `
A: Это не строка!
B: Это строка!
C: TypeError
D: undefined
`,
rightAnswer: `B`,
explanation: `
Условие if проверяет, является ли !typeof random value строкой. Оператор ! преобразует значение в логический тип данных. Если значение истинно, возвращается false, если ложно - true. В данном случае, значением typeof randomValue является "number", что есть истина, поэтому возвращается false. !typeof randomValue === "string" возвращает false, поскольку на самом деле мы проверяем false === "string". Условие возвращает false, поэтому выполняется код в блоке else и в консоль выводится "Это строка!".
`
},

// thanks to this guy
// https://github.com/sudheerj/javascript-interview-questions
// 138
{
question: `
var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}
`,
answers: `
A: undefined
B: error
C: null
D: {model: "Honda", color: "white", year: "2010", country: "UK"}
`,
rightAnswer: `D`,
explanation: `
Объявления функций поднимаются подобно объявлениям переменных. Поэтому место объявления функции "Venicle()" не имеет значения.
`
},

// 139
{
question: `
function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);
`,
answers: `
A: 1 undefined undefined
B: error
C: 1 undefined number
D: 1 number number
`,
rightAnswer: `C`,
explanation: `
Функция "foo()" возвращает 1 из-за оператора "++". Выражение "let x = y = 0" определяет локальную переменную "x". Однако "y" определяется как глобальная переменная. Данное выражение эквивалентно следующему:
<pre>
<code class="lang-js">
let x
window.y = 0
x = window.y
</code>
</pre>
Поскольку переменная "x" за пределами функции имеет значение "undefined", т.е. не определена, ее типом также является "undefined". Однако "y" за пределами функции доступна и имеет значение "0" с типом "number".
`
},

// 140
{
question: `
function main() {
    console.log('A')
    setTimeout(function print() {
        console.log('B')
    }, 0)
    console.log('C')
}

main()
`,
answers: `
A: A B C
B: B A C
C: A C
D: A C B
`,
rightAnswer: `D`,
explanation: `
Порядок выполнения функций зависит от стека вызовов. В данном случае, он будет следующим: <br>
1. Сначала в стек помещается функция "main()". <br>
2. Затем в стек помещается console.log('A'), выполняется и удаляется из стека. <br>
3. Далее "setTimeot()" отправляется в Web API, а оставшийся код выполняется дальше. <br>
4. В стек помещается console.log('C'), выполняется и удаляется из стека. <br>
5. Колбек счетчика помещается в очередь задач. <br>
6. Функция "main()" удаляется из стека. <br>
7. Поскольку стек опустел, в него помещается колбек из очереди. <br>
8. В стек помещается console.log('B'), выполняется и удаляется из стека.
`
},

// 141
{
question: `
console.log(0.1 + 0.2 === 0.3)
`,
answers: `
A: false
B: true
C: undefined
D: SyntaxError
`,
rightAnswer: `A`,
explanation: `
Здесь мы имеем дело с распространенной проблемой чисел с плавающей точкой. Поскольку такие числа преобразуются в двоичные данные, имеет место некоторая неточность округления. Поэтому сравнение названных чисел порой приводит к неожиданным результатам. В частности, значением выражения "0.1 + 0.2" будет 0.30000000000000004, что чуть больше, чем 0.3.
`
},

// 142
{
question: `
var y = 1;
if (function f(){}) {
    y += typeof f;
}
console.log(y);
`,
answers: `
A: 1function
B: 1object
C: error
D: 1undefined
`,
rightAnswer: `D`,
explanation: `
if возвращает true. Поскольку переменная "f" нигде не определяется, она имеет значением "undefined" по умолчанию с типом "undefined".
`
},

// 143
{
question: `
function foo() {
return
    {
        message: "Hello World"
    };
}
console.log(foo());
`,
answers: `
A: Hello World
B: Object {message: "Hello World"}
C: undefined
D: error
`,
rightAnswer: `D`,
explanation: `
Здесь мы имеем дело с автоматической расстановкой точек с запятой. В данном случае, точка с запятой автоматически вставляется после оператора "return". Поэтому функция возвращает "undefined". <br>
Если поставить "{" перед return, то функция будет работать как ожидается:
<pre>
<code class="lang-js">
function foo() {
    return {
        message: 'Hello World'
    }
}
console.log(foo()) // {message: 'Hello World'}
</code>
</pre>
`
},

// 144
{
question: `
var myChars = ['a', 'b', 'c', 'd']
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);
`,
answers: `
A: [empty, 'b', 'c', 'd'], empty, 3
B: [null, 'b', 'c', 'd'], empty, 3
C: [empty, 'b', 'c', 'd'], undefined, 4
D: [null, 'b', 'c', 'd'], undefined, 4
`,
rightAnswer: `C`,
explanation: `
Оператор "delete" удаляет свойства объекта, но не индексы массива. Другими словами, удаляется только значение массива по указанному индексу, сам индекс остается, его значением становится "undefined". Поэтому количество элементов в массиве или его длина сохраняется.
`
},

// 145
{
question: `
var array1 = new Array(3);
console.log(array1);

var array2 = [];
array2[2] = 100;
console.log(array2);

var array3 = [,,,];
console.log(array3);
`,
answers: `
A: [undefined × 3], [undefined × 2, 100], [undefined × 3]
B: [empty × 3], [empty × 2, 100], [empty × 3]
C: [null × 3], [null × 2, 100], [null × 3]
D: [], [100], []
`,
rightAnswer: `C`,
explanation: `
На самом деле то, что будет выведено в консоль, зависит от браузера. Например, последние версии Chrome выводят "empty x n", а старые выводили "undefined x n". В Firefox выводится "n empty slots".
`
},

// 146
{
question: `
const obj = {
    prop1: function() { return 0 },
    prop2() { return 1 },
    ['prop' + 3]() { return 2 }
}

console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());
`,
answers: `
A: 0, 1, 2
B: 0, { return 1 }, 2
C: 0, { return 1 }, { return 2 }
D: 0, 1, undefined
`,
rightAnswer: `A`,
explanation: `
ES6, среди прочего, представил новые способы определения методов и сокращения свойств объекта. Поэтому "prop2" и "prop3" обрабатываются как обычные функции.
`
},

// 147
{
question: `
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
`,
answers: `
A: true, true
B: true, false
C: error
D: false, false
`,
rightAnswer: `B`,
explanation: `
Если в if содержатся одинаковые операторы, то выражение оценивается слева направо. Для первого выражения порядок будет следующим:
<pre>
<code class="lang-js">
console.log(1 < 2 < 3)
console.log(true < 3)
console.log(1 < 3)
true
</code>
</pre>
А для второго таким:
<pre>
<code class="lang-js">
console.log(3 > 2 > 1)
console.log(true > 1)
console.log(1 > 1)
false
</code>
</pre>
`
},

// 148
{
question: `
// код выполняется в нестрогом режиме
function printNumbers (first, second, first) {
    console.log(first, second, first);
}
printNumbers(1, 2, 3);
`,
answers: `
A: 1, 2, 3
B: 3, 2, 3
C: error
D: 1, 2, 1
`,
rightAnswer: `B`,
explanation: `
В нестрогом режиме дублирующиеся параметры в обычных функциях разрешены. В приведенном примере дублирующимися являются параметры 1 и 3. Первый параметр указывает на третий аргумент, передаваемый функции. Поэтому третий аргумент перезаписывает первый параметр. Обратите внимание, что в строгом режиме возникнет ошибка.
`
},

// 149
{
question: `
// код выполняется в нестрогом режиме
const printNumbersArrow = (first, second, first) => {
    console.log(first, second, first);
}
printNumbersArrow(1, 2, 3);
`,
answers: `
A: 1, 2, 3
B: 3, 2, 3
C: error
D: 1, 2, 1
`,
rightAnswer: `C`,
explanation: `
В отличие от обычных, в стрелочных функциях дублирующиеся параметры запрещены независимо от режима выполнения кода. Поэтому в данном случае будет вырошено исключение SyntaxError: Duplicate parameter name not allowed in this context.
`
},

// 150
{
question: `
const f = () => arguments.length;
console.log(f(1, 2, 3));
`,
answers: `
A: ReferenceError: arguments is not defined
B: 3
C: undefined
D: null
`,
rightAnswer: `A`,
explanation: `
Стрелоные функции не имеют arguments, this, super и new.target. Поэтому любое обращение к arguments приводит к поиску переменной с таким названием в лексическом окружении функции. В данном случае, переменной "arguments" не существует. Поэтому возникает ошибка.<br>
В обычных функциях arguments - это массивоподобный объект, содержащий переданные функции аргументы:
<pre>
<code class="lang-js">
const f = function () {
    return arguments.length
}
console.log(f(1,2,3)) // 3
</code>
</pre>
В стрелочных функциях альтернативой arguments является оператор "rest" (прочие параметры, ...):
<pre>
<code class="lang-js">
const f = (...args) => args.length
console.log(f(1,2,3)) // 3
</code>
</pre>
`
},

// 151
{
question: `
console.log( String.prototype.trimLeft.name === 'trimLeft' );
console.log( String.prototype.trimLeft.name === 'trimStart' );
`,
answers: `
A: true false
B: false true
C: undefined
D: null
`,
rightAnswer: `B`,
explanation: `
По аналогии с String.prototype.padStart стандартный метод для удаления пробелов в начале строки был назван "trimStart". Однако для обеспечения обратной совместимости название "trimLeft" было сохранено в качестве алиаса для "trimStart". Однако, прототипом trimLeft является trimStart.
`
},

// 152
{
question: `
console.log(Math.max());
`,
answers: `
A: undefined
B: Infinity
C: 0
D: -Infinity
`,
rightAnswer: `D`,
explanation: `
-Infinity - это наименьшее сравниваемое значение, поскольку почти любое другое значение в JavaScript больше него. Поэтому, когда метод "Math.max()" вызывается без аргументов, возвращается -Infinity.
`
},

// 153
{
question: `
console.log(10 === [10]);
console.log(10 === [[[[[[[10]]]]]]]);
`,
answers: `
A: true true
B: true false
C: false false
D: false true
`,
rightAnswer: `A`,
explanation: `
Согласно спецификации приведенные выражения будут преобразованы следующим образом:
<pre>
<code class="lang-js">
10 === Number([10].valueOf().toString()) // 10
</code>
</pre>
Поэтому количество скобок не имеет значения.
`
},

// 154
{
question: `
console.log(10 + '10');
console.log(10 - '10');
`,
answers: `
A: 20 0
B: 1010 0
C: 1010 10-10
D: NaN NaN
`,
rightAnswer: `B`,
explanation: `
Оператор "+" применяется как к числам, так и к строкам. Если одним из операндов является строка, тогда оба операнда объединяются как строки. Оператор "-" пытается преобразовать операнды в число.
`
},

// 155
{
question: `
console.log([1, 2] + [3, 4]);
`,
answers: `
A: [1,2,3,4]
B: [1,2][3,4]
C: error
D: 1,23,4
`,
rightAnswer: `D`,
explanation: `
Оператор "+" не предназначен для сложения массивов. Поэтому массивы преобразуются в строки и объединяются.
`
},

// 156
{
question: `
const numbers = new Set([1, 1, 2, 3, 4]);
console.log(numbers);

const browser = new Set('Firefox');
console.log(browser);
`,
answers: `
A: {1, 2, 3, 4} {"F", "i", "r", "e", "f", "o", "x"}
B: {1, 2, 3, 4} {"F", "i", "r", "e", "o", "x"}
C: [1, 2, 3, 4] ["F", "i", "r", "e", "o", "x"]
D: {1, 1, 2, 3, 4} {"F", "i", "r", "e", "f", "o", "x"}
`,
rightAnswer: `A`,
explanation: `
Set - это объект, представляющий собой коллекцию уникальных значений, поэтому повторяющиеся значения исключаются. В тоже время данный объяект является чуствительным к регистру, поэтому в коллекцию записываются и "F", и "f".
`
},

// 157
{
question: `
console.log(NaN === NaN);
`,
answers: `
A: true
B: false
C: error
D: undefined
`,
rightAnswer: `B`,
explanation: `
NaN согласно стандарту IEEE 754 не равен никакому другому значению, включая NaN.
`
},

// 158
{
question: `
const numbers = [1, 2, 3, 4, NaN];
console.log(numbers.indexOf(NaN));
`,
answers: `
A: 4
B: NaN
C: error
D: -1
`,
rightAnswer: `D`,
explanation: `
indexOf() использует оператор строгого равенства (===), а поскольку NaN не равен никокому другому значению, включая NaN, выражение "NaN === NaN" возвращает false. indexOf() не может найти NaN в массиве, возвращается -1. Для поиска индекса NaN можно использовать метод "findIndex()". Также для проверки наличия NaN в массиве можно использовать метод "includes()":
<pre>
<code class="lang-js">
const numbers = [1, 2, 3, 4, NaN];
console.log(numbers.findIndex(Number.isNaN)); // 4

console.log(numbers.includes(Number.isNaN)); // true
</code>
</pre>
`
},

// 159
{
question: `
const [a, ...b,] = [1, 2, 3, 4, 5];
console.log(a, b);
`,
answers: `
A: 1 [2, 3, 4, 5]
B: 1 {2, 3, 4, 5}
C: SyntaxError: Rest element must be last element
D: 1 [2, 3, 4]
`,
rightAnswer: `C`,
explanation: `
При использовании оператора "rest" (прочие параметры, ...), данный оператор передается в качестве последнего аргумента. В данном случае, использование замыкающей запятой (trailing comma) приводит к возникновению ошибки. Если удалить запятую, то все будет в порядке:<br>
<pre>
<code class="lang-js">
const [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b); // 1, [2, 3, 4, 5]
</code>
</pre>
`
},

// 160
{
question: `
async function func() {
    return 10;
}
console.log(func());
`,
answers: `
A: Promise {: 10}
B: 10
C: error
D: Promise {: undefined}
`,
rightAnswer: `A`,
explanation: `
Асинхронная функция всегда возвращает промис. Даже если возвращаемое такой функцией значение само по себе не является промисом, оно будет завернуто в промис. Приведенный пример эквивалентен следующему:
<pre>
<code class="lang-js">
function func() {
    return Promise.resolve(10)
}
</code>
</pre>
`
},

// 161
{
question: `
async function func() {
    await 10;
}
console.log(func());
`,
answers: `
A: Promise {: 10}
B: 10
C: error
D: Promise {: undefined}
`,
rightAnswer: `A`,
explanation: `
await возвращает Promise {: 10}, который может быть обработан с помощью then(). В данном случае, функция не содержит return, т.е. не возвращает значения. Поэтому возвращается undefined. Приведенный пример эквивалентен следующему:
<pre>
<code class="lang-js">
function func () {
    return Promise.resolve(10).then(() => undefined)
}
</code>
</pre>
`
},

// 162
{
question: `
function delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
    await delay();
    console.log(item);
}

async function processArray(array) {
    array.forEach(item => {
        await delayedLog(item);
    })
}

processArray([1, 2, 3, 4]);
`,
answers: `
A: error
B: 1, 2, 3, 4
C: 4, 4, 4, 4
D: 4, 3, 2, 1
`,
rightAnswer: `A`,
explanation: `
Несмотря на то, что processArray - это асинхронная функция, анонимная функция, которую мы используем в forEach, является синхронной. Использование ключевого слова "await" в синхронных функциях приводит к выбрасыванию исключения SyntaxError: await is only valid in async function.
`
},

// 163
{
question: `
function delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
    await delay();
    console.log(item);
}

async function process(array) {
    array.forEach(async (item) => {
        await delayedLog(i);
    });
    console.log('Process completed!');
}

process([1, 2, 3, 5]);
`,
answers: `
1: 1 2 3 5 Process completed!
2: 5 5 5 5 Process completed!
3: Process completed! 5 5 5 5
4: Process completed! 1 2 3 5
`,
rightAnswer: `D`,
explanation: `
Метод "forEach" не ожидает завершения операции, он лишь запускает ее выполнение и двигается дальше. Поэтому console.log('Process finished!') выполняется первым согласно последовательности разрешения промисов.<br>
Определить нужную последовательность можно с помощью оператора for-of:<br>
<pre>
<code class="lang-js">
async function processArray (array) {
    for (const item of array) {
        await delayedLog(item)
    }
    console.log('Process completed!')
}
</code>
</pre>
`
},

// 164
{
question: `
var set = new Set();
set.add("+0")
    .add("-0")
        .add(NaN)
            .add(undefined)
                .add(NaN);

console.log(set);
`,
answers: `
A: Set(4) {"+0", "-0", NaN, undefined}
B: Set(3) {"+0", NaN, undefined}
C: Set(5) {"+0", "-0", NaN, undefined, NaN}
D: Set(4) {"+0", NaN, undefined, NaN}
`,
rightAnswer: `A`,
explanation: `
В отличии от операторов равенства (==, ===), для Set все NaN являются одинаковыми значениями, а +0 и -0 - разными.
`
},

// 165
{
question: `
const sym1 = Symbol('one');
const sym2 = Symbol('one');

const sym3 = Symbol.for('two');
const sym4 = Symbol.for('two');

console.log(sym1 === sym2, sym3 === sym4);
`,
answers: `
A: true true
B: true false
C: false true
D: false false
`,
rightAnswer: `C`,
explanation: `
Для символом характерно следующее:<br>
1. Каждый символ, возвращаемый Symbol(), это уникальное значение. Строка, передаваемая Symbol(), это лишь опциональная метка или описание символа, которая, обычно, используется в целях отладки кода.<br>
2. Метод "Symbol.for()" создает символ в глобальном реестре символов. При каждом вызове данного метода проверяется, имеется ли символ с указанным ключом в реестре. После этого либо возвращается найденный символ, либо создается новый.
`
},

// 166
{
question: `
const sym1 = new Symbol('one');
console.log(sym1);
`,
answers: `
A: error
B: one
C: Symbol('one')
D: Symbol
`,
rightAnswer: `A`,
explanation: `
Symbol - это обычная функция, а не конструктор, в отличие, например, от Number или String. Поэтому при попытке использования его с ключевым словом "new" выбрасывается исключение TypeError: Symbol is not a constructor.
`
},

// 167
{
question: `
let myNumber = 100;
let myString = '100';

if (!typeof myNumber === "string") {
    console.log("It is not a string!");
} else {
    console.log("It is a string!");
}

if (!typeof myString === "number"){
    console.log("It is not a number!")
} else {
    console.log("It is a number!");
}
`,
answers: `
A: error
B: It is not a string! It is not a number!
C: It is not a string! It is a number!
D: It is a string! It is a number!
`,
rightAnswer: `D`,
explanation: `
Оператор "!" приводит значение к логическому типу. Поскольку выражения "typeof myNumber" и "typeof myString" истинные, в обоих случаях возвращается false. Далее выполняются блоки "else".
`
},

// 168
{
question: `
console.log(JSON.stringify({ myArray: ['one', undefined, function() {}, Symbol('')] }));
console.log(JSON.stringify({ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]));
`,
answers: `
A: {"myArray":['one', undefined, {}, Symbol]}, {}
B: {"myArray":['one', null, null, null]}, {}
C: {"myArray":['one', null, null, null]}, "{ [Symbol.for('one')]: 'one' }, [Symbol.for('one')]"
D: {"myArray":['one', undefined, function(){}, Symbol('')]}, {}
`,
rightAnswer: `B`,
explanation: `
undefined, функции и символы не являются валидными JSON-значениями. Такие значения не включаются в объект и конвертируются в null в массиве. Поэтому возвращается null, null, null.<br>
Глобальные символы игнорируются, поэтому возвращается пустой объект ({}).
`
},

// 169
{
question: `
class A {
    constructor() {
        console.log(new.target.name)
    }
}

class B extends A { constructor() { super() } }

new A();
new B();
`,
answers: `
A: A A
B: A B
C: B B
D: error
`,
rightAnswer: `B`,
explanation: `
new.target ссылается на конструктор (указывает на определение инициализируемого класса), который вызывается с помощью new. Это также справедливо для конструктора родительского класса, делегированного из дочернего конструктора.
`
},

// 170
{
question: `
const {a: x = 10, b: y = 20} = {a: 30};

console.log(x);
console.log(y);
`,
answers: `
A: 30 20
B: 10 20
C: 10 undefined
D: 30 undefined
`,
rightAnswer: `A`,
explanation: `
Для свойств объекта характерно следующее:<br>
1. Значение свойства (30) может быть извлечено и присвоено переменной (x).<br>
2. Свойству присваивается значение по умолчанию (20), когда извлекаемым значением является undefined (y).
`
},

// 171
{
question: `
function area({ length = 10, width = 20 }) {
    console.log(length * width);
}

area();
`,
answers: `
A: 200
B: error
C: undefined
D: 0
`,
rightAnswer: `B`,
explanation: `
Здесь мы имеем дело с деструктуризацией объекта. Если опустить правую часть выражения, функция при вызове попытается найти хотя бы один аргумент. Если ей не удастся этого сделать, будет выброшено исключение TypeError: Cannot read property 'length' of undefined.<br>
Решить данную проблему можно следующими способами:<br>
1. Передать функции пустой объект в качестве аргумента:<br>
<pre>
<code class="lang-js">
function area ({ length = 10, width = 20 }) {
    console.log(length * width)
}

area({}) // 200
</code>
</pre>
2. Присвоить пустой объект в качестве значения по умолчанию:<br>
<pre>
<code class="lang-js">
function area ({ length = 10, width = 20 } = {}) {
    console.log(length * width)
}

area() // 200
</code>
</pre>
`
},

// 172
{
question: `
const props = [
    { id: 1, name: 'John'},
    { id: 2, name: 'Jack'},
    { id: 3, name: 'Tom'}
];

const [, , { name }] = props;
console.log(name);
`,
answers: `
A: Tom
B: Error
C: undefined
D: John
`,
rightAnswer: `A`,
explanation: `
Деструктуризацию массива и объекта можно комбинировать. В данном случае переменной "name" присваивается значение соответствующего свойства третьего элемента массива "props".
`
},

// 173
{
question: `
function checkType(num = 1) {
    console.log(typeof num);
}

checkType();
checkType(undefined);
checkType('');
checkType(null);
`,
answers: `
A: number, undefined, string, object
B: undefined, undefined, string, object
C: number, number, string, object
D: number, number, number, number
`,
rightAnswer: `C`,
explanation: `
Если функции не передается значение или передается undefined, аргумент принимает значение по умолчанию (1). Другие ложные значения ("" и null) присваиваются аргументу.<br>
Первые два вызова функции возвращают number, поскольку значением аргумента является 1.<br>
Типом "" является string (строка), а типом null - object (объект).
`
},

// 174
{
question: `
function add(item, items = []) {
    items.push(item);
    return items;
}

console.log(add('Orange'));
console.log(add('Apple'));
`,
answers: `
A: ['Orange'] ['Orange', 'Apple']
B: ['Orange'] ['Apple']
C: []
D: undefined
`,
rightAnswer: `B`,
explanation: `
Аргументу "items" при каждом вызове функции "add" присваивается пустой массив (значение по умолчанию), который возвращается с помещенным в него значением аргумента "item".
`
},

// 175
{
question: `
function greet(greeting, name, message = greeting + ' ' + name) {
    console.log([name, greeting, message]);
}

greet('Hello', 'John');
greet('Hello', 'John', 'Good morning!');
`,
answers: `
A: error
B: ['Hello', 'John', 'Hello John'] ['Hello', 'John', 'Good morning!']
C: ['Hello', 'John', 'Hello John'] ['Hello', 'John', 'Hello John']
D: undefined
`,
rightAnswer: `B`,
explanation: `
При первом вызове функции "greet" аргументу "message" присваивается значение по умолчанию (greeting + ' ' + name). При втором вызове данному аргументу присваивается переданное значение (Good morning!).
`
},

// 176
{
question: `
function outer(f = inner()) {
    function inner() { return 'Inner' }
}
console.log(outer());
`,
answers: `
A: error
B: Inner
C: Inner Inner
D: undefined
`,
rightAnswer: `A`,
explanation: `
Функции и переменные, объявленные в теле функции, не могут использоваться в качестве значений по умолчанию, поэтому выбрасывается исключение ReferenceError: inner is not defined.<br>
Функцию можно переписать так:<br>
<pre>
<code class="lang-js">
function outer (f) {
    function inner () { return 'Inner' }
    const fun = f || inner()
    return fun
}
console.log(outer()) // Inner
console.log(outer('Outer')) // Outer
</code>
</pre>
Или так:<br>
<pre>
<code class="lang-js">
const outer = (msg = 'Inner') => msg
console.log(outer()) // Inner
console.log(outer('Outer')) // Outer
</code>
</pre>
`
},

// 177
{
question: `
function myFun(x, y, ...args) {
    console.log(args)
}

myFun(1, 2, 3, 4, 5);
myFun(1, 2);
`,
answers: `
A: [3, 4, 5] undefined
B: error
C: [3, 4, 5] []
D: [3, 4, 5] [undefined]
`,
rightAnswer: `C`,
explanation: `
Оператор "rest" (прочие параметры, ...) возвращает массив с переданными функции неименованными аргументами или пустой массив в случае, когда такие аргументы отсутствуют.
`
},

// 178
{
question: `
const obj = {'key': 'value'};
const array = [...obj];
console.log(array);
`,
answers: `
A: ['key', 'value']
B: error
C: []
D: ['key']
`,
rightAnswer: `C`,
explanation: `
Оператор "spread" (распространения, ...) применяется только к итерируемым сущностям. Объекты таковыми не являются. Поэтому выбрасывается исключение TypeError: object is not iterable.
`
},

// 179
{
question: `
function* myGenFunc() {
    yield 1;
    yield 2;
    yield 3;
}
var myGenObj = new myGenFunc;
console.log(myGenObj.next().value);
`,
answers: `
A: 1
B: undefined
C: 2
D: error
`,
rightAnswer: `D`,
explanation: `
Генераторы (функции со специальным символом "*") не могут использоваться в качестве конструктора, т.е. с ключевым словом "new", поэтому выбрасывается исключение TypeError: myGenFunc is not a constructor.
`
},

// 180
{
question: `
function* yieldAndReturn() {
    yield 1;
    return 2;
    yield 3;
}

var myGenObj = yieldAndReturn()
console.log(myGenObj.next());
console.log(myGenObj.next());
console.log(myGenObj.next());
`,
answers: `
A: { value: 1, done: false }, { value: 2, done: true }, { value: undefined, done: true }
B: { value: 1, done: false }, { value: 2, done: false }, { value: undefined, done: true }
C: { value: 1, done: false }, { value: 2, done: true }, { value: 3, done: true }
D: { value: 1, done: false }, { value: 2, done: false }, { value: 3, done: true }
`,
rightAnswer: `A`,
explanation: `
Инструкция "return" в генераторе (функция со специальным символом "*") останавливает его выполнение. Возвращаемое значение 2 присваивается свойству "value", а значением свойства "done" становится true. После завершения работы генератора вызов метода "next()" возвращает {value: undefined, done: true}.
`
},

// 181
{
question: `
const myGenerator = (function *(){
    yield 1;
    yield 2;
    yield 3;
})();
for (const value of myGenerator) {
    console.log(value);
    break;
}

for (const value of myGenerator) {
    console.log(value);
}
`,
answers: `
A: 1,2,3 1,2,3
B: 1,2,3 4,5,6
C: 1 1
D: 1
`,
rightAnswer: `D`,
explanation: `
Генератор (функция со специальным символом "*") не может использоваться после закрытия итератора. В первом цикле мы с помощью break останавливаем выполнение генератора со значением 1. Повторный перебор генератора невозможен, поэтому второй console.log() ничего не возвращает.
`
},

// 182
{
question: `
const squareObj = new Square(10);
console.log(squareObj.area);

class Square {
    constructor(length) {
        this.length = length;
    }

    get area() {
        return this.length * this.length;
    }

    set area(value) {
        this.area = value;
    }
}
`,
answers: `
A: 100
B: error
C: 10
D: undefined
`,
rightAnswer: `B`,
explanation: `
В отличие от объявления функций (не функциональных выражений), объявления классов не поднимаются в начало области видимости. Это также справедливо для выражений класса. Поэтому использовать класс можно только после его объявления, в противном случае, выбрасывается исключение ReferenceError: Square is not defined.
`
},

// 183
{
question: `
function Person() { }

Person.prototype.walk = function() {
    return this;
}

Person.run = function() {
    return this;
}

let user = new Person();
let walk = user.walk;
console.log(walk());

let run = Person.run;
console.log(run());
`,
answers: `
A: undefined undefined
B: Person Person
C: error
D: Window Window
`,
rightAnswer: `D`,
explanation: `
Когда обычный метод или метод прототипа вызывается без передачи ему значения this, метод возвращает значение this по умолчанию. В данном случае, таким значением является глобальный объект "window".
`
},

// 184
{
question: `
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(\`&#36;{this.name} vehicle started\`);
    }
}

class Car extends Vehicle {
    start() {
        console.log(\`&#36;{this.name} car started\`);
        super.start();
    }
}

const car = new Car('BMW');
console.log(car.start());
`,
answers: `
A: error
B: BMW vehicle started, BMW car started
C: BMW car started, BMW vehicle started
D: BMW car started, BMW car started
`,
rightAnswer: `C`,
explanation: `
Ключевое слово "super" используется, в том числе, для вызова методов родительского класса. В отличие от других языков программирования, в JavaScript вызов super() не обязательно должен быть первой инструкцией.
`
},

// 185
{
question: `
const user = {'age': 30};
user.age = 25;
console.log(user.age);
`,
answers: `
A: 30
B: 25
C: error
D: undefined
`,
rightAnswer: `B`,
explanation: `
Мы используем ключевое слово "const" для объявления переменной "user", т.е. делаем ее неизменяемой (константой). Однако иммутабельность переменной, являющейся объектом, не распространяется на свойства объекта. Другими словами, свойства такого объекта можно изменять. Однако, если мы попытаемся присвоить переменной "user" новое значение (user = {'age': 25}), будет выброшено исключение TypeError: Assignment to constant variable. Для обеспечения иммутабельности свойств объекта используется метод "freeze()".
`
},

// thanks to this guy
// https://github.com/yeungon/In-JavaScript-we-trust
// 186
{
question: `
function a(x) {
    x++;
    return function () {
        console.log(++x);
    };
}

a(1)();
a(1)();
a(1)();

let x = a(1);
x();
x();
x();
`,
answers: `
A: 1, 2, 3 и 1, 2, 3
B: 3, 3, 3 и 3, 4, 5
C: 3, 3, 3 и 1, 2, 3
D: 1, 2, 3 и 3, 3, 3
`,
rightAnswer: `B`,
explanation: `
Здесь мы имеем дело с замыканием. Замыкания позволяют нам создавать статические функции, которым доступны переменные из внешнего окружения. Другими словами, замыкание имеет доступ к глобальной области видимости, области видимости родительской функции и собственной области видимости.<br>
Мы получаем 3, 3, 3 и 3, 4, 5, поскольку сначала просто вызываем функцию "a()". Она работает как обычная функция. Затем мы объявляем переменную "x" и присваиваем ей значение функции "a(1)", вот почему мы получаем 3, 4, 5 вместо 3, 3, 3.
`
},

// 187
{
question: `
function Name(a, b) {
    this.a = a;
    this.b = b;
}

const me = Name('John', 'Smith');

console.log(!(a.length - window.a.length));
`,
answers: `
A: undefined
B: NaN
C: true
D: false
`,
rightAnswer: `С`,
explanation: `
Мы получаем true. Обратите внимание, что при создании объекта с помощью конструктора функции "Name" мы не использовали ключевое слово "new". Из-за этого переменная "a" стала глобальной и получила значение "John". В действительности, глобальные переменные - это свойства глобального объекта "window" (в браузере) или "global" в Node.js.<br>
Поэтому выражение "a.length - window.a.length" возвращает 0. !0 возвращает true.
`
},

// 188
{
question: `
const x = function (...x) {
    let k = (typeof x).length;
    let y = () => "freetut".length;
    let z = { y: y };

    return k - z.y();
};

console.log(Boolean(x()));
`,
answers: `
A: true
B: 1
C: -1
D: false
`,
rightAnswer: `A`,
explanation: `
Оператор распространения (spread) "...x" позволяет получить параметры функции в виде массива. В JavaScript "typeof array" возвращает "object".<br>
Длина строки "object" равняется 6. z.y() возвращает длину строки "freetut", т.е. 7.<br>
Функциональное выражение "x()" возвращает -1, которое после преобразования в логический тип становится true. Обратите внимание, что boolean(0) вернет false.
`
},

// 189
{
question: `
(function js(x) {
    const y = (j) => j * x;

    console.log(y(s()));

    function s() {
        return j();
    }

    function j() {
        return x ** x;
    }
})(3);
`,
answers: `
A: undefined
B: 18
C: 81
D: 12
`,
rightAnswer: `A`,
explanation: `
Функция "js()" выполняется автоматически, поскольку является IIFE (Immediately Invoked Function Expression - немедленно вызываемым функциональным выражением). Параметр "x" функции "js" передается со значением 3.<br>
Значение, возвращаемое функцией "y(s())", означает вызов трех функций: y(), s() и j(), поскольку функция s() возвращает j().<br>
j() возвращает 3 ^ 3 = 27, поэтому s() возвращает 27.<br>
y(s()) означает y(27), которая возвращает 27 * 3 = 81.<br>
Обратите внимание, что мы можем вызвать функцию до ее объявления, но это не работает с функциональными выражениями.
`
},

// 190
{
question: `
var tip = 100;

(function () {
    console.log("I have $" + husband());

    function wife() {
        return tip * 2;
    }

    function husband() {
        return wife() / 2;
    }

    var tip = 10;
})();
`,
answers: `
A: "I have $10"
B: "I have $100"
C: "I have $50"
D: "I have $NaN"
`,
rightAnswer: `D`,
explanation: `
Здесь мы имеем дело с IIFE (Immediately Invoked Function Expression - немедленно вызываемым функциональным выражением). IIFE выполняются автоматически. Последовательность следующая: husband() возвращает wife(), а wife() возвращает tip * 2.<br>
Можно подумать, что tip = 100, поскольку мы объявили ее с помощью ключевого слова "var", и она стала глобальной. Однако, на самом деле ее значением является undefined, поскольку мы объявляем "tip = 10" внутри функции. Поскольку переменная "tip" поднимается со значением "undefined", правильным ответом является D. Undefined возвращает NaN, когда мы пытаемся разделить его на 2 или умножить на 2.<br>
Если убрать "var tip = 10" в конце функции, правильным ответом будет B.
`
},

// 191
{
question: `
const js = { language: "loosely type", label: "difficult" };

const edu = { ...js, level: "PhD" };

const newbie = edu;

delete edu.language;

console.log(Object.keys(newbie).length);
`,
answers: `
A: 2
B: 3
C: 4
D: 5
`,
rightAnswer: `A`,
explanation: `
Данная задача посвящена оператору распространения (spread, ...). Этот оператор позволяет получать параметры функции, копировать или объединять объекты и массивы в JavaScript.<br>
В переменной "edu" мы используем оператор распространения для копирования объекта "js" и добавления к нему нового свойства "level". Это также работает с массивами.<br>
Затем мы объявляем другую переменную с именем "newbie". Важное замечание: обе переменных указывают или ссылаются на одно место в памяти. Это называется передачей значения по ссылке.<br>
После удаления свойства "language" посредством delete edu.language, длина обоих объектов становится равной 2.
`
},

// 192
{
question: `
var candidate = {
    name: "Vuong",
    age: 30,
};

var job = {
    frontend: "Vuejs or Reactjs",
    backend: "PHP and Laravel",
    city: "Auckland",
};

class Combine {
    static get() {
        return Object.assign(candidate, job);
    }

    static count() {
        return Object.keys(this.get()).length;
    }
}

console.log(Combine.count());
`,
answers: `
A: 5
B: 6
C: 7
D: 8
`,
rightAnswer: `A`,
explanation: `
Вcтроенный метод "Object.assign(candidate, job)" объединяет candidate и job в один объект. Затем метод "Object.keys()" считает количество ключей объекта.<br>
Обратите внимание, что методы "get()" и "count()" определены как статические, поэтому их можно вызывать с помощью Class.staticMethod(). Результирующий объект содержит 5 элементов.
`
},

// 193
{
question: `
var x = 1;

(() => {
    x += 1;
    ++x;
})();
((y) => {
    x += y;
    x = x % y;
})(2);
(() => (x += x))();
(() => (x *= x))();

console.log(x);
`,
answers: `
A: 4
B: 50
C: 2
D: 10
`,
rightAnswer: `A`,
explanation: `
Начальное значение переменной "x" равно 1. В первом IIFE (Immediately Invoked Function Expression - немедленно вызываемом функциональном выражении) значение "x" увеличивается до 3.<br>
Во втором IIFE выражение "x + y (3 + 2)" возвращает 5, а выражение "x % y (5 % 2)" - 1.<br>
В третьем и четвертом IIFE мы получаем 2 (1 + 1) и 4 (2 * 2), соответственно. Проще простого.
`
},

// 194
{
question: `
let x = {};
let y = {};
let z = x;

console.log(x == y);
console.log(x === y);
console.log(x == z);
console.log(x === z);
`,
answers: `
A: true true true true
B: false false false false
C: true true false false
D: false false true true
`,
rightAnswer: `D`,
explanation: `
Технически "x" и "y" имеют одинаковые значения. Обе переменные являются пустыми объектами. Однако объекты сравниваются не по значениям.<br>
"z" и "x" являются объектами, ссылающимися на одно и тоже место в памяти. В JavaScript массивы и объекты передаются по ссылке. Поэтому при сравнении "x" и "z" возвращается true.
`
},

// 195
{
question: `
console.log("hello");

setTimeout(() => console.log("hey"), 1);
setTimeout(() => console.log("kiora"), 2);
setTimeout(() => console.log("world"), 0);

console.log("hi");
`,
answers: `
A: "hello" "hey" "kiora" "world" "hi"
B: "hello" "hi" "hey" "kiora" "world"
C: "hello" "hi" "world" "hey" "kiora"
D: "hello" "hi" "hey" "world" "kiora"
`,
rightAnswer: `D`,
explanation: `
Три функции setTimeout() помещаются в очередь задач (task queue) перед попаданием в стек вызовов (call stack), поэтому сначала в консоль выводятся "hello" и "hi".<br>
Можно подумать, что три setTimeout() будут выполнены в следующем порядке: "world" -> "hey" -> "kiora" согласно временной задержке в 0 мс -> 1 мс -> 2 мс, соответственно. Однако, между 0 мс и 1 мс нет разницы. Поэтому следующим в консоль выводится "hey", затем "world" и в конце "kiora".
`
},

// 196
{
question: `
String.prototype.lengthy = () => {
    console.log("hello");
};

let x = { name: "John" };

delete x;

x.name.lengthy();
`,
answers: `
A: "John";
B: "hello";
C: undefined
D: ReferenceError
`,
rightAnswer: `B`,
explanation: `
С помощью String.prototype.someThing = function () {} можно определить новый встроенный метод объекта "String". Мы можем сделать тоже самое с Array, Object или FunctionName, где FunctionName - это созданная нами функция.<br>
Несложно понять, что "string".lengthy всегда возвращает "hello". Delete удаляет свойство объекта, а не сам объект. Поэтому мы получаем "hello", а не RefferenceError.<br>
Обратите внимание, что если мы объявим объект без ключевых слов "let", "const" или "var", то получим глобальный объект. В этом случае delete objectName вернет true. В противном случае, он всегда возвращает false.
`
},

// 197
{
question: `
let x = {};

x.__proto__.hi = 10;

Object.prototype.hi = ++x.hi;

console.log(x.hi + Object.keys(x).length);
`,
answers: `
A: 10
B: 11
C: 12
D: NaN
`,
rightAnswer: `C`,
explanation: `
Начальным значением переменной "x" является пустой объект. Затем мы добавляем к нему свойство "hi" с помощью "x.__proto__.hi". Обратите внимание, что это является эквивалентом "Object.prototype.hi = 10", поэтому мы добавляем свойство "hi" родителю пустого объекта - объекту Object. Это означает, что любой объект будет наследовать данное свойство. Свойство "hi" становится распределенным (совместным). Если мы объявим новый объект, скажем, let y = {}, "y" унаследует свойство "hi" от Object. Сравнение "x.__proto__ === Object.prototype" вернет true.<br>
После этого, мы перезаписываем значение свойства "hi" новым значением 11. Получаем 1 (x имеет одно свойство) + 11 (значение свойства hi) = 12.
`
},

// 198
{
question: `
const array = (a) => {
    let length = a.length;
    delete a[length - 1];
    return a.length;
};

console.log(array([1, 2, 3, 4]));

const object = (obj) => {
    let key = Object.keys(obj);
    let length = key.length;
    delete obj[key[length - 1]];

    return Object.keys(obj).length;
};

console.log(object({ 1: 2, 2: 3, 3: 4, 4: 5 }));

const setPropNull = (obj) => {
    let key = Object.keys(obj);
    let length = key.length;
    obj[key[length - 1]] = null;

    return Object.keys(obj).length;
};

console.log(setPropNull({ 1: 2, 2: 3, 3: 4, 4: 5 }));
`,
answers: `
A: 3 3 3
B: 4 4 4
C: 4 3 4
D: 3 4 3
`,
rightAnswer: `C`,
explanation: `
Данная задача демонстрирует, как работает оператор "delete" в JavaScript. Выражения "delete someObject" и "delete someArray" возвращают false (ничего не делают). Выражение "delete someObject.someProperty" удаляет указанное свойство объекта. В случае с массивом выражение "delete someArray[keyNumber]" удаляет только значение указанного индекса, сам индекс остается и его новым значением становится undefined. По этой причине первый console.log() выводит 4 (массив содержит 4 элемента, последний имеет значение "undefined"), а второй - 3 (оставшиеся свойств объекта).<br>
Последний console.log() выводит 4, поскольку присвоение свойству объекта значения "null" или "undefined" не удаляет это свойство. Ключ остается. Поэтому длина остается прежней.
`
},

// 199
{
question: `
var a = [1, 2, 3];
var b = [1, 2, 3];

var c = [1, 2, 3];
var d = c;

var e = [1, 2, 3];
var f = e.slice();

console.log(a === b);
console.log(c === d);
console.log(e === f);
`,
answers: `
A: true true true
B: false false true
C: true true false
D: false true false
`,
rightAnswer: `D`,
explanation: `
Сравнение "a" и "b" возвращает false, поскольку эти переменные ссылаются на разные места в памяти, несмотря на то, что их значения являются одинаковыми.<br>
В JavaScript в случае с массивами и объектами значения передаются по ссылке. Во втором случае "d" является копией "c", поэтому они ссылаются на одно место в памяти. Любые изменения в "c" отражаются на "d".<br>
Третий пример демонстирует способ копирования массива с помощью метода "slice()". "f" является копией "e", но они ссылаются на разные места в памяти. Поэтому их сравнение возвращает false.
`
},

// 200
{
question: `
var languages = {
    name: ["elixir", "golang", "js", "php", { name: "feature" }],
    feature: "awesome",
};

let flag = languages.hasOwnProperty(
    Object.values(languages)[0][4].name
);

(() => {
    if (flag !== false) {
        console.log(
            Object.getOwnPropertyNames(languages)[0].length <<
            Object.keys(languages)[0].length
        );
    } else {
        console.log(
            Object.getOwnPropertyNames(languages)[1].length <<
            Object.keys(languages)[1].length
        );
    }
})();
`,
answers: `
A: 8
B: NaN
C: 64
D: 12
`,
rightAnswer: `C`,
explanation: `
Данная задача является довольно сложной, поскольку в ней встречается несколько встроенных методов для работы с объектами. Например, методы "Object.keys()" и "Object.getOwnPropertyNames" возвращают свойства объекта: первый - только перечисляемые, второй - также не перечисляемые.<br>
Object.values() и Object.keys() возвращают значения и ключи объекта, соответственно. Object.hasOwnProperty('propertyName') возвращает булево значение в зависимости от того, существует указанное свойство в объекте или нет.<br>
Переменная "language" имеет значение true, поскольку Object.values(languages)[0][4].name возвращает "feature", которое является свойством объекта.<br>
Наконец, мы получаем 4 << 4, что возвращает побитовое значение, эквивалентное "4 * 2 ^ 4" или "4 * 16", или 64.
`
},

// 201
{
question: `
var player = {
    name: "Ronaldo",
    age: 34,
    getAge: function () {
        return ++this.age - this.name.length;
    },
};

function score(greeting, year) {
    console.log(
        greeting + " " + this.name + \`! You were born in  &#36;{year - this.getAge()}\`
    );
}

window.window.window.score.call(
    window.window.window.player, "Kiora", 2019
);

score.apply(player, ["Kiora", 2009]);

const helloRonaldo = window.score
    .bind(window.player, "Kiora", 2029);

helloRonaldo();
`,
answers: `
A: "Kiora Ronaldo! You were born in 1985", "Kiora Ronaldo! You were born in 1985", "Kiora Ronaldo! You were born in 1985"
B: "Kiora Ronaldo! You were born in 1991", "Kiora Ronaldo! You were born in 1991", "Kiora Ronaldo! You were born in 1999"
C: "Kiora Ronaldo! You were born in 1991", NaN, "Kiora Ronaldo! You were born in 1980"
D: "Kiora Ronaldo! You were born in 1991", "Kiora Ronaldo! You were born in 1980", "Kiora Ronaldo! You were born in 1999"
`,
rightAnswer: `D`,
explanation: `
Мы можем использовать call(), apply() и bind() для привязки функции к объекту. На первый взгляд может показаться, что все три метода делают одно и тоже. Однако они немного по-разному спроектированы для работы с контекстом.<br>
Из этих методов только bind() можно вызывать после привязки. Мы можем создать переменную для хранения результата, как "helloRonaldo" в задаче. apply() и call() привязывают и вызывают функцию сразу. В методу "apply()" параметры передаются в виде массива (array, a), а в методе "call()" - через запятую (comma, c).<br>
Обратите внимание, что window.window.window.score или window.score, или просто score делают одно и тоже. Они указывают на функцию "score()" в глобальном пространстве имен.
`
},

// 202
{
question: `
var ronaldo = { age: 34 };

var messi = { age: 32 };

function score(year, tr, t) {
    if (typeof tr === "function" && typeof t === "function") {
        console.log(\`You score &#36;{tr(year, t(this.age))} times\`);
    }
}

const transform = (x, y) => x - y;

const title = (x) => ++x + x++;

const helloRonaldo = score.bind(ronaldo, 2029, transform, title);

helloRonaldo();

const helloMessi = score.bind(messi, 2029, transform, title);

helloMessi();
`,
answers: `
A: "You score 1989 times" and "You score 1963 times"
B: "You score 1959 times" and "You score 1989 times"
C: "You score 1989 times" and "You score 1953 times"
D: "You score 1959 times" and "You score 1963 times"
`,
rightAnswer: `D`,
explanation: `
bind() позволяет привязать функцию к объекту. В данном случае мы привязываем функцию "score()" к объектам "ronaldo" и "messi".<br>
Функция "score()" принимает три параметра: year, tr и t, где "tr" и "t" должны быть функциями.<br>
Когда мы привязываем score() к ronaldo и messi, мы передаем ей три аргумента, два из которых, "transfrom" и "title", являются функциями.
`
},

// 203
{
question: `
var person = {};

Object.defineProperties(person, {
    name: {
        value: "John",
        enumerable: true,
    },
    job: {
        value: "developer",
        enumerable: true,
    },
    studying: {
        value: "PhD",
        enumerable: true,
    },
    money: {
        value: "NZD",
        enumerable: false,
    },
});

class Evaluate {
    static checkFlag(obj) {
        return Object.getOwnPropertyNames(obj) > Object.keys(obj)
            ? Object.getOwnPropertyNames(obj)
            : Object.keys(obj);
    }
}

const flag = Evaluate.checkFlag(person);

console.log(flag.length);
`,
answers: `
A: 1
B: 2
C: 3
D: 4
`,
rightAnswer: `D`,
explanation: `
Object.keys(obj) почти идентичен Object.getOwnPropertyNames(obj), за исключением того, что последний, кроме перечисляемых, возвращает также неперечисляемые свойства объекта. По умолчанию все свойства создаваемого объекта являются перечисляемыми. Мы можем сделать их неперечисляемыми с помощью Object.defineProperty или Object.defineProperties.<br>
Поэтому Object.keys(person) возвращает 3, а Object.getOwnPropertyNames(person) - 4. Тернарный оператор возвращает 4.
`
},

// 204
{
question: `
const id = 10;

const getID = (...id) => {
    id(id);

    function id(id) {
        console.log(typeof id);
    }
};

getID(id);
`,
answers: `
A: ReferenceError
B: 10
C: undefined
D: 'function'
`,
rightAnswer: `D`,
explanation: `
Когда мы определяем одну функцию внутри другой, то получаем замыкание. Обратите внимание, если функция обычная (а не функциональное выражение), она поднимается. Мы видим несколько id в коде, но некоторые из них ничего не делают.<br>
Результатом выполнения кода является "typeof id", т.е. "function". Таким образом, "id" в этой операции является функцией "id()".
`
},

// 205
{
question: `
var book1 = {
    name: "Name of the rose",
    getName: function () {
        console.log(this.name);
    },
};

var book2 = {
    name: { value: "Harry Potter" },
};

var bookCollection = Object.create(book1, book2);

bookCollection.getName();
`,
answers: `
A: 'Harry Potter'
B: 'Name of the rose'
C: ReferenceError
D: Object object
`,
rightAnswer: `A`,
explanation: `
Object.create() позволяет создавать одни объекты на основе других. Если мы не передадим второй параметр - book2, в данном случае - свойство "name" объекта "bookCollection" будет иметь значение "Name of the rose", унаследованное от book1. Это означает, что мы можем добавлять новые свойства создаваемому с помощью Object.create() объекту.<br>
bookCollection имеет собственное свойство "name" и одноименное свойство, унаследованное от book1. Собственные свойства объекта имеют приоритет перед унаследованными. Поэтому мы получаем "Harry Potter".
`
},

// 206
{
question: `
(() => {
    const a = Object.create({});

    const b = Object.create(null);

    let f1 = a.hasOwnProperty("toString");

    let f2 = "toString" in b;

    let result =
        f1 === false && f2 === false
            ? console.log((typeof a.toString()).length)
            : console.log(b.toString());
})();
`,
answers: `
A: ReferenceError
B: undefined
C: 0
D: 6
`,
rightAnswer: `D`,
explanation: `
Объекты "a" и "b" создаются с помощью Object.create(). Разница между ними состоит в том, что "a" наследует прототип Object, а "b" является совершенно пустым, поскольку мы передали параметр "null" методу "Object.create()". hasOwnProperty('toString') в обоих случаях возвращает false, поскольку в объектах метод "toString()" не определяется. Однако данный метод существует в объекте "a" как унаследованный от Object.<br>
"f1" и "f2" возвращают false. Обратите внимание, что для проверки существования свойства в объекте мы используем "Object.hasOwnProperty('key')" и "('key' in object)". Они отличаются тем, что первый возвращает только собственные свойства объекта, а второй - также унаследованные.<br>
typeof a.toString() возвращает "string", длина которой равняется 6.
`
},

// 207
{
question: `
let promise = new Promise((rs, rj) => {
    setTimeout(() => rs(4), 0);

    Promise.resolve(console.log(3));

    console.log(2);
});

promise
    .then((rs) => {
        console.log(rs ? rs ** rs : rs);
        return rs;
    })
    .then((rs) => console.log(rs === 256 ? rs : rs * rs));
`,
answers: `
A: 3, 2, 256, 256
B: 3, 2, 256, 16
C: 256, 16, 3, 2
D: 16, 256, 3, 2
`,
rightAnswer: `B`,
explanation: `
Мы определяем промис с помощью ключевого слова "let" и вызываем его. setTimeout() - это асинхронная функция, которая выполняется последней, даже при нулевой задержке: setTimeout(() => rs(4), 0). Хотя "Promise.resolve(console.log(3))" также возвращает промис, он относится к микрозадачам, которые имеет приоритет над (макро)задачами, такими как "setTimeout()".<br>
В первом then() мы получаем "4 ^ 4", во втором - "4 * 4". Обратите внимание, что "return rs" возвращает оригинальное значение.
`
},

// 208
{
question: `
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 0);
    });

    setTimeout(() => console.log("world"), 0);

    console.log(await promise);

    console.log("hello");
}

f(setTimeout(() => console.log("kiora"), 0));
`,
answers: `
A: ReferenceError
B: done, hello, world
C: hello, done, world
D: kiora, done, hello, world
`,
rightAnswer: `D`,
explanation: `
Хотя мы не определяем параметров в функции "f()", мы передаем ей "setTimeout(() => console.log("kiora"), 0)" при вызове. Поэтому сначала мы получаем "kiora".<br>
Переменная promise, возвращающая разрешенный промис, вызывается с помощью ключевого слова "await". JavaScript приостанавливает выполнение кода на строке "console.log(await promise)" до разрешения промиса. Вот почему следующим мы получаем "done".<br>
Почему вторым значением, выведенным в консоль, является "done", а не "world" или "hello"? Поскольку JavaScript ставит выполнение кода на паузу, когда встречает ключевое слово "await", мы не можем получить "hello" до разрешения промиса (обратите внимание, что setTimeout() всегда выполняется последней, поскольку является асинхронной (макро)задачей, поэтому "setTimeout(() => console.log("world"), 0))" выполняется последней).<br>
Здесь мы наблюдаем небольшую разницу в работе ключевого слова "await" перед асинхронным оператором (в данном случае, мы использовали setTimeout() в качестве примера) и вызовом функции/оператора без этого ключевого слова.
`
},

// 209
{
question: `
function name() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("New Zealand");
        }, 10);
    });
}

function fruit() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve("Kiwi");
        }, 20);
    });
}

(async function countryandfruit() {
    const getName = await name();
    const getFruit = await fruit();

    console.log(\`Kiora: &#36;{getName} &#36;{getFruit}\`);
})();

(async function fruitandcountry() {
    const [getName, getFruit] = await Promise.all([name(), fruit()]);

    console.log(\`Hello: &#36;{getName} &#36;{getFruit}\`);
})();
`,
answers: `
A: Null
B: Kiora
C: "Hello: New Zealand Kiwi" -> "Kiora: New Zealand Kiwi"
D: "Kiora: New Zealand Kiwi" -> "Hello: New Zealand Kiwi"
`,
rightAnswer: `C`,
explanation: `
Функции "countryandfruit" и "fruitandcountry" являются самовызываемыми. Обе определяются с помощью ключевого слова "async", это означает, что код внутри будет выполняться последовательно. Это позволяет в более краткой форме управлять получением данных по сравнению с промисами или колбеками.<br>
Первая функция возвращает "Kiora: New Zealand Kiwi", вторая - "Hello: New Zealand Kiwi". Можно подумать, что порядок будет таким же, но на самом деле порядок обратный, поскольку функции с ключевым словом "await" выполняются последовательно, а не параллельно как "Promise.all". Это означает, что сначала выполнится "fruitandcountry".
`
},

// 210
{
question: `
class MySort {
    constructor(object) {
        this.object = object;
}

getSort() {
    return Object.entries(this.object)[0][1].sort()[
            Object.values(this.object).length
        ];
    }
}

const object = {
    month: ["July", "September", "January", "December"],
};

const sortMe = new MySort(object);

console.log(sortMe.getSort());
`,
answers: `
A: July
B: September
C: January
D: December
`,
rightAnswer: `C`,
explanation: `
Object.entries возвращает массив, состоящий из ключей и значений объекта, Object.values - массив значений объекта, а Object.keys - массив ключей. Таким образом, "Object.entries(object)" в примере возвращает вложенный массив с одним элементом, значения которого также вложены в другой массив -  [["month", ["July", "September", "January", "December"]]].<br>
По этой причине "Object.entries(this.object)[0][1].sort()" на самом деле сортирует значения массива и возвращает новый порядок: "December" -> "January" -> "July" -> "September". Следовательно, когда мы пытаемся получить элемент с индексом "[Object.values(this.object).length]", то получаем "January", поскольку "[Object.values(this.object).length]" возвращает 1 (длина массива, возвращенного Object.values).
`
},

// 211
{
question: `
const flag = [] !== !!!!![];

let f = () => {};

console.log((typeof f()).length + flag.toString().length);
`,
answers: `
A: NaN
B: 12
C: 13
D: 14
`,
rightAnswer: `C`,
explanation: `
Сравнение двух массивов или объектов в JavaScript всегда возвращает false, поскольку оба передаются по ссылке, в отличие от примитивов, таких как строка, число или логическое значение. Вот почему сравнение [] и [] с помощью == или === возвращает false. Странная часть - это !==!!!!!, что эквивалентно !==, так что в ней нет ничего особенного. Таким образом, значением переменной "flag" является true.<br>
В функциональном выражении "f()" мы используем стрелочную функцию, но {} - это часть функции, а не объект. Для того, чтобы вернуть объект, следует написать "let f = () => ({})" или использовать обычную функцию. С помощью ключевого слова "return" мы легко можем поймать содержимое функции, когда используем обычный способ ее определения.<br>
Поэтому "typeof f()" возвращает undefined, а не object. Затем мы получаем 9 (длина undefined) + 4 (длина строки "true") = 13.
`
},

// 212
{
question: `
(function (a, b, c) {
    arguments[2] = (typeof arguments).length;
    c > 10 ? console.log(c) : console.log(++c);
})(1, 2, 3);
`,
answers: `
A: 4
B: 5
C: 6
D: 7
`,
rightAnswer: `D`,
explanation: `
Здесь мы имеем дело с самовызываемой функцией с тремя параметрами. Обратите внимание, что arguments внутри функции возвращает объект, состоящий из параметров функции.<br>
Когда мы присваиваем значение этому массиву (массивоподобному объекту) (или любому его элементу), функция будет использовать это значение, а не значение переданного при ее вызове параметра. Поэтому значением "(typeof arguments).length" будет 6, а не 3.<br>
6 меньше 10, поэтому мы получаем console.log(++c) или 7.<br>
Обратите внимание, что arguments не доступна в стрелочных функциях.<br>
ES6 рекомендует использовать прочие параметры (...rest) - настоящий массив. Это означает, что таким массивом можно манипулировать с помощью таких методов, как map, filter или reduce.
`
},

// 213
{
question: `
class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    static getFlag() {
        return new Array(this.a).length == new Array(this.b).toString().length;
    }

    getValue() {
        return Calculator.getFlag() ? typeof this.a : typeof new Number(this.b);
    }
}

const me = new Calculator(5, 5);

console.log(me.getValue());
`,
answers: `
A: NaN
B: "string"
C: "object"
D: "number"
`,
rightAnswer: `C`,
explanation: `
У нас есть класс Calculator. При объявлении нового экземпляра мы передаем два параметра: "a" и "b". Эти параметры одинаковые, но "new Array(this.a).length" сильно отличается от "new Array(this.b).toString().length", поскольку последний возвращает длину строки ',,,,' или 4, а первый - длину массива или 5.<br>
По этой причине getFlags() возвращает false. В getValue() мы получаем "typeof new Number(this.b)", что возвращает object. Это немного отличается от "typeof b", что возвращает number.
`
},

// 214
{
question: `
var name = "Auckland";

const nz = {
    name: "Kiwi",

    callMe: function () {
        return this.name;
    },
};

let me = nz.callMe;

let she = nz.callMe.bind(nz);

let result = me() === nz.callMe() ? she() : \`&#36{me()} &#36;{she()}\`;

console.log(result);
`,
answers: `
A: undefined
B: "Auckland"
C: "Kiwi"
D: "Auckland Kiwi"
`,
rightAnswer: `D`,
explanation: `
Данный вопрос посвящен ключевому слову "this". У нас есть простой объект, содержащий один метод и одно свойство.<br>
Во-первых, важно понимать, что "let me = nz.callMe" и последующий вызов me() существенно отличаются от прямого вызова "nz.callMe()". Если мы присваиваем переменной метод, объявленный внутри объекта, this в этом объекте будет вести себя по-разному (когда мы вызываем переменную как метод и когда мы вызываем сам метод). В частности, в первом случае, this - это объект window, в то время как во втором случае this внутри функции по-прежнему ссылается на свойство "name" объекта "nz". Это означает, что me() возвращает 'Auckland', а nz.callMe - 'Kiwi'.<br>
Затем result возвращает false, и мы получаем &#36;{me()} &#36;{she()}. Почему she() отличается от me()? Потому что she() привязана к объекту nz, а me() нет.
`
},

// 215
{
question: `
const club = {
    name: "Juventus",
    player: ["Ronaldo"],
    showMePlayer: function () {
        this.player.map(function (thename) {
            console.log(this.name.length);
        }, this);
    },
    showMe: function () {
        this.player.forEach(
        function (thename) {
            console.log(this.name.length);
        }.bind(this)
        );
    },
    show: function () {
        const self = this;
        this.player.map(function (thename) {
            console.log(self.name.length);
        });
    },
    Me: function () {
        this.player.map(function (thename) {
            console.log(this.name.length);
        });
    },
};

club.showMePlayer();
club.showMe();
club.show();
club.Me();
`,
answers: `
A: 8 - 8 - 8 - 8
B: "Juventus" - "Juventus" - "Juventus" - "Juventus"
C: "Ronaldo" - "Ronaldo" - "Ronaldo" - "Ronaldo"
D: 8 - 8 - 8 - 0
`,
rightAnswer: `D`,
explanation: `
Данная задача не слишком сложна для вас, не так ли? В ней просто приводится пример this в разных контекстах, когда мы объявляем анонимную функцию внутри метода объекта. Первые три метода являются распространенными способами обработки this с помощью this как второго параметра map(), bind(this) в forEach (или map()) или с помощью приема "that = this" (мы используем self вместо that).<br>
Последний метод Me() приводит к неожиданному результату, поскольку "this.name" не привязано к объекту "club". Обратите внимание, что при тестировании кода в jsbin мы получаем другой результат. В Chrome и Firefox мы получаем 0.
`
},

// 216
{
question: `
((...a) => {
    const b = ["javascript", "new zealand"];

    const c = [...a, typeof a, ...b, "kiwi"];

    console.log(c.length + c[0].length);
})(new Array(10));
`,
answers: `
A: 5
B: 10
C: 15
D: 20
`,
rightAnswer: `C`,
explanation: `
... используется двумя способами: как оператор распространения (spread) и как прочие параметры (rest).<br>
В приведенном примере мы видим оба способа. Первый оператор в самовызывающейся функции - это, разумеется, rest, а в константе c мы видим spread. В первом случае мы можем передать фукнции любое количество параметров. Обратите внимание, что "typeof a" - это object, несмотря на то, что фактически - это настоящий массив (в отличие от массивоподобного объекта "arguments").<br>
spread позволяет нам объединять массивы. Таким образом, ...a - это оператор rest при использовании в качестве параметра функции, но в константе - это оператор spread.<br>
Мы получаем "c" с пятью элементами (...a - это вложенный массив, поэтому его длина равняется 1), но первый элемент имеет 10 элементов (когда мы передали в функцию new Array(10)). Сумма длин обоих равняется 15.
`
},

// 217
{
question: `
function Kiora(name, ...career) {
    this.name = name;

    return Array.isArray(career) === true && typeof career === "object" ? {} : "";
}

var student = new Kiora("Vuong");

console.log(student.name);
`,
answers: `
A: "Vuong"
B: undefined
C: ErrorReference
D: false
`,
rightAnswer: `B`,
explanation: `
У нас имеется конструктор функции "Kiora" (написано с заглавной буквы, но это не обязательно), который может использоваться для создания объекта, как объект "student" в задаче. В функции имеется два параметра, хотя второй параметр - это на самом деле оператор rest. Типом оператора является "object", но "Array.isArray(career)" возвращает true. Оператор "return" возвращает объект {}.<br>
Вы можете быть удивлены, когда "console.log(student.name)" выведет в консоль undefined, если конструктор возвращает объект.
`
},

// 218
{
question: `
class Filter {
    constructor(element) {
        this.element = element;
    }
    filter() {
        return this.type() === "object" ? this.element[0].name : "hello";
    }

    type() {
        return typeof this.element;
    }
}

let countries = [
    { name: "New Zealand", isdeveloped: true },
    { name: "Vietnam", isdeveloped: false },
];

let x = new Filter(countries);

const filter = countries.filter((item) => {
    return !item.isdeveloped;
});

console.log(x.filter().length + filter[0].name.length);
`,
answers: `
A: 15
B: 16
C: 17
D: 18
`,
rightAnswer: `D`,
explanation: `
Пример получился длиннее, чем обычно. На самом деле он не слишком сложный. Вы легко найдете правильный ответ, потратив немного времени.<br>
Сначала мы определяем класс с двумя методами. Первый метод "filter()" возвращает первый элемент массива (свойства element) или "hello" в зависимости от метода "type()". Мы знаем, что "typeof array" вернет object, так что filter() вернет this.elements[0].name.<br>
Затем мы вызываем встроенный метод "filter()". Этот метод возвращает новый массив в зависимости от условия, переданного колбеку. Обратите внимание, что "!item.isdeveloped" означает false. Значит, мы получаем "Vietnam".<br>
Наконец, мы получаем "New Zealand.length" и "Vietnam.length", что в сумме дает 18.
`
},

// 219
{
question: `
async function abc() {
    console.log(8);

    await Promise.resolve(2).then(console.log);

    console.log(3);
}

setTimeout(() => {
    console.log(1);
}, 0);

abc();

queueMicrotask(() => {
    console.log(0);
});

Promise.resolve(4).then(console.log);

console.log(6);
`,
answers: `
A: 6 - 8 - 3 - 0 - 4 - 2 - 1
B: 8 - 2 - 3 - 0 - 4 - 6 - 1
C: 6 - 8 - 2 - 0 - 4 - 3 - 1
D: 8 - 6 - 2 - 0 - 4 - 3 - 1
`,
rightAnswer: `D`,
explanation: `
Порядок выполнения асинхронного кода зависит от микро- и макрозадач. Микрозадачи имеют приоритет. Запомните, что синхронный код всегда выполняется перед асинхронным. Поэтому мы имеем следующий порядок:<br>
<pre><code class="lang-js">
1) synchronous code
2) microtask code (promise, queueMicrotask)
3) macrotask code (setTimeout, setInterval)
</code></pre>
Обратите внимание, что в Node.js у нас также имеется process.nextTick(callback), который имеет высший приоритет, но его здесь нет.<br>
Итак, первый колбек - это setTimeout(), который будет выполнен последним, поскольку является макрозадачей. Поэтому мы получаем 1 последним.<br>
Следующей вызывается функция abc(). Сначала в консоль выводится 8. Затем на ключевом слове "await" выполнение функции приостанавливается, выполняется console.log(6), поскольку "Promise.resolve(4).then(console.log)" - это асинхронный код. Вот почему следующим мы получаем 6.<br>
Теперь настало время для "Promise.resolve(2)", поэтому мы получаем 2. Что произойдет если убрать ключевое слово "await"?<br>
Поскольку у нас имеется ключевое слово "await", выполнение кода ставится на паузу. Мы получаем 0 и 4, а не 3. Promise и queueMicrotask - микрозадачи, которые выполняются перед console.log(3).<br>
На следующем этапе мы получаем 3 и последним 1.<br>
Так что же произойдет, если убрать ключевое слово "await"? Тогда порядок будет следующим: 8-3-6-2-0-4-1.
`
},

// 220
{
question: `
const hoccoban = {
    x: "youtube.com/hoccoban".length,
    getMe() {
        const inner = function () {
            console.log(++this.x);
        };
        inner.bind(this)();
    },
};

hoccoban.getMe();
`,
answers: `
A: 20
B: 21
C: 22
D: 23
`,
rightAnswer: `B`,
explanation: `
Мы получаем 21. Сначала "youtube.com/hoccoban" возвращает 20, поскольку мы используем свойство "length" строки. Затем значение "x" увеличивается на 1 посредством "++this.x". Вопрос выглядит тривиальным, но это не так. Нужно помнить о том, что "console.log(++this.x)" не будет работать, если значением "x" будет undefined при вызове за пределами объекта.<br>
Мы можем решить эту проблему с this с помощью стрелочной функции: const inner = () => {}, поскольку стрелочные функции берут this из внешнего (лексического) окружения.<br>
Вторым решением является использования трюка с that/this. Нам нужно лишь объявить новую переменную "const that = this" внутри insideMe() и перед объявлением функции "inner". Это довольно распространенный прием.<br>
Третьим решением является использование apply(), call() или bind(), нативных методов функций (функция - это тоже объект). В данном случае, мы реализовали bind(this) для связывания функции и объекта, чтобы this указывал на объект при выполнении функции. Обратите внимание, что bind() не выполняется сразу, поэтому мы добавили () после него. Если заменить bind() на call(), то дополнительные () не понадобятся. inner.bind(this)() станет inner.call(this). На практике, мы, как правило, создаем переменную для хранения результата связывания функции и объекта.
`
},

// 221
{
question: `
function* hocCoBan() {
    yield "js.edu.vn";
    yield "youtube.com/hoccoban";
    yield "Vuong Nguyen";
}

let data = hocCoBan();

console.log((typeof data).length + data.next().value.length);
`,
answers: `
A: NaN
B: 10
C: Error
D: 15
`,
rightAnswer: `D`,
explanation: `
Присмотритесь к функции. После ключевого слова "function" имеется символ "*". В функции отсутствует ключевое слово "return". Что здесь происходит?<br>
Если вы знакомы с генераторами, решить данную задачу вам не составит труда. Мы не часто используем генераторы, но они являются основой async/await, позволяющей удобно работать с асинхронным кодом.<br>
Оператор "typeof data" возвращает object, а не function. typeof hoCoBan возвращает function, поскольку hoCoBan - обычная функция. Оператор "(typeof data).length" возвращает 6.<br>
data.next() вызывает встроенный метод next(), который возвращает значение первого yield, определенного в функции. Получаем 9 - длину строки "js.edu.vn".<br>
В итоге получаем 15. Понимание работы генераторов важно, если вы хотите понять, как работает async/await.
`
},

// 222
{
question: `
const a = [1, 2, "chó", 3, 1, "chó", "mèo", 3];

const b = [...new Set(a)];

b.length = "chó".length;

console.log(b);
`,
answers: `
A: 4
B: [1, 2, "chó", 3, "mèo"]
C: [1, 2, "chó", "mèo"]
D: [1, 2, "chó"]
`,
rightAnswer: `D`,
explanation: `
... в массиве - это оператор распространения (spread), который похож на оператор rest (прочие параметры). Данный оператор позволяет объединять (изменять) и копировать массивы. В примере "b" - это копия "a". Тем не менее, когда мы передаем "a" в Set, возвращаются только уникальные значения. Это означает, что "b" содержит [1, 2, "chó", 3, "mèo"].<br>
Затем мы устанавливаем значение длины "b" равное 3 ("chó".length).<br>
Таким образом, мы уменьшили длину массива. Вот почему в консоль выводится только [1, 2, "chó"].
`
},

// 223
{
question: `
const mot = function (m) {
    return arguments[0];
};

const hai = function (...m) {
    return arguments[arguments[0]];
};

const a = [mot(123), hai(1, 2, 3)];

console.log(typeof a !== "object" ? a[0] : a[1]);
`,
answers: `
A: 1
B: 2
C: 3
D: 123
`,
rightAnswer: `B`,
explanation: `
Прежде всего, следует заметить, что мы не можем использовать arguments в стрелочных функциях. arguments - это массивоподобный объект, который содержит параметры функции, переданные при ее вызове.<br>
... - это оператор rest (прочие параметры). Мы используем его в функции и массиве. Обратите внимание, что ... в массиве - это оператор распространения (spread), который ведет себя иначе, чем rest. При использовании ... в функции, мы можем передавать ей любое количество параметров.<br>
Обратите внимание, что в функции "hai" мы возвращаем "arguments[arguments[0]]" или "hai(1, 2, 3)", или 2, а не 1, поскольку arguments[0] возвращает 1, а arguments[1] - 2.<br>
"typeof a" возвращает "object". В итоге мы получаем 2 из a[1] или hai(1, 2, 3).
`
},

// 224
{
question: `
class Component {
    constructor(age) {
        this.age = age + \`&#36;{typeof Coder}\`.length;
    }

    getAge() {
        return ++this.age;
    }
}

class Coder extends Component {
    constructor(age) {
        super(age);
        this.age = age - \`&#36;{typeof Coder}\`.length;
    }
}

const a = new Coder(16);

console.log(a.getAge());
`,
answers: `
A: 7
B: 8
C: 9
D: 10
`,
rightAnswer: `C`,
explanation: `
У нас есть два простых класса, Coder расширяет Component. Ничего особенного. Поскольку "typeof ClassName" возвращает function, а не class, мы получаем 8 из "function".length.<br>
Поскольку мы используем super(age) в классе Coder, то перезаписываем конструктор родительского класса Component. Поэтому при инициализации объекта "a" автоматически выполняется "this.age = age - \`&#36;{typeof Coder}\`.length". Разница между дочерним и родительским конструкторами заключается в арифметической операции.<br>
Таким образом, мы получаем 16 - 8, а не 16 + 8, т.е. 8. Функция "getAge()" возвращает 9.<br>
Помните, что JavaScript - это не настоящий объектно-ориентированный язык, несмотря на то, что мы можем использовать в нем классы и объекты.
`
},

// 225
{
question: `
class RemoveFalse {
    constructor(element) {
        this.element = element;

        this.length = this.removeFalse().length;
    }

    removeFalse() {
        this.element = this.element.filter(Boolean);

        return this.element;
    }
}

const theArray = [true, false, 1, 0, NaN, undefined, "", null, "js.edu.vn"];

const a = new RemoveFalse(theArray);

console.log(a.length);
`,
answers: `
A: false
B: true
C: 2
D: 3
`,
rightAnswer: `D`,
explanation: `
Основной вывод, который можно сделать из примера - filter(Boolean) может быть использован для удаления ложных значений в массиве. Для этого мы также можем использовать filter(callback). Обратите внимание, что мы должны передать filter функцию обратного вызова, а Boolean как раз является такой функцией. Вы можете убедиться в этом с помощью typeof Boolean.<br>
Как и map или reduce, filter возвращает новый массив из существующего. "[true, false, 1, 0, NaN, undefined, "", null, "js.edu.vn"].filter(Boolean)" возвращает "[true, 1, 'js.edu.vn']", поэтому вызов функции "removeFalse()" возвращает 3.
`
},

// 226
{
question: `
const coderfarm = [1, [], {}, [], 2, 3];

const converted = Number(coderfarm instanceof Array);

const result = coderfarm.indexOf(converted + true);

console.log(result);
`,
answers: `
A: []
B: {}
C: 2
D: 4
`,
rightAnswer: `D`,
explanation: `
У нас есть массив, состоящий из нескольких чисел, двух массивов и объекта. Посредством встроенной функции "Number" мы можем конвертировать любое переданное ей значение в число. "codefarm instanceof Array" возвращает true, которое преобразуется в 1. Для проверки того, является ли значение массивом, также можно использовать "Array.isArray(arrayToBeChecked)", возвращающий логическое значение. Оператор "typeof []" возвращает object, а не array.<br>
Встроенная функция "indexOf" возвращает индекс искомого элемента. Поскольку "converted + true" возвращает 2, мы ищем индекс элемента 2 в массиве codefarm.<br>
Данный элемент находится на 4 позиции.
`
},

// 227
{
question: `
const converter = (arrayInput) => {
    return { ...arrayInput };
};

const content = ["function", "object", "decorator"];

const checking = content[Number(false)];

const result = typeof converter(content) === content[1];

console.log(checking ? (result ? (typeof converter).length : false) : false);
`,
answers: `
A: 6
B: NaN
C: true
D: 8
`,
rightAnswer: `D`,
explanation: `
Оператор ... является очень полезным. В функции "converted" нет ничего необычного, она использует преимущества ... (оператор rest || оператор spread) для преобразования массива в объект.<br>
Константа "checking" имеет значение "function" из Number(false), что дает 0, т.е. значением checking является элемент массива content с индексом 0.<br>
Константа "result" имеет значение true, поскольку "typeof converter(content)" возвращает function, как и content[1].<br>
Таким образом, мы получаем "checking = true" и "result = true", поэтому получаем "(typeof converter).length" или "function".length, или 8.<br>
Главный вывод здесь такой: мы можем использовать оператор распространения (spread) для преобразования массива в объект. Например: const a = ['hello', 2]; const b = {...a}, получаем b = {0: 'hello', 1: 2}. Ключом объекта в данном случае является индекс элемента в массиве.
`
},

// 228
{
question: `
function* js(length) {
    for (let i = length.length; i > 0; --i) {
        yield i;
    }
}

let getJS = js(typeof js);

let result = getJS.next().value;

console.log(result + getJS.next().value);
`,
answers: `
A: 10
B: 14
C: 15
D: 16
`,
rightAnswer: `C`,
explanation: `
Здесь мы имеем дело с функцией-генератором, которая определяется с помощью символа "*".<br>
Благодаря ключевому слову "yield" мы можем хранить в функции любое количество значений.<br>
Поскольку "typeof js" возвращает function, длина этой строки равняется 8. Поэтому при вызове "getJS.next().value" мы получаем 8. При следующем вызове мы получаем 7, затем 6. Вот почему генератор может хранить и возвращать любое количество значений.<br>
В итоге мы получаем 8 + 7 = 15.
`
},

// 229
{
question: `
var ages = [10, 15, 20, 25];

let response = [];

ages.some(function (currentValue, index, ages) {
    if (currentValue > ages[ages.length - index])
        response.push(currentValue + ages.length);
});

console.log(response);
`,
answers: `
A: [20]
B: [20, 25]
C: [25, 29]
D: [29]
`,
rightAnswer: `D`,
explanation: `
Array.prototype.some() - это встроенная функция, позволяющая перебирать массив с помощью колбека. Колбек в примере имеет три параметра: currentValue (значение текущего элемента массива), index (индекс текущего элемента) и ages (сам массив).<br>
Функция some() возвращает логическое значение. Код "currentValue > ages[ages.length - index]" возвращает true только один раз, поскольку речь идет о последнем элементе. Давайте рассмотрим код последовательно:<br>
<pre><code class="lang-js">
10 > ages[4 - 0]. Поскольку ages[4] возвращает undefined, и "10 > undefined" также возвращает false, выполнение кода останавливается.

15 > ages[4 - 1]. Поскольку ages[3] возвращает 25, условие является ложным.

20 > ages[4 - 2]. Поскольку ages[2] возвращает 20, условие также не удовлетворяется.

25 > ages[4 - 3]. Поскольку ages[1] возвращает 10, выражение возвращает true. Только это значение помещается в массив "response".
</code></pre>
В массиве "response" содержится "response.push(currentValue + ages.length)" или "25 + ages.length" или "25 + 4", т.е. 29.
`
},

// 230
{
question: `
const getSTring = (string, method = false) => {
    if (method === true) {
        return string.slice(1, 4).length;
    }

    return string.substr(1, 4).length;
};

console.log(getSTring("hello", true) + getSTring("hello"));
`,
answers: `
A: 6
B: 7
C: 8
D: 9
`,
rightAnswer: `B`,
explanation: `
getString() - это стрелочная функция с двумя параметрами. Как видите, параметр "method" имеет значение по умолчанию, равное false, если не передать другое значение при вызове функции, будет использовано значение по умолчанию.<br>
Основной вывод: разница между slice(1, 4), возвращающим 3, и substr(1, 4), возвращающим 4.<br>
console.log(getSTring("hello", true) + getSTring("hello")) или console.log(string.substr(1, 4).length + string.slice(1, 4).length), или console.log(4 + 3) выводит в консоль 7.
`
},

// 231
{
question: `
(function (a, b, c) {
    console.log(Boolean([...arguments].slice(2, 3)[0].slice(3, 4)));
})("hello", "world", "new zealand");
`,
answers: `
A: "new"
B: true
C: "land"
D: false
`,
rightAnswer: `B`,
explanation: `
Здесь мы имеем дело с самовызываемой функцией (IIFE). Такая функция вызывается сразу после объявления. У нас есть три параметра и три аргумента: "hello", "world" и "new zealand".<br>
Сначала arguments возвращает объект, состоящий из аргументов, переданных функции при ее вызове. С помощью оператора распространения (...spread) мы преобразуем объект в массив. Мы также можем сделать это с помощью "Array.from(object)".<br>
Далее slice(2, 3) извлекает элемент со второго по третий индекс, т.е. "new zealand". Это все еще массив. Затем мы извлекаем элемент с индексом 0 и получаем строку "new zealand".<br>
Наконец, "new zealand".slice(3, 4) возвращает " " (пробел). Boolean(" ") возвращает true. Если бы строке не было пробела, мы получили бы false.<br>
`
},

// 232
{
question: `
class HocCoBan {
    name = "hello world";

    getSlice(slice) {
        return this.getName(slice).slice(true, this.name.length);
    }

    getName(space) {
        return this.name.split(space);
    }
}

HocCoBan.prototype.split = function (argument) {
    return this.getSlice(argument);
};

const a = new HocCoBan();

console.log(a.split("").length);
`,
answers: `
A: NaN
B: true
C: 10
D: 11
`,
rightAnswer: `C`,
explanation: `
В примере нет ничего необычного. Он намеренно запутан. У нас есть класс HocCoBan с двумя методами и одним свойством. Затем мы добавляем к нему еще один метод "split", используя традиционный способ (через prototype). Помните, что class в JavaScript - это лишь синтаксический сахар function (typeof ClassName возвращает function).<br>
При вызове split мы передаем ему пустую строку. Данный метод вызывает другие методы. Порядок следующий:<br>
split("") -> this.getSlice("") -> this.getName("") -> this.name.split(""). Здесь split - это функция, преобразующая строку в массив.<br>
Обратите внимание, что в getSlice() мы используем ".slice(true, this.name.length)" для модификации массива с 1 по 11 индекс. Длина нового массива равна 10.<br>
Данный код помогает понять, как работают прототипы в JavaScript, а также увидеть разницу между встроенными и пользовательскими методами.
`
},

// 233
{
question: `
function javaScript(node) {
    let mot = node.includes("I") ? "love" : "you";

    return function (deno = mot) {
        let hai = node.replace(deno, "done");

        return function (done = hai) {
            return (node + deno + done).length;
        };
    };
}

console.log(javaScript("I love you")()());
`,
answers: `
A: 18
B: 24
C: 20
D: 25
`,
rightAnswer: `B`,
explanation: `
Кроме изучения некоторых встроенных функций для работы со строками, таких как "replace" и "includes", здесь мы имеем дело с каррированием. Обратите внимание, что только внешняя (главная) функция имеет название, внутренние функции являются анонимными. У нас также имеется три ключевых слова "return".<br>
При вызове функции необходимо использовать три пары круглых скобок - javaScript("I love you")()(). Мы не передаем аргументы вложенным функциям, поэтому они используют значения по умолчанию.<br>
Результирующим выражением является "return (node + deno + done).length", где node - "I love you", deno - "love" и done - "I done you". Результирующая длина равняется 24 (I love youyou I done you). Пробелы также принимаются в расчет.
`
},

// 234
{
question: `
const www = ["hello", "coranovirus", "kiora", "world", "new zealand"];

const found = www.find(function (world) {
    return world > "victory";
});

const result = found[1] < www[0][0] ? www[false ? 1 : 0] : www[true ? 0 : 1];

console.log(result);
`,
answers: `
A: "hello"
B: "world"
C: "victory"
D: "w"
`,
rightAnswer: `A`,
explanation: `
Данный вопрос посвящен методу "Array.prototype.find()". Он возвращает первый элемент, удовлетворящий условию, определенному в колбеке, передаваемом функции. Массив перебирается поэлементно. В примере "world" - это первый элемент, значение которого больше чем значение "victory". Запомните, при сравнении "w" > "v" возвращается true. При сравнении двух слов, сравниваются только их первые буквы.<br>
Значением "found" является "world" и поэтому found[1] возвращает "w", а www[0][0] возвращает "h" как первую букву "hello". Это объясняет, почему found[1] < www[0][0] возвращает false.<br>
В итоге мы получаем www[true ? 0 : 1] или www[0], или hello.
`
},

// 235
{
question: `
(function (flag) {
    let age = Boolean(NaN === NaN ? false : flag);

    console.log(age.toString()[Number(flag)]);
})([]);
`,
answers: `
A: "f"
B: "t"
C: true
D: false
`,
rightAnswer: `B`,
explanation: `
У нас есть самовызываемая функция с пустым массивом в качестве параметра. Обратите внимание, что NaN === NaN возвращает false, затем переменная "age" получает значение flag, т.е. пустой массив. Boolean([]) возвращает true.<br>
Функция "toString()" возвращает строку "true", а Number([]) - 0. Поэтому в консоль выводится "t".<br>
Запомните, что Boolean([]) = true, но Number([]) = 0. И NaN === NaN дает false.
`
},

// 236
{
question: `
console.log(Boolean([]));
console.log(Number([]));
console.log(Number(Boolean([])));
console.log(Boolean(Number([])));

console.log(Boolean({}));
console.log(Number({}));
console.log(Number(Boolean({})));
console.log(Boolean(Number({})));

console.log(Boolean(new Boolean(false)));
`,
answers: `
A: true - 0 - 1 - false - true - 1 - 1 - false - false
B: true - 0 - 1 - false - false - NaN - 1 - false - true
C: true - 0 - 1 - false - false - false - 1 - false - false
D: true - 0 - 1 - false - true - NaN - 1 - false - true
`,
rightAnswer: `B`,
explanation: `
JavaScript - это язык со слабой (динамической) типизацией. Тип данных переменной может меняться в зависимости от значения. При изменении одного значения на другое поведение JavaScript может быть весьма неожиданным.<br>
Например, Number([]) возвращает 0, Number({}) - NaN, а Boolean([]) и Boolean({}) - true.<br>
Boolean(new Boolean(false)) возвращает true, несмотря на то, что мы передаем конструктору функции Boolean значение false. Однако, если мы уберем ключевое слово "new", то получим false. Boolean(new Boolean(false)) - это валидная операция, поэтому возвращается true. С другой стороны, Boolean(Boolean(false)) без ключевого слова "new", возвращает false, поскольку значение "false" не является операцией.
`
},

// 237
{
question: `
const myYoutube = {
    name: "hoccoban",
    address: "youtube.com/hoccoban",
    getInfo() {
        return this;
    },
    content: () => (this === window ? myYoutube.getInfo() : this),
};

console.log(myYoutube.content().name);
`,
answers: `
A: "hoccoban"
B: window (object)
C: NaN
D: undefined
`,
rightAnswer: `A`,
explanation: `
Для того, чтобы правильно ответить на данный вопрос, нужно понимать концепцию this в JavaScript (в браузере). По умолчанию this указывает на объект window. Обратите внимание, что Window (с заглавной буквы) - это конструктор функции объекта window. Поэтому console.log(this === window) возвращает true, а console.log(this === Window) - false.<br>
getInfo() - это стрелочная функция, this, объявленный внутри этой функции, указывает на window, поэтому myYoutube.content() возвращает myYoutube.getInfo(). Обратите внимание, что нам пришлось явно писать myYoutube.getInfo() для того, чтобы код работал корректно, поскольку this не указывает на текущий объект. В функции "getInfo()" this указывает на текущий объект, поскольку getInfo() - это обычная функция.<br>
В итоге мы получаем hoccoban как значение свойства name.
`
},

// 238
{
question: `
const myArray = [1, 2, 3];

myArray.someProperty = this;

Array.prototype.someOtherProperty = "hello";

let result = [];

for (let key in myArray) {
    result.push(key);
}

for (let key in myArray) {
    if (myArray.hasOwnProperty(key)) {
        result.push(key);
    }
}

console.log(result.length);
`,
answers: `
A: 10
B: NaN
C: 9
D: 7
`,
rightAnswer: `C`,
explanation: `
У нас есть простой массив с тремя элементами. При проверке типа массива с помощью typeof мы получаем object (для определения того, что значение является массивом, можно использовать Array.isArray(array) или array instanceof Array).<br>
При объявлении myArray.someProperty мы добавляем новое свойство к данному массиву, при объявлении Array.prototype.someProperty = 'hello', мы добавляем новое свойство к каждому массиву.<br>
Цикл for... in перебирает массив и возвращает пары ключ/значение, включая унаследованное свойство. На второй итерации мы используем метод hasOwnProperty(key), который перебирает только собственные (не унаследованные) ключи/значения.<br>
Если коротко, на первой итерации мы получаем 5 (3 исходных элемента, 1 собственное свойство и еще 1 унаследованное). На второй - только 4 (унаследованное свойство не учитывается).<br>
Для перебора массива обычно используется for... of или классический for. Использование for... in для этого является плохой практикой. for... in, как правило, используется для перебора объектов.
`
},

// 239
{
question: `
const coderfarm = [1, 2, 3, 4, 5];

const [top, ...bottom] = (function (a) {
    let result = a;

    a.unshift(new Array(3));

    return result;
})(coderfarm);

console.log(top.length + bottom.length);
`,
answers: `
A: 8
B: 9
C: 10
D: 11
`,
rightAnswer: `A`,
explanation: `
Здесь мы используем деструктуризацию для извлечения значений массива (или объекта) и оператор расптространения (...spread).<br>
Деструктурируемый массив возвращается из самовызываемой функции. Сначала мы передаем аргумент "codefarm" (параметр "a" в функции). Затем мы обновляем этот массив, добавляя в начало (посредством unshift) массив из трех undefined (с помощью new Array(3)). После этого массив выглядит так: [[undefined, undefined, undefined], 1, 2, 3, 4, 5].<br>
Переменная "top" - это первый элемент массива или [undefined, undefined, undefined], длина которого равняется 3.<br>
Переменная "bottom" - это прочие элементы массива, ее длина равняется 5.<br>
В итоге мы получаем 3 + 5 = 8.
`
},

// 240
{
question: `
let age = { number: 10 };

const getAge = (flag) => {
    flag ? delete age.number : delete age;
    return age.number++;
};

console.log(getAge(false));

console.log(age.number);

console.log(getAge(true));

console.log(age.number);
`,
answers: `
A: 10 - 10 - NaN - NaN
B: 10 - 10 - undefined - undefined
C: 10 - 11 - undefined - undefined
D: 10 - 11 - NaN - NaN
`,
rightAnswer: `D`,
explanation: `
Оператор "delete" удаляет свойство объекта, а не сам объект. У нас есть простая функция "getAge()" с параметром flag. Если значением flag является true, выполняется код "delete age.number", в противном случае, мы пытаемся удалить объект.<br>
Поскольку delete не может удалить объект, можно сказать, что "delete age" ничего не делает. console.log(getAge(false)) возвращает 10 и затем увеличивает значение age.number на 1. Данное значение хранится в памяти, поэтому console.log(age.number) возвращает 11.<br>
Когда мы присваиваем flag значение true, console.log(getAge(true)) выполняет код "delete age.number", что удаляет свойство age.number. Это означает, что age.number = undefined. Однако, поскольку мы пытаемся увеличить значение на 1 с помощью оператора ++, возвращается NaN.
`
},

// 241
{
question: `
const youtube = { name: "hoccoban" };

const copy = Object.create(youtube);

const cloneA = Object.assign({}, copy);

const cloneB = Object.assign({}, youtube);

console.log(cloneA.name);

console.log(cloneB.name);

console.log(copy.name);
`,
answers: `
A: undefined - "hoccoban" - "hoccoban"
B: "hoccoban" - "hoccoban" - "hoccoban"
C: "hoccoban" - "hoccoban" - "undefined"
D: undefined - "undefined" - "hoccoban"
`,
rightAnswer: `A`,
explanation: `
Сначала "console.log(cloneA.name)" выводит в консоль undefined, но почему? Мы используем Object.assign() для получения нового объекта из пустого объекта и объекта "copy". Объект "copy" является копией объекта "youtube", созданной с помощью Object.create(). Поскольку мы используем Object.create() объект "copy" наследует данные объекта "youtube", но сам остается пустым.<br>
console.log(cloneB.name) и console.log(copy.name) выводят в консоль "hoccoban", поскольку "cloneB.name" имеет собственное свойство "name", а "copy.name" наследует свойство "name" объекта "youtube".
`
},
]