# Что за черт, JavaScript?

[На главную](../README.md)

<p>Оригинал: <a href="http://denysdovhan.com/">Denys Dovhan</a> - <a href="https://github.com/denysdovhan/wtfjs">What the f*ck JavaScript?</a></p>

<p><small>Список забавных и сложных примеров работы JavaScript</small></p>

<p>JavaScript - великий язык. Он имеет простой синтаксис, большую экосистему и, что важнее всего, замечательное сообщество.</p>

<p>В тоже время, все мы знаем, что JS - это язык со множеством любопытных нюансов. Некоторые из них могут быстро превратить нашу повседневную работу в сущий кошмар, другие - могут заставить нас громко смеяться.</p>

<details>
    <summary>Оглавление</summary>
    <nav>
        <ul>
            <li><a href="#1">Цель списка</a></li>
            <li><a href="#2">Используемые обозначения</a></li>
            <li><a href="#3">Примеры</a>
                <ul>
                    <li><a href="#4">
                        [] равно ![]
                    </a></li>
                    <li><a href="#5">
                        true не равно ![], но также не равно []
                    </a></li>
                    <li><a href="#6">
                        true - это false
                    </a></li>
                    <li><a href="#7">
                        baNaNa
                    </a></li>
                    <li><a href="#8">
                        NaN это не NaN
                    </a></li>
                    <li><a href="#9">
                        Это равняется fail
                    </a></li>
                    <li><a href="#10">
                        [] является инстинным (значением), но не true
                    </a></li>
                    <li><a href="#11">
                        null является ложным (значением), но не равен false
                    </a></li>
                    <li><a href="#12">
                        document.all - это объект, но его значением является undefined
                    </a></li>
                    <li><a href="#13">
                        Минимальное значение (Number.MIN_VALUE) больше нуля
                    </a></li>
                    <li><a href="#14">
                        Функция - это не функция
                    </a></li>
                    <li><a href="#15">
                        Сложение массивов
                    </a></li>
                    <li><a href="#16">
                        Замыкающие запятые (Trailing Commas) в массиве
                    </a></li>
                    <li><a href="#17">
                        Сравнение с массивами - это просто ужас
                    </a></li>
                    <li><a href="#18">
                        undefined и number
                    </a></li>
                    <li><a href="#19">
                        parseInt - плохой парень
                    </a></li>
                    <li><a href="#20">
                        Арифметические операции с true и false
                    </a></li>
                    <li><a href="#21">
                        HTML-комментарии являются валидными в JS
                    </a></li>
                    <li><a href="#22">
                        NaN - это (не) число
                    </a></li>
                    <li><a href="#23">
                        [] и null являются объектами
                    </a></li>
                    <li><a href="#24">
                        Чудесным образом увеличивающиеся числа
                    </a></li>
                    <li><a href="#25">
                        Точность результата выражения 0.1 + 0.2
                    </a></li>
                    <li><a href="#26">
                        Усовершенствование чисел
                    </a></li>
                    <li><a href="#27">
                        Сравнение трех чисел
                    </a></li>
                    <li><a href="#28">
                        Забавная математика
                    </a></li>
                    <li><a href="#29">
                        Сложение регулярных выражений
                    </a></li>
                    <li><a href="#30">
                        Строки не являются экземплярами String
                    </a></li>
                    <li><a href="#31">
                        Вызов функции с помощью обратных кавычек
                    </a></li>
                    <li><a href="#32">
                        Call call call
                    </a></li>
                    <li><a href="#33">
                        Свойство constructor
                    </a></li>
                    <li><a href="#34">
                        Объект - это ключ свойства объекта
                    </a></li>
                    <li><a href="#35">
                        Доступ к прототипам с помощью __proto__
                    </a></li>
                    <li><a href="#36">
                        `${{Object}}`
                    </a></li>
                    <li><a href="#37">
                        Деструктуризация с помощью параметров по умолчанию
                    </a></li>
                    <li><a href="#38">
                        Точки и распространение (распаковка)
                    </a></li>
                    <li><a href="#39">
                        Ярлыки (метки)
                    </a></li>
                    <li><a href="#40">
                        Вложенные метки
                    </a></li>
                    <li><a href="#41">
                        Коварный try..catch
                    </a></li>
                    <li><a href="#42">
                        Множественное наследование
                    </a></li>
                    <li><a href="#43">
                        Генератор, вызывающий самого себя
                    </a></li>
                    <li><a href="#44">
                        Класс класса
                    </a></li>
                    <li><a href="#45">
                        Объекты, не поддающиеся преобразованию
                    </a></li>
                    <li><a href="#46">
                        Причуды стрелочных функций
                    </a></li>
                    <li><a href="#47">
                        Стрелочные функции не могут быть конструктором
                    </a></li>
                    <li><a href="#48">
                        arguments и стрелочные функции
                    </a></li>
                    <li><a href="#49">
                        Необычный return
                    </a></li>
                    <li><a href="#50">
                        Цепочка из значений, присваиваемых объекту
                    </a></li>
                    <li><a href="#51">
                        Доступ к свойствам объекта с помощью массивов
                    </a></li>
                    <li><a href="#52">
                        Null и операторы сравнения
                    </a></li>
                    <li><a href="#53">
                        Number.toFixed() показывает разные числа
                    </a></li>
                    <li><a href="#54">
                        Math.max() меньше Math.min
                    </a></li>
                    <li><a href="#55">
                        Сравнение null и 0
                    </a></li>
                    <li><a href="#56">
                        Переопределение переменной
                    </a></li>
                    <li><a href="#57">
                        Стандартное поведение Array.prototype.sort()
                    </a></li>
                </ul>
            </li>
        </ul>
    </nav>
</details>

<a name="1"><h2>Цель списка</h2></a>

<p><small>Забавы ради - "Забавы ради: история случайной революции", Линус Торвальдс</small></p>

<p>Основная цель этого списка - предоставить читателю коллекцию сумасшедших примеров работы JS и объяснить, почему так происходит... там, где это возможно. Всегда интересно изучать нечто, чего мы раньше не знали, не правда ли?</p>

<p>Если вы новичок, то можете использовать эти заметки для более глубокого погружения в JS. Надеюсь, они послужат для вас хорошим стимулом тратить больше времени на чтение спецификации.</p>

<p>Если вы профессиональный разработчик, можете считать эти примеры собранием всех причуд и неожиданных поворотов любимого нами JS.</p>

<p>В любом случае, прочитайте это. Вероятно, вы откроете для себя нечто новое.</p>

<a name="2"><h2>Используемые обозначения</h2></a>

<p><span>// -></span> используется для отображения результата выражения. Например:</p>

```js
1 + 1 // -> 2
```

<p><span>// ></span> означает результат <span>console.log</span>. Например:</p>

```js
console.log('hello, world!') // > hello, world!
```

<p><span>//</span> - это просто комментарий. Например:</p>

```js
// присваиваем константе foo функцию в качестве значения
const foo = function () {}
```

<a name="3"><h2> Примеры</h2></a>

<a name="4"><h3><span>[]</span> равно <span>![]</span></h3></a>

<p>Массив равен не массиву:</p>

```js
[] == ![] // -> true
```

<h4>Объяснение:</h4>

<p>Оператор нестрогого (абстрактного) равенства с целью сравнения операндов приводит их к числу, оба операнда становятся числом <span>0</span> по разным причинам. Массивы являются инстинными значениями, поэтому значением правого операнда после инверсии является <span>false</span>, которое затем приводится к <span>0</span>. Несмотря на то, что левый операнд, пустой массив, является истинным значением, он также приводится к <span>0</span>.</p>

<p>Это выглядит так:</p>

```js
+[] == +![]
0 == +false
0 == 0
true
```

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-logical-not-operator">12.5.9 Логический оператор "Не" (!)</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison">7.2.13 Алгоритм абстрактного сравнения</a></li>
</ul>

<a name="5"><h3><span>true</span> не равно <span>![]</span>, но также не равно <span>[]</span></h3></a>

