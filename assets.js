const assets = [
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
Внутри функции мы сначала определяем переменную name с помощью ключевого слова var. Это означает, что name поднимется в начало функции. Name будет иметь значение undefined до тех пор, пока выполнение кода не дойдет до строки, где ей присваивается значение Lydia. Мы не определили значение name, когда пытаемся вывести ее в консоль, поэтому будет выведено undefined. Переменные, определенные с помощью let (и const), также поднимаются, но в отличие от var, не инициализируются. Доступ к ним до инициализации невозможен. Это называется "временной мертвой зоной". Когда мы пытаемся обратиться к переменным до их определения, JavaScript выбрасывает исключение ReferenceError.
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
`,
rightAnswer: `C`,
explanation: `
Из-за очереди событий в JavaScript функция setTimeout вызывается после завершения цикла. Так как i в первом цикле определяется с помощью var, она является глобальной. В цикле мы каждый раз увеличиваем значение i на 1, используя оператор ++. К моменту выполнения setTimeout значение i будет равно 3 в первом примере. Во втором цикле i определяется с помощью let. Такие переменные (а также переменные, объявленные с помощью const) имеют блочную область видимости (блок - это код внутри { }). На каждой итерации i будет иметь новое значение, и это значение будет замкнуто в области видимости внутри цикла.
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

shape.diameter();
shape.perimeter();
`,
answers: `
A: 20 и 62.83185307179586
B: 20 и NaN
C: 20 и 63
D: NaN и 63
`,
rightAnswer: `B`,
explanation: `
Обратите внимание, что diameter - это обычная функция, а perimeter - стрелочная. У стрелочных функций в отличие от обычных значение this указывает на лексическое окружение. Это значит, что при вызове perimeter ее значение this указывает не на объект shape, а на внешнюю область видимости (window). У этого объекта нет свойства radius, поэтому возвращается undefined.
`
},
// 4
{
question: `
+true;
!"Lydia";
`,
answers: `
A: 1 и false
B: false и NaN
C: false и false
`,
rightAnswer: `A`,
explanation: `
Унарный плюс приводит операнд к числу. true - это 1, а false - это 0. Строка 'Lydia' - это истинное значение. Мы спрашиваем, является ли это истинное значение ложным? Ответ: false.
`
},
// 5
{
question: `
const bird = {
    size: "small"
};

const mouse = {
    name: "Mickey",
    small: true
};
`,
answers: `
A: mouse.bird.size
B: mouse[bird.size]
C: mouse[bird["size"]]
D: Все варианты валидны
`,
rightAnswer: `A`,
explanation: `
В JavaScript все ключи объекта являются строками (кроме Symbol). JavaScript интерпретирует (или распаковывает) операторы. При использовании квадратных скобок JS замечает [ и продолжает анализ пока не встретит ]. Только после этого он вычисляет то, что находится внутри скобок. mouse[bird.size]: сперва определяется bird.size, которое равно "small". mouse["small"] возвращает true. Но с записью через точку так не происходит. У mouse нет свойства bird. Таким образом, mouse.bird = undefined. Затем мы запрашиваем ключ size, используя точечную нотацию: mouse.bird.size. Так как mouse.bird имеет значение undefined, мы запрашиваем undefined.size. Это не является валидным, и мы получаем ошибку Cannot read property "size" of undefined.
`
},
// 6
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
E: TypeError
`,
rightAnswer: `A`,
explanation: `
В JavaScript все объекты являются "ссылочными" типами данных. Сначала создается ссылка переменной "c" на объект. Затем мы указываем переменной "d" ссылаться на тот же объект, что и "c". Когда мы изменяем объект, то меняются значения всех ссылок, указывающих на него.
`
},
// 7
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
new Number() - это встроенный конструктор функции. И хотя он выглядит как число, это не настоящее число: у него есть ряд дополнительных возможностей, это объект. Оператор == разрешает приведение типов, он проверяет равенство значений. Оба значения равны 3, поэтому возвращается true. При использовании оператора === значение и тип должны совпадать. В нашем случае это не так: new Number() это не число, а объект. Поэтому два последних сравнения возвращают false.
`
},
// 8
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
Функция colorChange является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как freddie - это экземпляр, то статичный метод в нем не доступен. Поэтому выбрасывается TypeError.
`
},
// 9
{
question: `
// код выполняется в нестрогом режиме
let greeting;
greetign = {}; // Опечатка!
console.log(greetign);
`,
answers: `
A: {}
B: ReferenceError: greetign is not defined
C: undefined
`,
rightAnswer: `A`,
explanation: `
Посредством greetign = {} мы создаем новый глобальный пустой объект, который и выводится в консоль. Когда мы вместо greeting написали greetign, интерпретатор JS выполнил global.greetign = {} в Node.js (или window.greetign = {} в браузере). В строгом режиме ("use strict") будет выброшено исключение ReferenceError: greetign is not defined.
`
},
// 10
{
question: `
function bark() {
    console.log("Woof!");
}
    
bark.animal = "dog";
`,
answers: `
A: Ничего, все в порядке.
B: SyntaxError. Нельзя добавлять свойства функциям таким способом.
C: undefined
D: ReferenceError
`,
rightAnswer: `A`,
explanation: `
В JavaScript это возможно, т.к. функции - это объекты. Функция — это специальный тип объекта, который можно вызывать. Кроме того, функция — это объект со свойствами. Свойство такого объекта нельзя вызвать, поскольку оно не является функцией.
`
},
// 11
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
Нельзя добавлять свойства конструктору как обычному объекту. Если нужно добавить свойство или метод всем экземплярам, то необходимо использовать прототипы. В данном случае Person.prototype.getFullName = function () { return \`&#36;{this.firstName} &#36;{this.lastName}\`; } сделает метод member.getFullName() рабочим. В чем тут преимущество? Предположим, что мы добавили этот метод к конструктору. Возможно, не каждому экземпляру Person нужен этот метод. Это приведет к большим потерям памяти, т.к. все экземпляры будут иметь это свойство. Напротив, если мы добавим этот метод только к прототипу, у нас будет только одно место в памяти, к которому смогут обращаться все экземпляры.
` 
},
// 12
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
D:Person {firstName: "Lydia", lastName: "Hallie"} и ReferenceError
`,
rightAnswer: `A`,
explanation: `
Мы создаем sarah без new. Использование new приводит к созданию нового объекта (экземпляра). Без new создается глобальный объект. Мы указали, что this.firstName равно "Sarah" и this.lastName равно "Smith". На самом деле, мы определили global.firstName = 'Sarah' и global.lastName = 'Smith'. sarah = undefined, поскольку мы не возвращаем значение из Person.
` 
},
// 13
{
question: ``,
answers: `
A: Цель > Захват > Всплытие
B: Всплытие > Цель > Захват
C: Цель > Всплытие > Захват
D: Захват > Цель > Всплытие
`,
rightAnswer: `D`,
explanation: `
Во время фазы захвата событие распространяется от родительского элемента до целевого. После достижения цели начинается фаза всплытия.
` 
},
// 14
{
question: ``,
answers: `
A: Да
B: Нет
`,
rightAnswer: `B`,
explanation: `
Все объекты имеют прототипы, кроме базового объекта. Базовый объект имеет доступ к некоторым методам и свойствам, таким как toString(). Именно поэтому мы можем использовать встроенные методы JavaScript. Все эти методы доступны в прототипе. Если JS не может найти метод непосредственно у объекта, он продолжает поиск по цепочке прототипов.
`
},
// 15
{
question: `
function sum(a, b) {
    return a + b;
}
    
