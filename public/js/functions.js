export default /*html*/ `
<section>
<h3>40 функций</h3>
<details>
<summary>Список</summary>
<div>
<a href="#fib">Числа Фибоначчи</a>
<a href="#fact">Факториал</a>
<a href="#randint">Cлучайное целое число в заданном диапазоне</a>
<a href="#hexcol">Случайный HEX-цвет</a>
<a href="#rgbacol">Случайный RGBA-цвет</a>
<a href="#style">Стили элемента</a>
<a href="#type">Тип объекта</a>
<a href="#invertstr">Инверсия строки</a>
<a href="#palindrome">Палиндром</a>
<a href="#invertint">Инверсия числа</a>
<a href="#fizz">Fizz buzz</a>
<a href="#maxocur">Символы с максимальным и единичным числом вхождений</a>
<a href="#anagrams">Анаграммы</a>
<a href="#vowels">Количество гласных в строке</a>
<a href="#chunk">Разделение массива на части</a>
<a href="#invertarr">Инверсия массива без reverse()</a>
<a href="#comparearr">Сравнение массивов</a>
<a href="#minmax">Минимальное и максимальное значения массива без Math</a>
<a href="#cap">Капитализация слов</a>
<a href="#trunc">Сокращение слов и предложений</a>
<a href="#stair">Лестница</a>
<a href="#pyramid">Пирамида</a>
<a href="#spiral">Спиральная матрица</a>
<a href="#caesar">Шифр Цезаря</a>
<a href="#ransom">Возможность составления фразы из набора слов</a>
<a href="#twosum">Сумма двух чисел</a>
<a href="#erato">Решето Эратосфена</a>
<a href="#shuffle">Тасование Фишера-Йетса</a>
<a href="#formtoobj">Преобразование формы в объект</a>
<a href="#objprops">Извлечение свойств объекта</a>
<a href="#deepprops">Глубоко вложенные свойства объекта</a>
<a href="#ms">Миллисекунды в днях, часах, минутах и т.д.</a>
<a href="#group">Группировка по критерию</a>
<a href="#iter">Создание итерируемого объекта</a>
<a href="#readonly">Создание объекта только для чтения</a>
<a href="#pubsub">Публикация/подписка</a>
<a href="#state">Переключение состояния</a>
<a href="#memo">Мемоизация</a>
<a href="#curry">Каррирование</a>
<a href="#throttle">Throttle</a>
<a href="#debounce">Debounce</a>
<a href="#get">GET HTTP-запрос</a>
<a href="#post">POST HTTP-запрос</a>
</div>
</details>
</section>
<section>
<h3><a name="fib"></a><a target="_blank" rel="noopener" href="https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8">Числа Фибоначчи</a></h3>
<pre><code class="lang-js">
function fib(n) {
  if (n < 0) throw new Error('error')
  if (n <= 1) return n

  let a = 1, b = 1

  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }

  return b
}

console.log(fib(10)) // 55

</code></pre>
</section>
<section>
<h3><a name="fact"></a><a target="_blank" rel="noopener" href="https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D0%B0%D0%BB">Факториал</a></h3>
<pre><code class="lang-js">
function fact(n) {
  if (n < 0) throw new Error('error')
  if (n <= 1) return 1

  return n * fact(n - 1)
}

console.log(fact(5)) // 120

</code></pre>
</section>
<section>
<h3><a name="randint"></a>Cлучайное целое число в заданном диапазоне</h3>
<pre><code class="lang-js">
const getRandomInt = (min, max) => ~~(min + Math.random() * (max + 1 - min))

</code></pre>
</section>
<section>
<h3><a name="hexcol"></a>Случайный HEX-цвет</h3>
<pre><code class="lang-js">
const getRandomHEXColor = () =>
  \`#\${((Math.random() * 0xffffff) << 0).toString(16)}\`

</code></pre>
</section>
<section>
<h3><a name="rgbacol"></a>Случайный RGBA-цвет</h3>
<pre><code class="lang-js">
function getRandomRGBAColor(opacity) {
  const random = () => ~~(Math.random() * 255)
  return \`rgba(\${random()}, \${random()}, \${random()}, \${opacity})\`
}

</code></pre>
</section>
<section>
<h3><a name="style"></a>Стили элемента</h3>
<pre><code class="lang-js">
const getStyle = (element, property) =>
  getComputedStyle(element).getPropertyValue(property)

</code></pre>
</section>
<section>
<h3><a name="type"></a>Тип объекта</h3>
<pre><code class="lang-js">
const getRawType = (value) => Object.prototype.toString.call(value).slice(8, -1)

console.log(getRawType({})) // Object
console.log(getRawType([])) // Array
console.log(getRawType(function fn1() {})) // Function
console.log(getRawType(() => {})) // Function

</code></pre>
</section>
<section>
<h3><a name="invertstr"></a>Инверсия строки</h3>
<pre><code class="lang-js">
// 1
function reverse(str) {
  let res = ''
  for (const char of str) res = char + res
  return res
}

console.log(reverse('foo')) // oof

// 2
const _reverse = str => [...str].reduce((res, char) => char + res)

</code></pre>
</section>
<section>
<h3><a name="palindrome"></a><a target="_blank" rel="noopener" href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BB%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC">Палиндром</a></h3>
<pre><code class="lang-js">
// 1
const palindrome = (str) =>
  [...str].every(
    (char, index) =>
      char === str[str.length - 1 - index]
  )

console.log(palindrome('foooof')) // true

// 2
const _palindrome = (str) => str === [...str].reverse().join('')

</code></pre>
</section>
<section>
<h3><a name="invertint"></a>Инверсия числа</h3>
<pre><code class="lang-js">
const reverseInt = (n) =>
  [...(n.toString().replace(/[-+]/, ''))]
    .reverse().join('') * Math.sign(n)

console.log(reverseInt(-12)) // -21

</code></pre>
</section>
<section>
<h3><a name="fizz"></a><a target="_blank" rel="noopener" href="https://ru.wikipedia.org/wiki/Fizz_buzz">Fizz buzz</a></h3>
<pre><code class="lang-js">
// 1
function fizzBuzz(n) {
  const arr = []
  do {
    if (n % 15 === 0) arr.push('Fizz Buzz')
    else if (n % 3 === 0) arr.push('Fizz')
    else if (n % 5 === 0) arr.push('Buzz')
    else arr.push(n)
  } while (n-- > 1)
  return arr
}

console.log(fizzBuzz(15))
// ["Fizz Buzz", 14, 13, "Fizz", 11, "Buzz", "Fizz", 8, 7, "Fizz", "Buzz", 4, "Fizz", 2, 1]

// 2
function _fizzBuzz(n) {
  const arr = []
  for (let i = 1; i <= n; i++) {
    let a = i % 3 === 0,
    b = i % 5 === 0
    arr.push(a ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i)
  }
  return arr
}

console.log(_fizzBuzz(15))
// [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

</code></pre>
</section>
<section>
<h3><a name="maxocur"></a>Символы с максимальным и единичным числом вхождений</h3>
<pre><code class="lang-js">
// max
function maxOccur(str) {
  const charsObj = {}

  for (const char of str)
    charsObj[char] = charsObj[char] + 1 || 1

  return Object.keys(charsObj)
    .find(
      char => charsObj[char] === Math.max(...Object.values(charsObj))
    )
}

console.log(maxOccur('bbaccc')) // c

// single
const singleOccur = str =>
  [...str].find(char => str.indexOf(char) === str.lastIndexOf(char))

console.log(singleOccurence('bbaccc')) // a

</code></pre>
</section>
<section>
<h3><a name="anagrams"></a><a target="_blank" rel="noopener" href="https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B0">Анаграммы</a></h3>
<pre><code class="lang-js">
// 1
const sort = (str) => [...str.replace(/\W/g, '').toLowerCase()].sort().join('')

const anagrams = (str1, str2) => sort(str1) === sort(str2)

console.log(anagrams('Foo bar', 'Bar foo')) // true

// 2
const _anagrams = (str1, str2) =>
  [...str1.toLowerCase()].every((char) => str2.toLowerCase().includes(char))

</code></pre>
</section>
<section>
<h3><a name="vowels"></a>Количество гласных в строке</h3>
<pre><code class="lang-js">
const vowels = (str) => str.match(/[aeiouy]/gi)?.length || 0

console.log(vowels('bAr baz')) // 2

</code></pre>
</section>
<section>
<h3><a name="chunk"></a>Разделение массива на части</h3>
<pre><code class="lang-js">
// 1
function chunk(arr, size) {
  const chunks = []

  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }

  return chunks
}

console.log(chunk([1, 2, 3, 4], 3)) // [[1, 2, 3], [4]]

// 2
const _chunk = (arr, size) =>
  arr.length > size ? [arr, arr.splice(size)] : arr

</code></pre>
</section>
<section>
<h3><a name="invertarr"></a>Инверсия массива без reverse()</h3>
<pre><code class="lang-js">
// 1
function reverse(arr) {
  for (let i = 0; i < array.length / 2; i++) {
    ;[arr[i], arr[arr.length - 1 - i]] = [
      arr[arr.length - 1 - i],
      arr[i],
    ]
  }
  return arr
}

console.log(reverse([1, 2, 3])) // [3, 2, 1]

// 2
function _reverse(arr) {
  const newArr = []
  while (arr.length) {
    newArr.push(...arr.splice(arr.length - 1))
  }
  return newArr
}

</code></pre>
</section>
<section>
<h3><a name="comparearr"></a>Сравнение массивов</h3>
<pre><code class="lang-js">
const compare = (arr1, arr2) =>
  arr1.length === arr2.length &&
  arr1.sort().every((value, index) => value === arr2[index])

  const arr1 = [1, 3, 5, 7, 9]
  const arr2 = [1, 3, 5, 7, 9]

  console.log(arr1 === arr2) // false
  console.log(compare(arr1, arr2)) // true

</code></pre>
</section>
<section>
<h3><a name="minmax"></a>Минимальное и максимальное значения массива без Math</h3>
<pre><code class="lang-js">
const min = (arr) => {
  let len = arr.length
  let min = Infinity

  while (len--) {
    if (arr[len] < min) {
      min = arr[len]
    }
  }

  return min
}

const max = (arr) => {
  let len = arr.length
  let max = -Infinity
  while (len--) {
    if (arr[len] > max) {
      max = arr[len]
    }
  }
  return max
}

const arr = [1, 3, 5, 7, 9]

console.log(min(arr)) // 1
console.log(max(arr)) // 9

</code></pre>
</section>
<section>
<h3><a name="cap"></a>Капитализация слов</h3>
<pre><code class="lang-js">
const capitilize = (str) =>
  str
    .split(' ')
    .map((w) => \`\${w[0].toUpperCase()}\${w.slice(1)}\`)
    .join(' ')

console.log(capitilize('foo bar')) // Foo Bar

</code></pre>
</section>
<section>
<h3><a name="trunc"></a>Сокращение слов и предложений</h3>
<pre><code class="lang-js">
const truncStr = (str, num) =>
  str.length > num ? str.substr(0, num - 3) + '...' : str

console.log(truncStr('JavaScript', 7)) // Java...

const _truncStr = (str, num) => str.split(' ').slice(0, num).join(' ')

console.log(_truncStr('JavaScript is awesome!', 1)) // JavaScript

</code></pre>
</section>
<section>
<h3><a name="stair"></a>Лестница</h3>
<pre><code class="lang-js">
const steps = (n) => {
  let stairs = ''

  for (let r = 0; r < n; r++) {
    let stair = ''

    for (let c = 0; c < n; c++) {
      stair += c <= r ? '#' : ' '
    }

    stairs += stair + '\n'
  }

  return stairs
}

console.log(steps(5))
/*
  #
  ##
  ###
  ####
  #####
*/

const _steps = (n, r = 0, stair = '', stairs = '') => {
  if (r === n) return stairs

  if (stair.length === n) return _steps(n, r + 1, '', stairs + stair + '\n')

  return _steps(n, r, stair + (stair.length <= r ? '#' : ' '), stairs)
}

</code></pre>
</section>
<section>
<h3><a name="pyramid"></a>Пирамида</h3>
<pre><code class="lang-js">
const pyramid = (n) => {
  let levels = ''
  const mid = ~~((2 * n - 1) / 2)

  for (let r = 0; r < n; r++) {
    let level = ''

    for (let c = 0; c < 2 * n - 1; c++) {
      level += mid - r <= c && c <= mid + r ? '#' : ' '
    }

    levels += level + '\n'
  }

  return levels
}

console.log(pyramid(5))

/*
    #
   ###
  #####
 #######
#########
*/

const _pyramid = (n, r = 0, level = '', levels = '') => {
  if (n === r) return levels

  if (2 * n - 1 === level.length)
    return _pyramid(n, r + 1, '', levels + level + '\n')

  const mid = ~~((2 * n - 1) / 2)

  return _pyramid(
    n,
    r,
    level + (mid - r <= level.length && level.length <= mid + r ? '#' : ' '),
    levels
  )
}

</code></pre>
</section>
<section>
<h3><a name="spiral"></a>Спиральная матрица</h3>
<pre><code class="lang-js">
const spiral = (n) => {
  let counter = 1
  let startR = 0,
    endR = n - 1
  let startC = 0,
    endC = n - 1

  const matrix = []

  for (let i = 0; i < n; i++) matrix.push([])

  while (startC <= endC && startR <= endR) {
    for (let i = startC; i <= endC; i++) {
      matrix[startR][i] = counter
      counter++
    }
    startR++

    for (let i = startR; i <= endR; i++) {
      matrix[i][endC] = counter
      counter++
    }
    endC--

    for (let i = endC; i >= startC; i--) {
      matrix[endR][i] = counter
      counter++
    }
    endR--

    for (let i = endR; i >= startR; i--) {
      matrix[i][startC] = counter
      counter++
    }
    startC++
  }

  return matrix
}

console.log(spiral(3))
/*
[
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
]
*/

</code></pre>
</section>
<section>
<h3><a name="caesar"></a><a target="_blank" rel="noopener" href="https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F">Шифр Цезаря</a></h3>
<pre><code class="lang-js">
function caesarCipher(str, num) {
  const arr = [...'abcdefghijklmnopqrstuvwxyz']
  let newStr = ''

  for (const char of str) {
    const lower = char.toLowerCase()

    if (!arr.includes(lower)) {
      newStr += char
      continue
    }

    let index = arr.indexOf(lower) + (num % 26)

    if (index > 25) index -= 26
    if (index < 0) index += 26

    newStr +=
      char === char.toUpperCase() ? arr[index].toUpperCase() : arr[index]
  }
  return newStr
}

console.log(caesarCipher('Hello World', 100)) // Dahhk Sknhz
console.log(caesarCipher('Dahhk Sknhz', -100)) // Hello World

</code></pre>
</section>
<section>
<h3><a name="ransom"></a>Возможность составления фразы из набора слов</h3>
<pre><code class="lang-js">
// 1
function ransomNote(note, magazine) {
  const hash = {}

  magazine.split(' ').forEach((word) => {
    if (!hash[word]) hash[word] = 0
    hash[word]++
  })

  let possible = true

  note.split(' ').forEach((word) => {
    if (hash[word] && hash[word] > 0) {
      hash[word]--
    } else possible = false
  })

  return possible
}

const words = 'The quick brown fox jumps over the lazy dog'

console.log(ransomNote('quick fox', words)) // true
console.log(ransomNote('lazy dog', words)) // true
console.log(ransomNote('big dog', words)) // false

// 2
const _ransomNote = (note, magazine) =>
  note
    .split(' ')
    .every((word) =>
      magazine.includes(word)
        ? (magazine = magazine.replace(word, ''))
        : false
    )

</code></pre>
</section>
<section>
<h3><a name="twosum"></a>Сумма двух чисел</h3>
<pre><code class="lang-js">
function twoSum (arr, sum) {
  const pairs = []

  for (const part1 of arr) {
    const part2 = sum - part1

    if (arr.includes(part2)) {
      pairs.push([part1, part2])
      arr.splice(arr.indexOf(part2, 1))
    }
  }

  return pairs
}

console.log(twoSum([1, 2, 2, 3, 4], 4)) // [[1, 3], [2, 2]]

</code></pre>
</section>
<section>
<h3><a name="erato"></a><a target="_blank" rel="noopener" href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D1%88%D0%B5%D1%82%D0%BE_%D0%AD%D1%80%D0%B0%D1%82%D0%BE%D1%81%D1%84%D0%B5%D0%BD%D0%B0">Решето Эратосфена</a></h3>
<pre><code class="lang-js">
function primes(num) {
  const arr = new Array(num + 1)
  arr.fill(true)
  arr[0] = arr[1] = false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = 2; i * j <= num; j++) {
      arr[i * j] = false
    }
  }

  return arr.reduce(
    (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
    []
  )
}

console.log(primes(10)) // [2, 3, 5, 7]

</code></pre>
</section>
<section>
<h3><a name="shuffle"></a><a target="_blank" rel="noopener" href="https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%A4%D0%B8%D1%88%D0%B5%D1%80%D0%B0_%E2%80%94_%D0%99%D0%B5%D1%82%D1%81%D0%B0">Тасование Фишера-Йетса</a></h3>
<pre><code class="lang-js">
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1))

    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

console.log(shuffle([1, 2, 3, 4, 5])) // [3, 1, 5, 2, 4]

</code></pre>
</section>
<section>
<h3><a name="formtoobj"></a>Преобразование формы в объект</h3>
<pre><code class="lang-js">
const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  )

</code></pre>
</section>
<section>
<h3><a name="objprops"></a>Извлечение свойств объекта</h3>
<pre><code class="lang-js">
const getProps = (from, ...selectors) =>
  [...selectors].map((s) =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.\$1.')
      .split('.')
      .filter((t) => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  )

const obj = {
  selector: { to: { value: 'value to select' } },
  target: [1, 2, { a: 'test' }]
}

getProps(obj, 'selector.to.value', 'target[0]', 'target[2].a') // [ 'value to select', 1, 'test' ]

</code></pre>
</section>
<section>
<h3><a name="deepprops"></a>Глубоко вложенные свойства объекта</h3>
<pre><code class="lang-js">
function ProxyObj(obj) {
  return new Proxy(obj, {
    get: (target, prop) => {
      if (!(prop in target)) target[prop] = new ProxyObj({})
      return target[prop]
    }
  })
}

const obj = new ProxyObj({})

obj.x.y.z = 'foo'

console.log(obj.x.y.z) // foo

</code></pre>
</section>
<section>
<h3><a name="ms"></a>Миллисекунды в днях, часах, минутах и т.д.</h3>
<pre><code class="lang-js">
const format = (ms) => {
  if (ms < 0) ms = -ms
  const time = {
    // ~~ = Math.floor
    day: ~~(ms / 86400000),
    hour: ~~(ms / 3600000) % 24,
    minute: ~~(ms / 60000) % 60,
    second: ~~(ms / 1000) % 60,
    millisecond: ~~ms % 1000
  }
  return Object.entries(time)
    .filter((val) => val[1] !== 0)
    .map(([key, val]) => \`\${val} \${key}\${val !== 1 ? 's' : ''}\`)
    .join(', ')
}

format(1001) // 1 second, 1 millisecond
format(34325055574) // 397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds

</code></pre>
</section>
<section>
<h3><a name="group"></a>Группировка по критерию</h3>
<pre><code class="lang-js">
function groupBy(values, iter) {
  const obj = {}

  for (const val of values) {
    const prop = typeof iter === 'function' ? iter(val) : val[iter]

    prop in obj ? obj[prop].push(val) : (obj[prop] = [val])
  }

  return obj
}

console.log(groupBy([1.2, 2.3, 5.4], Math.floor))
// { 1: [1.2], 2: [2.3], 3: [3.4] }

console.log(groupBy(['one', 'two', 'three'], 'length'))
// { 3: ['one', 'two'], 5: ['three'] }

</code></pre>
</section>
<section>
<h3><a name="iter"></a>Создание итерируемого объекта</h3>
<pre><code class="lang-js">
// 1
function makeIterable(obj) {
  Object.defineProperty(obj, "length", {
    value: Object.keys(obj).length
  })

  obj[Symbol.iterator] = (
    i = 0,
    values = Object.values(obj)
  ) => ({
    next: () => (
      i < obj.length
        ? { done: false, value: values[i++] }
        : { done: true }
    ),
  })

  return obj
}

const iterableObj = makeIterable({
  name: 'John',
  age: 30
})

for (const value of iterableObj) console.log(value) // John 30
console.log(...iterableObj) // John 30

// 2
function _makeIterable(obj) {
  Object.defineProperties(obj, {
    "length": {
      value: Object.keys(obj).length
    },

    [Symbol.iterator]: {
      value: function* () {
        for (const i in this) {
          yield this[i]
        }
      }
    }
  })

  return obj
}

</code></pre>
</section>
<section>
<h3><a name="readonly"></a>Создание объекта только для чтения</h3>
<pre><code class="lang-js">
const makeReadOnlyObj = (obj) => new Proxy(obj, {
  get: (target, key) => target[key],
  set: (target, key, value) => {
    if (target.hasOwnProperty(key)) {
      throw new Error('error')
    }
    target[key] = value
  }
})

const person = makeReadOnlyObj({ name: 'John', age: 30 })

console.log(person.name) // John
person.sex = 'm'
person.age = 20 // error

</code></pre>
</section>
<section>
<h3><a name="pubsub"></a>Публикация/подписка</h3>
<pre><code class="lang-js">
const pubSub = (subscribers = []) => ({
  publish: ({ message, sender }) => {
    subscribers.forEach(({ name }) => {
      console.log(\`\${name} get \${message} from \${sender}\`)
    })
  },
  subscribe: (subscriber) => {
    subscribers.push(subscriber)
  }
})

const pubSubObj = pubSub()
pubSubObj.subscribe({ name: 'John' })
pubSubObj.subscribe({ name: 'Jane' })
pubSubObj.publish({message: 'Hello', sender: 'Bob'})
// John get Hello from Bob
// Jane get Hello from Bob

</code></pre>
</section>
<section>
<h3><a name="state"></a>Переключение состояния</h3>
<pre><code class="lang-js">
const toggle = (...args) => {
  let state = -1
  const len = args.length

  return () => {
    state = (state + 1) % len
    return args[state]
  }
}

const onOff = toggle('on', 'off')

console.log(onOff()) // on
console.log(onOff()) // off

</code></pre>
</section>
<section>
<h3><a name="memo"></a><a target="_blank" rel="noopener" href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%BC%D0%BE%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F">Мемоизация</a></h3>
<pre><code class="lang-js">
// 1
const memo = (fn) => {
  const cache = new Map()
  return (n) => {
    if (cache.has(n)) {
      console.log('From cache')
      return cache.get(n)
    } else {
      console.log('Calculated')
      const res = fn(n)
      cache.set(n, res)
      return res
    }
  }
}

const add = (x) => x + 10
const memoAdd = memo(add)
console.log(memoAdd(10)) // Caclulated 20
console.log(memoAdd(10)) // From cache 20

// 2
const _memo = (
    fn,
    cache = new Map()
  ) => (val) =>
    cache.get(val) ||
    (cache.set(val, fn(val)) && cache.get(val))

  const fact = (n) =>
  n < 0 ? new Error() : n < 1 ? 1 : n * fact(n - 1)

const memoFact = _memo(fact)

console.time('t1')
console.log(memoFact(150))
console.timeEnd('t1') // 0.15
console.time('t2')
console.log(memoFact(150))
console.timeEnd('t2') // 0.05

</code></pre>
</section>
<section>
<h3><a name="curry"></a><a target="_blank" rel="noopener" href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5">Каррирование</a></h3>
<pre><code class="lang-js">
// 1
function curryRegSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
const curryArrowSum = (a) => (b) => (c) => a + b + c

curryArrowSum(1) // b => c => 1 + b + c
curryArrowSum(1)(2) // c => 3 + c
curryArrowSum(1)(2)(3) // 6

// 2
const curryCalcEval = (...x) => (op) =>
  x.reduce((acc, cur) => (acc = eval(\`acc \${op} cur\`)))

curryCalcEval(1, 2, 3)('+') // 6

// 3
const randomCurry = (fn) =>
  function curry(...args) {
    return fn.length <= args.length
      ? fn.apply(this, args)
      : (...args2) => curry.apply(this, args.concat(args2))
  }

const sum = randomCurry((a, b, c, d) => a + b + c + d)

console.log(sum(1)(2)(3)(4)) // 10
console.log(sum(1, 2)(3, 4)) // 10

// 4 частичное применение
const part = (f, ...a) => (...b) => f(...a, ...b)

const mult = (...x) => x.reduce((a, b) => (a *= b))

const partMult = part(mult, 2) // 2
partMult(3) // 2 * 3 = 6

</code></pre>
</section>
<section>
<h3><a name="throttle"></a>Throttle</h3>
<pre><code class="lang-js">
const throttle = (f, t) =>
  function (args) {
    let prevCall = this.lastCall
    this.lastCall = Date.now()

    if (prevCall === undefined || this.lastCall - prevCall > t) {
      f(args)
    }
  }

const log = (args) => console.log(\`Args: \${args}\`)
const throttledLog = throttle(log, 2000)

const arr = [1, 2, 3]

throttledLog(arr)
throttledLog(arr)
throttledLog(arr) // Args: 1, 2, 3 - сразу и один раз

</code></pre>
</section>
<section>
<h3><a name="debounce"></a>Debounce</h3>
<pre><code class="lang-js">
const debounce = (f, t) =>
  function (args) {
    let prevCall = this.lastCall
    this.lastCall = Date.now()

    if (prevCall && this.lastCall - prevCall <= t) {
      clearTimeout(this.timer)
    }

    this.timer = setTimeout(() => f(args), t)
  }

const log = (args) => console.log(\`Args: \${args}\`)
const debouncedLog = debounce(log, 2000)
const arr = [1, 2, 3]

debouncedLog(arr)
debouncedLog(arr)
debouncedLog(arr) // Args: 1, 2, 3 - только один раз и через 2 секунды

</code></pre>
</section>
<section>
<h3><a name="get"></a>GET HTTP-запрос</h3>
<pre><code class="lang-js">
// XMLHttpRequest
const httpGet = (url, cb, err = console.error) => {
  const req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.onload = () => cb(req.responseText)
  req.onerror = () => err(req)
  req.send()
}

// async/await
const httpGet = async (url, cb, err = console.error) => {
  try {
    const response = await fetch(url)
    const result = await response.json()
    cb(result)
  } catch (error) {
    err(error)
  }
}

</code></pre>
</section>
<section>
<h3><a name="post"></a>POST HTTP-запрос</h3>
<pre><code class="lang-js">
// XMLHttpsRequest
const httpPost = (url, data, cb, err = console.error) => {
  const req = new XMLHttpRequest()
  req.open('POST', url, true)
  req.setRequestHeader('Content-Type', 'application/json')
  req.onload = () => cb(req.responseText)
  req.onerror = () => err(req)
  req.send(data)
}

// async/await
const httpPost = async (url, data, cb, err = console.error) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const result = await response.json()
    cb(result)
  } catch (error) {
    err(error)
  }
}

</code></pre>
</section>
`