<p>Массив не равен <span>true</span>, но не массив также не равен <span>true</span>; массив равен <span>false</span>, но не массив также равен <span>false</span>:</p>

```js
true == []  // -> false
true == ![] // -> false

false == []  // -> true
false == ![] // -> true
```

<h4>Объяcнение:</h4>

```js
true == []  // -> false
true == ![] // -> false

// согласно спецификации

true == [] // -> false

toNumber(true) // -> 1
toNumber([])   // -> 0

1 == 0 // -> false

true == ![] // -> false

![] // -> false

true == false // -> false
```

```js
false == []  // -> true
false == ![] // -> true

// согласно спецификации

false == [] // -> true

toNumber(false) // -> 0
toNumber([])    // -> 0

0 == 0 // -> true

false == ![] // -> true

![] // -> false

false == false
```

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison">7.2.13 Алгоритм абстрактного сравнения</a></li>
</ul>

<a name="6"><h3><span>true</span> - это <span>false</span></h3></a>

```js
!!"false" == !!"true"  // -> true
!!"false" === !!"true" // -> true
```

<h4>Объяснение:</h4>

<p>Рассмотрим этот пример шаг за шагом:</p>

```js
// true - это 'истина', представленная числом 1, 'true' в строковом формате - это NaN
true == "true"   // -> false
false == "false" // -> false

// 'false' не пустая строка, поэтому является истинным значением
!!"false" // -> true
!!"true"  // -> true
```

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison">7.2.13 Алгоритм абстрактного сравнения</a></li>
</ul>

<a name="7"><h3>baNaNa</h3></a>

```js
"b" + "a" + +"a" + "a" // -> 'baNaNa'
```

<p>Это бородатая шутка из мира JS. Вот оригинал:</p>

```js
"foo" + +"bar" // -> 'fooNaN'
```

<h4>Объяснение:</h4>

<p>Выражение оценивается как <span>'foo' + (+'bar')</span>, где <span>'bar'</span> преобразуется в <span>NaN</span> (not a number, не число).</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus">12.8.3 Оператор сложения (+)</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator">12.5.6 Оператор "Унарный +"</a></li>
</ul>

<a name="8"><h3><span>NaN</span> это не <span>NaN</span></h3></a>

```js
NaN === NaN // -> false
```

<h4>Объяснение:</h4>

<p>Спецификация строго определяет логику, лежащую в основе такого поведения:</p>

1. Если Type(x) отличается от Type(y), вернуть false.
2. Если Type(x) является числом, тогда
    i. Если x это NaN, вернуть false.
    ii. Если y это NaN, вернуть false.
    iii. ...

- <a href="https://www.ecma-international.org/ecma-262/#sec-strict-equality-comparison">7.2.14 Алгоритм строгого сравнения</a>

<p>Вот определение <span>NaN</span> от IEEE:</p>

> Существует четыре взаимоисключающих отношения (между операндами): меньше чем, равно, больше чем и не определено (не упорядочено). Последний случай возникает, когда по крайней мере один операнд является NaN. Каждое NaN должно сравниваться неопределенно со всем, включая себя.

-  <a href="https://stackoverflow.com/questions/1565164/what-is-the-rationale-for-all-comparisons-returning-false-for-ieee754-nan-values#1573715">"Каково рациональное объяснение того, почему все сравнения с NaN IEEE754 возвращают false?"</a> - ответ члена комитета IEEE-754 на StackOverflow

<a name="9"><h3>Это равняется fail</h3></a>

<p>Вы не поверите, но...</p>

```js
(![] + [])[+[]] +
  (![] + [])[+!+[]] +
  ([![]] + [][[]])[+!+[] + [+[]]] +
  (![] + [])[!+[] + !+[]]
// -> 'fail'
```

<h4>Объяснение:</h4>

<p>Разбив этот массив символов на части, мы можем заметить, что в нем часто повторяется следующий шаблон:</p>

```js
![] + [] // -> false
![]      // -> false
```

<p>Т.е. мы пытаемся прибавить <span>[]</span> к <span>false</span>. Но из-за ряда вызовов внутренних функций (binary + Operator -> ToPrimitive -> [[DefaultValue]]) мы приходим к преобразованию левого операнда к строке:</p>

```js
![] + [].toString()  // 'false'
```

<p>Рассматривая строку как массив, мы можем получить доступ к первому символу этой строки с помощью <span>[0]</span>:</p>

```js
"false"[0] // -> 'f'
```

<p>Остальное очевидно (решается аналогичным способом), но откуда берется <span>i</span>? <span>i</span> в <span>fail</span> появляется из сформированной строки <span>'falseundefined'</span> путем извлечения элемента с индексом <span>['10']</span>.</p>

<a name="10"><h3><span>[]</span> является инстинным (значением), но не <span>true</span></h3></a>

<p>Массив является истинным значением, но не равен <span>true</span>.</p>

```js
!![]       // -> true
[] == true // -> false
```

<h4>Объяснение:</h4>

<p>Мы рассмотрели это в одном из предыдущих вопросов.</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-logical-not-operator">12.5.9 Логический оператор "Не" (!)</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison">7.2.13 Алгоритм абстрактного сравнения</a></li>
</ul>

<a name="11"><h3><span>null</span> является ложным (значением), но не равен <span>false</span></h3></a>

<p>Несмотря на то, что <span>null</span> является ложным значением, он не равен <span>false</span>.</p>

```js
!!null        // -> false
null == false // -> false
```

<p>В тоже время, другие ложные значения, такие как <span>0</span> или <span>''</span> равны <span>false</span>.</p>

```js
0 == false  // -> true
'' == false // -> true
```

<h4>Объяснение:</h4>

<p>Мы рассмотрели это в одном из предыдущих вопросов.</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison">7.2.13 Алгоритм абстрактного сравнения</a></li>
</ul>

<a name="12"><h3><span>document.all</span> - это объект, но его значением является <span>undefined</span></h3></a>

<p><small>Это часть браузерного API и не будет работать в среде Node.js</small></p>

<p>Несмотря на то, что <span>document.all</span> - это массивоподобный объект, предоставляющий доступ к узлам DOM страницы, функция <span>typeof</span> возвращает <span>undefined</span>.</p>

```js
document.all instanceof Object // -> true
typeof document.all            // -> undefined
```

<p>В тоже время, <span>document.all</span> не равен <span>undefined</span>.</p>

```js
document.all === undefined // -> false
document.all === null      // -> false
```

<p>Однако:</p>

```js
document.all == null // -> true
```

<h4>Объяснение:</h4>

> <span>document.all</span> использовался для получения доступа к элементам DOM, в частности, в старых версиях IE. Несмотря на отсутствие стандартизации, он широко использовался в старом JS-коде. Когда в стандарте появился новый интерфейс (такой как <span>document.getElementById</span>), рассматриваемый API был признан устаревшим, и комитету по стандартизации пришлось решать, что с ним делать. По причине широкого использования было принято решение о его сохранении. Таким образом, комитет умышленно пошел на нарушение JS-спецификации. Причина, по которой результатом строгого сравнения этого API с undefined является false, а результатом абстрактного сравнения - true, состоит в следовании (в нарушение спецификации) соответствующим алгоритмам, которые явно определяют такое поведение.

- <a href="https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-all">"Устаревшие возможности - document.all"</a> на WhatWG - спецификация HTML

- <a href="https://github.com/getify/You-Dont-Know-JS/blob/0d79079b61dad953bbfde817a5893a49f7e889fb/types%20%26%20grammar/ch4.md#falsy-objects">"Часть 4 - ToBoolean - Ложные значения"</a> в "Вы не знаете JS" - Типы & Синтаксис (грамматика)

<a name="13"><h3>Минимальное значение (<span>Number.MIN_VALUE</span>) больше нуля</h3></a>

<p><span>Number.MIN_VALUE</span> - это наименьшее число, которое больше нуля:</p>

```js
Number.MIN_VALUE > 0 // -> true
```

<h4>Объяснение:</h4>