sum(1, "2");
`,
answers: `
A: NaN
B: TypeError
C: "12"
D: 3
`,
rightAnswer: `C`,
explanation: `
JavaScript - это динамически типизированный язык: мы не определяем тип переменных. Переменные могут быть автоматически преобразованы из одного типа в другой без нашего участия, что называется неявным приведением типов. Приведение - это преобразование данных из одного типа в другой. В этом примере JavaScript сконвертировал число 1 в строку, чтобы операция внутри функции имела смысл и вернула значение. Во время сложения числа (1) и строки ("2") число преобразовывается к строке. Мы можем конкатенировать строки так: "Hello" + "World". Таким образом, 1 + "2" возвращает "12".
` 
},
// 16
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
Инкрементирует значение (теперь number равно 1)<br>
Префиксный оператор ++:<br>
Инкрементирует значение (теперь number равно 2)<br>
Возвращает значение (2)<br>
Результат: 0 2 2.
`
},
// 17
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
`,
rightAnswer: `B`,
explanation: `
При использовании тегированных шаблонных литералов первым аргументом является массив строковых значений. Оставшимися аргументами будут значения переданных выражений.
`
},
// 18
{
question: `
function checkAge(data) {
    if (data === { age: 18 }) {
        console.log("Ты взрослый!");
    } else if (data == { age: 18 }) {
        console.log("Ты все еще взрослый.");
    } else {
        console.log(\`Хм... Кажется, у тебя нет возраста.\`);
    }
}

checkAge({ age: 18 });
`,
answers: `
A: Ты взрослый!
B: Ты все еще взрослый.
C: Хм... Кажется, у тебя нет возраста.
`,
rightAnswer: `C`,
explanation: `
В операциях сравнения примитивы сравниваются по их значениям, а объекты - по ссылкам. JavaScript проверяет, чтобы объекты указывали на одну и ту же область памяти. Сравниваемые объекты в нашем примере не такие: объект, переданный в качестве параметра, указывает на другую область памяти, чем объекты, используемые в сравнениях. Поэтому { age: 18 } === { age: 18 } и { age: 18 } == { age: 18 } возвращают false.
`
},
// 19
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
Оператор распространения (...args) возвращает массив с аргументами. Массив - это объект, поэтому typeof args возвращает "object".
`
},
// 20
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
Используя "use strict" можно быть уверенным, что мы случайно не объявим глобальные переменные. Мы не объявляли переменную age, поэтому с использованием "use strict" возникнет ReferenceError. Без использования "use strict" ошибки не возникнет, а переменная age добавится в глобальный объект.
`
},
// 21
{
question: `
const sum = eval("10*10+5");
`,
answers: `
A: 105
B: "105"
C: TypeError
D: "10*10+5"
`,
rightAnswer: `A`,
explanation: `
eval выполняет код, переданный в виде строки. Если это выражение (как в данном случае), то оно вычисляется. Выражение 10 * 10 + 5 вернет число 105. Использовать eval не рекомендуется.
`
},
// 22
{
question: `
sessionStorage.setItem("cool_secret", 123);
`,
answers: `
A: Всегда, данные не потеряются.
B: Пока пользователь не закроет вкладку.
C: Пока пользователь не закроет браузер, а не только вкладку.
D: Пока пользователь не выключит компьютер.
`,
rightAnswer: `B`,
explanation: `
Данные, сохраненные в sessionStorage, очищаются после закрытия вкладки. При использовании localStorage данные сохраняются до очистки хринилища, например, посредством localStorage.clear().
`
},
// 23
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
С помощью ключевого слова var можно определять сколько угодно переменных с одинаковым именем. Переменная будет хранить последнее присвоенное ей значение. Но такой трюк нельзя проделать с let и const, т.к. у них блочная область видимости.
`
},
// 24
{
question: `
const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");
obj.hasOwnProperty(1);
set.has("1");
set.has(1);
`,
answers: `
A: false true false true
B: false true true true
C: true true false true
D: true true true true
`,
rightAnswer: `C`,
explanation: `
Все ключи объектов (кроме Symbol) являются строками, даже если заданы не в виде строк. Поэтому obj.hasOwnProperty('1') также возвращает true. Но это не работает для set. Значения '1' нет в set: set.has('1') возвращает false. Но set.has(1) = true.
`
},
// 25
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
Если есть два ключа с одинаковым именем, то ключ будет перезаписан. Его позиция сохранится, но значением будет последнее из указанных.
`
},
// 26
{
question: ``,
answers: `
A: Да
B: Нет
C: Это зависит от...
`,
rightAnswer: `A`,
explanation: `
Базовый контекст исполнения является глобальным: к нему можно получить доступ из любого места в коде.
`
},
// 27
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
Оператор continue пропускает итерацию, если условие возвращает true.
`
},
// 28
{
question: `
String.prototype.giveLydiaPizza = () => {
    return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza();
`,
answers: `
A: "Just give Lydia pizza already!"
B: TypeError: not a function
C: SyntaxError
D: undefined
`,
rightAnswer: `A`,
explanation: `
String - это встроенный конструктор, к которому можно добавлять свойства. Мы добавили метод к его прототипу. Строки-примитивы автоматически конвертируются к строкам-объектам. Поэтому все строки (строковые объекты) имеют доступ к этому методу.
`
},
// 29
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
Ключи объекта автоматически конвертируются в строки. Мы собираемся добавить объект в качестве ключа к объекту "a" со значением 123. Тем не менее, когда мы приводим объект к строке, он становится "[object Object]". Таким образом, мы говорим, что a["object Object"] = 123. Потом мы делаем тоже самое. "c" - это другой объект, который мы неявно приводим к строке. Поэтому a["object Object"] = 456. Затем, когда мы выводим a[b], мы имеем в виду a["object Object"]. Мы только что установили туда значение 456, поэтому в результате получаем 456.
`
},
// 30
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
Мы вызываем функцию setTimeout первой. Тем не менее, она выводится в консоль последней. Это происходит из-за того, что в браузерах у нас есть не только рантайм движок, но и WebAPI. WebAPI предоставляет нам функцию setTimeout и много других возможностей. Например, DOM. После того, как коллбэк отправлен в WebAPI, функция setTimeout (но не коллбэк!) удаляется из стека. Теперь вызывается foo, и "First" выводится в консоль. foo удаляется из стека, и вызывается baz. "Third" выводится в консоль. WebAPI отправляет функцию обратного вызова в очередь. Здесь на сцену выходит цикл событий (event loop). Event loop проверяет стек и очередь (макро)задач. Если стек пустой, то он берет первый элемент из очереди и отправляет его в стек. Вызывается bar, в консоль выводится "Second" и эта функция удаляется из стека.
`
},
// 31
{
question: `
&lt;div onclick="console.log('first div')">
    &lt;div onclick="console.log('second div')">
        &lt;button onclick="console.log('button')">
            Нажми на меня!
        &lt;/button>
    &lt;/div>
&lt;/div>
`,
answers: `
A: Внешний div
B: Внутренний div
C: button
D: Массив со всеми вложенными элементами
`,
rightAnswer: `C`,
explanation: `
Целью события является самый глубоко вложенный элемент. Остановить распространение события можно с помощью event.stopPropagation().
`
},
// 32
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
После клика по "p" в консоль будет выведено "p" и "div". Цикл события имеет три фазы: захват, цель и всплытие. По умолчанию обработчики событий выполняются на фазе всплытия (если не установлен параметр useCapture: true). Всплытие идет от самого глубоко вложенного элемента до самого внешнего.
`
},
// 33
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
В обоих случаях мы передаем объект, на который будет указывать this. Но call() выполняется сразу, а bind() возвращает копию функции с привязанным контекстом. Она не выполняется немедленно.
`
},
// 34
{
question: `
function sayHi() {
    return (() => 0)();
}

typeof sayHi();
`,
answers: `
A: "object"
B: "number"
C: "function"
D: "undefined"
`,
rightAnswer: `B`,
explanation: `
Функция sayHi возвращает значение, возвращаемое из немедленно вызываемого функционального выражения (IIFE). Результатом является 0 типа number. Для информации: в JS 8 встроенных типов: null, undefined, boolean, number, string, object, symbol и bigint. function не является отдельным типом, функции - это объекты.
`
},
// 35
{
question: `
0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;
`,
answers: `
A: 0, '', undefined
B: 0, new Number(0), '', new Boolean(false), undefined
C: 0, '', new Boolean(false), undefined
D: Все являются "ложными"
`,
rightAnswer: `A`,
explanation: `
Существует шесть "ложных" значений: undefined, null, NaN, 0, '' (пустая строка) и false. Конструкторы функций, такие как new Number и new Boolean являются "истинными".
`
},
// 36
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
// 37
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
Когда в массив добавляется значение, которое выходит за пределы длины массива, JavaScript создает "пустые ячейки". На самом деле они имеют значения undefined, но в консоль как [1, 2, 3, 7 x empty, 11] (в браузере, зависит от среды выполнения кода).
`
},
// 38
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
Блок catch получает аргумент x. Это не тот x, который определен в качестве переменной перед try. Затем мы присваиваем этому аргументу значение 1 и устанавливаем значение для переменной y. После этого выводим в консоль значение x, которое равно 1. За пределами блока catch переменная x все еще имеет значение undefined, а y равно 2. Когда мы вызываем console.log(x) за пределами блока catch, этот вызов возвращает undefined, а y возвращает 2.
`
},
// 39
{
question: ``,
answers: `
A: примитив или объект
B: функция или объект
C: вопрос с подвохом! Только объекты
D: число или объект
`,
rightAnswer: `A`,
explanation: `
В JavaScript существуют только примитивы и объекты. Примитивы: boolean, null, undefined, bigint, number, string и symbol. Отличием примитива от объекта является то, что примитивы не имеют свойств или методов. Тем не менее, 'foo'.toUpperCase() преобразуется в 'FOO' и не вызывает TypeError. Это происходит потому, что при попытке получения свойства или метода у примитива (например, строки), JavaScript неявно обрачивает примитив объектом, используя один из классов-оберток (например, String). Данная обертка уничтожается после вычисления выражения. Все примитивы, кроме null и undefined, ведут себя таким образом.
`
},
// 40
{
question: `
[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
        return acc.concat(cur);
    },
    [1, 2]
);
`,
answers: `
A: [0, 1, 2, 3, 1, 2]
B: [6, 1, 2]
C: [1, 2, 0, 1, 2, 3]
D: [1, 2, 6]
`,
rightAnswer: `C`,
explanation: `
[1, 2] - начальное значение, с которым инициализируется переменная acc. После первого прохода acc равняется [1, 2], а cur - [0, 1]. После конкатенации результат будет равен [1, 2, 0, 1]. Затем acc равняется [1, 2, 0, 1], а cur - [2, 3]. После объединения получаем [1, 2, 0, 1, 2, 3].
`
},
// 41
{
question: `
!!null;
!!"";
!!1;
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
// 42
{
question: `
setInterval(() => console.log("Hi"), 1000);
`,
answers: `
A: уникальный id
B: указанное количество миллисекунд
C: переданную функцию
D: undefined
`,
rightAnswer: `A`,
explanation: `
setInterval() возвращает уникальный id. Этот id может быть использован для остановки (отключения) счетчика с помощью clearInterval().
`
},
// 43
{
question: `
[..."Lydia"];
`,
answers: `
A: ["L", "y", "d", "i", "a"]
B: ["Lydia"]
C: [[], "Lydia"]
D: [["L", "y", "d", "i", "a"]]
`,
rightAnswer: `A`,
explanation: `
Строка является итерируемой сущностью. Оператор распространения преобразует строку в массив, состоящий из символов этой строки.
`
},
// 44
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
Обычные функции не могут быть остановлены после вызова. Однако генераторы можно останавливать в процессе выполнения, а затем продолжать с места остановки. Каждый раз, когда в функции-генераторе встречается ключевое слово yield, функция возвращает значение, указанное после него. Обратите внимание, что в генераторе вместо return используется yield. Сначала мы инициализируем генератор с i равным 10. Мы вызываем генератор, используя метод next(). Когда мы в первый раз вызываем генератор, i равно 10. Движок JavaScript встречает первое ключевое слово yield, возвращая значение i. После этого выполнение функции приостанавливается, и 10 выводится в консоль. Затем мы снова вызываем функцию посредством next(). Она запускается с того места, где остановилась, с i = 10. Компилятор встречает следующее ключевое слово yield и возвращает i * 2. i равно 10, поэтому он возвращает 10 * 2, то есть 20.
`
},
// 45
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
Когда мы передаем несколько промисов методу Promise.race(), он разрешает/отклоняет первый промис, который разрешается/отклоняется. В метод setTimeout мы передаем таймер: 500 мс для первого промиса (firstPromise) и 100 мс для второго (secondPromise). Это означает, что secondPromise разрешается первым со значением 'два'. res теперь содержит значение 'два', которое и выводиться в консоль.
`
},
// 46
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
Сначала мы объявляем переменную person со значением объекта, у которого имеется свойство name. Затем мы объявляем переменную с именем members. Мы устанавливаем первый элемент этого массива равным person. Объекты взаимодействуют посредством ссылок при установке их равными друг другу. Когда вы назначаете ссылку из одной переменной в другую, вы создаете копию этой ссылки (обратите внимание, что у этих переменных не одинаковые ссылки). Затем мы присваиваем переменной person значение null. Мы изменили только значение person, а не первый элемент в массиве, поскольку этот элемент имеет другую (скопированную) ссылку на объект. Первый элемент в members по-прежнему содержит ссылку на исходный объект. Когда мы выводим в консоль массив members, первый элемент содержит значение объекта, который и выводится в консоль.
`
},
// 47
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
// 48
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
Ассоциативность операторов - это порядок оценивания выражения компилятором, слева направо или справа налево. Это происходит только в том случае, если все операторы имеют одинаковый приоритет. У нас есть только один тип оператора: +. Ассоциативность - слева направо. 3 + 4 оценивается первым. Это приводит к числу 7. 7 + '5' приводит к '75' из-за приведения типов. JavaScript преобразует число 7 в строку (см. вопрос 15). Мы можем объединить две строки, используя оператор +. "7" + "5" равняется "75".
`
},
// 49
{
question: `
const num = parseInt("7*6", 10);
`,
answers: `
A: 42
B: "42"
C: 7
D: NaN
`,
rightAnswer: `C`,
explanation: `
ParseInt проверяет, являются ли символы в строке допустимыми с точки зрения используемой системы счисления (второй аргумент). Как только он встречает символ, который не является допустимым, он прекращает синтаксический анализ строки и игнорирует следующие символы. * не является допустимым числом. Поэтому parseInt прекращает разбор строки и возвращает 7.
`
},
// 50
{
question: `
[1, 2, 3].map(num => {
    if (typeof num === "number") return;
    return num * 2;
});
`,
answers: `
A: []
B: [null, null, null]
C: [undefined, undefined, undefined]
D: [ 3 x empty ]
`,
rightAnswer: `C`,
explanation: `
Метод map возвращает новый массив с обработанными каким-либо образом с помощью функции обратного вызова элементами исходного массива. В данном случае элементы исходного массива являются числами, поэтому условие if typeof num === "number" возвращает true. После этого выполнение коллбэка останавливается, в новый массив попадает значение num равное undefined.
`
},
// 51
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
Аргументы передаются значением. Если их значение является объектом, то они передаются ссылкой. birthYear передается по значению, поскольку это строка, а не объект. Когда мы передаем аргументы по значению, создается копия этого значения (см. вопрос 46). Переменная birthYear ссылается на значение "1997". Аргумент year также ссылается на значение "1997", но это не тоже самое значение, на которое ссылается birthYear. Когда мы обновляем значение year, устанавливая year равным "1998", мы обновляем только значение year. birthYear по-прежнему равняется "1997". Значение person является объектом. Аргумент member имеет (скопированную) ссылку на тот же объект. Когда мы изменяем свойство объекта, на который member ссылается, значение person также меняется, поскольку они оба ссылаются на один объект. Свойство name объекта person теперь равно значению "Lydia".
`
},
// 52
{
question: `
function greeting() {
    throw "Hello world!";
}

