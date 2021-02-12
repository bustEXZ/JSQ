export default /*html*/ `
<section>
  <h3>Задачи разного уровня сложности</h3>
</section>
<section>
  <h3>Задача № 1</h3>
  <p>Создайте страницу, которая запрашивает имя пользователя и выводит его.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const name = prompt('Введите ваше имя:')
alert(\`Привет, &#36;{name}!\`)
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 2</h3>
  <p>Чему будут равны переменные a, b, c и d в примере ниже?</p>
  <pre><code class="lang-js">
let a = 1
let b = 1

const c = ++a // ?
const d = b++ // ?
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <pre><code class="lang-js">
a = 2
b = 2
c = 2
d = 1
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 3</h3>
  <p>Какой результат будет у выражений ниже?</p>
  <pre><code class="lang-js">
'' + 1 + 0
'' - 1 + 0
true + false
6 / '3'
'2' * '3'
4 + 5 + 'px'
'&#36;' + 4 + 5
'4' - 2
'4px' - 2
7 / 0
'  -9  ' + 5
'  -9  ' - 5
null + 1
undefined + 1
' \\t \\n' - 2
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <pre><code class="lang-js">
'' + 1 + 0 // '10' (1)
'' - 1 + 0 // -1 (2)
true + false // 1
6 / '3' // 2
'2' * '3' // 6
4 + 5 + 'px' // '9px'
'&#36;' + 4 + 5 // '&#36;45'
'4' - 2 // 2
'4px' - 2 // NaN
7 / 0 = Infinity
'  -9  ' + 5 // '  -9  5' (3)
'  -9  ' - 5 // -14 (4)
null + 1 // 1 (5)
undefined + 1 // NaN (6)
' \\t \\n' - 2 // -2 (7)
      </code></pre>
      <ol>
        <li>Сложение со строкой "" + 1 преобразует 1 к строке: "" + 1 = "1", и в следующем случае "1" + 0 работает то же самое правило.</li>
        <li>Вычитание - (как и большинство математических операторов) работает только с числами, пустая строка "" приводится к 0.</li>
        <li>Сложение со строкой превращает число 5 в строку и добавляет к строке.</li>
        <li>Вычитание всегда преобразует к числу, значит строка " -9 " становится числом -9 (пробелы по краям обрезаются).</li>
        <li>null становится 0 после численного преобразования.</li>
        <li>undefined становится NaN после численного преобразования.</li>
        <li>Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования.</li>
      </ol>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 4</h3>
  <p>Каким будет результат этих выражений?</p>
  <pre><code class="lang-js">
5 > 4
'ананас' > 'яблоко'
'2' > '12'
undefined == null
undefined === null
null == '\\n0\\n'
null === +'\\n0\\n'
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <pre><code class="lang-js">
5 > 4 // true
'ананас' > 'яблоко' // false
'2' > '12' // true
undefined == null // true
undefined === null // false
null == '\\n0\\n' // false
null === +'\\n0\\n' // false
      </code></pre>
      <ol>
        <li>Очевидно, true.</li>
        <li>Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".</li>
        <li>Снова посимвольное сравнение. Первый символ первой строки "2" больше, чем первый символ второй "1".</li>
        <li>Специальный случай. Значения null и undefined равны только друг другу при нестрогом сравнении.</li>
        <li>Строгое сравнение разных типов, поэтому false.</li>
        <li>Аналогично (4), null равен только undefined.</li>
        <li>Строгое сравнение разных типов.</li>
      </ol>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 5</h3>
  <p>Перепишите конструкцию "if" с использованием условного оператора "?".</p>
  <pre><code class="lang-js">
let result

if (a + b < 4) {
  result = 'Мало'
} else {
  result = 'Много'
}
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const result = a + b < 4 ? 'Мало' : 'Много'
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 6</h3>
  <p>Перепишите "if-else" с использованием нескольких операторов "?".</p>
  <pre><code class="lang-js">
let message

if (login == 'Сотрудник') {
  message = 'Привет'
} else if (login == 'Директор') {
  message = 'Здравствуйте'
} else if (login == '') {
  message = 'Нет логина'
} else {
  message = ''
}
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const message = login === 'Сотрудник' ? 'Привет' : login === 'Директор' ? 'Здравствуйте' : login === '' ? 'Нет логина' : ''
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 7</h3>
  <p>Какие из перечисленных ниже "console.log()" выполнятся? Какие конкретно значения будут результатами выражений в условиях "if"?</p>
  <pre><code class="lang-js">
if (-1 || 0) console.log('первый')
if (-1 && 0) console.log('второй')
if (null || (-1 && 1)) console.log('третий')
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <p>Первое и третье выполнятся.</p>
      <pre><code class="lang-js">
// Выполнится
// Результат -1 || 0 = -1, в логическом контексте true
if (-1 || 0) console.log('первый')

// Не выполнится
// -1 && 0 = 0,  в логическом контексте false
if (-1 && 0) console.log('второй')

// Выполнится
// оператор && имеет больший приоритет, чем ||
// так что -1 && 1 выполнится раньше
// вычисления: null || -1 && 1  ->  null || 1  ->  1
if (null || (-1 && 1)) console.log('третий')
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 8</h3>
  <p>При помощи цикла "for" выведите четные числа от 2 до 10.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) console.log(i)
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 9</h3>
  <p>Напишите цикл, который предлагает (prompt) ввести число, большее 100. Если пользователь ввел другое число – попросить ввести еще раз, и так далее. Цикл должен спрашивать число до тех пор, пока либо пользователь не введет число, большее 100, либо не нажмет кнопку "Отмена" (ESC). Предполагается, что пользователь вводит только числа. Предусматривать обработку нечисловых строк не обязательно.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
let num

do {
  num = prompt('Введите число, большее 100', 0)
} while (num <= 100 && num)
      </code></pre>
      <p>Цикл "do-while" повторяется, пока верны две проверки:</p>
      <ol>
        <li>Проверка "num &lt;= 100" – то есть, введенное число все еще меньше 100.</li>
        <li>Проверка "&& num" вычисляется в false, когда num имеет значение null или пустая строка (""). В этом случае цикл "while" тоже нужно прекратить.</li>
      </ol>
      <p>Кстати, сравнение "num &lt;= 100" при вводе null даст true, так что вторая проверка необходима.</p>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 10</h3>
  <p>Следующая функция возвращает true, если параметр "age" больше 18. В ином случае она задает вопрос (confirm) и возвращает его результат.</p>
  <pre><code class="lang-js">
function checkAge(age) {
  if (age > 18) {
    return true
  } else {
    return confirm('Родители разрешили?')
  }
}
  </code></pre>
  <p>Перепишите функцию, чтобы она делала то же самое, но без "if", в одну строку. Сделайте два варианта функции "checkAge":</p>
  <ol>
    <li>Используя оператор "?"</li>
    <li>Используя оператор "||"</li>
  </ol>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
// оператор ?
const checkAge = (age) => (age > 18 ? true : confirm('Родители разрешили?'))

// оператор ||
const checkAge = (age) => age > 18 || confirm('Родители разрешили?')
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 11</h3>
  <p>Напишите функцию "min(a, b)"", которая возвращает меньшее из чисел "a" и "b". Пример вызовов:</p>
  <pre><code class="lang-js">
min(2, 5) // 2
min(3, -1) // -1
min(1, 1) // 1
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function min(a, b) {
  if (a < b) return a
  return b
}

// или
const min = (a, b) => (a < b ? a : b)
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 12</h3>
  <p>Напишите функцию "pow(x,n)"", которая возвращает "x" в степени "n". Иначе говоря, умножает "x" на себя "n" раз и возвращает результат.</p>
  <pre><code class="lang-js">
pow(3, 2) // 3 * 3 = 9
pow(3, 3) // 3 * 3 * 3 = 27
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function pow(x, n) {
  if (n <= 0) return false
  if (n === 1) return x

  let result = x

  for (let i = 1; i < n; i++) {
    result *= x
  }

  return result
}

// или с помощью рекурсии
const pow = (x, n) => {
  if (n <= 0) return false
  if (n === 1) return x
  return x * pow(x, n - 1)
}

// или в одну строку
const pow = (x, n) => (n <= 0 ? false : n === 1 ? x : x * pow(x, n - 1))
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 13</h3>
  <p>Напишите функцию "isEmpty(obj)", которая возвращает true, если у объекта нет свойств, иначе false. Должно работать так:</p>
  <pre><code class="lang-js">
const schedule = {}

console.log(isEmpty(schedule)) // true

schedule['8:30'] = 'Подъем!'

console.log(isEmpty(schedule)) // false
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function isEmpty(obj) {
  for (const key in obj) {
    return false
  }
  return true
}

// или
const isEmpty = (obj) => (Object.keys(obj).length ? false : true)
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 14</h3>
  <p>У нас есть объект, в котором хранятся зарплаты нашей команды:</p>
  <pre><code class="lang-js">
const salaries = {
  John: 100,
  Jane: 200,
  Bob: 300,
  Alice: 400,
}
  </code></pre>
  <p>Напишите код для суммирования всех зарплат и сохраните результат в переменной "sum". Должно получиться 1000. Если объект "salaries" пуст, то результат должен быть равен 0.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
let sum = 0
for (let key in salaries) {
  sum += salaries[key]
}

// или
function sum(obj) {
  let sum = 0
  for (let salary of Object.values(salaries)) {
    sum += salary
  }

  return sum
}

// или
const sum = (obj) => (Object.keys(obj).length ? Object.values(obj).reduce((x, y) => x + y) : 0)
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 15</h3>
  <p>Создайте функцию "multiplyNumeric(obj)", которая умножает все числовые свойства объекта "obj" на 2. Например:</p>
  <pre><code class="lang-js">
// до вызова функции
const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
}

multiplyNumeric(menu)

// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: 'My menu',
}
  </code></pre>
  <p>Обратите внимание, что "multiplyNumeric()" не нужно ничего возвращать. Следует напрямую изменять объект.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2
    }
  }
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 16</h3>
  <p>Создайте объект "calculator" (калькулятор) с тремя методами:</p>
  <ol>
    <li>read() (читать) запрашивает два значения и сохраняет их как свойства объекта</li>
    <li>sum() (суммировать) возвращает сумму сохраненных значений</li>
    <li>mul() (умножить) перемножает сохраненные значения и возвращает результат</li>
  </ol>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const calculator = {
  sum() {
    return this.a + this.b
  },

  mul() {
    return this.a * this.b
  },

  read() {
    this.a = +prompt('a?', 0)
    this.b = +prompt('b?', 0)
  },
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 17</h3>
  <p>Это "ladder" (лестница) – объект, который позволяет подниматься вверх и спускаться:</p>
  <pre><code class="lang-js">
const ladder = {
  step: 0,
  up() {
    this.step++
  },
  down() {
    this.step--
  },
  showStep: function () {
    // показывает текущую ступеньку
    console.log(this.step)
  },
}
  </code></pre>
  <p>Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:</p>
  <pre><code class="lang-js">
ladder.up()
ladder.up()
ladder.down()
ladder.showStep() // 1
  </code></pre>
  <p>Измените код методов "up", "down" и "showStep" таким образом, чтобы их вызов можно было сделать по цепочке, например так:</p>
  <pre><code class="lang-js">
ladder.up().up().down().showStep() // 1
  </code></pre>
  <p>Такой подход широко используется в библиотеках JavaScript.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>Решением является возврат самого объекта в каждом методе.</p>
      <pre><code class="lang-js">
const ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep() {
    console.log(this.step)
    return this
  },
}

ladder.up().up().down().up().down().showStep() // 1
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 18</h3>
  <p>Создайте функцию-конструктор "Calculator", который создает объекты с тремя методами:</p>
  <ol>
    <li>read() запрашивает два значения при помощи "prompt()" и сохраняет их значение в свойствах объекта</li>
    <li>sum() возвращает сумму введенных свойств</li>
    <li>mul() возвращает произведение введенных свойств</li>
  </ol>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function Calculator() {
  this.read = function () {
    this.a = +prompt('a?', 0)
    this.b = +prompt('b?', 0)
  }

  this.sum = function () {
    return this.a + this.b
  }

  this.mul = function () {
    return this.a * this.b
  }
}

const calculator = new Calculator()
calculator.read()

console.log(calculator.sum())
console.log(calculator.mul())
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 19</h3>
  <p>Напишите функцию-конструктор "Accumulator(initialValue)". Объект, который она создает, должен уметь следующее:</p>
  <ol>
    <li>Хранить «текущее значение» в свойстве "value". Начальное значение устанавливается в аргументе конструктора "initialValue"</li>
    <li>Метод "read" использует "prompt()" для получения числа и прибавляет его к свойству "value"</li>
  </ol>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function Accumulator(initialValue) {
  this.value = initialValue

  this.read = function () {
    this.value += +prompt('Сколько нужно добавить?', 0)
  }
}

const accumulator = new Accumulator(1)
accumulator.read()
accumulator.read()
console.log(accumulator.value)
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 20</h3>
  <p>Напишите функцию "randomInteger(min, max)", которая генерирует случайное целое (integer) число от min до max (включительно). Любое число из интервала "min-max" должно появляться с одинаковой вероятностью.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function randomInteger(min, max) {
  // случайное число от min до (max + 1)
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

// или
const randomInteger = (min, max) => ~~(min + Math.random() * (max + 1 - min))
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 21</h3>
  <p>Напишите функцию "ucFirst(str)", возвращающую строку "str" с заглавным первым символом. Например:</p>
  <pre><code class="lang-js">
ucFirst('ванька') === 'Ванька'
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1)
}

// или
const ucFirst = (str, trimmed = str.trim()) => \`&#36;{trimmed[0].toUpperCase()}&#36;{trimmed.slice(1)}\`

console.log(ucFirst('   ванька')) // Ванька
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 22</h3>
  <p>Создайте функцию "truncate(str, maxlength)", которая проверяет длину строки "str" и, если она превосходит "maxlength", заменяет конец "str" на "…", так, чтобы ее длина стала равна "maxlength". Результатом функции должна быть та же строка, если усечение не требуется, либо, соответственно, усеченная строка.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str
}

// или
const truncate = (str, max) => (str.length > max ? \`&#36;{str.slice(0, max - 1)}...\` : str)

const str = 'Очень длинная строка'

console.log(truncate(str, 6)) // Очень...
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 23</h3>
  <p>Давайте произведем 5 операций с массивом.</p>
  <ol>
    <li>Создайте массив "styles" с элементами "Джаз" и "Блюз".</li>
    <li>Добавьте "Рок-н-ролл" в конец.</li>
    <li>Замените значение в середине на "Классика". Ваш код для поиска значения в середине должен работать для массивов с любой длиной.</li>
    <li>Удалите первый элемент массива и покажите его.</li>
    <li>Вставьте "Рэп" и "Регги" в начало массива.</li>
  </ol>
  <p>Массив по ходу выполнения операций:</p>
  <pre><code class="lang-js">
Джаз, Блюз
Джаз, Блюз, Рок - н - ролл
Джаз, Классика, Рок - н - ролл
Классика, Рок - н - ролл
Рэп, Регги, Классика, Рок - н - ролл
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <pre><code class="lang-js">
const styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
styles[~~((styles.length - 1) / 2)] = 'Классика'
console.log(styles.shift())
styles.unshift('Рэп', 'Регги')
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 24</h3>
  <p>На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6]. Задача: найти непрерывный подмассив в "arr", сумма элементов в котором максимальна. Функция "getMaxSubSum(arr)" должна возвращать эту сумму. Например:</p>
  <pre><code class="lang-js">
getMaxSubSum([-1, 2, 3, -9]) // 5
getMaxSubSum([2, -1, 2, 3, -9]) // 5
getMaxSubSum([-1, 2, 3, -9, 11]) // 11
getMaxSubSum([-2, -1, 1, 2]) // 3
getMaxSubSum([100, -9, 2, -3, 5]) // 100
getMaxSubSum([1, 2, 3]) // 6
  </code></pre>
  <p>Если все элементы отрицательные – ничего не берем (подмассив пустой) и сумма равна 0:</p>
  <pre><code class="lang-js">
getMaxSubSum([-1, -2, -3]) // 0
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function getMaxSubSum(arr) {
  let maxSum = 0
  let partialSum = 0

  for (const item of arr) {
    partialSum += item
    maxSum = Math.max(maxSum, partialSum)
    if (partialSum < 0) partialSum = 0
  }

  return maxSum
}

// или
const getMaxSubSum = (arr, max = 0) => {
  arr.reduce((x, y) => {
    y < 0 ? (x = 0) : (x += y)
    if (x > max) max = x
    return x
  }, 0)
  return max
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 25</h3>
  <p>Напишите функцию "camelize(str)", которая преобразует строки вида "my-short-string" в "myShortString". То есть дефисы удаляются, а все слова после них получают заглавную букву. Примеры:</p>
  <pre><code class="lang-js">
camelize('background-color') === 'backgroundColor'
camelize('list-style-image') === 'listStyleImage'
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function camelize(str) {
  return str
    .split('-')
    .map((word, index) => (index == 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join('')
}

// или
const camelize = (str, trimmed = str.trim()) =>
  trimmed
    .split('-')
    .map((word, i) => (i === 0 ? word : \`&#36;{word[0].toUpperCase()}&#36;{word.slice(1)}\`))
    .join('')

console.log(camelize('   my-long-word')) // myLongWord
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 26</h3>
  <p>Отсортировать элементы массива по убыванию. Пример:</p>
  <pre><code class="lang-js">
const arr = [5, 2, 1, -10, 8]

// ...

console.log(arr) // 8, 5, 2, 1, -10
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const arr = [5, 2, 1, -10, 8]

arr.sort((a, b) => b - a)

console.log(arr) // 8, 5, 2, 1, -10
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 27</h3>
  <p>Создайте функцию конструктор "Calculator", которая создает "расширяемые" объекты калькулятора. Задание состоит из двух частей.</p>
  <p>1. Во-первых, реализуйте метод "calculate(str)", который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс (+) и минус (-). Пример использования:</p>
  <pre><code class="lang-js">
const calc = new Calculator()

console.log(calc.calculate('3 + 7')) // 10
  </code></pre>
  <p>2. Затем добавьте метод "addMethod(name, func)", который добавляет в калькулятор новые операции. Он принимает оператор "name" и функцию с двумя аргументами "func(a,b)", которая описывает его. Например, давайте добавим умножение *, деление / и возведение в степень **:</p>
  <pre><code class="lang-js">
const powerCalc = new Calculator()
powerCalc.addMethod('*', (a, b) => a * b)
powerCalc.addMethod('/', (a, b) => a / b)
powerCalc.addMethod('**', (a, b) => a ** b)

const result = powerCalc.calculate('2 ** 3')
console.log(result) // 8
  </code></pre>
  <ol>
    <li>Для этой задачи не нужны скобки или сложные выражения.</li>
    <li>Числа и оператор разделены ровно одним пробелом.</li>
    <li>Не лишним будет добавить обработку ошибок.</li>
  </ol>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>Обратите внимание, как хранятся методы. Они просто добавляются к внутреннему объекту. Все тесты и числовые преобразования выполняются в методе "calculate". В будущем он может быть расширен для поддержки более сложных выражений.</p>
      <pre><code class="lang-js">
function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  }

  this.calculate = function (str) {
    const split = str.split(' ')
    const a = +split[0]
    const op = split[1]
    const b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN

    return this.methods[op](a, b)
  }

  this.addMethod = function (name, func) {
    this.methods[name] = func
  }
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 28</h3>
  <p>У вас есть массив объектов "users", и у каждого из объектов есть firstName, lastName и id. Напишите код, который создаст еще один массив объектов с параметрами "id" и "fullName", где fullName – состоит из firstName и lastName. Например:</p>
  <pre><code class="lang-js">
const vasya = { firstName: 'Вася', lastName: 'Пупкин', id: 1 }
const petya = { firstName: 'Петя', lastName: 'Иванов', id: 2 }
const masha = { firstName: 'Маша', lastName: 'Петрова', id: 3 }

const users = [vasya, petya, masha]

// const usersMapped = ...

/*
  usersMapped = [
    { fullName: "Вася Пупкин", id: 1 },
    { fullName: "Петя Иванов", id: 2 },
    { fullName: "Маша Петрова", id: 3 }
  ]
*/

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // Вася Пупкин
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const usersMapped = users.map((user) => ({
  fullName: \`&#36;{user.firstName} &#36;{user.lastName}\`,
  id: user.id,
}))

// или
const usersMapped = users.map(({ firstName, lastName, id }) => ({
  fullName: \`&#36;{firstName} &#36;{lastName}\`,
  id,
}))
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 29</h3>
  <p>Напишите функцию "shuffle(array)", которая перемешивает (переупорядочивает случайным образом) элементы массива. Многократные прогоны через "shuffle" могут привести к разным последовательностям элементов. Например:</p>
  <pre><code class="lang-js">
const arr = [1, 2, 3]

shuffle(arr)
// arr = [3, 2, 1]

shuffle(arr)
// arr = [2, 1, 3]

shuffle(arr)
// arr = [3, 1, 2]
  </code></pre>
  <p>Все последовательности элементов должны иметь одинаковую вероятность. Например, [1, 2, 3] может быть переупорядочено как [1, 2, 3] или [1, 3, 2], или [3, 1, 2] и т.д., с равной вероятностью каждого случая.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
// Тасование Фишера-Йетса
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1)) // случайный индекс от 0 до i

    // меняем элементы местами
    // аналогично let t = arr[i]; arr[i] = arr[j]; arr[j] = t
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 30</h3>
  <p>Напишите функцию "getAverageAge(users)", которая принимает массив объектов со свойством "age" и возвращает средний возраст. Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N. Например:</p>
  <pre><code class="lang-js">
const users = [
  { name: 'Вася', age: 25 },
  { name: 'Петя', age: 30 },
  { name: 'Маша', age: 29 },
]

console.log(getAverageAge(users)) // (25 + 30 + 29) / 3 = 28
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const getAverageAge = (users) => users.reduce((acc, cur) => acc + cur.age) / users.length
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 31</h3>
  <p>Пусть "arr" – массив строк. Напишите функцию "unique(arr)", которая возвращает массив, содержащий только уникальные элементы "arr". Например:</p>
  <pre><code class="lang-js">
const arr = ['раз', 'раз', 'раз', 'два', 'три', 'проверка', 'проверка']

console.log(unique(arr)) // раз, два, три, проверка
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
// без использования Set
const unique = (arr, result = []) => {
  arr.forEach((str) => {
    !result.includes(str) && result.push(str)
  })
  return result
}

// с использованием Set
const unique = (arr) => [...new Set(arr)]
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 32</h3>
  <p>Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке. Например:</p>
  <pre><code class="lang-js">
nap - pan
ear - are - era
cheaters - hectares - teachers
  </code></pre>
  <p>Напишите функцию "aclean(arr)", которая возвращает массив слов, очищенный от анаграмм. Например:</p>
  <pre><code class="lang-js">
const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

alert(aclean(arr)) // "nap,teachers,ear" или "PAN,cheaters,era"
  </code></pre>
  <p>Из каждой группы анаграмм должно остаться только одно слово, неважно какое.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function aclean(arr) {
  const obj = {}

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].toLowerCase().split('').sort().join('')
    obj[sorted] = arr[i]
  }

  return Object.values(obj)
}

const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

console.log(aclean(arr))

// или
const aclean = (arr, obj = {}) => {
  for (const word of arr) {
    const sorted = word.toLowerCase().split('').sort().join('')
    obj[sorted] = word
  }
  return Object.values(obj)
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 33</h3>
  <p>Есть массив сообщений:</p>
  <pre><code class="lang-js">
const messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How are you?', from: 'Jane' },
  { text: 'See you soon', from: 'John' },
]
  </code></pre>
  <p>У вас есть к ним доступ, но управление этим массивом происходит где-то еще. Добавляются новые сообщения и удаляются старые, и вы не знаете, в какой момент это может произойти. Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос "было ли сообщение прочитано?". Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.</p>
  <p>Когда сообщение удаляется из массива "messages", оно должно также исчезать из структуры данных. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>Можно хранить прочитанные сообщения в WeakSet:</p>
      <pre><code class="lang-js">
const readMessages = new WeakSet()

readMessages.add(messages[0])
readMessages.add(messages[1])
// readMessages содержит 2 элемента

readMessages.add(messages[0])
// readMessages до сих пор содержит 2 элемента

// было ли сообщение message[0] прочитано?
console.log(\`Read message 0: &#36;{readMessages.has(messages[0])}\`) // true

messages.shift()
// теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)
      </code></pre>
      <p>WeakSet позволяет хранить набор сообщений и легко проверять наличие сообщения в нем. Он очищается автоматически. Минус в том, что мы не можем перебрать его содержимое, не можем получить "все прочитанные сообщения" напрямую. Но мы можем сделать это, перебирая все сообщения и фильтруя те, которые находятся в WeakSet. Альтернативным решением может быть добавление свойства вида "message.isRead = true" к сообщению после его прочтения. Так как сообщения принадлежат чужому коду, то это не очень хорошо, но если использовать свойство-символ, то вероятность конфликтов будет небольшой.</p>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 34</h3>
  <p>Есть массив сообщений:</p>
  <pre><code class="lang-js">
const messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How are you?', from: 'Jane' },
  { text: 'See you soon', from: 'John' },
]
  </code></pre>
  <p>Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано? В предыдущем задании нам нужно было сохранить только факт прочтения "да или нет". Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении "сборщиком мусора" сообщения.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>Для хранения даты мы можем использовать WeakMap:</p>
      <pre><code class="lang-js">
const readMap = new WeakMap()

readMap.set(messages[0], new Date().toLocaleDateString())
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 35</h3>
  <p>Напишите функцию "count(obj)", которая возвращает количество свойств объекта:</p>
  <pre><code class="lang-js">
const user = {
  name: 'John',
  age: 30,
}

console.log(count(user)) // 2
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const count = (obj) => Object.keys(obj).length
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 36</h3>
  <p>У нас есть объект "salaries" с зарплатами:</p>
  <pre><code class="lang-js">
const salaries = {
  John: 100,
  Jane: 200,
  Bob: 300,
  Alice: 400,
}
  </code></pre>
  <p>Создайте функцию "topSalary(salaries)", которая возвращает имя самого высокооплачиваемого сотрудника.</p>
  <ul>
    <li>Если объект "salaries" пустой, то нужно вернуть null.</li>
    <li>Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.</li>
  </ul>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function topSalary(salaries) {
  let max = 0
  let maxName = null

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary
      maxName = name
    }
  }

  return maxName
}

// или
const topSalary = (obj, keys = Object.keys(obj), values = Object.values(obj)) => (keys.length ? keys[values.indexOf(Math.max(...values))] : null)
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 37</h3>
  <p>В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени. Но иногда мы не можем использовать имя, так как могут быть и другие, нужные свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению. Напишите функцию "replacer" для JSON-преобразования, которая удалит свойства, ссылающиеся на "meetup":</p>
  <pre><code class="lang-js">
const room = {
  number: 23,
}

const meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
}

// цикличные ссылки
room.occupiedBy = meetup
meetup.self = meetup

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    // ...
  })
)

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    return key !== '' && value === meetup ? undefined : value
  })
)
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 38</h3>
  <p>Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как "n!" Определение факториала можно записать как:</p>
  <pre><code class="lang-js">
n! = n * (n - 1) * (n - 2) * ...*1
  </code></pre>
  <p>Примеры значений для разных n:</p>
  <pre><code class="lang-js">
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
  </code></pre>
  <p>Задача – написать функцию "factorial(n)", которая возвращает "n!", используя рекурсию.</p>
  <pre><code class="lang-js">
console.log(factorial(5)) // 120
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const factorial = (n) => (n ? n * factorial(n - 1) : 1)

// мемоизация
const memo = (fn, cache = Object.create(null)) => (val) => cache[val] || (cache[val] = fn(val))

const fact = (n) => (n < 0 ? new Error() : n === 0 || n === 1 ? 1 : n * fact(n - 1))

const memoFact = memo(fact)

console.time('t1')
console.log(memoFact(100))
console.timeEnd('t1') // 0.15
console.time('t2')
console.log(memoFact(101))
console.timeEnd('t2') // 0.05
console.time('t3')
console.log(memoFact(102))
console.timeEnd('t3') // 0.05
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 39</h3>
  <p>Последовательность чисел Фибоначчи определяется формулой "Fn = Fn - 1 + Fn - 2". То есть, следующее число получается как сумма двух предыдущих. Первые два числа равны 1, затем 2(1+1), 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21.... Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас. Напишите функцию "fib(n)" которая возвращает n-е число Фибоначчи. Пример работы:</p>
  <pre><code class="lang-js">
console.log(fib(3)) // 2
console.log(fib(7)) // 13
console.log(fib(77)) // 5527939700884757
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
// медленно
const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2))

// быстро
const fib = (n, a = 1, b = 1) => {
  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 40</h3>
  <p>Допустим, у нас есть такой односвязный список:</p>
  <pre><code class="lang-js">
const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
}
  </code></pre>
  <p>Напишите функцию "printList(list)", которая выводит элементы списка по одному, и другую функцию "printReverseList(list)", которая делает тоже самое, но в обратном порядке.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
// с использованием цикла
const printList = (list, tmp = list) => {
  while (tmp) {
    console.log(tmp.value)
    tmp = tmp.next
  }
}

const printReverseList = (list, tmp = list, arr = []) => {
  while (tmp) {
    arr.push(tmp.value)
    tmp = tmp.next
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
  }
}

// с использованием рекурсии
const printList = (list) => {
  console.log(list.value)
  if (list.next) {
    printList(list.next)
  }
}

const printReverseList = (list) => {
  if (list.next) {
    printReverseList(list.next)
  }
  console.log(list.value)
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 41</h3>
  <p>Напишите функцию "sum", которая работает таким образом: sum(a)(b) = a + b. Да, именно таким образом, используя двойные круглые скобки (не опечатка). Например:</p>
  <pre><code class="lang-js">
sum(1)(2) = 3
sum(5)(-1) = 4
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
// это называется каррированием (currying)
function sum(a) {
  return function (b) {
    return a + b
  }
}

// или
const sum = (a) => (b) => a + b
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 42</h3>
  <p>У нас есть встроенный метод "arr.filter(f)" для массивов. Он фильтрует все элементы с помощью функции "f". Если она возвращает true, то элемент добавится в возвращаемый массив. Сделайте набор "готовых к употреблению" фильтров:</p>
  <ol>
    <li>inBetween(a, b) – между a и b (включительно).</li>
    <li>inArray([...]) – находится в данном массиве.</li>
  </ol>
  <p>Они должны использоваться таким образом:</p>
  <ol>
    <li>arr.filter(inBetween(3, 6)) – выбирает только значения между 3 и 6 (включительно).</li>
    <li>arr.filter(inArray([1, 2, 3])) – выбирает только элементы, совпадающие с одним из элементов массива</li>
  </ol>
  <p>Например:</p>
  <pre><code class="lang-js">
const arr = [1, 2, 3, 4, 5, 6, 7]

console.log(arr.filter(inBetween(3, 6))) // 3, 4, 5, 6

console.log(arr.filter(inArray([1, 2, 10]))) // 1, 2
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b
  }
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x)
  }
}

// или
const inBetween = (a, b) => (x) => x >= a && x <= b

const inArray = (arr) => (x) => arr.includes(x)
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 43</h3>
  <p>У нас есть массив объектов, который нужно отсортировать:</p>
  <pre><code class="lang-js">
const users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
]
  </code></pre>
  <p>Обычный способ был бы таким:</p>
  <pre><code class="lang-js">
// по имени (Ann, John, Pete)
users.sort((a, b) => (a.name > b.name ? 1 : -1))

// по возрасту (Pete, Ann, John)
users.sort((a, b) => (a.age > b.age ? 1 : -1))
  </code></pre>
  <p>Можем ли мы сделать его короче, скажем, вот таким?</p>
  <pre><code class="lang-js">
users.sort(byField('name'))
users.sort(byField('age'))
  </code></pre>
  <p>То есть, чтобы вместо функции, мы просто писали "byField(fieldName)". Напишите функцию "byField", которая может быть использована для этого.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const byField = (field) => (a, b) => (a[field] > b[field] ? 1 : -1)
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 44</h3>
  <p>Напишите функцию "printNumbers(from, to)", которая выводит число каждую секунду, начиная от "from" и заканчивая "to". Сделайте два варианта решения.</p>
  <ol>
    <li>Используя setInterval.</li>
    <li>Используя рекурсивный setTimeout.</li>
  </ol>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
// setInterval
const printNumbers = (from, to) => {
  const timerId = setInterval(() => {
    console.log(from)
    from === to ? clearInterval(timerId) : from++
  }, 1000)
}

// setTimeout
function printNumbers(from, to) {
  setTimeout(function go() {
    console.log(from)
    if (from < to) setTimeout(go, 1000)
    from++
  }, 1000)
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 45</h3>
  <p>Создайте декоратор "spy(func)", который должен возвращать обертку, которая сохраняет все вызовы функции в своем свойстве "calls". Каждый вызов должен сохраняться как массив аргументов. Например:</p>
  <pre><code class="lang-js">
function work(a, b) {
  console.log(a + b) // произвольная функция или метод
}

work = spy(work)

work(1, 2) // 3
work(4, 5) // 9

for (const args of work.calls) {
  console.log(\`call:&#36;{args.join()}\`) // "call:1,2", "call:4,5"
}
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>Здесь мы можем использовать call.push(args) для хранения всех аргументов в списке и f.apply(this, args) для переадресации вызова.</p>
      <pre><code class="lang-js">
function spy(fn) {
  function wrap(...args) {
    wrap.calls.push(args)
    return fn.apply(this, arguments)
  }

  wrap.calls = []

  return wrap
}

// без this
const spy = (fn) => {
  const wrap = (...rest) => {
    wrap.calls.push(rest)
    return fn(...rest)
  }
  wrap.calls = []
  return wrap
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 46</h3>
  <p>Создайте декоратор "delay(f, ms)", который задерживает каждый вызов "f" на "ms" миллисекунд. Например:</p>
  <pre><code class="lang-js">
function f(x) {
  console.log(x)
}

// создаем обертки
let f1000 = delay(f, 1000)
let f1500 = delay(f, 1500)

f1000('test') // показывает "test" после 1000 мс
f1500('test') // показывает "test" после 1500 мс
  </code></pre>
  <p>Другими словами, "delay(f, ms)" возвращает вариант "f" с "задержкой на ms мс". В приведенном выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>Здесь мы можем использовать call.push(args) для хранения всех аргументов в списке и f.apply(this, args) для переадресации вызова.</p>
      <pre><code class="lang-js">
function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms)
  }
}

// без this
const delay = (fn, ms) => (...rest) => setTimeout(() => fn(...rest), ms)
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 47</h3>
  <p>Что выведет функция?</p>
  <pre><code class="lang-js">
function f() {
  console.log(this) // ?
}

const user = {
  g: f.bind(null),
}

user.g()
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <p>Функция выведет null.</p>
      <pre><code class="lang-js">
function f() {
  console.log(this) // null
}

const user = {
  g: f.bind(null),
}

user.g()
      </code></pre>
      <p>Контекст связанной функции жестко фиксирован. Изменить однажды привязанный контекст уже нельзя. Так что хоть мы и вызываем "user.g()", внутри исходная функция будет вызвана с this = null. Однако, функции "g" совершенно без разницы, какой this она получила. Ее единственное предназначение – это передать вызов в "f" вместе с аргументами и ранее указанным контекстом null, что она и делает. Таким образом, когда мы запускаем "user.g()", исходная функция вызывается с this = null.</p>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 48</h3>
  <p>Можем ли мы изменить this дополнительным связыванием? Что выведет этот код?</p>
  <pre><code class="lang-js">
function f() {
  console.log(this.name)
}

f = f.bind({ name: 'Вася' }).bind({ name: 'Петя' })

f() // ?
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <p>Функция выведет "Вася".</p>
      <pre><code class="lang-js">
function f() {
  console.log(this.name)
}

f = f.bind({ name: 'Вася' }).bind({ name: 'Петя' })

f() // Вася
      </code></pre>
      <p>Экзотический объект bound function, возвращаемый при первом вызове "f.bind()", запоминает контекст (и аргументы, если они были переданы) только во время создания. Следующий вызов "bind" будет устанавливать контекст уже для этого объекта. Это ни на что не повлияет. Можно сделать новую привязку, но нельзя изменить существующую.</p>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 49</h3>
  <p>Вызов "askPassword()" в приведённом ниже коде должен проверить пароль и затем вызвать "user.loginOk/loginFail" в зависимости от ответа. Однако, его вызов приводит к ошибке. Почему? Исправьте последнюю строку кода, чтобы все работало (других строк изменять не надо).</p>
  <pre><code class="lang-js">
function askPassword(ok, fail) {
  const password = prompt('Password?', '')
  if (password == 'rockstar') ok()
  else fail()
}

const user = {
  name: 'John',

  loginOk() {
    console.log(\`&#36;{this.name} logged in\`)
  },

  loginFail() {
    console.log(\`&#36;{this.name} failed to log in\`)
  },
}

askPassword(user.loginOk, user.loginFail)
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>Ошибка происходит потому, что "askPassword" получает функции "loginOk/loginFail" без контекста. Когда они вызываются, то, естественно, this = undefined. Используем "bind", чтобы передать в "askPassword" функции "loginOk/loginFail" с привязанным контекстом:</p>
      <pre><code class="lang-js">
function askPassword(ok, fail) {
  const password = prompt('Password?', '')
  if (password == 'rockstar') ok()
  else fail()
}

const user = {
  name: 'John',

  loginOk() {
    console.log(\`&#36;{this.name} logged in\`)
  },

  loginFail() {
    console.log(\`&#36;{this.name} failed to log in\`)
  },
}

askPassword(user.loginOkюиштв(user), user.loginFail.bind(user))
      </code></pre>
      <p>Теперь все работает корректно. Альтернативное решение – сделать функции-обертки над "user.loginOk/loginFail":</p>
      <pre><code class="lang-js">
askPassword(
  () => user.loginOk(),
  () => user.loginFail()
)
      </code></pre>
      <p>Обычно, это также работает и хорошо выглядит. Но может не сработать в более сложных ситуациях, а именно – когда значение переменной "user" меняется между вызовом "askPassword" и выполнением "() => user.loginOk()".</p>
    </div>
  </details>
</section>

<section>
  <h3>Задача № 50</h3>
  <p>Это задание является немного усложненным вариантом предыдущего. Объект "user" был изменен. Теперь вместо двух функций "loginOk/loginFail" у него есть только одна – user.login(true/false). Что нужно передать в вызов функции "askPassword" в коде ниже, чтобы она могла вызывать функцию "user.login(true)" как "ok" и функцию "user.login(false)" как "fail"?</p>
  <pre><code class="lang-js">
function askPassword(ok, fail) {
  const password = prompt('Password?', '')
  if (password == 'rockstar') ok()
  else fail()
}

const user = {
  name: 'John',

  login(result) {
    console.log(this.name + (result ? ' logged in' : ' failed to log in'))
  },
}

askPassword() // ?
  </code></pre>
  <p>Ваши изменения должны затрагивать только последнюю строку кода.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>Можно использовать стрелочную функцию-обертку:</p>
      <pre><code class="lang-js">
askPassword(
  () => user.login(true),
  () => user.login(false)
)
      </code></pre>
      <p>Или же можно создать частично примененную функцию на основе "user.login", которая использует объект "user" в качестве контекста и получает соответствующий первый аргумент:</p>
      <pre><code class="lang-js">
askPassword(user.login.bind(user, true), user.login.bind(user, false))
      </code></pre>
    </div>
  </details>
</section>
<section>
  <h2>Задача № 51</h2>
  <p>
    Объект rabbit наследует от объекта animal. Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?
  </p>
  <pre><code class="lang-js">
const animal = {
  eat() {
    this.full = true
  }
}

const rabbit = {
  __proto__: animal
}

rabbit.eat()
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <p>Поскольку this – это объект, который стоит перед точкой, rabbit.eat() изменяет объект rabbit. Поиск свойства и исполнение кода – два разных процесса. Сначала осуществляется поиск метода rabbit.eat в прототипе, а затем этот метод выполняется с this=rabbit.</p>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 52</h2>
  <p>
    У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster. Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
  </p>
  <pre><code class="lang-js">
const hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food)
  }
}

const speedy = {
  __proto__: hamster
}

const lazy = {
  __proto__: hamster
}

speedy.eat("apple")
console.log( speedy.stomach ) // apple

console.log( lazy.stomach ) // apple
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <p>Давайте внимательно посмотрим, что происходит при вызове speedy.eat("apple").</p>
      <ol>
        <li>Сначала в прототипе (=hamster) находится метод speedy.eat, а затем он выполняется с this=speedy (объект перед точкой).</li>
        <li>Затем в this.stomach.push() нужно найти свойство stomach и вызвать для него push. Движок ищет stomach в this (=speedy), но ничего не находит.</li>
        <li>Он идёт по цепочке прототипов и находит stomach в hamster.</li>
        <li>И вызывает для него push, добавляя еду в живот прототипа.</li>
      </ol>
      <p>Получается, что у хомяков один живот на двоих! И при lazy.stomach.push(...) и при speedy.stomach.push(), свойство stomach берётся из прототипа (так как его нет в самом объекте), затем в него добавляются данные. Обратите внимание, что этого не происходит при простом присваивании this.stomach=:</p>
      <pre><code class="lang-js">
const hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food]
  }
}

const speedy = {
  __proto__: hamster
}

const lazy = {
  __proto__: hamster
}

speedy.eat("apple")
console.log( speedy.stomach ) // apple

console.log( lazy.stomach ) // пусто
      </code></pre>
      <p>Теперь всё работает правильно, потому что this.stomach= не ищет свойство stomach. Значение записывается непосредственно в объект this. Также мы можем полностью избежать проблемы, если у каждого хомяка будет собственный живот:</p>
      <pre><code class="lang-js">
const hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food)
  }
}

const speedy = {
  __proto__: hamster,
  stomach: []
}

const lazy = {
  __proto__: hamster,
  stomach: []
}

speedy.eat("apple")
console.log( speedy.stomach ) // apple

console.log( lazy.stomach ) // пусто
      </code></pre>
      <p>Все свойства, описывающие состояние объекта (как свойство stomach в примере выше), рекомендуется записывать в сам этот объект. Это позволяет избежать подобных проблем.</p>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 53</h2>
  <p>
    Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа. Можем ли мы сделать так?
  </p>
  <pre><code class="lang-js">
const obj2 = new obj.constructor()
  </code></pre>
  <p>Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.</p>
  <details>
    <summary>Ответ</summary>
    <div>
      <p>Мы можем использовать такой способ, если мы уверены в том, что свойство "constructor" существующего объекта имеет корректное значение. Например, если мы не меняли "prototype", используемый по умолчанию, то код ниже, без сомнений, сработает:</p>
      <pre><code class="lang-js">
function User(name) {
  this.name = name
}

const user = new User('John')
const user2 = new user.constructor('Jane')

console.log( user2.name ) // Jane
      </code></pre>
      <p>Всё получилось, потому что User.prototype.constructor == User. Но если кто-то перезапишет User.prototype и забудет заново назначить свойство "constructor", чтобы оно указывало на User, то ничего не выйдет. Например:</p>
      <pre><code class="lang-js">
function User(name) {
  this.name = name
}
User.prototype = {} // (*)

const user = new User('John')
const user2 = new user.constructor('Jane')

console.log( user2.name ) // undefined
      </code></pre>
      <p>Почему user2.name приняло значение undefined? Рассмотрим, как отработал вызов new user.constructor('Jane'):</p>
      <ol>
        <li>Сначала ищется свойство constructor в объекте user. Не нашлось.</li>
        <li>Потом задействуется поиск по цепочке прототипов. Прототип объекта user – это User.prototype, и там тоже нет искомого свойства.</li>
        <li>Значение User.prototype – это пустой объект {}, чей прототип – Object.prototype. Object.prototype.constructor === Object. Таким образом, свойство constructor всё-таки найдено.</li>
      </ol>
      <p>Наконец, срабатывает const user2 = new Object('Jane'), но конструктор Object игнорирует аргументы, он всегда создаёт пустой объект: const user2 = {} – это как раз то, чему равен user2 в итоге.</p>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 54</h2>
  <p>
    Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд. Например, должно работать так:
  </p>
  <pre><code class="lang-js">
function f(a, b) {
  console.log( a + b )
}

f.defer(1000)(1, 2) // 3 через 1 секунду
  </code></pre>
  <p>Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>Мы можем использовать такой способ, если мы уверены в том, что свойство "constructor" существующего объекта имеет корректное значение. Например, если мы не меняли "prototype", используемый по умолчанию, то код ниже, без сомнений, сработает:</p>
      <pre><code class="lang-js">
Function.prototype.defer = function(ms) {
  let f = this
  return function(...args) {
    setTimeout(() => f.apply(this, args), ms)
  }
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 55</h2>
  <p>
    Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение. Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in. Вот так это должно работать:
  </p>
  <pre><code class="lang-js">
const dictionary = Object.create(null)

// ...

dictionary.apple = "apple"
dictionary.banana = "banana"

for(const key in dictionary) {
  console.log(key) // apple banana
}

alert(dictionary) // apple,banana
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>В методе можно получить все перечисляемые ключи с помощью Object.keys и вывести их список. Чтобы сделать toString неперечисляемым, давайте определим его, используя дескриптор свойства. Синтаксис Object.create позволяет нам добавить в объект дескрипторы свойств как второй аргумент.</p>
      <pre><code class="lang-js">
const dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join()
    }
  }
})

// или
const dictionary = Object.create(null)

Object.defineProperty(dictionary, 'toString', {
    value: () => Object.keys(dictionary).join()
})
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 56</h2>
  <p>
    Класс Clock написан в функциональном стиле:
  </p>
  <pre><code class="lang-js">
function Clock({ template }) {
  let timer

  function render() {
    const date = new Date()

    const hours = date.getHours()
    if (hours < 10) hours = '0' + hours

    const mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins

    const secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs

    const output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)

    console.log(output)
  }

  this.stop = function () {
    clearInterval(timer)
  }

  this.start = function () {
    render()
    timer = setInterval(render, 1000)
  }
}

const clock = new Clock({ template: 'h:m:s' })
clock.start()
  </code></pre>
  <p>Перепишите его, используя современный синтаксис классов.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
class Clock {
  constructor({ template }) {
    this.template = template
  }

  render() {
    const date = new Date()

    const hours = date.getHours()
    if (hours < 10) hours = '0' + hours

    const mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins

    const secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs

    const output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)

    console.log(output)
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }
}

const clock = new Clock({ template: 'h:m:s' })
clock.start()
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 57</h2>
  <p>
    У нас есть класс Clock. Сейчас он выводит время каждую секунду:
  </p>
  <pre><code class="lang-js">
class Clock {
  constructor({ template }) {
    this.template = template
  }

  render() {
    const date = new Date()

    const hours = date.getHours()
    if (hours < 10) hours = '0' + hours

    const mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins

    const secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs

    const output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs)

    console.log(output)
  }

  stop() {
    clearInterval(this.timer)
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), 1000)
  }
}
  </code></pre>
  <p>Создайте новый класс ExtendedClock, который будет наследоваться от Clock и добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию. Не изменяйте класс Clock. Расширьте его</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
class ExtendedClock extends Clock {
  constructor(options) {
    super(options)
    const { precision = 1000 } = options
    this.precision = precision
  }

  start() {
    this.render()
    this.timer = setInterval(() => this.render(), this.precision)
  }
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 58</h2>
  <p>
    Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().
  </p>
  <pre><code class="lang-js">
function A() {}
function B() {}

A.prototype = B.prototype = {}

const a = new A()

console.log( a instanceof B ) // true
clock.start()
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <p>
        Да, действительно, выглядит странно. Но instanceof не учитывает саму функцию при проверке, а только prototype, который проверяется на совпадения в прототипной цепочке. И в данном примере a.__proto__ == B.prototype, так что instanceof возвращает true. Таким образом, по логике instanceof, именно prototype в действительности определяет тип, а не функция-конструктор.
      </p>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 59</h2>
  <p>
    Создайте класс FormatError, который наследует от встроенного класса SyntaxError. Класс должен поддерживать свойства message, name и stack. Пример использования:
  </p>
  <pre><code class="lang-js">
const err = new FormatError("ошибка форматирования")

console.log( err.message ) // ошибка форматирования
console.log( err.name ) // FormatError
console.log( err.stack ) // stack

console.log( err instanceof FormatError ) // true
console.log( err instanceof SyntaxError ) // true
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
class FormatError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = "FormatError"
  }
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 60</h2>
  <p>
    Что выведет код ниже?
  </p>
  <pre><code class="lang-js">
const promise = new Promise(function(resolve, reject) {
  resolve(1)

  setTimeout(() => resolve(2), 1000)
})

promise.then(console.log)
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <p>
        Вывод будет: 1. Второй вызов resolve будет проигнорирован, поскольку учитывается только первый вызов reject/resolve. Все последующие вызовы – игнорируются.
      </p>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 61</h2>
  <p>
    Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы. Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
  </p>
  <pre><code class="lang-js">
function delay(ms) {
  // ...
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'))
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))
      </code></pre>
      <p>Заметьте, что resolve вызывается без аргументов. Мы не возвращаем из delay ничего, просто гарантируем задержку.</p>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 62</h2>
  <p>
    Что вы думаете? Выполнится ли .catch? Поясните свой ответ.
  </p>
  <pre><code class="lang-js">
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!")
  }, 1000)
}).catch(console.log)
  </code></pre>
  <details>
    <summary>Ответ</summary>
    <div>
      <p>Нет, не выполнится. Здесь присутствует "скрытый try..catch" вокруг кода функции. Поэтому обрабатываются все синхронные ошибки. В данном примере ошибка генерируется не по ходу выполнения кода, а позже. Поэтому промис не может обработать её.</p>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 63</h2>
  <p>
    Перепишите пример, используя async/await:
  </p>
  <pre><code class="lang-js">
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json()
      } else {
        throw new Error(response.status)
      }
    })
}
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
async function loadJson(url) {
  const response = await fetch(url)

  const {status} = response

  if (status === 200) {
    const json = await response.json()
    return json
  }

  throw new Error(status)
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 64</h2>
  <p>
    Перепишите пример, используя async/await:
  </p>
  <pre><code class="lang-js">
class HttpError extends Error {
  constructor(response) {
    super(\`\${response.status} for \${response.url}\`)
    this.name = 'HttpError'
    this.response = response
  }
}

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json()
      } else {
        throw new HttpError(response)
      }
    })
}

function demoGithubUser() {
  let name = prompt("Введите логин?", "harryheman")

  return loadJson(\`https://api.github.com/users/\${name}\`)
    .then(user => {
      alert(\`Полное имя: \${user.name}.\`)
      return user
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.")
        return demoGithubUser()
      } else {
        throw err
      }
    })
}

demoGithubUser()
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
class HttpError extends Error {
  constructor(response) {
    super(\`\${response.status} for \${response.url}\`)
    this.name = 'HttpError'
    this.response = response
  }
}

async function loadJson(url) {
  let response = await fetch(url)
  if (response.status == 200) {
    return response.json()
  } else {
    throw new HttpError(response)
  }
}

async function demoGithubUser() {
  let user
  while(true) {
    const name = prompt("Введите логин?", "harryheman")

    try {
      user = await loadJson(\`https://api.github.com/users/\${name}\`)
      break
    } catch(err) {
      if (err instanceof HttpError && err.response.status === 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.")
      } else {
        throw err
      }
    }
  }

  alert(\`Полное имя: \${user.name}.\`)
  return user
}

demoGithubUser()
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 65</h2>
  <p>
    Обычно при чтении несуществующего свойства из объекта возвращается undefined. Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство. Это может помочь обнаружить программные ошибки пораньше. Напишите функцию wrap(target), которая берёт объект target и возвращает прокси, добавляющий в него этот аспект функциональности. Вот как это должно работать:
  </p>
  <pre><code class="lang-js">
const user = {
  name: "John"
}

function wrap(target) {
  return new Proxy(target, {
      // ...
  })
}

user = wrap(user)

console.log(user.name) // John
console.log(user.age) // Ошибка: такого свойства не существует
  </code></pre>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver)
      } else {
        throw new ReferenceError(\`Свойства "\${prop}" не существует\`)
      }
    }
  })
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 66</h2>
  <p>
    Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси. Вот как это должно работать:
  </p>
  <pre><code class="lang-js">
function makeObservable(target) {
  // ...
}

const user = {}
user = makeObservable(user)

user.observe((key, value) => {
  console.log(\`SET \${key}=\${value}\`)
})

user.name = "John" // SET name=John
  </code></pre>
  <p>Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств. При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <p>Решение состоит из двух частей:</p>
      <ol>
        <li>При вызове .observe(handler) нам нужно где-то сохранить обработчик, чтобы вызвать его позже. Можно хранить обработчики прямо в объекте, создав в нём для этого свой символьный ключ.</li>
        <li>Нам нужен прокси с ловушкой set, чтобы вызывать обработчики при изменении свойств.</li>
      </ol>
      <pre><code class="lang-js">
const handlers = Symbol('handlers')

function makeObservable(target) {
  target[handlers] = []

  target.observe = function(handler) {
    this[handlers].push(handler)
  }

  return new Proxy(target, {
    set(target, property, value) {
      const success = Reflect.set(...arguments)
      if (success) {
        target[handlers].forEach(handler => handler(property, value))
      }
      return success
    }
  })
}
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 67</h2>
  <p>
    Создайте калькулятор, который запрашивает ввод какого-нибудь арифметического выражения и возвращает результат его вычисления.
  </p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const expr = prompt("Введите арифметическое выражение:", '2*3/2')

const calc = expr => {
  if (!expr) return

  ;[...expr].forEach(char => {
    if (!char.match(/[\d\+\-*/]+/)) {
      throw new Error('wrong symbol')
    }
  })

  return eval(expr)
}

console.log(calc(expr))
      </code></pre>
    </div>
  </details>
</section>

<section>
  <h2>Задача № 68</h2>
  <p>
    Используя Intl.Collator, отсортируйте массив:
  </p>
  <pre><code class="lang-js">
const animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"]

// ...

console.log(animals)
// ["АИСТ", "ёж", "енот", "ехидна", "тигр", "ЯК"]
  </code></pre>
  <p>В этом примере порядок сортировки не должен зависеть от регистра. Что касается буквы "ё", то мы следуем обычным правилам сортировки буквы ё, по которым «е» и «ё» считаются одной и той же буквой, за исключением случая, когда два слова отличаются только в позиции буквы «е» / «ё» – тогда слово с «е» ставится первым.</p>
  <details>
    <summary>Возможное решение</summary>
    <div>
      <pre><code class="lang-js">
const collator = new Intl.Collator()

animals.sort((a, b) => collator.compare(a, b))

console.log(animals.sort())
// // ["АИСТ", "ЯК", "енот", "ехидна", "тигр", "ёж"]
      </code></pre>
    </div>
  </details>
</section>
<a href="#top"><button id="top_btn">Наверх</button></a>
`