> <span>Number.MIN_VALUE</span> - это <span>5e-324</span>, наименьшее положительное число с плавающей точкой, которое максимально близко к нулю. Оно предоставляет лучшее решение, которое могут предложить такие числа. Самым маленьким значением является <span>Number.NEGATIVE_INFINITY</span>, хотя оно не является числом в строгом смысле этого слова.

- <a href="https://stackoverflow.com/questions/26614728/why-is-0-less-than-number-min-value-in-javascript">"Почему 0 меньше чем Number.MIN_VALUE в JS?"</a> на StackOverflow

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-number.min_value">20.1.2.9 Number.MIN_VALUE</a></li>
</ul>

<a name="14"><h3>Функция - это не функция</h3></a>

<p><small>Это ошибка (баг) в V8 v5.5 и ниже (Node.js <= 7)</small></p>

<p>Всем нам известна ошибка undefined is not a function, но как насчет этого?</p>

```js
// определяем класс, расширяющий null
class Foo extends null {}
// -> [Function: Foo]

new Foo() instanceof null
// > TypeError: function is not a function
// > at ...
```

<h4>Объяснение:</h4>

<p>Это не является частью спецификации. Это баг, который был исправлен, так что вы едва ли когда-нибудь с ним столкнетесь.</p>

<a name="15"><h3>Сложение массивов</h3></a>

<p>Что будет, если сложить два массива?</p>

```js
[1, 2, 3] + [4, 5, 6] // -> '1,2,34,5,6'
```

<h4>Объяснение:</h4>

<p>Происходит объединение строк (конкатенация). Рассмотрим этот пример шаг за шагом:</p>

```js
[1, 2, 3] +
  [4, 5, 6][
    // вызывается toString()
    (1, 2, 3)
  ].toString() +
  [4, 5, 6].toString()
// конкатенация
"1,2,3" + "4,5,6"
// ->
("1,2,34,5,6")
```

<a name="16"><h3>Замыкающие запятые (Trailing Commas) в массиве</h3></a>

<p>Вы создаете массив, состоящий из 4 пустых элементов. Несмотря на это, длина такого массива будет равняться 3 из-за замыкающих запятых:</p>

```js
let a = [,,,]
a.length     // -> 3
a.toString() // -> ',,'
```

<h4>Объяснение:</h4>

> Замыкающие запятые (также известные как "конечные запятые") могут быть полезны при добавлении новых элементов, параметров или свойств в JS-код. Если вы хотите добавить новое свойство, вы можете просто добавить новую строку без изменения предыдущей (последней), если эта строка уже содержит замыкающую запятую. Это делает различия в контроле версий чище и облегчает редактирование кода.

- <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Trailing_commas"> "Замыкающие запятые"</a> на MDN

<a name="17"><h3>Сравнение с массивами - это просто ужас</h3></a>

<p>Сравнение с массивами - это сущий кошмар, в чем вы можете убедиться сами:</p>

```js
[] == ''   // -> true
[] == 0    // -> true
[''] == '' // -> true
[0] == 0   // -> true
[0] == ''  // -> false
[''] == 0  // -> true

[null] == ''      // true
[null] == 0       // true
[undefined] == '' // true
[undefined] == 0  // true

[[]] == 0  // true
[[]] == '' // true

[[[[[[]]]]]] == '' // true
[[[[[[]]]]]] == 0  // true

[[[[[[ null ]]]]]] == 0  // true
[[[[[[ null ]]]]]] == '' // true

[[[[[[ undefined ]]]]]] == 0  // true
[[[[[[ undefined ]]]]]] == '' // true
```

<h4>Объяснение:</h4>

<p>Внимательно изучите примеры! Поведение описывается в разделе <a href="https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison">7.2.13 Алгоритм абстрактного сравнения</a> спецификации.</p>

<a name="18"><h3><span>undefined</span> и <span>number</span></h3></a>

<p>Если мы не передаем аргументов конструктору <span>Number</span>, то получаем <span>0</span>. Формальным аргументам при отсутствии фактических присваивается значение <span>undefined</span>, поэтому можно ожидать, что значением отсутствующего параметра <span>Number</span> является <span>undefined</span>. Однако, когда мы передаем <span>undefined</span>, возвращается <span>NaN</span>.</p>

```js
Number()          // -> 0
Number(undefined) // -> NaN
```

<h4>Объяснение:</h4>

<p>Согласно спецификации:</p>

<ol>
<li>Если при вызове функции не передается аргументов, пусть <span>b</span> будет <span>+0</span></li>
<li>Иначе, пусть <span>b</span> будет ? <span>ToNumber(value)</span></li>
<li>В случае <span>undefined</span>, <span>ToNumber(value)</span> должно возвращать <span>NaN</span></li>
</ol>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-number-constructor">20.1.1 Конструктор Number</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-tonumber">7.1.4 ToNumber(argument)</a></li>
</ul>

<a name="19"><h3><span>parseInt</span> - плохой парень</h3></a>

<p><span>parseInt</span> известен своими причудами:</p>

```js
parseInt("f*ck")     // -> NaN
parseInt("f*ck", 16) // -> 15
```

<h4>Объяснение:</h4>

<p>Так происходит, потому что <span>parseInt</span> разбирает (парсит) один символ за другим до тех пор, пока не встретит недопустимый символ. Буква <span>f</span> в слове <span>f*ck</span> - это шестнадцатиричное число <span>15</span>.</p>

<p>Приведение к числу <span>Infinity</span> выглядит так:</p>

```js
parseInt("Infinity", 10) // -> NaN

parseInt("Infinity", 18) // -> NaN
parseInt("Infinity", 19) // -> 18

parseInt("Infinity", 23) // -> 18
parseInt("Infinity", 24) // -> 151176378

parseInt("Infinity", 29) // -> 385849803
parseInt("Infinity", 30) // -> 13693557269

parseInt("Infinity", 34) // -> 28872273981
parseInt("Infinity", 35) // -> 1201203301724
parseInt("Infinity", 36) // -> 1461559270678
parseInt("Infinity", 37) // -> NaN
```

<p>Также будьте внимательны при преобразовании <span>null</span>:</p>

```js
parseInt(null, 24) // -> 23
```

<h4>Объяснение:</h4>

> parseInt преобразует <span>null</span> в строку <span>"null"</span> и пытается привести ее к числу. Для систем счисления от 0 до 23 не имеется подходящих значений, поэтому возвращается <span>NaN</span>. Для 24 - <span>"n"</span>, 14 буква, добавляется в систему счисления. Для 31 - <span>"u"</span>, 21 буква, добавляется, и строка может быть преобразована. Больше 37 - действительные наборы чисел снова отсутствуют, возвращается <span>NaN</span>.

- <a href="https://stackoverflow.com/questions/6459758/parseintnull-24-23-wait-what">"parseInt(null, 24) === 23... подождите, что?"</a> на StackOverflow

<p>Не забудьте про восьмеричные числа:</p>

```js
parseInt("06") // 6
parseInt("08") // 8, если поддерживается ECMAScript 5
parseInt("08") // 0, если не поддерживается
```

<h4>Объяснение:</h4>

<p>Если строка начинается с <span>"0"</span>, система счисления является восьмеричной или десятичной. Какая именно система счисления будет выбрана, зависит от реализации. ECMAScript 5 определяет, что должна использоваться десятичная система, но не все браузеры следуют этому правилу. По этой причине при использовании <span>parseInt</span> всегда определяйте систему счисления.</p>

<p><span>parseInt</span> всегда приводит значение к строке:</p>

```js
parseInt({ toString: () => 2, valueOf: () => 1 }) // -> 2
Number({ toString: () => 2, valueOf: () => 1 })   // -> 1
```

<p>Будьте внимательны при преобразовании чисел с плавающей точкой:</p>

```js
parseInt(0.000001)    // -> 0
parseInt(0.0000001)   // -> 1
parseInt(1 / 1999999) // -> 5
```

<h4>Объяснение:</h4>