function sayHi() {
    try {
        const data = greeting();
        console.log("It worked!", data);
    } catch (e) {
        console.log("Oh no an error:", e);
    }
}

sayHi();
`,
answers: `
A: It worked! Hello world!
B: Oh no an error: undefined
C: SyntaxError: can only throw Error objects
D: Oh no an error: Hello world!
`,
rightAnswer: `D`,
explanation: `
С помощью оператора throw мы можем создавать собственные ошибки. С этим оператором вы можете генерировать исключения. Исключением может быть строка, число, логическое значение или объект. В данном случае исключением является строка 'Hello world'. С помощью оператора catch мы можем указать, что делать, если в блоке try возникает ошибка. Исключение: строка 'Hello world'. e теперь равно строке, которую мы записываем. Это приводит к 'Oh error: Hello world'.
`
},
// 53
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
Когда вы возвращаете свойство, значение свойства равно возвращаемому значению, а не значению, установленному в функции конструктора. Мы возвращаем строку "Maserati", поэтому значением myCar.make является "Maserati".
`
},
// 54
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
let x = y = 10; на самом деле является сокращением для:
<pre>
y = 10;
let x = y;
</pre>
Когда мы устанавливаем y равным 10, мы фактически добавляем свойство "y" к глобальному объекту (window в браузере, global в Node.js). В браузере window.y теперь равен 10. Затем мы объявляем переменную "x" со значением "y", которое равно 10. Переменные, объявленные с помощью ключевого слова let, имеют блочную область видимости, они определены только в блоке, в котором объявлены; таким блоком в данном случае является немедленно выполняемое функциональное выражение (IIFE). Когда мы используем оператор typeof, операнд "x" не определен: мы пытаемся получить доступ к "x" вне блока, в котором он объявлен. Это означает, что "x" не определен. Переменные, которым не присвоено значение, имеют значение "undefined". console.log(typeof x) возвращает "undefined". Однако мы создали глобальную переменную "y", присвоив ей значение 10. Это значение доступно в любом месте кода. "y" определена и содержит значение типа "number". console.log(typeof y) возвращает "number".
`
},
// 55
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
Мы можем удалять свойства объектов с помощью ключевого слова delete, включая прототипы. Удаленное свойство в прототипе не доступно в цепочке прототипов. В данном случае функция bark больше не доступна в прототипе после delete Dog.prototype.bark, но мы пытаемся получить к ней доступ. Когда мы пытаемся вызвать нечто, не являющееся функцией, выбрасывается TypeError. В нашем случае TypeError: pet.bark не является функцией, поскольку значением pet.bark является undefined.
`
},
// 56
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
// 57
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
Импортированный модуль доступен только для чтения: мы не можем его изменить. Это может сделать только экспортирующий модуль. Когда мы пытаемся увеличить значение myCounter, возникает ошибка: myCounter доступен только для чтения и не может быть изменен.
`
},
// 58
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
Оператор delete возвращает логическое значение: true при успешном удалении, иначе false. Однако переменные, объявленные с помощью ключевого слова var, const или let, не могут быть удалены посредством delete. Переменная name была объявлена ​​с помощью ключевого слова const, поэтому ее удаление не было успешным: возвращается false. Когда мы устанавливаем age равным 21, мы фактически добавляем свойство с именем age к глобальному объекту. Свойства объектов, включая глобальный, удалять можно, поэтому delete age возвращает true.
`
},
// 59
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
Мы можем распаковать значения из массивов или свойств из объектов путем деструктуризации. Например:<br>
[a, b] = [1, 2];<br>
Значение a теперь равно 1, а значение b - 2. Что мы на самом деле сделали в этом вопросе, так это:<br>
[y] = [1, 2, 3, 4, 5];<br>
Это означает, что значение y равно первому значению в массиве, которое является числом 1. Поэтому в консоль выводится 1.
`
},
// 60
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
Можно комбинировать объекты с помощью оператора распространения (...). Это позволяет создавать копии пар ключ/значение одного объекта и добавлять их в другой объект. В этом случае мы создаем копии объекта user и добавляем их в объект admin. Объект admin теперь содержит скопированные пары ключ/значение, что приводит к {admin: true, name: "Lydia", age: 21}.
`
},
// 61
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
С помощью метода defineProperty мы добавляем новые свойства к объекту или меняем существующие. Когда мы добавляем свойство к объекту с помощью метода defineProperty, они по умолчанию не перечисляемые. Метод Object.keys возвращает все перечисляемые свойства объекта, в данном случае только "name". Свойства, добавленные с помощью метода defineProperty, по умолчанию неизменны. Это поведение можно переопределить, используя свойства writable, configurable и enumerable. Таким образом, метод defineProperty дает вам гораздо больший контроль над свойствами, которые вы добавляете к объекту.
`
},
// 62
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
Второй аргумент JSON.stringify - это replacer. Заменитель может быть либо функцией, либо массивом, и позволяет вам контролировать, что и как должно быть преобразовано в значения. Если заменитель является массивом, только свойства, указанные в нем, будут добавлены в JSON-строку. В данном случае включаются только свойства "level" и "health", "username" исключается. data теперь равен "{"level": 19, "health": 90}". Если заменитель является функцией, она вызывается для каждого свойства объекта, который преобразуется. Значение функции будет значением свойства при добавлении в строку. Если значение равно undefined, это свойство исключается из строки.
`
},
// 63
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
Постфиксный оператор ++ сначала возвращает значение операнда, затем увеличивает его. Значение num1 равно 10, так как функция сначала возвращает значение num, которое равно 10, и только после этого увеличивает значение num. num2 - это 10, так как мы передали num1 в increasePassedNumber. number равно 10. Снова постфиксный оператор ++ сначала возвращает значение операнда, затем увеличивает его. Значение number равно 10, поэтому num2 равно 10.
`
},
// 64
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
В ES6 мы можем инициализировать параметры значением по умолчанию. Параметр будет иметь значение по умолчанию, если другое значение не было передано функции, или если значением параметра является "undefined". В данном случае мы распространяем свойства объекта value на новый объект, поэтому значение "x" по умолчанию равно {number: 10}. Аргумент по умолчанию реализуется в момент вызова. Каждый раз, когда мы вызываем функцию, создается новый объект. Мы вызываем функцию multiply первые два раза, не передавая значения: "x" имеет значение {number: 10}. Затем мы умножаем это значение на 2, получаем 20. В третий раз, когда мы вызываем multiply, мы передаем аргумент: объект value. Оператор *= на самом деле является сокращением для x.number = x.number * 2: мы меняем значение x.number, теперь оно равняется 20. В четвертый раз мы снова передаем объект value в качестве аргумента. x.number ранее был изменен на 20, поэтому x.number *= 2 равняется 40.
`
},
// 65
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
Первый агрумент метода reduce - аккумулятор, в данном случае "x". Второй аргумент - текущее значение, "y". С помощью метода reduce мы выполняем функцию обратного вызова для каждого элемента массива, что может привести к единственному значению. В этом примере мы не возвращаем значений, а просто регистрируем значения аккумулятора и текущее значение. Значение аккумулятора равно ранее возвращенному значению функции обратного вызова. Если вы не передадите необязательный аргумент initialValue методу reduce, аккумулятор будет равен первому элементу при первом вызове. При первом вызове аккумулятор (x) равен 1, а текущее значение (y) равно 2. Мы не выходим из функции, а регистрируем аккумулятор и текущее значение: 1 и 2 регистрируются. Если вы не возвращаете значение из функции, она возвращает значение undefined. При следующем вызове аккумулятор равен undefined, а текущее значение равно 3. undefined и 3 регистрируются. При четвертом вызове мы снова не возвращаем значение из функции. Аккумулятор снова равен undefined, а текущее значение равно 4: undefined и 4 выводятся в консоль.
`
},
// 66
{
question: `
class Dog {
    constructor(name) {
      this.name = name;
    }
};

