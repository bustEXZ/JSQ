export default `
<h2>Примеры и эксперименты</h2>
<a href="#top"><button id="top_btn">Наверх</button></a>
<section>
  <h3>Функция вывода сообщения в консоль</h3>
  <pre><code class="lang-js">
    const log = (value) => console.log(value)

    log('ok') // ok
  </code></pre>
  <h3>Функция получения одного элемента по определенному селектору</h3>
  <pre><code class="lang-js">
    const findOne = (selector, parent = document) => parent.querySelector(selector)

    // ищем div внутри документа
    findOne('div')
  </code></pre>
  <h3>Функция получения всех элементов по определенному селектору</h3>
  <pre><code class="lang-js">
    const findAll = (selector, parent = document) => [...parent.querySelectorAll(selector)]

    // ищем все section в документе
    findAll('section')

    // ищем все p внутри section и добавляем им класс "section-text"
    findAll(findOne('section'), 'p').forEach((p) => (p.className = 'section-text'))
  </code></pre>
  <h3>Функция скрытия всех элементов на странице по определенному селектору</h3>
  <pre><code class="lang-js">
    const hide = (...els) => [...els].forEach((el) => (el.style.display = 'none'))

    // находим и скрываем все img на странице
    hide(findAll('img'))
  </code></pre>
  <h3>Функция определения наличия класса</h3>
  <pre><code class="lang-js">
    const hasClass = (el, className) => el.classList.contains(className)

    // определяем наличие класса "main" у div
    hasClass(findOne('div'), 'main') // true
  </code></pre>
  <h3>Функция переключения классов</h3>
  <pre><code class="lang-js">
    const toggleClass = (el, className) => el.classList.toggleClass(className)

    // удаляем класс "main" у div
    toggleClass(findOne('div'), 'main')
  </code></pre>
  <h3>Функция определения величины прокрутки текущей страницы</h3>
  <pre><code class="lang-js">
    const getScrollPosition = (el = window) => ({
      x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
      y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
    })

    getScrollPosition() // { x: 0, y: 200 }
  </code></pre>
  <h3>Функция плавной прокрутки в начало страницы</h3>
  <pre><code class="lang-js">
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop
      if (c > 0) {
        requestAnimationFrame(scrollToTop)
        scrollTo(0, c - c / 8)
      }
    }

    scrollToTop()
  </code></pre>
  <h3>Функция определения вложенности одного элемента в другой</h3>
  <pre><code class="lang-js">
    const elementContains = (parent, child) => parent !== child && parent.contains(child)

    // определяем вложенность title в head
    elementContains(findOne('head'), findOne('title')) // true
    // определяем вложенность body в body
    elementContains(findOne('body'), findOne('body')) // false
  </code></pre>
  <h3>Функция определения нахождения элемента в области просмотра</h3>
  <pre><code class="lang-js">
    const elemIsVidibleInViewport = (el, partiallyVisible = false) => {
      const { top, left, bottom, right } = el.getBoundingClientRect()
      const { innerHeight, innerWidth } = window
      return partiallyVisible ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) : (top >= 0) & (left >= 0) && bottom <= innerHeight && rigth <= innerWidth
    }

    elemIsVidibleInViewport(el) // true, только если элемент виден полностью
    elemIsVidibleInViewport(el, true) // true, если элемент виден хотя бы частично
  </code></pre>
  <h3>Функция получения всех изображений, находящихся в определенном элементе</h3>
  <pre><code class="lang-js">
    const getImages = (el, includeDuplicates = false) => {
      const images = [...el.getElementsByTagName('img')]
        .map((img) => img.getAttribute('src'))
      return includeDuplicates ? images : [...new Set(images)]
    }

    // получаем все изображения на странице
    getImages(document, true)
    // получаем только уникальные изображения
    getImages(document, false)
  </code></pre>
  <h3>Функция создания объекта, содержащего параметры текущего URL</h3>
  <pre><code class="lang-js">
    const getURLParams = (url) => (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {})

    getURLParams('http://url.com/page?f=John&l=Smith') // { f: 'John', l: 'Smith' }
    getURLParams('https://google.com') // { }
  </code></pre>
  <h3>Функция преобразования элементов формы в объект</h3>
  <pre><code class="lang-js">
    const formToObject = (form) =>
      Array.from(new FormData(form)).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {}
      )

    formToObject(findOne('form')) // { name: 'John', email: "myemail@example.com" }
  </code></pre>
  <h3>Функция извлечения определенных свойств объекта</h3>
  <pre><code class="lang-js">
    const getProps = (from, ...selectors) =>
      [...selectors].map((s) =>
        s
          .replace(/\[([^\[\]]*)\]/g, '.&#36;1.')
          .split('.')
          .filter((t) => t !== '')
          .reduce((prev, cur) => prev && prev[cur], from)
      )

    const obj = { selector: { to: { value: 'value to select' } }, target: [1, 2, { a: 'test' }] }

    getProps(obj, 'selector.to.value', 'target[0]', 'target[2].a') // [ 'value to select', 1, 'test' ]
  </code></pre>
  <h3>Функция отложенного выполнения другой функции</h3>
  <pre><code class="lang-js">
    const delay = (fn, wait, ...rest) => setTimeout(fn, wait, ...rest)

    delay((text) => log(text), 1000, 'позже')
    // 'позже' через 1 секунду
  </code></pre>
  <h3>Функции добавления и удаления обработчиков событий</h3>
  <pre><code class="lang-js">
    const addListener = (el, evt, cb) => el.addEventListener(evt, cb)

    const removeListener = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts)

    const fn = () => log('!')

    // пример
    ;((B) => {
      addListener(B, 'click', fn)

      removeListener(B, 'click', fn) // сообщение "!" больше не выводится в консоль после клика
    })(document.body)
  </code></pre>
  <h3>Функция преобразования миллисекунд в читаемый формат</h3>
  <pre><code class="lang-js">
    const formatDuration = (ms) => {
      if (ms < 0) ms = -ms
      const time = {
        // ~~ = Math.floor
        day: ~~(ms / 86400000),
        hour: ~~(ms / 3600000) % 24,
        minute: ~~(ms / 60000) % 60,
        second: ~~(ms / 1000) % 60,
        millisecond: ~~ms % 1000,
      }
      return Object.entries(time)
        .filter((val) => val[1] !== 0)
        .map(([key, val]) => \`&#36;{val} &#36;{key}&#36;{val !== 1 ? 's' : ''}\`)
        .join(', ')
    }

    formatDuration(1001) // 1 second, 1 millisecond
    formatDuration(34325055574) // 397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds
  </code></pre>
  <h3>Функция получения случайного целого числа в заданном диапазоне</h3>
  <pre><code class="lang-js">
    const getRandomInteger = (min, max) => ~~(min + Math.random() * (max + 1 - min))
    // ~~ = Math.floor

    const randomInteger = getRandomInteger(1, 100)
  </code></pre>
  <h3>Функция получения случайного цвета в шестнадцатиричной системе</h3>
  <pre><code class="lang-js">
    const getRandomColor = () => \`#&#36;{((Math.random() * 0xffffff) << 0).toString(16)}\`

    const randomColor = getRandomColor()
  </code></pre>
  <h3>Функция получения стилей элемента</h3>
  <pre><code class="lang-js">
    const getElementStyle = (element, property) => getComputedStyle(element)
      .getPropertyValue(property)

    const documentColor = getStyle(document.body, 'color')
  </code></pre>
  <h3>Функция получения типа объекта</h3>
  <pre><code class="lang-js">
    const getRawType = (value) => Object.prototype
      .toString
      .call(value)
      .slice(8, -1)

    const obj = {}
    console.log(getRawType(obj)) // Object

    const arr = []
    console.log(getRawType(arr)) // Array

    function fn1() {}
    const fn2 = () => {}
    console.log(getRawType(fn1)) // Function
    console.log(getRawType(fn2)) // Function
  </code></pre>
  <h3>Функция отправки GET-запроса</h3>
  <pre><code class="lang-js">
    // XMLHttpRequest
    const httpGet = (url, cb, err = console.error) => {
      const req = new XMLHttpRequest()
      req.open('GET', url, true)
      req.onload = () => cb(req.responseText)
      req.onerror = () => err(req)
      req.send()
    }

    const url = 'https://jsonplaceholder.' + 'typicode.com/posts/1''
    httpGet(url, log)
    // { "userId": 1, "id": 1, "title": "some title", "body": "some text" }

    // fetch
    const httpGet = (url, cb, err = console.error) =>
      fetch(url)
        .then((response) => response.json())
        .then((result) => cb(result))
        .catch((error) => err(error))

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
  <h3>Функция отправки POST-запроса</h3>
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

    const url = 'https://jsonplaceholder.' + 'typicode.com/posts'
    const newPost = {
      userId: 1234,
      title: 'foo',
      body: 'bar baz qux',
    }
    const data = JSON.stringify(newPost)
    httpPost(url, data, log)
    // { "id": 101, "userId": 1234, "title": "foo", "body": "bar baz qux" }

    // async/await
    const httpPost = async (url, data, cb, err = console.error) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        const result = await response.json()
        cb(result)
      } catch (error) {
        err(error)
      }
    }

    httpPost(url, newPost, log)
  </code></pre>
  <h3>Функция создания счетчика с определенным диапазоном, шагом и продолжительностью</h3>
  <pre><code class="lang-js">
    const counter = (selector, start, end, step = 1, duration = 2000) => {
      let current = start,
        _step = (end - start) * step < 0 ? -step : step,
        timer = setInterval(() => {
          current += _step
          findOne(selector).innerHTML = current
          if (current >= end) findOne(selector).innerHTML = end
          if (current >= end) clearInterval(timer)
        }, Math.abs(~~(duration / (end - start))))
      return timer
    }

    // создаем двухсекундный таймер для элемента с идентификатором "some_id"
    counter('#some_id', 1, 1000, 5, 2000)
  </code></pre>
  <h3>Функция копирования строки в буфер обмена</h3>
  <pre><code class="lang-js">
    const copyToClipboard = (str) => {
      const el = document.createElement('textarea')
      el.value = str
      el.setAttribute('readonly')
      el.style.position = 'absolute'
      el.style.left = '-999px'
      document.body.append(el)

      const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
      el.select()
      document.execCommand('copy')
      el.remove()
      if (selected) {
        document.getSelection()
          .removeAllRanges()
        document.getSelection()
          .addRange(selected)
      }
    }

    // копируем строку "some text" в буфер обмена
    copyToClipboard('some text')
  </code></pre>
</section>

<section>
  <h3>Пример модуля создания элемента с текстом с помощью IIFE и нескольких вспомогательных функций</h3>
  <pre><code class="lang-js">
    const Module = ((B, C, AT, F, AE) => {
      AE(B, C('div'))

      return {
        createElementWithMessage(parent, child, message) {
          AE(F(parent), AT(C(child), message))
        },
      }
    })(
      document.body,
      (createElement = (tag) => document.createElement(tag)),
      (addText = (element, text) => {
        element.textContent = text
        return element
      }),
      (findOne = (selector) => document.querySelector(selector)),
      (addElement = (parent, child) => parent.append(child))
    )

    Module.createElementWithMessage('div', 'h3', 'hello world')
    Module.createElementWithMessage('div', 'p', '')
    Module.createElementWithMessage('p', 'span', 'some ')
    Module.createElementWithMessage('p', 'strong', 'bold ')
    Module.createElementWithMessage('p', 'span', 'and ')
    Module.createElementWithMessage('p', 'em', 'italic ')
    Module.createElementWithMessage('p', 'span', 'text')
  </code></pre>
</section>

<section>
  <h3>Пример функции высшего порядка</h3>
  <pre><code class="lang-js">
    const user1 = {
      name: 'John',
      age: 30,
      password: 'pass',
      agreeToTerms: true,
    }
    const user2 = {
      name: 'Jane',
      age: 20,
      password: 'password',
      agreeToTerms: true,
    }

    const oldEnough = (user) => user.age >= 18

    const passwordLongEnough = (user) => user.password.length >= 8

    const isAgreeToTerms = (user) => user.agreeToTerms === true

    const validate = (obj, ...tests) => {
      for (const test of tests) {
        if (test(obj) === false) return false
      }
      return true
    }

    console.log(validate(user1, oldEnough, passwordLongEnough, isAgreeToTerms)) // false
    console.log(validate(user2, oldEnough, passwordLongEnough, isAgreeToTerms)) // true

    const createValidator = (fn, ...tests) => (obj) => {
      for (const test of tests) {
        if (test(obj) === false) return
      }
      fn(obj)
    }

    const userValidator = createValidator((greet = (obj) => console.log(\`Welcome, &#36;{obj?.name}!\`)), oldEnough, passwordLongEnough, isAgreeToTerms)

    userValidator(user1) // ''
    userValidator(user2) // Welcome, Jane!
  </code></pre>
</section>

<section>
  <h3>Примеры каррирования (currying)</h3>
  <pre><code class="lang-js">
    /* 1 */
    function regSum(a, b, c) {
      return a + b + c
    }

    function curryRegSum(a) {
      return function (b) {
        return function (c) {
          return a + b + c
        }
      }
    }

    const arrawSum = (a, b, c) => a + b + c
    const curryArroySum = (a) => (b) => (c) => a + b + c

    curryArrowSum(1) // b => c => 1 + b + c
    curryArrowSum(1)(2) // c => 3 + c
    curryArrowSum(1)(2)(3) // 6

    /* 2 */
    const curryCalcEval = (...x) => (y) => x.reduce((acc, cur) => (acc = eval(\`acc &#36;{y} cur\`)))
    console.log(curryCalcEval(1, 2, 3)('+')) // 6

    /* 3 */
    const curryAddTwo = (a) => (b = 2) => a * b
    curryAddTwo(3)() // 6

    /* 4 */
    const part = (f, ...a) => (...b) => f(...a, ...b)

    const mult = (...x) => x.reduce((a, b) => (a *= b))

    const partMult = part(mult, 2) // 2
    console.log(partMult(3, 3)) // 2 * 9 = 18

    /* 5 */
    const curryCalcEvalPromise = (x) => (operator) => (y) =>
      new Promise((resolve, reject) => resolve(eval(\`x&#36;{operator}y\`))).then(
        (result) => console.log(result),
        (error) => console.error('Wrong operation!')
      )
    curryCalcEvalPromise(1)('+')(2) // 3
    curryCalcEvalPromise(4)('-')(3) // 1
    curryCalcEvalPromise(5)('x')(6) // Wrong operation!
  </code></pre>
</section>

<section>
  <h3>Примеры мемоизация (memoization)</h3>
  <pre><code class="lang-js">
    /* 1 */
    const memo = (fn) => {
      const cache = Object.create(null)
      return (n) => {
        if (n in cache) {
          console.log('From cache')
          return cache[n]
        } else {
          console.log('Calculated')
          const result = fn(n)
          cache[n] = result
          return result
        }
      }
    }

    const add = (x) => x + 10
    const memoAdd = memo(add)
    console.log(memoAdd(10)) // Caclulated 20
    console.log(memoAdd(10)) // From cache 20

    /* 2 */
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
</section>

<section>
  <h3>Функция троттлинга (throttle)</h3>
  <pre><code class="lang-js">
    const throttle = (f, t) =>
      function (args) {
        let prevCall = this.lastCall
        this.lastCall = Date.now()

        if (prevCall === undefined || this.lastCall - prevCall > t) {
          f(args)
        }
      }

    const log = (args) => console.log(\`Args: &#36;{args}\`)
    const throttledLog = throttle(log, 2000)
    const arr = [1, 2, 3]
    throttledLog(arr)
    throttledLog(arr)
    throttledLog(arr) // Args: 1, 2, 3 - сразу и один раз
  </code></pre>
</section>

<section>
  <h3>Функция дебаунсинга (debounce)</h3>
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

    const log = (args) => console.log(\`Args: &#36;{args}\`)
    const debouncedLog = debounce(log, 2000)
    const arr = [1, 2, 3]

    debouncedLog(arr)
    debouncedLog(arr)
    debouncedLog(arr) // Args: 1, 2, 3 - один раз и через 2 секунды
  </code></pre>
</section>

<section>
  <h3>Примеры генераторов</h3>
  <pre><code class="lang-js">
    /* 1 */
    function* getItem(arr) {
      for (let i = 0; i < arr.length; i++) {
        yield arr[i]
      }
    }

    const arr = ['foo', 'bar', 'baz']

    const generator = getItem(arr)

    const timer = setInterval(() => {
      const item = generator.next()
      item.done ? clearInterval(timer) : console.log(item.value) // foo bar baz
    }, 1000)

    /* 2 */
    async function* range(start, end) {
      for (let i = start; i <= end; i++) {
        yield Promise.resolve(i)
      }
    }

    ;(async () => {
      const generator = range(1, 3)
      for await (const item of generator) {
        console.log(item) // 1 2 3
      }
    })()

    /* 3 */
    async function* streamAsyncIterator(stream) {
      const reader = stream.getReader()
      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) return
          yield value
        }
      } finally {
        reader.releaseLock()
      }
    }

    async function getResponseSize(url) {
      const response = await fetch(url)
      let responseSize = 0
      for await (const chunk of streamAsyncIterator(response.body)) {
        responseSize += chunk.length
      }

      console.log(\`Response size: &#36;{responseSize} bytes\`)
      return responseSize
    }

    const url = 'https://jsonplaceholder.' + '.typicode.com/photos'

    getResponseSize(url)
  </code></pre>
</section>

<section>
  <h3>Примеры продвинутого использования Array.prototype.reduce()</h3>
  <pre><code class="lang-js">
    /* 1 */
    const arr = [1, 2, 3]
    const sum = (arr) => arr.reduce((acc, cur) => acc + cur)
    console.log(sum(arr)) // 6

    /* 2 */
    const users = [
      {
        name: 'John',
        sex: 'm',
        age: 30,
      },
      {
        name: 'Alice',
        sex: 'f',
        age: 20,
      },
    ]

    const men = users.reduce((newArr, user) => {
      if (user.sex === 'm') newArr.push(user.name)
      return newArr
    }, [])
    console.log(men) // ["John"]

    const usersNamesList = \`<ul>&#36;{users.reduce((html, user) => (html += \`<li>&#36;{user.name}</li>\`), '')}</ul>\`
    document.body.innerHTML = usersNamesList

    /* 3 */
    const score = {
      J: 1000,
      A: 2000,
    }

    const usersWithScore = users.reduce((arr, user) => {
      const key = user.name.substring(0, 1)

      if (score[key]) {
        user.score = score[key]
        arr.push(\`&#36;{user.name} => &#36;{user.score}\`)
      } else user.score = 0

      return arr
    }, [])
    console.log(usersWithScore) // ["John => 1000", "Alice => 2000"]

    /* 4 */
    const users = [
      {
        1: {
          name: 'John',
        },
      },
      {
        2: {
          name: 'Alice',
        },
      },
    ]

    document.body
      .insertAdjacentHTML('afterbegin', \`<ul>&#36;{users.reduce((html, item) => html + \`<li>&#36;{Object.values(item)[0].name}</li>\`, '')}</ul>\`)

    /* 5 */
    const groupBy = (array, criteria) =>
      array.reduce((obj, item) => {
        const key = typeof criteria === 'function' ? criteria(item) : item[criteria]

        if (!obj.hasOwnProperty(key)) obj[key] = ''
        obj[key] = item

        return obj
      }, {})

    const arr = [6.1, 4.2, 2.3]
    console.log(groupBy(arr, Math.floor)) // {2: 2.3, 4: 4.2, 6: 6.1}
  </code></pre>
</section>

<section>
  <h3>Функция сравнение массивов</h3>
  <pre><code class="lang-js">
    const arr1 = [1, 3, 5, 7, 9]
    const arr2 = [1, 3, 5, 7, 9]

    console.log(arr1 === arr2) // false

    const compare = (arr1, arr2) => arr1.length === arr2.length && arr1.sort().every((value, index) => value === arr2[index])

    console.log(compare(arr1, arr2)) // true
  </code></pre>
</section>

<section>
  <h3>Функции нахождения минимального и максимального значений в массиве</h3>
  <pre><code class="lang-js">
    const arr = [1, 3, 5, 7, 9]

    const min = (arr) => Math.min.apply(null, arr)
    const max = (arr) => Math.max.apply(null, arr)

    console.log(min(arr)) // 1
    console.log(max(arr)) // 9

    // без Math
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

    console.log(min(arr)) // 1
    console.log(max(arr)) // 9
  </code></pre>
</section>

<section>
  <h3>Примеры использования Function.prototype.apply(), call(), bind()</h3>
  <pre><code class="lang-js">
    const john = {
      name: 'John',
    }
    const jane = {
      name: 'Jane',
    }

    function invite(phrase1, phrase2) {
      console.log(\`&#36;{phrase1}, &#36;{this.name}. &#36;{phrase2}\`)
    }

    invite.call(john, 'Hi', 'How are you?')
    // Hi, John. How are you?
    invite.call(jane, 'Hi', 'How are you?')
    // Hi, Jane. How are you?

    const john2 = {
      name: 'John',
    }
    const jane2 = {
      name: 'Jane',
    }

    function invite(phrase1, phrase2) {
      console.log(\`&#36;{phrase1}, &#36;{this.name}. &#36;{phrase2}\`)
    }

    invite.apply(john2, ['Hi', 'How are you?'])
    // Hi, John. How are you?
    invite.apply(jane2, ['Hi', 'How are you?'])
    // Hi, Jane. How are you?

    const john3 = {
      name: 'John',
    }
    const jane3 = {
      name: 'Jane',
    }

    function invite(phrase1, phrase2) {
      console.log(\`&#36;{phrase1}, &#36;{this.name}. &#36;{phrase2}\`)
    }

    const invite1 = invite.bind(john3, 'Hi', 'How are you?')()
    // Hi, John. How are you?
    invite.bind(jane3, 'hello', 'How are you?')()
    // Hi, Jane. How are you?
  </code></pre>
</section>

<section>
  <h3>Пример использования for-await-of</h3>
  <pre><code class="lang-js">
    const delayedPromise = (id, ms) =>
      new Promise((resolve) => {
        const timer = setTimeout(() => {
          resolve(id)
          clearTimeout(timer)
        }, ms)
      })

    const promises = [delayedPromise(1, 1000), delayedPromise(2, 2000), delayedPromise(3, 3000)]

    ;(async function () {
      for await (const promise of promises) {
        console.log(promise)
      }
    })()
    /*
      1 - через 1 секунду
      2 - через 2 секунды
      3 - через 3 секунды
    */
  </code></pre>
</section>

<section>
  <h3>Примеры использования теггированных шаблонные литералов (tagged template literals)</h3>
  <pre><code class="lang-js">
    /* 1 */
    const tag = (strings, ...expressions) => {
      console.log(strings)
      // ["String with ", " and ", " inside"]
      console.log(expressions)
      // ["abc", 123]
    }
    tag\`String with &#36;{'abc'} and &#36;{123} inside\`

    /* 2 */
    const comma = (strings, ...values) =>
      strings.reduce((prev, next) => {
        let val = values.shift() || []
        val = val.join(' and ')
        return prev + next + val
      }, '')

    const snacks = ['apples', 'bananas']
    console.log(comma\`I like &#36;{snacks} very much.\`)
    // I like apples and bananas very much.

    /* 3 */
    const bold = (strings, ...expressions) => {
      let finalString = ''

      expressions.map((value, item) => {
        finalString += \`&#36;{strings[item]}<strong>&#36;{value}</strong>\`
      })

      finalString += strings[strings.length - 1]

      return finalString
    }
    document.body
      .insertAdjacentHTML('beforeend', bold\`<p>String with &#36;{'abc'} and &#36;{123} inside</p>\`)
  </code></pre>
</section>

<section>
  <h3>Примеры изменения статических свойств класса</h3>
  <pre><code class="lang-js">
    /* 1 */
    class Repo {
      static getStr() {
        return \`foo bar\`
      }

      static modifyStr() {
        return \`&#36;{this.getStr()} baz qux\`
      }
    }
    console.log(Repo.modifyStr()) // foo bar baz qux

    /* 2 */
    class Repo {
      static getStr() {
        return \`foo bar\`
      }
    }

    modifyStr() {
      return \`&#36;{Repo.getStr()} baz qux\`
      // &#36;{this.constructor.getStr()}
    }
    console.log(new Repo().modifyStr()) // foo bar baz qux
  </code></pre>
</section>

<section>
  <h3>Пример продвинутого использования Promise.all()</h3>
  <pre><code class="lang-js">
    const users = [
      {
        _id: 1,
        name: 'Иван Петров',
        birthday: '1990-01-02',
        location: {
          lat: 56.8389261,
          lng: 60.6057025,
        },
      },
      {
        _id: 2,
        name: 'Петр Иванов',
        birthday: '2000-03-04',
        location: {
          lat: 55.751244,
          lng: 37.618423,
        },
      },
    ]

    Promise.all(
      users.map(async (user) => ({
        _id: user._id,
        firstName: user.name.split(' ')[0],
        age: ~~((Date.now() - new Date(user.birthday).getTime()) / 365 / 24 / 60 / 60 / 1000),
        city: await fetch(\`https:// api.opencagedata.com/ geocode/v1/json?q= &#36;{user.location.lat}+ &#36;{user.location.lng} &key=YOUR_API_KEY\`)
          .then((res) => res.json())
          .then((data) => data.results[0].components.city),
      }))
    ).then(console.log)
    /*
      [
        {_id: 1, firstName: "Иван", age: 30, city: "Екатеринбург"},
        {_id: 2, firstName: "Петр", age: 20, city: "Москва"}
      ]
    */
  </code></pre>
</section>

<section>
  <h3>Пример копирования текста из поля для ввода в буфер обмена</h3>
  <pre><code class="lang-js">
    &lt;input type = "text" value = "hello">
    &lt;button>copy&lt;/button>

    const btn = document.querySelector('button')

    btn.addEventListener('click', () => {
        document.querySelector('input').select()

        document.execCommand('copy')

        navigator.clipboard.readText()
            .then(text => console.log(text))
    })
  </code></pre>
</section>

<section>
  <h3>Пример определения местоположения и погоды по координатам</h3>
  <pre><code class="lang-js">
    const getPosition = (position) => {
      const { latitude, longitude, altitude, speed } = position.coords
      console.log(\`&#36;{latitude.toFixed(2)}\n&#36;{longitude.toFixed(2)}\n&#36;{altitude}\n&#36;{speed}\`)

      getCityAndWeather(latitude, longitude)
    }

    navigator.geolocation
      .getCurrentPosition(getPosition)
    /*
      56.90
      60.63
      null
      null
    */

    const getCityAndWeather = (latitude, longitude) => {
      const api = \`https:// api.openweathermap.org/ data/2.5/weather ?lat=&#36;{latitude} &lon=&#36;{longitude} &units=metric&appid=YOUR_API_ID\`

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)

          const city = data.name

          const { temp } = data.main
          console.log(temp)

          const { description } = data.weather[0]

          // const toCelsiusFromFahrenheit = ~~((temp - 32) * (5 / 9)).toFixed()

          console.log(\`&#36;{city}\n&#36;{temp}°C\n&#36;{description}\`)
          /*
            Ekaterinburg
            -1°C
            clear sky
          */
        })
    }
  </code></pre>
</section>

<section>
  <h3>Пример определения координат курсора и рисования на холсте</h3>
  <pre><code class="lang-js">
    document.addEventListener('click', (ev) => console.log(\`X => &#36;{ev.clientX}\nY => &#36;{ev.clientY}\`))

    const canvas = document.createElement('canvas')
    const &#36; = canvas.getContext('2d')

    canvas.width = innerWidth
    canvas.height = innerHeight

    document.body.append(canvas)
    document.body.style.overflow = 'hidden'

    const randomInt = (min, max) => ~~(min + Math.random() * (max + 1 - min))

    const randomColor = () => \`#&#36;{((Math.random() * 0xfff) << 0).toString(16)}\`

    let i = 0

    canvas.addEventListener('click', (ev) => {
      &#36;.beginPath()
      if (i % 2 === 0) {
        &#36;.arc(ev.clientX, ev.clientY, randomInt(10, 30), 0, 2 * Math.PI)
        &#36;.fillStyle = randomColor()
        &#36;.fill()
      } else {
        let randomSize = randomInt(20, 60)

        &#36;.fillStyle = randomColor()
        &#36;.fillRect(ev.clientX - randomSize / 2, ev.clientY - randomSize / 2, randomSize, randomSize)
      }
      &#36;.closePath()

      i++
    })
  </code></pre>
</section>
`