<p><span>parseInt</span> принимает строку в качестве аргумента и возвращает целое число в определенной системе счисления. <span>parseInt</span> также исключает (игнорирует) все, что следует за первым "не числом" в строке, включая сам недопустимый символ. <span>0.000001</span> приводится к строке <span>"0.000001"</span> и <span>parseInt</span> возвращает <span>0</span>. <span>0.0000001</span> приводится к строке, которая имеет такое представление: <span>"1e-7"</span>, поэтому <span>parseInt</span> возвращает <span>1</span>. <span>1 / 1999999</span> интерпретируется как <span>"5.00000250000125e-7"</span>, <span>parseInt</span> возвращает <span>5</span>.</p>

<a name="20"><h3>Арифметические операции с <span>true</span> и <span>false</span></h3></a>

<p>Займемся вычислениями:</p>

```js
true +
  true(
    // -> 2
    true + true
  ) *
    (true + true) -
  true // -> 3
```

<p>Хм...</p>

<h4>Объяснение:</h4>

<p>Мы можем приводить значения к числу с помощью конструктора <span>Number</span>. Вполне очевидно, что <span>true</span> будет преобразовано в <span>1</span>:</p>

```js
Number(true) // -> 1
```

<p>Унарный оператор + пытается привести значение к числу. Он способен преобразовывать строковые представления целых чисел и чисел с плавающей точкой, а также <span>true</span>, <span>false</span> и <span>null</span>. Если он не может привести значение к числу, возвращается <span>NaN</span>. Это означает, что мы легко можем привести <span>true</span> к <span>1</span>:</p>

```js
+true // -> 1
```

<p>При сложении или умножении вызывается метод <span>ToNumber</span>. Согласно спецификации этот метод возвращает:</p>

```js
Если <span>argument</span> является true, вернуть 1. Если <span>argument</span> является false, вернуть +0.
```

<p>Вот почему мы можем использовать логические значения как числа и получать правильные результаты.</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-unary-plus-operator">12.5.6 Унарный оператор +</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus">12.8.3 Оператор сложения (+)</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-tonumber">7.1.4 ToNumber(argument)</a></li>
</ul>

<a name="21"><h3>HTML-комментарии являются валидными в JS</h3></a>

<p>Вы будете удивлены, но <span><!--</span> (что известно как HTML-комментарий) является валидным в JS.</p>

```js
// валидный комментарий
<!-- тоже валидный комментарий
```

<h4>Объяснение:</h4>

<p>Удивлены? HTML-комментарии были предназначены для изящной деградации браузеров, не понимающих тег <span>script</span>. Эти браузеры, например, Netscape 1.x, давно вышли из употребления (впрочем, кто знает). Поэтому больше не имеет смысла комментировать свой код таким способом.</p>

<p>Поскольку Node.js основан на движке V8, HTML-комментарии в Node также поддерживаются. Более того, они являются частью спецификации:</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-html-like-comments">B.1.3 HTML-подобные комментарии</a></li>
</ul>

<a name="22"><h3><span>NaN</span> - это (не) число</h3></a>

<p>Тип <span>NaN</span> - <span>'number'</span>:</p>

```js
typeof NaN // -> 'number'
```

<h4>Объяснение:</h4>

<p>Объяснение того, как работают операторы <span>typeof</span> и <span>instanceof</span>:</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-typeof-operator">12.5.5 Оператор typeof</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-instanceofoperator">12.10.4 Семантика среды выполнения: оператор Instanceof(O, C)</a></li>
</ul>

<a name="23"><h3><span>[]</span> и <span>null</span> являются объектами</h3></a>

```js
typeof []   // -> 'object'
typeof null // -> 'object'

// однако
null instanceof Object // -> false
```

<h4>Объяснение:</h4>

<p>Поведение оператора <span>typeof</span> объясняется в этом разделе спецификации:</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-typeof-operator">12.5.5 Оператор typeof</a></li>
</ul>

<p>Согласно спецификации, оператор <span>typeof</span> возвращает строку в соответствии с <a href="https://www.ecma-international.org/ecma-262/#table-35">таблицей 35: результаты (работы) оператора typeof</a>. Как правило, для <span>null</span>, стандартных экзотических и нестандартных экзотических объектов, в который не реализован <span>[[call]]</span>, возвращается строка <span>"object"</span>.</p>

<p>Тип объекта можно получить с помощью метода <span>toString</span>.</p>

```js
Object.prototype.toString.call([])
// -> '[object Array]'

Object.prototype.toString.call(new Date())
// -> '[object Date]'

Object.prototype.toString.call(null)
// -> '[object Null]'
```

<a name="24"><h3>Чудесным образом увеличивающиеся числа</h3></a>

```js
999999999999999  // -> 999999999999999
9999999999999999 // -> 10000000000000000

10000000000000000       // -> 10000000000000000
10000000000000000 + 1   // -> 10000000000000000
10000000000000000 + 1.1 // -> 10000000000000002
```

<h4>Объяснение:</h4>

<p>Такое поведение определено в стандарте IEEE 754-2008 для двоичных чисел с плавающей точкой. В данном случае имеет место округление до ближайшего четного числа. Подробнее читайте здесь:</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-ecmascript-language-types-number-type">6.1.6.1 Тип "Число"</a></li>
<li><a href="https://en.wikipedia.org/wiki/IEEE_754">IEEE 754</a> в Википедии</li>
</ul>

<a name="25"><h3>Точность результата выражения <span>0.1 + 0.2</span></h3></a>

<p>Хорошо известная шутка. Сложение <span>0.1</span> и <span>0.2</span> дает не очень точные результаты:</p>

```js
0.1 +
  0.2(
    // -> 0.30000000000000004
    0.1 + 0.2
  ) ===
  0.3 // -> false
```

<h4>Объяснение:</h4>

<p>Отличный ответ на вопрос <a href="https://stackoverflow.com/questions/588004/is-floating-point-math-broken">"Что не так с математикой для чисел с плавающей точкой?"</a> на StackOverflow:</p>

> Константы <span>0.2</span> и <span>0.3</span> в вашей программе всегда являются приближенными значениями к их истинным значениям. Так уж вышло, что <span>double</span> для <span>0.2</span> больше, чем рациональное число <span>0.2</span>, а <span>double</span> для <span>0.3</span> меньше, чем рациональное число <span>0.3</span>. Сумма <span>0.1</span> и <span>0.2</span> получается больше рационального числа <span>0.3</span> и не совпадает с константой в вашем коде.

<p>Эта проблема настолько широко известна, что в ее честь даже назвали веб-сайт <a href="http://0.30000000000000004.com/">0.30000000000000004.com</a>. Данная проблема встречается во всех языках (программирования), использующих математику для чисел с плавающей точкой, а не только в JS.</p>

<a name="26"><h3>Усовершенствование чисел</h3></a>

<p>Вы можете добавлять собственные методы к объектным оберткам, таким как <span>Number</span> или <span>String</span>.</p>

```js
Number.prototype.isOne = function () {
  return Number(this) === 1
}

(1.0).isOne() // -> true
(1).isOne()   // -> true
(2.0)
  .isOne()(
    // -> false
    7
  )
  .isOne() // -> false
```

<h4>Объяснение:</h4>

<p>Вы можете расширять объект <span>Number</span> как любой JS-объект. Однако делать этого не рекомендуется, если поведение определенного метода не является частью спецификации. Вот список свойств <span>Number</span>:</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-number-objects">20.1 Объект Number</a></li>
</ul>

<a name="27"><h3>Сравнение трех чисел</h3></a>

```js
1 < 2 < 3 // -> true
3 > 2 > 1 // -> false
```

<h4>Объяснение:</h4>

<p>Почему так происходит? Ну, причина кроется в первой части выражения. Вот как это работает:</p>

```js
1 < 2 < 3  // 1 < 2 -> true
true < 3   // true -> 1
1 < 3      // -> true

3 > 2 > 1 // 3 > 2 -> true
true > 1  // true -> 1
1 > 1     // -> false
```

<p>Мы может исправить это с помощью оператора больше или равно (<span>>=</span>):</p>