class Labrador extends Dog {
    // 1
    constructor(name, size) {
        this.size = size;
    }
    // 2
    constructor(name, size) {
        super(name);
        this.size = size;
    }
    // 3
    constructor(size) {
        super(name);
        this.size = size;
    }
    // 4
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
};
`,
answers: `
A: 1
B: 2
C: 3
D: 4
`,
rightAnswer: `B`,
explanation: `
В производном классе мы не можем получить доступ к ключевому слову this до вызова super. Если попытаться это сделать, будет выброшено ReferenceError: 1 и 4 приведут к ошибке ссылки. С ключевым словом super мы вызываем конструктор родительского класса с заданными аргументами. Конструктор родителя получает аргумент name, поэтому нам нужно передать name в super. Класс Labrador получает два аргумента: name, поскольку он расширяет Dog, и size в качестве дополнительного свойства класса Labrador. Они оба должны быть переданы в функцию конструктора класса Labrador, что правильно делается с помощью конструктора 2.
`
},
// 67
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
При импорте модулей с помощью ключевого слова import, эти модули являются прераспарсенными (предварительно разобранными). Это означает, что импортированные модули запускаются первыми, код в файле, который импортирует модуль, выполняется позже. В этом разница между require() в CommonJS и import. С помощью require() вы можете загружать зависимости динамически во время выполнения кода. При использовании require вместо import в консоль будет выведено running index.js, running sum.js, 3.
`
},
// 68
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
Каждый Symbol совершенно уникален. Цель аргумента, переданного Symbol, состоит в том, чтобы дать Symbol описание. Значение Symbol не зависит от переданного аргумента. Когда мы проверяем равенство, мы создаем два совершенно новых Symbol: первый Symbol('foo') и второй Symbol('foo'). Эти два значения уникальны и не равны друг другу, Symbol('foo') === Symbol('foo') возвращает false.
`
},
// 69
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
С помощью метода padStart мы добавляем отступ в начало строки. Значение, передаваемое этому методу, представляет собой общую длину строки вместе с отступом. Строка "Lydia Hallie" имеет длину 12. name.padStart(13) вставляет 1 пробел в начале строки, потому что 12 + 1 равно 13. Если аргумент, переданный методу padStart, меньше длины строки, заполнение не выполнено.
`
},
// 70
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
// 71
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
Функция генератора "приостанавливает" выполнение, когда видит ключевое слово yield. Во-первых, мы должны позволить функции выдать строку "Ты любишь JavaScript?", что можно сделать, вызвав game.next().value. Каждая строка выполняется до тех пор, пока не встетит ключевое слово yield. В первой строке функции есть ключевое слово yield: выполнение останавливается с первым результатом. Это означает, что переменная answer еще не определена. Когда мы вызываем game.next("Да").value, предыдущий yield заменяется значением параметров, переданных функции next(), в данном случае "Да". Значение переменной answer теперь равно "Да". Условие if возвращает false, а JavaScript тоже тебя любит ❤️ выводится в консоль.
`
},
// 72
{
question: `
console.log(String.raw\`Hello\\nworld\`);
`,
answers: `
A: Hello world!
B: Hello<br>
     world
C: Hello\\nworld
D: Hello\\n<br>
     world
`,
rightAnswer: `C`,
explanation: `
String.raw возвращает строку, в которой обратные последовательности (\\n, \\v, \\t и т.д.) игнорируются. Обратная косая черта может быть проблемой, так как вы можете получить что-то вроде:<br>
const path = \`C:\\Documents\\Projects\\table.html\`
Что приведет к:<br>
"C:DocumentsProjects able.html"<br>
С String.raw управляющие символы будут проигнорированы:<br>
C:\\Documents\\Projects\\table.html
`
},
// 73
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
Асинхронная функция возвращает промис. await по-прежнему ожидает разрешения промиса: промис возвращается, когда мы вызываем getData(), чтобы установить data равным ему. Если бы мы хотели получить доступ к разрешенному значению "Я сделал это!", мы могли бы использовать метод .then() для data: data.then(res => console.log(res)). Тогда бы в консоль было выведено "Я сделал это!"
`
},
// 74
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
Метод .push() возвращает длину нового массива. Ранее массив содержал только один элемент (строку "banana") и имел длину 1. После добавления в массив строки "apple", массив содержит два элемента и имеет длину 2. Это возвращается из функции addToList. Метод push изменяет исходный массив. Если мы хотим вернуть массив, а не его длину, необходимо вернуть list после добавления item.
`
},
// 75
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
Object.freeze делает невозможным добавление, удаление или изменение свойств объекта (если только значение свойства не является другим объектом). Когда мы создаем переменную shape и устанавливаем ее равной замороженному объекту box, shape ссылается на этот объект. Вы можете проверить, заморожен ли объект, используя Object.isFrozen. В даном случае Object.isFrozen(shape) возвращает true, поскольку переменная shape имеет ссылку на замороженный объект. Поскольку shape заморожен, и поскольку значение "x" не является объектом, мы не можем менять свойство "x". "x" по-прежнему равен 10, и {x: 10, y: 20} выводится в консоль.
`
},
// 76
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
Когда мы распаковываем свойство name из правого объекта, мы присваиваем его значение "Lydia" переменной myName. С помощью {name: myName} мы сообщаем JavaScript, что хотим создать новую переменную с именем myName со значением свойства name из правой части. Поскольку мы пытаемся вывести в консоль name, переменную, которая не определена, выбрасывается ReferenceError.
`
},
// 77
{
question: `
function sum(a, b) {
    return a + b;
}
`,
answers: `
A: Да
B: Нет
`,
rightAnswer: `A`,
explanation: `
Чистая функция - это функция, которая всегда возвращает одинаковый результат для одних и тех же аргументов. Функция sum всегда возвращает один и тот же результат. Если мы передадим 1 и 2, она всегда вернет 3 без побочных эффектов. Если мы передадим 5 и 10, она всегда вернет 15 и т.д. Это определение чистой функции.
`
},
// 78
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
            return \`Рассчитано! &#36;{result}\`;
        }
    };
};

const addFunction = add();
console.log(addFunction(10));
console.log(addFunction(10));
console.log(addFunction(5 * 2));
`,
answers: `
A: Рассчитано! 20 Рассчитано! 20 Рассчитано! 20
B: Рассчитано! 20 Из кэша! 20 Рассчитано! 20
C: Рассчитано! 20 Из кэша! 20 Из кэша! 20
D: Рассчитано! 20 Из кэша! 20 Error
`,
rightAnswer: `C`,
explanation: `
Функция add является функцией запоминания (мемоизации). С помощью запоминания мы можем кэшировать результаты функции, чтобы ускорить ее выполнение. В данном случае мы создаем объект cache, в котором хранятся ранее возвращенные значения. Если мы повторно вызываем функцию addFunction с тем же аргументом, она сначала проверяет, имеется ли соответствующее значение в кэше. Если значение имеется, оно возвращается, что экономит время выполнения. Иначе, если значение в кэше отсутствует, оно вычисляется значение и сохраняется. Мы вызываем функцию addFunction три раза с одним и тем же аргументом: при первом вызове значение функции, когда num равно 10, еще не кэшировано. Условие if num in cache возвращает false, и выполняется блок else: Рассчитано! 20 выводится в консоль, и значение результата добавляется в объект cache. cache теперь выглядит как {10: 20}. При повторном вызове значение для аргумента 10 возвращается из кэша. Условие if num in cache возвращает true, а 'Из кэша! 20' выводится в консоль. В третий раз мы передаем 5 * 2 в функцию, что оценивается как 10. Объект cache содержит значение для аргумента 10. Условие if num in cache возвращает true, а 'Из кэша! 20' выводится в консоль.
`
},
// 79
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
где ключи - перечисляемые свойства. 0 1 2 3 выводится в консоль. С помощью цикла for-of мы выполняем итерацию итераций. Массив является итеративным. Когда мы выполняем итерацию по массиву, переменная "item" равна итерируемому элементу, "☕" "💻" "🍷" "🍫" выводится в консоль.
`
},
// 80
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
// 81
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
По умолчанию аргументы имеют значение undefined, если только значение не было передано функции. В данном случае мы не передаем значения для аргумента name. name равно undefined. В ES6 мы можем перезаписать значение по умолчанию undefined параметрами по умолчанию. Например: <br>
function sayHi(name = "Lydia") { ... } <br>
В этом случае, если мы не передали значение или если мы передали undefined, name всегда равно Lydia.
`
},
// 82
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
Значение ключевого слова this зависит от того, где оно используется. В методе getStatus ключевое слово this ссылается на объект, которому принадлежит метод. Метод принадлежит объекту data, поэтому this относится к объекту data. Когда мы выводим в консоль this.status, выводится свойство status объекта data, которое является "😉". С помощью метода call мы можем изменить объект, на который ссылается this. В функциях ключевое слово this относится к объекту, которому принадлежит функция. Мы объявили функцию setTimeout для объекта global, поэтому в функции setTimeout ключевое слово this ссылается на объект global. В глобальном объекте есть переменная status со значением "😎". В консоль выводится "😎".
`
},
// 83
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
Мы устанавливаем переменную city равной значению свойства city объекта person. У этого объекта нет свойства city, поэтому переменная city имеет значение undefined. Обратите внимание, что мы не ссылаемся на сам объект person. Мы просто устанавливаем переменную city равной текущему значению свойства city объекта person. Затем мы устанавливаем city равным строке "Amsterdam". Это не меняет объект person.
`
},
// 84
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
Переменные, объявленные с помощью ключевых слов const и let имеют блочную область видимости. Блок - это что угодно между фигурными скобками ({}). В данном случае в фигурных скобках операторов if/else. Вы не можете ссылаться на переменную за пределами блока, в котором она объявлена, выбрасывается ReferenceError.
`
},
// 85
{
question: `
fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res))
`,
answers: `
A: Результат метода fetch.
B: Результат второго вызова метода fetch.
C: Результат функции обратного вызова предыдущего .then().
D: Всегда будет undefined.
`,
rightAnswer: `C`,
explanation: `
Значение res во втором .then равно значению предыдущего .then. Вы можете продолжать цепочку .then: значение передается следующему обработчику.
`
},
// 86
{
question: `
function getName(name) {
    const hasName = //
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
С помощью !!name мы определяем, является ли значение name истинным или ложным. Если имя истинное, то !name возвращает false. А !false (это то, чем на самом деле является !!name) возвращает true. Устанавливая hasName равным name, вы устанавливаете hasName равным любому значению, которое вы передали функции getName, а не логическому значению true. new Boolean(true) возвращает объектную обертку, а не само логическое значение. name.length возвращает длину переданного аргумента.
`
},
// 87
{
question: `
console.log("Я хочу пиццу"[0])
`,
answers: `
A: ""
B: "Я"
C: SyntaxError
D: undefined
`,
rightAnswer: `B`,
explanation: `
Чтобы получить символ по определенному индексу в строке, вы можете использовать скобочную нотацию. Первый символ в строке имеет индекс 0 и т.д. В данном случае мы хотим получить элемент с индексом 0, символ 'Я', который выводится в консоль.
Альтернативой этому методу является метод .charAt().
`
},
// 88
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
Мы можем установить значение параметра по умолчанию равным другому параметру функции, если они были определены до параметров по умолчанию. Мы передаем значение 10 в функцию sum. Если функция sum принимает только один аргумент, это означает, что значение для num2 не передано, и в этом случае значение num1 равно переданному значению 10. Значением по умолчанию num2 является значение num1, которое равно 10. num1 + num2 возвращает 20. Если вы пытаетесь установить значение параметра по умолчанию равным параметру, который определен после (справа), то значение параметра еще не инициализировано; это приведет к ошибке.
`
},
// 89
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
С помощью import * as name мы импортируем все экспорты из файла module.js в файл index.js, создается новый объект data. В файле module.js есть два экспорта: экспорт по умолчанию и именованный экспорт. Экспорт по умолчанию - это функция, которая возвращает строку "Hello World", а именованный экспорт - это переменная name, которая имеет значение "Lydia". Объект data имеет свойство default для экспорта по умолчанию, другие свойства - именованные экспорты и соответствующие значения.
`
},
// 90
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
Классы являются синтаксическим сахаром для конструкторов функций. Эквивалентом класса Person в качестве конструктора функции будет: <br>
function Person() { this.name = name } <br>
Вызов конструктора функции с new приводит к созданию экземпляра Person, ключевое слово typeof возвращает "object" для экземпляра. typeof member возвращает "object".
`
},
// 91
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
Метод .push возвращает длину нового массива, а не сам массив. Устанавливая newList равным [1, 2, 3].push(4), мы устанавливаем newList равным 4. Затем мы пытаемся использовать метод .push для newList. Поскольку newList является числом 4, мы не можем использовать метод .push: выбрасывается TypeError.
`
},
// 92
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
Обычные функции, такие как giveLydiaPizza, имеют свойство prototype, которое является объектом (прототипом объекта) со свойством constructor. Однако стрелочные функции, такие как giveLydiaChocolate, не имеют этого свойства. Поэтому при попытке получить доступ к giveLydiaChocolate.prototype возвращается undefined.
`
},
// 93
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
Object.entries(person) возвращает массив вложенных массивов, содержащий ключи и значения: <br>
[ [ 'name', 'Lydia' ], [ 'age', 21 ] ] <br>
Используя цикл for-of мы перебираем элементы массива, в данном случае подмассивы. Мы можем деструктурировать подмассивы в цикле for, используя const [x, y]. "x" равен первому элементу в подмассиве, "y" - второму. Первым подмассивом является [ "name", "Lydia" ], где "x" равно "name", и "y" равно "Lydia". Вторым подмассивом является [ "age", 21 ], где "x" равно "age", и "y" равно 21.
`
},
// 94
{
question: `
function getItems(fruitList, ...args, favoriteFruit) {
    return [...fruitList, ...args, favoriteFruit]
}

