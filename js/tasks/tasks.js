export default `
<h2>Решай и проверяй</h2>
<a href="#top"><button id="top_btn">Наверх</button></a>
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
`