```js
3 > 2 >= 1 // true
```

<p>Подробнее об операторах сравнения читайте в спецификации:</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-relational-operators">12.10 Операторы сравнения</a></li>
</ul>

<a name="28"><h3>Забавная математика</h3></a>

<p>Часто результаты арифметических операций в JS могут приводить в замешательство. Изучите следующие примеры:</p>

```js
3  - 1   // -> 2
3  + 1   // -> 4
'3' - 1  // -> 2
'3' + 1  // -> '31'

'' + ''  // -> ''
[] + []  // -> ''
{} + []  // -> 0
[] + {}  // -> '[object Object]'
{} + {}  // -> '[object Object][object Object]'

'222' - -'111' // -> 333

[4] * [4]        // -> 16
[] * []          // -> 0
[4, 4] * [4, 4]  // NaN
```

<h4>Объяснение:</h4>

<p>Что происходит в первых четырех случаях? Вот небольшая таблица для понимания сложения в JS:</p>

```js
Number  + Number  -> сложение
Boolean + Number  -> сложение
Boolean + Boolean -> сложение
Number  + String  -> конкатенация
String  + Boolean -> конкатенация
String  + String  -> конкатенация
```

<p>Что насчет других примеров? Для <span>[]</span> и <span>{}</span> при сложении неявно вызываются методы <span>ToPrimitive</span> и <span>ToString</span>. Подробнее о процессе оценивания выражений читайте в спецификации:</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-addition-operator-plus">12.8.3 Оператор сложения (+)</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-toprimitive">7.1.1 ToPrimitive(input [, PreferredType])</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-tostring">7.1.17 ToString(argument)</a></li>
</ul>

<p> Обратите внимание, что <span>{} + []</span> является исключением. Причина, по которой данное выражение отличается от <span>[] + {}</span> состоит в том, что <span>{}</span> интерпретируется как блок кода, а <span>+[]</span> приводится к числу. Это выглядит так:</p>

```js
{
  // блок кода
}
+[] // -> 0
```

<p>Для того, чтобы получить результат, аналогичный <span>[] + {}</span>, выражение следует обернуть в круглые скобки:</p>

```js
({} + []) // -> [object Object]
```

<a name="29"><h3>Сложение регулярных выражений</h3></a>

<p>Знаете ли вы, что можете складывать числа таким способом:</p>

```js
// расширяем метод toString
RegExp.prototype.toString =
  function () {
      return this.source
  } /
  7 /
  -/5/ // -> 2
```

<h4>Объяснение:</h4>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-get-regexp.prototype.source">21.2.5.12 get RegExp.prototype.source</a></li>
</ul>

<a name="30"><h3>Строки не являются экземплярами <span>String</span></h3></a>

```js
"str"                   // -> 'str'
typeof "str"            // -> 'string'
"str" instanceof String // -> false
```

<h4>Объяснение:</h4>

<p>Конструктор <span>String</span> возвращает строку:</p>

```js
typeof String("str")   // -> 'string'
String("str")          // -> 'str'
String("str") == "str" // -> true
```

<p>Теперь попробуем с <span>new</span>:</p>

```js
new String("str") == "str" // -> true
typeof new String("str")   // -> 'object'
```

<p>Объект? Что за черт?</p>

```js
new String("str") // -> [String: 'str']
```

<p>Подробнее о конструкторе <span>String</span> читайте в спецификации:</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-string-constructor">21.1.1 Конструктор String</a></li>
</ul>

<a name="31"><h3>Вызов функции с помощью обратных кавычек</h3></a>

<p>Объявим функцию, которая выводит в консоль все параметры:</p>

```js
function f(...args) {
  return args
}
```

<p>Без сомнения, вы знаете, что такая функция вызывается следующим образом:</p>

```js
f(1, 2, 3) // -> [1, 2, 3]
```

<p>Но знаете ли вы, что можете вызвать любую функцию с помощью обратных кавычек?</p>

```js
f`true is ${true}, false if ${false}, array is ${[1, 2, 3]}`
// -> [ [ 'true is ', ', false is ', ', array is ', '' ],
// ->   true,
// ->   false,
// ->   [ 1, 2, 3 ] ]
```

<h4>Объяснение:</h4>

<p>Здесь нет никакого вошлебства, если вы знакомы с тегированными шаблонными литералами. В приведенном примере функция <span>f</span> является тегом для шаблонного литерала. Теги перед шаблонными литералами позволяют разбирать (парсить) шаблонные литералы с помощью функции обратного вызова. Первый аргумент тегированной функции представляет собой массив строковых значений. Остальные аргументы зависят от выражения. Например:</p>

```js
function template(strings, ...keys) {
  // обрабатываем string (строки) и keys (ключи)
}
```

<p>Это лежит в основе знаменитой библиотеки <a href="https://styled-components.com/">styled-components</a>, широко известной в сообществе React-разработчиков.</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-tagged-templates">12.3.7 Тегированные шаблоны</a></li>
</ul>

<a name="32"><h3>Call call call</h3></a>

```js
console.log.call.call.call.call.call.apply(a => a, [1, 2]) // > 2
```

<h4>Объяснение:</h4>

<p>Осторожно, это может сломать ваш мозг! Попробуйте воспроизвести данный код в своей голове: мы применяем метод <span>call</span> с помощью метода <span>apply</span>. Подробнее читайте здесь:</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-function.prototype.call">19.2.3.3 Fuction.prototype.call(thisArg, ...args)</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-function.prototype.apply">**19.2.3.1 ** Function.prototype.apply(thisArg, agrArray)</a></li>
</ul>

<a name="33"><h3>Свойство <span>constructor</span></h3></a>

```js
const c = "constructor"
c[c][c]('console.log("WTF")')() // > WTF?
```

<h4>Объяснение:</h4>

<p>Рассмотрим этот пример шаг за шагом:</p>

```js
// объявляем новую константу, значением которой является строка 'constructor'
const c = "constructor"

// c - это строка
c // -> 'constructor'

// получаем конструктор строки
c[c] // -> [Function: String]

// получаем конструктор конструктора
c[c][c] // -> [Function: Function]

// вызываем конструктор Function и передаем ему
// тело новой функции в качестве аргумента
c[c][c]('console.log("WTF?")') // -> [Function: anonymous]

// затем вызываем эту анонимную функцию
// результатом является выводимая в консоль строка 'WTF?'
c[c][c]('console.log("WTF?")')(); // > WTF?
```

<p><span>Object.prototype.constructor</span> возвращает ссылку на функцию конструктора <span>Object</span>, создавшую экземпляр объекта. В данном случае, это <span>String</span>, для чисел это будет <span>Number</span> и т.д.</p>

<ul>
<li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor">Object.prototype.constructor</a> на MDN</li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-object.prototype.constructor">19.1.3.1 Object.prototype.constructor</a></li>
</ul>

<a name="34"><h3>Объект - это ключ свойства объекта</h3></a>

```js
{ [{}]: {} } // -> { '[object Object]': {} }
```

<h4>Объяснение:</h4>

<p>Почему так происходит? Здесь мы используем имя вычисляемого свойства. Когда вы передаете объект между скобками, он приводится к строке, получаем ключ свойства <span>'[object Object]'</span> и значение <span>{ }</span>.</p>

<p>Как насчет ада из скобок:</p>

```js
({ [{}]: { [{}]: {} } }[{}][{}]) // -> {}

// структура:
// {
//   '[object Object]': {
//     '[object Object]': {}
//   }
// }
```

<ul>
<li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer">Инициализация объектов</a> на MDN</li>
<li><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer">12.2.6 Инициализация объектов</a></li>
</ul>

<a name="35"><h3>Доступ к прототипам с помощью <span>__proto__</span></h3></a>

<p>Как все мы знаем, примитивы не имеют прототипов. Однако, если мы попытаемся получить значение <span>__proto__</span> примитива, то получим следующее:</p>

```js
(1).__proto__.__proto__.__proto__ // -> null
```

<h4>Объяснение:</h4>