getItems(["banana", "apple"], "pear", "orange")
`,
answers: `
A: ["banana", "apple", "pear", "orange"]
B: [["banana", "apple"], "pear", "orange"]
C: ["banana", "apple", ["pear"], "orange"]
D: SyntaxError
`,
rightAnswer: `D`,
explanation: `
...args - остальные параметры. Значение оставшихся параметров - это массив, содержащий невостребованные аргументы и в этой связи передаваемый последним. В примере остальные параметры являются вторым аргументом. Это приводит к синтаксической ошибке.
<pre>
function getItems(fruitList, favoriteFruit, ...args) {
  return [...fruitList, ...args, favoriteFruit]
}
getItems(["banana", "apple"], "pear", "orange")
</pre>
Данный код работает. Он возвращает массив [ 'banana', 'apple', 'orange', 'pear' ].
`
},
// 95
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
В JavaScript мы не должны явно указывать точку с запятой (;), однако движок JavaScript автоматически добавляет их после операторов. Например, оператором могут быть переменные или ключевые слова, такие как throw, return, break и т.д. Здесь мы написали инструкцию return и другое значение a + b в новой строке. Однако, поскольку это новая строка, движок не знает, что это на самом деле значение, которое мы хотим вернуть. Вместо этого он автоматически добавляет точку с запятой после return. Это выглядит так:
<pre>
return;
a + b
</pre>
Это означает, что a + b никогда не достигается, так как функция перестает выполняться после ключевого слова return. Если значение не возвращается, как здесь, функция возвращает значение undefined. Обратите внимание, что после операторов if / else точки с запятой автоматически не добавляются.
`
},
// 96
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
Мы можем установить классы равными другим классам/конструкторам функций. В данном случае мы устанавливаем Person равным AnotherPerson. Свойство name этого конструктора - Sarah, поэтому свойство name для нового экземпляра класса Person member - это Sarah.
`
},
// 97
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
Symbol не является перечисляемый. Метод Object.keys возвращает все перечисляемые ключи объекта. Symbol не просматривается таким образом, и возвращается пустой массив. При выводе в консоль всего объекта будут видны все свойства, даже не перечисляемые. Это одно из многих качеств символа: помимо представления совершенно уникального значения (которое предотвращает случайное пересечение имен в объектах, например, при работе с 2 библиотеками, которые хотят добавить свойства к одному и тому же объекту), вы также можете "скрыть" свойства объектов таким образом (хотя и не полностью. Вы можете получить доступ к символам, используя метод Object.getOwnPropertySymbols()).
`
},
// 98
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
Функция getList получает массив в качестве аргумента. Между скобками функции getList мы деструктурируем этот массив. Это выглядит так: <br>
[x, ...y] = [1, 2, 3, 4] <br>
С помощью остальных параметров (...y) мы помещаем все "оставшиеся" аргументы в массив. Остальные аргументы - это 2, 3 и 4. Значение "y" является массивом, содержащим остальные параметры. В данном случае значение "x" равно 1, поэтому, мы видим в консоли [x, y], [1, [2, 3, 4]]. Функция getUser получает объект. В случае стрелочных функций мы можем обойтись без фигурных скобок, если мы возвращаем одно значение. Однако, если мы хотим вернуть объект из стрелочной функции, то должны указать его в скобках, в противном случае никакое значение не будет возвращено. Следующая функция вернула бы объект: <br>
const getUser = user => ({ name: user.name, age: user.age }) <br>
Поскольку значение не возвращается, функция возвращает undefined.
`
},
// 99
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
Переменная name содержит значение строки, которая не является функцией, поэтому не может вызываться. Ошибки типа возникают, когда значение не соответствует ожидаемому типу. JavaScript ожидал, что name будет функцией, так как мы пытаемся ее вызвать. Однако name является строкой, поэтому выбрасывается TypeError: name is not a function. Синтаксические ошибки генерируются, когда вы написали нечто недопустимое с точки зрения JavaScript, например, когда вы написали слово return как retrun. Ошибки ссылок генерируются, когда JavaScript не может найти ссылку на значение, к которому вы обращаетесь.
`
},
// 100
{
question: `
const output = \`&#36;{[] && 'Не'}возможно!
Вам &#36;{'' && 'не'}следует обратиться (обращаться) к врачу после такого количества JavaScript lol\`
`,
answers: `
A: возможно! Вам следует обратиться к врачу после такого количества JavaScript lol
B: Невозможно! Вам следует обратиться к врачу после такого количества JavaScript lol
C: возможно! Вам не следует обращаться к врачу после такого количества JavaScript lol
D: Impossible! Вам не следует обращаться к врачу после такого количества JavaScript lol
`,
rightAnswer: `B`,
explanation: `
[] - истинное значение. Оператор && вернет правое значение, если левое значение является истинным. В данном случае левое значение [] является истинным, поэтому возвращается 'Не'. "" - ложное значение. Если левое значение ложно, ничего не возвращается. n't не возвращается.
`
},
// 101
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
Оператор || возвращает первый истинный операнд. Если все значения ложны, возвращается последний операнд. (false || {} || null): пустой объект {} является истинным значением. Это первое (и единственное) истинное значение, которое возвращается. one равно {}. (null || false ||" "): все операнды являются ложными значениями. Это означает, что возвращается последний операнд "". two равно "". ([] || 0 ||" "): пустой массив [] является истинным значением. Это первое истинное значение, которое возвращается. three равно [].
`
},
// 102
{
question: `
const myPromise = () => Promise.resolve('I have resolved!')

function firstFunction() {
  myPromise().then(res => console.log(res))
  console.log('second')
}

async function secondFunction() {
  console.log(await myPromise())
  console.log('second')
}

firstFunction()
secondFunction()
`,
answers: `
A: I have resolved!, second and I have resolved!, second
B: second, I have resolved! and second, I have resolved!
C: I have resolved!, second and second, I have resolved!
D: second, I have resolved! and I have resolved!, second
`,
rightAnswer: `D`,
explanation: `
С промисами дело обстоит следующим образом: "Я хочу отложить выполнение этой функции, поскольку это может занять некоторое время". Только когда определенное значение разрешено (или отклонено), и когда стек вызовов пуст, я хочу получить это значение. Мы можем получить это значение с помощью ключевого слова .then и await в асинхронной функции. Хотя мы можем получить значение промиса с помощью .then и await, они работают по-разному. В firstFunction мы (вроде бы) приостановили выполнение функции myPromise, и продолжили выполнение другого кода, в данном случае console.log('second'). Затем функция разрешается строкой I have resolved, которая выводится в консоль после освобождения стека вызовов. С помощью ключевого слова await в secondFunction, мы приостанавливаем выполнение асинхронной функции до тех пор, пока значение не будет разрешено. Это означает, что мы ожидаем разрешения myPromise со значением I have resolved, и только когда это произошло, мы переходим к следующей строке: second выводится в консоль последней.
`
},
// 103
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
// 104
{
question: `
Promise.resolve(5)
`,
answers: `
A: 5
B: Promise {<pending>: 5}
C: Promise {<resolved>: 5}
D: Error
`,
rightAnswer: `C`,
explanation: `
Мы можем передать любой тип в Promise.resolve. Сам метод возвращает промис с разрешенным значением. Если мы передадим обычную функцию, промис разрешится с обычным значением. Если мы передадим промис, промис разрешится с разрешенным значением переданного промиса. В данном случае мы передаем число 5. Возвращается разрешенный промис со значением 5.
`
},
// 105
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
Объекты передаются по ссылке. Когда мы проверяем объекты на строгое равенство (===), мы сравниваем их ссылки. Мы устанавливаем значение по умолчанию для person2, равное объекту person, и передаем объект person в качестве значения для person1. Это означает, что оба значения имеют ссылку на одно и то же место в памяти, поэтому они равны. Блок кода в операторе else запускается, и в консоль выводится Одинаковые!.
`
},
// 106
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
В JavaScript у нас есть два способа получить доступ к свойствам объекта: скобочная нотация или точечная нотация. В данном случае мы используем точечную нотацию (colorConfig.colors) вместо скобочной (colorConfig["colors"]). При точечной нотации JavaScript пытается найти свойство объекта с указанным именем. В этом примере JavaScript пытается найти свойство colors в объекте colorConfig. Не существует такого свойства, поэтому возвращается undefined. Затем мы пытаемся получить доступ к значению первого элемента, используя [1]. Мы не можем сделать этого для undefined, поэтому выбрасывается TypeError: Cannot read property '1' of undefined. JavaScript интерпретирует (или распаковывает) операторы. Когда мы используем скобочную нотацию, он видит открывающуюся скобку [ и продолжает работать, пока не найдет закрывающуюся скобку ]. Только тогда он оценивает выражение. Если бы мы использовали colorConfig[colors[1]], то вернулось бы значение свойства red объекта colorConfig.
`
},
// 107
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
// 108
{
question: `
const emojis = ['✨', '😎', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '😎')
emojis.find(x => x !== '😍')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨') 
emojis.splice(1, 2, '✨')
`,
answers: `
A: все
B: map reduce slice splice
C: map slice splice
D: splice
`,
rightAnswer: `D`,
explanation: `
Используя метод splice, мы модифицируем исходный массив, удаляя, заменяя или добавляя элементы. Мы удалили 2 элемента с первого по второй индексы (мы удалили '😎' и '😍') и добавили ✨. map, filter и slice возвращают новый массив, find возвращает элемент, а reduce возвращает аккумулированное значение.
`
},
// 109
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
// 110
{
question: `
JSON.parse()
`,
answers: `
A: Разбирает JSON в значение JavaScript
B: Разбирает объект JavaScript в JSON
C: Разбирает любое значение JavaScript в JSON
D: Разбирает JSON непосредственно в объект JavaScript
`,
rightAnswer: `A`,
explanation: `
С помощью метода JSON.parse() мы можем разобрать строку JSON в значение JavaScript.
<pre>
// Преобразование числа в допустимый JSON,
// затем преобразование строки JSON в значение JavaScript:
const jsonNumber = JSON.stringify(4) // '4'
JSON.parse(jsonNumber) // 4

// Преобразование массива в допустимый JSON,
// затем преобразование строки JSON в значение JavaScript:
const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
JSON.parse(jsonArray) // [1, 2, 3]

// Преобразование объекта в допустимый JSON,
// затем преобразование строки JSON в значение JavaScript:
const jsonArray = JSON.stringify({ name: "Lydia" }) // '{"name":"Lydia"}'
JSON.parse(jsonArray) // { name: 'Lydia' }
</pre>
`
},
// 111
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
Каждая функция имеет собственный контекст выполнения (или область видимости). Функция getName сначала ищет переменную name в собственном контексте (области видимости). Функция getName содержит собственную переменную name: мы объявляем переменную name с помощью ключевого слова let и присваиваем ей значение 'Sarah'. Переменные, объявленные с помощью ключевого слова let (и const) не поднимаются в начало функции, в отличие от переменных, объявленных с помощью var. Они недоступны до инициализации. Это называется "временной мертвой зоной". Когда мы пытаемся получить доступ к таким переменным, JavaScript выбрасывает ReferenceError. Если бы мы не объявили переменную name в функции getName, движок JavaScript продолжал бы поиск переменной вверх по цепочке областей видимости. Внешняя область видимости содержит переменную name со значением Lydia. В этом случае в консоль было бы выведено "Lydia".
`
},
// 112
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
С помощью ключевого слова yield мы получаем значения в функции-генератора. С помощью yield* мы можем получить значение из другой функции-генератора или итерируемого объекта (например, массива). В generatorOne мы получаем весь массив [' a ',' b ',' c '], используя yield. Значение свойства value, возвращаемого методом next объекта one (one.next().value), равно массиву ['a', 'b', 'c'].
<pre>
console.log(one.next().value) // ['a', 'b', 'c']
console.log(one.next().value) // undefined
</pre>
В функции generatorTwo мы используем ключевое слово yield*. Это означает, что первое значение равно первому значению итератора. Итератор - это массив ['a', 'b', 'c']. Первым значением является a, поэтому когда мы вызываем two.next().value, возвращается a.
<pre>
console.log(two.next().value) // 'a'
console.log(two.next().value) // 'b'
console.log(two.next().value) // 'c'
console.log(two.next().value) // undefined
</pre>
`
},
// 113
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
Выражения внутри шаблонных литералов оцениваются первыми. Это означает, что строка будет содержать значение выражения, в данном случае значение немедленно выполняемого функционального выражения (x => x)('I love'). Мы передаем значение 'Я люблю' в качестве аргумента стрелочной функции x => x. "x" равно 'Я люблю', что и возвращается. Это приводит к Я люблю писать код.
`
},
// 114
{
question: `
let config = {
    alert: setInterval(() => {
      console.log('Alert!')
    }, 1000)
}

config = null
`,
answers: `
A: setInterval не сработает
B: setInterval будет вызван один раз
C: setInterval будет вызываться каждую секунду
D: Мы не сможем вызвать config.alert(), поскольку config = null
`,
rightAnswer: `C`,
explanation: `
Обычно, когда мы устанавливаем объекты равными null, эти объекты подлежат удалению сборщиком мусора, так как больше нет ссылок на такой объект. Однако, поскольку функция обратного вызова в setInterval является стрелочной (привязанной к объекту config), она все еще содержит ссылку на объект config. Пока есть ссылка, объект не будет удален. Поскольку сборщик мусора не отрабатывает, функция обратного вызова будет вызываться каждую секунду.
`
},
// 115
{
question: `
const myMap = new Map()
const myFunc = () => 'greeting'

myMap.set(myFunc, 'Hello world!')

//1
myMap.get('greeting')
//2
myMap.get(myFunc)
//3
myMap.get(() => 'greeting')
`,
answers: `
A: 1
B: 2
C: 2 и 3
D: все
`,
rightAnswer: `B`,
explanation: `
При добавлении пары ключ/значение с помощью метода set имя ключа будет равно первому аргументу, переданному set, а значение - второму аргументу. В данном случае ключом является функция () => 'greeting', а значением 'Hello world'. myMap теперь это { () => 'greeting' => 'Hello world!' }. 1 неверно, поскольку ключ не 'greeting', а () => 'greeting'. 3 неверно, так как мы создаем новую функцию, передавая ее в качестве параметра методу get. Объект взаимодействует со ссылкой. Функции - это объекты, поэтому две функции никогда не бывают строго равными, даже если они идентичны: они имеют ссылки на разные места в памяти.
`
},
// 116
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
Функции changeAge и changeAgeAndName имеют параметры по умолчанию, а именно: вновь созданный объект { ...person }. Этот объект имеет копии всех ключей/значений объекта person. Сначала мы вызываем функцию changeAge и передаем ей объект person в качестве аргумента. Эта функция увеличивает значение свойства age на 1. person теперь {name: "Lydia", age: 22}. Затем мы вызываем функцию changeAgeAndName без аргументов. Вместо этого значение "x" равно новому объекту: { ...person }. Поскольку это новый объект, он не влияет на значения свойств объекта person. person по-прежнему равен {name: "Lydia", age: 22}.
`
},
// 117
{
question: `
function sumValues(x, y, z) {
    return x + y + z;
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
С помощью оператора распространения (...) мы разбиваем итерируемые сущности на отдельные элементы. Функция sumValues принимает три аргумента: x, y и z. Для того, чтобы эта функция вернула 6, ей в качестве аргумента необходимо передать ...[1, 2, 3].
`
},
// 118
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
С помощью оператора += мы увеличиваем значение num на 1. Начальным значением num является 1, 1 + 1 будет 2. Элементом со вторым индексом является "c", поэтому в консоль будет выведено "c".
`
},
// 119
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
Благодаря оператору опциональной цепочки ?. нам больше не нужно проверять глубоко вложенные значения на валидность. Если мы попытаемся получить доступ к свойству значения undefined или null, выражение вернет undefined. person.pet?.name: person имеет свойство pet; pet имеет свойство name, возвращается Mara. person.pet?.family?.name: person имеет свойство pet; pet не имеет свойства family; person.pet?.family является нулевым, возвращается undefined. person.getFullName?.(): person имеет метод getFullName, возвращается Lydia Hallie. member.getLastName?.(): member не определена; member.getLastName является нулевым, возвращается undefined.
`
},
// 120
{
question: `
const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('We have to buy bananas!');
} else {
  console.log('We don't have to buy bananas!');
}
`,
answers: `
A: We have to buy bananas!
B: We don't have to buy bananas!
C: undefined
D: 1
`,
rightAnswer: `B`,
explanation: `
Условие groceries.indexOf('banana') возвращает 0, который является ложным значением. Поскольку условие ложное, выполняется блок else, и мы получаем We don't have to buy bananas!
`
},
// 121
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
Метод language - это сеттер. Сеттеры не имеют собственных значений, их задача - модифицировать свойства. Поэтому вызов сеттера возвращает undefined.
`
},
// 122
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
typeof name возвращает "string". "string" - это истинное значение, поэтому !typeof name равняется false. false === 'object' и false === 'string' возвращают false (если мы хотим сравнить типы значений вместо !typeof следует использовать !==).
`
},
// 123
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
Функция add возвращает стрелочную функцию, которая возвращает стрелочную функцию, которая возвращает стрелочную функцию (вы еще здесь?). Первая функция принимает аргумент x со значением 4. Мы вызываем вторую функцию с аргументом y со значением 5. Затем мы вызываем третью функцию с аргументом z со значением 6. Когда мы пытаемся получить доступ к значениям x и y, движок JavaScript поднимается по цепочке областей видимости в поисках соответствующих значений. Возвращается 4 5 6. 
`
},
// 124
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
Функция-генератор range возвращает асинхронный объект с промисами для каждого переданного значения: Promise{1}, Promise{2}, Promise{3}. Мы присваиваем переменной gen этот объект, и передираем его элементы с помощью цикла for await/of. Мы устанавливаем значение переменной item равным значению промиса. Поскольку мы ожидаем значения item, разрешения промиса, получаем 1, 2, 3.
`
},
// 125
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
myFunc в качестве аргумента ожидает получить объект со свойствами x, y и z. Поскольку мы передаем ей 1, 2, 3, а не {x: 1, y: 2, z: 3}, то возвращается значение x, y и z по умолчанию - undefined.
`
},
// 126
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
С помощью метода Intl.NumberFormat мы можем форматировать числовые значению в любую локаль. Мы форматируем число 130 в локаль en-US как unit со значением mile-per-hour, что возвращает 130 mph. Число 300 в локали en-US со свойством currency и значением USD возвращает $300.00.
`
},
// 127
{
question: `
const spookyItems = ['👻', '🎃', '🕸'];
({ item: spookyItems[3] } = { item: '💀' });