<p>Так происходит, поскольку когда нечто не имеет прототипа, оно оборачивается в объектную обертку с помощью метода <span>ToObject</span>. Итак, шаг за шагом:</p>

```js
(1)
  .__proto__(
    // -> [Number: 0]
    1
  )
  .__proto__.__proto__(
    // -> {}
    1
  ).__proto__.__proto__.__proto__ // -> null
```

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-object.prototype.__proto__">B.2.2.1 Object.prototype.proto</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-toobject">7.1.13 ToObject(argument)</a></li>
</ul>

<a name="36"><h3><span>`${{Object}}`</span></h3></a>

<p>Каким будет результат?</p>

```js
`${{ Object }}`
```

<p>Ответ:</p>

```js
// -> '[object Object]'
```

<h4>Объяснение:</h4>

<p>Мы определяем объект со свойством <span>Object</span>, используя сокращенное обозначение свойства:</p>

```js
{
  Object: Object
}
```

<p>Затем мы передаем объект шаблонному литералу, поэтому для объекта вызывается метод <span>toString</span>. Вот почему мы получаем строку <span>'[object Object]'</span></p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-template-literals">12.2.9 Шаблонные литералы</a></li>
<li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer">Инициализация объектов</a> на MDN</li>
</ul>

<a name="37"><h3>Деструктуризация с помощью параметров по умолчанию</h3></a>

<p>Изучите следующий пример:</p>

```js
let x,
{ x: y = 1 } = { x }
y
```

<p>Этот пример является отличным вопросом для собеседования. Каково значение <span>y</span>? Ответ:</p>

```js
// -> 1
```

<h4>Объяснение:</h4>

```js
let x,
{ x: y = 1 } = { x }
y
//  ↑       ↑           ↑    ↑
//  1       3           2    4
```

<p>Здесь:</p>

<ol>
<li>Мы объявили переменную <span>x</span> без значение, поэтому она <span>undefined</span>.</li>
<li>Затем мы поместили значение <span>x</span> в свойство <span>x</span> объекта.</li>
<li>После этого мы извлекаем значение <span>x</span> с помощью деструктуризации и хотим присвоить это значение <span>y</span>. Если значение не определено, тогда мы иcпользуем <span>1</span> в качестве значения по умолчанию.</li>
</ol>

<ul>
<li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Object_initializer">Инициализация объектов</a> на MDN</li>
</ul>

<a name="38"><h3>Точки и распространение (распаковка)</h3></a>

<p>Интересные результаты могут быть получены в результате распаковки массивов. Например:</p>

```js
[...[..."..."]].length // -> 3
```

<h4>Объяснение:</h4>

<p>Почему <span>3</span>? При использовании оператора распространения (<span>...</span>) вызывается метод <span>@@iterator</span>, данный итератор используется для получения перебираемых значений. Стандартный итератор для строки разбивает ее на отдельные символы. После распаковки мы помещаем эти символы в массив. Затем мы снова распаковываем массив и заворачиваем (упаковываем) его элементы в новый массив.</p>

<p>Строка <span>'...'</span> состоит из трех символов <span>.</span>. Поэтому длина результирующего массива равна <span>3</span>.</p>

<p>Вот как это выглядит:</p>

```js
[...'...']             // -> [ '.', '.', '.' ]
[...[...'...']]        // -> [ '.', '.', '.' ]
[...[...'...']].length // -> 3
```

<p>Мы можем распаковывать и упаковывать (заворачивать) элементы массива сколько угодно, результат будет одинаковым:</p>

```js
[...'...']                 // -> [ '.', '.', '.' ]
[...[...'...']]            // -> [ '.', '.', '.' ]
[...[...[...'...']]]       // -> [ '.', '.', '.' ]
[...[...[...[...'...']]]]  // -> [ '.', '.', '.' ]
// и т.д.
```

<a name="39"><h3>Ярлыки (метки)</h3></a>

<p>Немногие программисты знают о ярлыках (метках) в JS. Они представляют некоторый интерес:</p>

```js
foo: {
    console.log("first")
    break foo
    console.log("second")
}

// > first
// -> undefined
```

<h4>Объяснение:</h4>

<p>Метки используются совместно с ключевыми словами <span>break</span> и <span>continue</span>. Вы можете использовать метки для обозначения цикла и с помощью <span>break</span> или <span>continue</span> сообщать программе, когда она должна выйти из цикла или продолжить выполнение.</p>

<p>В приведенном примере мы указали ярлык <span>foo</span>. Вызывается <span>console.log("first")</span> и выполнение кода прекращается.</p>

<ul>
<li><a href="https://tc39.es/ecma262/#sec-labelled-statements">13.13 Ярлыки (метки)</a></li>
<li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/label">Ярлыки (метки)</a> на MDN</li>
</ul>

<a name="40"><h3>Вложенные метки</h3></a>

```js
a: b: c: d: e: f: g: 1, 2, 3, 4, 5 // -> 5
```

<h4>Объяснение:</h4>

<p>Мы рассмотрели это в предыдущем вопросе.</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-comma-operator">Оператор "Запятая" (,)</a></li>
<li><a href="https://tc39.es/ecma262/#sec-labelled-statements">13.13 Ярлыки (метки)</a></li>
<li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/label">Ярлыки (метки)</a> на MDN</li>
</ul>

<a name="41"><h3>Коварный <span>try..catch</span></h3></a>

<p>Что вернет выражение? 2 или 3?</p>

```js
(() => {
  try {
    return 2
  } finally {
    return 3
  }
})()
```

<p>Правильный ответ - <span>3</span>. Удивлены?</p>

<h4>Объяснение:</h4>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-try-statement">13.15 Оператор try</a></li>
</ul>

<a name="42"><h3>Множественное наследование</h3></a>

<p>Пример:</p>

```js
new class F extends (String, Array) {}() // -> F []
```

<p>Имеет ли здесь место множественное наследование? Нет.</p>

<h4>Объяснение:</h4>

<p>Кажется, что мы наследуемся (<span>extends</span>) от классов <span>(String, Array)</span>. Оператор группировки всегда возвращает последний аргумент, так что на самом деле мы наследуемся только от <span>Array</span>. Это означает, что мы создаем новый класс, расширяющий <span>Array</span>.</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-class-definitions">14.5 Определения класса</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-comma-operator">12.16 Оператор "Запятая" (,)</a></li>
</ul>

<a name="43"><h3>Генератор, вызывающий самого себя</h3></a>

<p>Изучите следующий пример, в котором генератор вызывает (yield) самого себя (выводит собственное значение):</p>

```js
(function* f() {
  yield f
})().next()
// -> { value: [GeneratorFunction: f], done: false }
```

<p>Как видите, возвращенное значение является объектом с <span>value</span> равным <span>f</span>. В данном случае мы можем сделать следующее:</p>

```js
(function* f() {
  yield f
  })()
  .next()
  .value()
  .next()(
      // -> { value: [GeneratorFunction: f], done: false }

      // и еще раз
      function* f() {
      yield f
      }
  )()
  .next()
  .value()
  .next()
  .value()
  .next()(
      // -> { value: [GeneratorFunction: f], done: false }

      // и еще раз
      function* f() {
      yield f;
      }
  )()
  .next()
  .value()
  .next()
  .value()
  .next()
  .value()
  .next();
  // -> { value: [GeneratorFunction: f], done: false }

  // и т.д.
```

<h4>Объяснение:</h4>

<p>Для того, чтобы понять, почему так происходит, читайте следующие разделы спецификации:</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-control-abstraction-objects">25 Управление абстрактными объектами</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-generator-objects">25.3 Объекты-генераторы</a></li>
</ul>

<a name="44"><h3>Класс класса</h3></a>

<p>Изучите этот запутанный синтаксис:</p>

```js
typeof new class {
  class () {}
}() // -> 'object'
```

<p>Кажется, что мы объявляем один класс внутри другого. Должна возникнуть ошибка, однако мы получаем строку <span>'object'</span>.</p>

<h4>Объяснение:</h4>