console.log(spookyItems);
`,
answers: `
A: ["👻", "🎃", "🕸"]
B: ["👻", "🎃", "🕸", "💀"]
C: ["👻", "🎃", "🕸", { item: "💀" }]
D: ["👻", "🎃", "🕸", "[object Object]"]
`,
rightAnswer: `B`,
explanation: `
Деструктурируя объекты, мы распаковываем значения правого объекта и присваиваем это значение одноименному свойству левого объекта. В данном случае, мы присваиваем значение "💀" spookyItems[3]. Это означает, что мы модифицируем массив spookyItems, добавляя в него "💀". Поэтому мы получаем ["👻", "🎃", "🕸", "💀"].
`
},
// 128
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
С помощью метода Number.isNaN мы можем проверить, является ли переданное значение числовым и равняется ли оно NaN. name не является числовым значением, поэтому Number.isNaN(name) возвращает false. age является числовым значением, но не равняется NaN, поэтому Number.isNaN(age) также возвращает false. С помощью метода isNaN мы можем проверить, что переданное значение не является числом. Значение name не является числом, поэтому isNaN(name) возвращает true. Значение age является числом, поэтому isNaN(age) возвращает false.
`
},
// 129
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
Переменные, объявленные с помощью ключевого слова const недоступны до инициализации: это называется временной мертвой зоной. В функции getInfo Областью видимости переменной randomValue является функция getInfo. Когда мы пытаемся вывести значение randomValue в консоль, она еще не инициализирована: выбрасывается ReferenceError! Движок не спускается вниз по цепочке областей видимости, поскольку мы объявили переменную randomValue в функции getInfo.
`
},
// 130
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
// 131
{
question: `
const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));
`,
answers: `
A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
B: ['🥑', '✨', '✨', ['🍕', '🍕']]
C: ['🥑', ['✨', '✨', '🍕', '🍕']]
D: ['🥑', '✨', '✨', '🍕', '🍕']
`,
rightAnswer: `B`,
explanation: `
С помощью метода flat мы можем создать новый "сплющенный" массив. Глубина этого массива зависит от передаваемого значения. В данном случае мы передаем значение 1 (чего мы могли бы не делать, поскольку это является значением по умолчанию), значит, будуд объединены только массивы певрого уровня вложенности. ['🥑'] и ['✨', '✨', ['🍕', '🍕']] в данном случае. Результатом объединения этих массивов является ['🥑', '✨', '✨', ['🍕', '🍕']].
`
},
// 132
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
counterOne является экземпляром класса Counter. Класс Counter содержит свойства count в конструкторе и метод increment. Сначала мы дважды вызываем метод increment с помощью counterOne.increment(). Таким образом, значением counterOne.count становится 2. Затем мы создаем новую переменную counterTwo и присваиваем ей значение counterOne. Поскольку объекты взаимодействуют через ссылки, мы просто создали новую ссылку на тоже самое место в памяти, на которое указывает counterOne. Поскольку обе переменные имеют ссылаются на одно и тоже место в памяти, любые изменения объекта, на который ссылается counterTwo также влияют на counterOne. Таким образом, значением counterTwo является 2. Мы вызываем counterTwo.increment(), который увеличивает значение count до 3. Наконец, мы выводит в консоль значение counterOne.count, которое также равняется 3.
`
},
// 133
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
Сначала мы вызываем funcOne. На первой строке этой функции мы вызываем промис myPromise, который является асинхронной операцией. Пока движок занят выполнением промиса, выполнение функции myFunc продолжается. Следующей строкой является асинхронная функция setTimeout, функция обратного вызова которой отправляется в Web API. Промис и задержка являются асинхронными, поэтому выполнение функции не дожидается выполнения промиса и обработки setTimeout. Это означает, что сначала в консоль выводится Last line!, поскольку console.log не асинхронная операция. Это последняя строка кода myFunc, промис разрешается и в консоль выводится Promise! Тем не менее, в момент вызова funcTwo стек вызовов не пуст, поэтому функция обратного вызова setTimeout не может туда попасть. В funcTwo мы сначала ожидаем выполнение промиса myPromise. С помощью ключевого слова await мы приостанавливаем выполнение функции до разрешения (или отклонения) промиса. Затем мы выводим в консоль ожидаемое значение res (поскольку промис возвращает промис). В консоль выводится Promise! На следуюей строке у нас снова асинхронная функция setTimeout, чей коллбэк отправляется в Web API. Мы достигаем последней строки funcTwo, в консоль выводится Last line! С того момента, как funcTwo удаляется из стека, он оказывается пустым. Ожидающие этого в очереди задач коллбэки (() => console.log("Timeout!") из funcOne и () => console.log("Timeout!") из funcTwo) помещаются в стек одна за другой. Первый коллбэк выводит в консоль Timeout! и покидает стек, затем тоже самое происходит со вторым коллбэком. Таким образом, мы получаем Last line! Promise! Promise! Last line! Timeout! Timeout!
`
},
// 134
{
question: `
// sum.js
export default function sum(x) {
  return x + x;
}

// index.js
import * as sum from './sum';
`,
answers: `
A: sum(4)
B: sum.sum(4)
C: sum.default(4)
D: символ * может использоваться только в именованном экспорте, а не в экспорте по умолчанию
`,
rightAnswer: `C`,
explanation: `
С помощью символа * мы импортируем все экспортируемые значения из файла, как дефолтные, так и именованные. Если у нас есть такой файл:
<pre>
// info.js
export const name = 'Lydia';
export const age = 21;
export default 'I love JavaScript';