<p>Начиная с ECMAScript5, ключевые слова можно использовать как названия свойств объектов. Думайте об этом так:</p>

```js
const foo = {
  class: function () {}
}
```

<p>ES6 стандартизировал сокращенные обозначения методов. Кроме того, классы могут быть анонимными. Так что если мы опустим <span>: function</span>, то получим следующее:</p>

```js
class {
  class () {}
}
```

<p>Результатом стандартного класса всегда является простой объект. Поэтому его типом является <span>'object'</span>.</p>

<ul>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-method-definitions">14.3 Определения метода</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-class-definitions">14.5 Определения класса</a></li>
</ul>

<a name="45"><h3>Объекты, не поддающиеся преобразованию</h3></a>

<p>С помощью хорошо известных символов (Well-Known Symbols) можно избавиться от принудительного приведения типов. Взгляните на пример:</p>

```js
function nonCoercible(val) {
  if (val == null) {
    throw TypeError("nonCoercible не должна вызываться с null или undefined")
  }

  const res = Object(val)

  res[Symbol.toPrimitive] = () => {
    throw TypeError("Вы пытаетесь преобразовать непреобразуемый объект");
  }

  return res
}
```

<p>Мы можем использовать это следующим образом:</p>

```js
// объекты
const foo = nonCoercible({ foo: "foo" })

foo * 10 // -> TypeError: Вы пытаетесь преобразовать непреобразуемый объект
foo + "evil" // -> TypeError: Вы пытаетесь преобразовать непреобразуемый объект

// строки
const bar = nonCoercible("bar")

bar + "1" // -> TypeError: Вы пытаетесь преобразовать непреобразуемый объект
bar.toString() + 1 // -> bar1
bar === "bar" // -> false
bar.toString() === "bar" // -> true
bar == "bar" // -> TypeError: Вы пытаетесь преобразовать непреобразуемый объект

// числа
const baz = nonCoercible(1)

baz == 1 // -> TypeError: Вы пытаетесь преобразовать непреобразуемый объект
baz === 1 // -> false
baz.valueOf() === 1 // -> true
```

<h4>Объяснение:</h4>

<ul>
<li><a href="https://gist.github.com/chicoxyzzy/5dd24608e886adf5444499896dff1197">Источник - gist Сергея Рубанова</a></li>
<li><a href="https://www.ecma-international.org/ecma-262/#sec-well-known-symbols">6.1.5.1 Хорошо известные символы (Well-Known Symbols)</a></li>
</ul>

<a name="46"><h3>Причуды стрелочных функций</h3></a>

<p>Пример:</p>

```js
let f = () => 10
f() // -> 10
```

<p>Хорошо, но что насчет этого:</p>

```js
let f = () => {}
f() // -> undefined
```

<h4>Объяснение:</h4>

<p>Мы ожидаем получить <span>{ }</span>, а не <span>undefined</span>. Фигурные скобки являются частью синтаксиса стрелочных функций, поэтому <span>f</span> возвращает <span>undefined</span>. Однако вернуть объект из стрелочной функции все же возможно, обернув возвращаемое значение круглыми скобками:</p>

```js
let f = () => ({})
f()  // -> {}
```

<a name="47"><h3>Стрелочные функции не могут быть конструктором</h3></a>

<p>Пример:</p>

```js
let f = function () {
  this.a = 1
}
new f() // -> { 'a': 1 }
```

<p>Попробуем сделать тоже самое со стрелочной функцией:</p>

```js
let f = () => {
  this.a = 1
}
new f() // -> TypeError: f is not a constructor (f не является конструктором)
```

<h4>Объяснение:</h4>

<p>Стрелочные функции не могут использоваться как конструкторы и выбрасывают ошибку при использовании с ключевым словом <span>new</span>. Их <span>this</span> берется из лексического окружения, и у них отсутствует свойство <span>prototype</span>, так что такое использование стрелочных функций не имеет особого смысла.</p>

<a name="48"><h3><span>arguments</span> и стрелочные функции</h3></a>

<p>Пример:</p>

```js
let f = function () {
  return arguments
}
f("a") // -> { '0': 'a' }
```

<p>Попробуем сделать тоже самое со стрелочной функцией:</p>

```js
let f = () => arguments
f("a") // -> Uncaught ReferenceError: arguments is not defined (arguments не определена)
```

<h4>Объяснение:</h4>

<p>Стрелочные функции являются сокращенным вариантом обычных функций, они короткие и имеют лексическое <span>this</span>. В тоже время, стрелочные функции не могут быть привязаны (bind) к объекту <span>arguments</span>. В качестве альтернативы можно использовать остальные (оставшиеся) параметры (<span>rest parameters</span>) для получения аналогичных результатов:</p>

```js
let f = (...args) => args
f("a") // -> { '0': 'a' }
```

<ul>
<li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Стрелочные функции</a> на MDN</li>
</ul>

<a name="49"><h3>Необычный <span>return</span></h3></a>

<p>Оператор <span>return</span> также имеет свои причуды. Например:</p>

```js
(function() {
  return
  {
      b: 10;
  }
})() // -> undefined
```

<h4>Объяснение:</h4>

<p><span>return</span> и возвращаемое значение должны находиться на одной линии (строке):</p>

```js
(function() {
  return { b: 10 }
})() // -> { b: 10 }
```

<p>Это объясняется концепцией под названием "автоматическая вставка точки с запятой", которая автоматически вставляет точки запятой почти после каждой новой линии (строки). В первом примере точка с запятой вставляется между <span>return</span> и объектным литералом, поэтому функция возвращает <span>undefined</span>, а сам объектный литерал не оценивается.</p>

<ul>
  <li><a href="https://www.ecma-international.org/ecma-262/#sec-rules-of-automatic-semicolon-insertion">11.9.1 Правила автоматической вставки точки с запятой</a></li>
  <li><a href="https://www.ecma-international.org/ecma-262/#sec-return-statement">13.10 Оператор return</a></li>
</ul>

<a name="50"><h3>Цепочка из значений, присваиваемых объекту</h3></a>

```js
const foo = { n: 1 }
const bar = foo

foo.x = foo = { n: 2 }

foo.x // -> undefined
foo   // -> { n: 2 }
bar   // -> { n: 1, x: { n: 2 } }
```

<p>Справа налево, <span>{n: 2}</span> присваивается <span>foo</span>, результат присваивается <span>foo.x</span>, так почему <span>bar</span> равняется <span>{n: 1, x: {n: 2}}</span>, когда <span>bar</span> ссылается на <span>foo</span>. Почему значением <span>foo.x</span> является <span>undefined</span>, а значением <span>bar.x</span> является <span>{n: 2}</span>?</p>

<h4>Объяснение:</h4>

<p><span>Foo</span> и <span>bar</span> ссылаются на один объект, <span>{n: 1}</span>, значения разрешаются до присваивания. <span>foo = {n: 2}</span> создает новый объект, после чего <span>foo</span> ссылается на этот объект. Дело в том, что <span>foo</span> в <span>foo.x = ...</span> все еще ссылается на старый <span>foo = {n: 1}</span> и обновляет его, добавляя свойство <span>x</span>. После цепочки присвоений <span>bar</span> по-прежнему ссылается на старый объект <span>foo</span>, а <span>foo</span> ссылается на новый объект <span>{n: 2}</span>, который не имеет свойства <span>x</span>.</p>

<p>Это выглядит так:</p>

```js
const foo = { n: 1 }
const bar = foo

foo = { n: 2 } // -> {n: 2}
bar.x = foo    // -> {n: 1, x: {n: 2}}
// bar.x указывает на новый объект foo
// это не является эквивалентом bar.x = {n: 2}
```

<a name="51"><h3>Доступ к свойствам объекта с помощью массивов</h3></a>

```js
const obj = { property: 1 }
const arr = ['property']

obj[arr] // -> 1
```

<p>Что насчет псевдомногомерных массивов?</p>

```js
const map = {}
const x = 1
const y = 2
const z = 3

map[[x, y, z]] = true
map[[x + 10, y, z]] = true

map['1,2,3']  // -> true
map['11,2,3'] // -> true
```

<h4>Объяснение:</h4>

<p>Оператор <span>[ ]</span> конвертирует переданное выражение посредством <span>toString</span>. Преобразование массива, состоящего из одного элемента, в строку похоже на преобразование самого этого элемента в строку:</p>

```js
['property'].toString() // -> 'property'
[1, 2, 3].toString()    // -> '1,2,3'
```

<a name="52"><h3><span>Null</span> и операторы сравнения</h3></a>

```js
null > 0  // -> false
null == 0 // -> false

null >= 0 // -> true
```

<h4>Объяснение:</h4>

<p>Длинная история короткими словами: если <span>null</span> меньше <span>0</span>, возвращается <span>false</span>, а <span>null >= 0</span> возвращает <span>true</span>. Подробное объяснение смотрите <a href="https://blog.campvanilla.com/javascript-the-curious-case-of-null-0-7b131644e274">здесь</a>.</p>

<a name="53"><h3><span>Number.toFixed()</span> показывает разные числа</h3></a>

<p><span>Number.toFixed()</span> может вести себя по-разному в разных браузерах. Например:</p>

```js
(0.7875).toFixed(3)
// Firefox: -> 0.787
// Chrome: -> 0.787
// IE11: -> 0.788
(0.7876).toFixed(3)
// Firefox: -> 0.788
// Chrome: -> 0.788
// IE11: -> 0.788
```

<h4>Объяснение:</h4>

<p>На первый взгляд может показаться, что IE11 ведет себя правильно, а Firefox/Chrome ошибаются, но в действительности Firefox/Chrome более строго следуют стандартам для чисел с плавающей точкой (IEEE-754), а IE11 немного их нарушает, вероятно, с целью предоставлния более точных результатов.</p>

<p>Понять, почему так происходит, можно с помощью нескольких простых тестов:</p>

```js
// подтверждаем странный результат округления 5 в меньшую сторону
(0.7875).toFixed(3) // -> 0.787
// это выглядит как 5 при расширении числа
// до пределов 64-битных чисел двойной точности
(0.7875).toFixed(14) // -> 0.78750000000000
// но что если выйти за эти пределы?
(0.7875).toFixed(20) // -> 0.78749999999999997780
```

<p>Числа с плавающей точкой не хранятся как внутренний список целых чисел, а вычисляются с помощью сложной методологии, приводящей к незначительным неточностям, которые, обычно, округляются посредством <span>toString</span> или других методов, но фактически имеют место быть.</p>

<p>В данном случае "5", в конечном счете, является очень близким к действительному значению 5. Округление "5" до разумной длины будет округлять ее как 5... но на самом деле это не совсем 5.</p>

<p>IE11 даже в случае <span>toFixed(20)</span> после 5 показывает только нули. Кажется, он прибегает к принудительному округлению во избежание проблем, связанных с аппаратными органичениями.</p>

<ul>
  <li><a href="https://www.ecma-international.org/ecma-262//#sec-number.prototype.tofixed">20.1.3.3 Number.prototype.toFixed(fractionDigits)</a></li>
</ul>

<a name="54"><h3><span>Math.max()</span> меньше <span>Math.min</span></h3></a>

```js
Math.min(1, 4, 7, 2) // -> 1
Math.max(1, 4, 7, 2) // -> 7
Math.min() // -> Infinity
Math.max() // -> -Infinity
Math.min() > Math.max() // -> true
```

<h4>Объяснение:</h4>

<ul>
  <li><a href="https://charlieharvey.org.uk/page/why_math_max_is_less_than_math_min">"Почему Math.max() меньше Math.min()"</a> - статья Charlie Harvey</li>
</ul>

<a name="55"><h3>Сравнение <span>null</span> и <span>0</span></h3></a>

<p>Это похоже на противоречие:</p>

```js
null == 0 // -> false
null > 0  // -> false
null >= 0 // -> true
```

<p>Как может <span>0</span> быть больше <span>null</span>, если <span>null >= 0</span> возвращает <span>true</span>?</p>

<h4>Объяснение:</h4>

<p>Дело в том, что эти выражения оцениваются разными способами, что приводит к неожиданным результатам.</p>

<p>Первым выражением является абстрактное сравнение <span>null == 0</span>. Обычно, если значения нельзя сравнить напрямую, они приводятся к числу. Поэтому логично ожидать следующего:</p>

```js
// это не то, что происходит на самом деле
(null == 0 + null) == +0
0 == 0
true
```

<p>Однако согласно спецификации принудительное приведение типов не применяется к <span>null</span> и <span>undefined</span>. Если одним из операндов равенства является <span>null</span>, вторым операндом должен быть <span>null</span> или <span>undefined</span>, только в этом случае выражение вернет <span>true</span>. В данном случае это не так, поэтому возвращается <span>false</span>.</p>

<p>Вторым выражением является <span>null > 0</span>. В данном случае алгоритм отличается от абстрактного равентсва и приводит <span>null</span> к числу. Получаем следующее:</p>

```js
null > 0
+null > +0
0 > 0
false
```

<p>Наконец, третьим выражением является <span>null >= 0</span>. Можно подумать, что данное выражение эквивалентно <span>null > 0 || null == 0</span>; если бы это было правдой, то выражение вернуло бы <span>false</span>. Однако оператор <span>>=</span> работает совсем по-другому, его алгоритм идентичен алгоритму работы оператора <span><</span>. Получаем следующее:</p>

```js
null >= 0
!(null < 0)
!(+null < +0)
!(0 < 0)
!false
true
```

<ul>
  <li><a href="https://www.ecma-international.org/ecma-262/#sec-abstract-relational-comparison">7.2.12 Алгоритм абстрактного сравнения</a></li>
  <li><a href="https://www.ecma-international.org/ecma-262/#sec-abstract-equality-comparison">7.2.13 Алгоритм абстрактного равенства</a></li>
</ul>

<a name="56"><h3>Переопределение переменной</h3></a>

<p>JS допускает переопределение переменных:</p>

```js
a = 1
a = 2
// это также является валидным
a = 3, a = 4
a // -> 4
```

<p>Это возможно даже в строгом режиме:</p>

```js
'use strict'
var a = 1, a = 2, a = 3
var a = 4
var a = 5
a // -> 5
```

<h4>Объяснение:</h4>

<p>Все определения объединяются в одно.</p>

<ul>
    <li><a href="https://www.ecma-international.org/ecma-262/#sec-variable-statement">13.3.2 Оператор var</a></li>
</ul>

<p>Если мы объявим переменную с помощью ключевего слова <span>let</span> или <span>const</span>, то при попытке переопределить такую переменную будет выброшено исключение <span>SyntaxError: Identifier 'a' has already been declared (переменная 'a' уже определена)</span>. С <span>var</span> это работает из-за поднятия переменных.</p>

<a name="57"><h3>Стандартное поведение <span>Array.prototype.sort()</span></h3></a>

<p>Представьте, что вам нужно отсортировать массив чисел.</p>

```js
[10, 1, 3].sort() // -> [1, 10, 3]
```

<h4>Объяснение:</h4>

<p>Стандартный алгоритм сортировки основан на приведении элементов к строке и сравнении кодовых обозначений этих строк (в формате UTF-16).</p>

<p>Для правильной сортировки "не строк" необходимо передать <span>sort</span> в качестве аргумента функцию для сравнения (<span>comparefn</span>):</p>

```js
[10, 1, 3].sort((a, b) => a - b) // -> [1, 3, 10]
```

<ul>
    <li><a href="https://www.ecma-international.org/ecma-262/#sec-array.prototype.sort">22.1.3.25 Array.prototype.sort(comparefn)</a></li>
</ul>

<p>Алгоритм сортировки в разных браузерах был реализован по-разному. Это приводило к разным результатам. Стандарт ECMAScript 2019 представил <a href="https://www.ecma-international.org/ecma-262/10.0/index.html#sec-array.prototype.sort">алгоритм стабильной сортировки</a>.</p>
</body>
</html>