// index.js
import * as info from './info';
console.log(info);
</pre>
В консоль будет выведено:
<pre>
{
    default: "I love JavaScript",
    name: "Lydia",
    age: 21
}
</pre>
В нашем случае импортированное значение sum выглядит примерно так: <br>
{ default: function sum(x) { return x + x } } <br>
Мы можем вызвать данную функцию посредством sum.default.
`
},
// 135
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
С помощью прокси-объекта мы можем добавить объекту, передаваемому в качестве второго аргумента, определенное поведение. В данном случае мы передаем объект handler, который имеет два свойства: set и get. set вызывается при установке значений, а get - при их получении. Первый аргумент прокси - пустой объект {}, который является значением person. Поведение этого объекта определено в объекте handler. При добавлении свойства объекту person вызывается set. При получении доступа к свойству person вызывается get. Сначала мы добавляем прокси-объекту новое свойство name. Вызывается set и в консоль выводится Added a new property! Затем мы получаем значение свойства name. Вызывается get и в консоль выводится Accessed a property!
`
},
// 136
{
question: `
const person = { name: 'Lydia Hallie' };

Object.seal(person);
`,
answers: `
A: person.name = "Evan Bacon"
B: person.age = 21
C: delete person.name
D: Object.assign(person, { age: 21 })
`,
rightAnswer: `А`,
explanation: `
С помощью метода Object.seal мы защищаем объект от добавления новых свойств, а также от удаления существующих свойств. Тем не менее, мы все еще может менять значения существующих свойств.
`
},
// 137
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
Метод Object.freeze "замораживает" объект. Свойства не могут добавляться, изменяться или удаляться. Тем не менее, объект замораживается поверхностно. Это означает, что свойства первого уровня вложенности заморожены. Однако в случае когда таким свойством является объект, в данном случае address, свойства этого объекта не являются замороженными и их можно изменять.
`
},
// 138
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
Сначала мы вызываем myFunc без аргументов. Поэтому аргументам присваиваются значения по умолчанию, num - 2, а value - значение функции add. Мы передаем функции add значение num в качестве аргумента, которое равняется 2. add возвращает 4, что является значением value. Затем мы вызываем myFunc с аргументом 3, которое присваивается num. Поскольку мы не присваиваем значения value, его значением вновь становится значение add. Мы передаем add значение 3, она возвращает 6, что является значением value.
`
},
// 139
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
В ES2020 мы можем добавлять классам приватные переменные с помощью #. Мы не можем получить доступ к таким переменным за пределами класса. Поэтому когда мы пытается вевести в консоль значение counter.#number, выбрасывается SyntaxError.
`
},
// 140
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
        // ✨ здесь что-то пропущено ✨
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
Для того, чтобы перебрать members в каждом элементе массива items, нам необходимо передать teams[i].members в функцию-генератор getMembers. Генератор возвращает объект. Для того, чтобы перебрать элементы этого объекта следует использовать yield*. Если мы не укажем yield, return yield или return, внутренняя функция-генератор не будет возвращена при первом вызове метода next.
`
},
// 141
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
Функция addHobby принимает два аргумента, hobby и hobbies с дефолтным значением массива hobbies объекта person. Сначала мы вызываем функцию addHobby и передаем ей "running" в качестве значения для hobby и пустой массив в качестве значения для hobbies. Поскольку мы передали пустой массив в качестве значения для hobbies, в него добавляется "running". Затем мы вызываем addHobby и передаем ей "dancing" в качестве значения для hobby. Мы не передаем значения для hobbies, поэтому он получает значение по умолчанию, значение свойства hobbies объекта person. Мы добавляем в этот массив "dancing". Наконец, мы вызываем addHobby и передаем ей "baking" в качестве значения для hobby и массив person.hobbies в качестве значения для hobbies. Мы добавляем в массив person.hobbies "baking". После добавления dancing и baking значением person.hoobies является ["coding", "dancing", "baking"].
`
},
// 142
{
question: `
class Bird {
    constructor() {
        console.log("I'm a bird. 🦢");
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
B: I'm pink. 🌸 I'm a bird. 🦢
C: I'm a bird. 🦢 I'm pink. 🌸
D: Ничего, мы не вызываем ни один метод
`,
rightAnswer: `B`,
explanation: `
Мы создаем переменную pet, которая является экземпляром класса Flamingo. При создании экземпляра вызывается конструктор Flamingo. В консоль выводится "I'm pink. 🌸", после чего вызывается super. super вызывает конструктор родительского класса Bird. В консоль выводится I'm a bird. 🦢.
`
},
// 143
{
question: `
const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;
`,
answers: `
A: 1
B: 1 and 2
C: 3 and 4
D: 3
`,
rightAnswer: `D`,
explanation: `
Ключевое слово const означает, что мы не можем менять значение переменной, такая переменная доступна только для чтения. Тем не менее, значения сами по себе не являются неизменяемыми. Элементы массива emojis можно менять, например, добавляя новые значения, извлекая существующие, или устанавливая значение длины массива равной 0.
`
},
// 144
{
question: `
const person = {
    name: "Lydia Hallie",
    age: 21
}

[...person] // ["Lydia Hallie", 21]
`,
answers: `
A: Ничего, объекты являются итерируемыми по умолчанию
B: *[Symbol.iterator]() { for (let x in this) yield* this[x] }
C: *[Symbol.iterator]() { yield* Object.values(this) }
D: *[Symbol.iterator]() { for (let x in this) yield this }
`,
rightAnswer: `C`,
explanation: `
Объекты не являются итерируемыми по умолчанию. В итерируемых сущностях имеется протокол итератора. Мы можем сделать это вручную, добавив символ итератора [Symbol.iterator], который будет возвращать объект-генератор, например, сделав исходный объект функцией-генератором *[Symbol.iterator]() {}. Эта функция-генератор должна перебирать Object.values объекта person, если мы хотим вернуть массив ["Lydia Hallie", 21]: yield* Object.values(this).
`
},
// 145
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
Условие if в цикле forEach провеяет, является ли значение num истинным. Поскольку первым значением num является 0, который является ложным значением, код в блоке if не выполняется. Остальные значения num (1, 2, 3) являются истинными поэтому counter увеличивается на 1 три раза. В результате значением counter является 3.
`
},
// 146
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
? позволяет нам получать опциональный доступ к глубоко вложенным свойствам объектов. Мы пытаемся вывести в консоль элемент с индексом 1 подмассива с индексом 1 массива fruits. Если подмассив с индексом 1 в массиве fruits не существует, возвращается undefined. Если подмассив с индексом 1 в массиве fruits существует, но не имеет элемента с индексом 1, также возвращается undefined. Сначала мы пытаемся вести в консоль второй элемент подмассива ['🍍'] массива [['🍊', '🍌'], ['🍍']]]. Этот подмассив состоит из одного элемента, т.е. элемента с индексом 1 не существует, поэтому возвращается undefined. Затем мы вызываем функцию getFruits без аргументов, поэтому массив fruits имеет значение undefined по умолчанию. Наконец, мы пытаемся вывести в консоль второй элемент подмассива ['🍊', '🍌'] массива ['🍍'], ['🍊', '🍌']. Элементом с индексом 1 этого подмассива является 🍌, который и выводится в консоль.
`
},
// 147
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
Мы присваиваем переменной calc значение нового экземпляра класса Calc. Затем мы инициализируем новый экземпляр класса Calc и вызываем метод increase этого экземпляра. Поскольку свойство count находится в конструкторе класса Calc, данное свойство не является общим для прототипа Calc. Это означает, что свойство count не обновляется для экземпляра calc, оно по-прежнему равно 0.
`
},
// 148
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
Функция updateUser обновляет свойства email и password объекта user, если их значения переданы в качестве аргументов, после чего функция возвращает объект user. Значение, которое вернула функция updateUser, это объект user. Это означает, что переменная updatedUser ссылается на тот же объект user, на который ссылается сам user. Поэтому updatedUser === user равняется true.
`
},
// 149
{
question: `
const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')
`,
answers: `
A: ['🍌', '🍊', '🍎']
B: ['🍊', '🍎']
C: ['🍇', '🍊', '🍎']
D: ['🍇', '🍌', '🍊', '🍎']
`,
rightAnswer: `C`,
explanation: `
Сначала мы вызываем метод slice массива fruit. Данный метод не модифицирует исходный массив, но возвращает извлеченное значение: эмодзи банана. Затем мы вызываем метод splice массива fruit. Данный метод также не модифицирует исходный массив, массив fruit состоит из ['🍊', '🍎']. Наконец, мы вызываем метод unshift массива fruit, который модифицирует исходный массив, добавляя передаваемое значение, '🍇' в данном случае, в качестве первого элемента массива. Массив fruit теперь состоит из ['🍇', '🍊', '🍎'].
`
},
// 150
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
Ключи объекта конвертируются в строки. Поскольку значением dog является объект, animals[dog] на самом деле означает, что мы создаем новое свойство с именем "object Object", значением которого является новый объект. animals["object Object"] равняется { emoji: "🐶", name: "Mara"}. Значением cat также является объект. Это означает, что мы презаписываем свойство animals["object Object"] новым значением. Поэтому когда мы выводим в консоль animals[dog], мы выводим animals["object Object"], поэтому выводится { emoji: "🐈", name: "Sara" }.
`
},
// 151
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
Функция updateEmail является стрелочной, поэтому она не привязана к объекту user. Это означает, что ключевое слово this не ссылается на объект user, в данном случае оно ссылается на глобальную область видимости. Значение свойства email объекта user не обновляется. Поэтому, когда мы выводим в консоль значение user.email, выводится оригинальное значение my@email.com.
`
},
// 152
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
Метод Promise.all выполняет переданные ему промисы одновременно. Если один из промисов отклоняется, Promise.all также отклоняется со значением отклоненного промиса. В данном случае promise3 отклоняется со значением "Third". Мы перезватываем отклоненное значение в методе catch вызова функции runPromises. Поэтому в консоль выводится только "Third".
`
},
// 153
{
question: `
const keys = ["name", "age"]
const values = ["Lydia", 22]

const method = /* ?? */
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
Метод fromEntries преобразует двумерный массив в объект. Первый элемент каждого подмассива становится ключом, а второй элемент - значением. В данном случае мы перебираем элементы массива keys, возвращая массив, первым элементом которого является элемент массива keys с текущим индексом, вторым элементом - элемент массива values с текущим индексом. Это создает массив массивов с правильными ключами и значениями, которые преобразуются в { name: "Lydia", age: 22 }.
`
},
// 154
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
Значением address по умолчанию является пустой объект {}. Когда мы присваиваем переменной member значение функции createMember, мы не передаем значение для address, поэтому значением address становится {}. Пустой объект - это истинное значение, поэтому условие address ? address : null возвращает true. Значением address является {}.
`
},
// 155
{
question: `
let randomValue = { name: "Lydia" }
randomValue = 23

if (!typeof randomValue === "string") {
	console.log("It's not a string!")
} else {
	console.log("Yay it's a string!")
}
`,
answers: `
A: It's not a string!
B: Yay it's a string!
C: TypeError
D: undefined
`,
rightAnswer: `B`,
explanation: `
Условие if проверяет является ли !typeof random value строкой. Оператор ! преобразует значение в булев тип данных. Если значение истинно, возвращается false, если ложно - true. В данном случае значением typeof randomValue является "number", что есть истина, поэтому возвращается false. !typeof randomValue === "string" возвращает false, поскольку на самом деле мы проверяем false === "string". Условие возвращает false, поэтому выполняется код в блоке else и в консоль выводится Yay it's a string!
`
},
]

export default assets