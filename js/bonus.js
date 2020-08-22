// thanks to this guy
// https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions

export default `
<a name="bonus"></a><h1>Бонус</h1>
<a href="#top">Наверх</a>
<h3>Передача значений</h3>
<!-- 1 -->
<section>
<h3>Вопрос № 1</h3>
<pre>
<code class="lang-js">
const strA = 'Привет!'
let strB = strA
strB = 'Пока!'
console.log(strA)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Привет!</p>
</details>
</section>

<!-- 2 -->
<section>
<h3>Вопрос № 2</h3>
<pre>
<code class="lang-js">
const objA ={ prop: 42 }
let objB = objA
objB.prop1 = 24
console.log(objA)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>{ prop: 24}</p>
</details>
</section>

<!-- 3 -->
<section>
<h3>Вопрос № 3</h3>
<pre>
<code class="lang-js">
const objA = { prop: 42 }
let objB = objA
objB = {}
console.log(objA)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>{ prop: 42 }</p>
</details>
</section>

<!-- 4 -->
<section>
<h3>Вопрос № 4</h3>
<pre>
<code class="lang-js">
const arrA = [0, 1, 2, 3, 4, 5]
let arrB = arrA
arrB[0] = 42
console.log(arrA)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>[42, 1, 2, 3, 4, 5]</p>
</details>
</section>

<!-- 5 -->
<section>
<h3>Вопрос № 5</h3>
<pre>
<code class="lang-js">
const arrA = [0, 1, 2, 3, 4, 5]
let arrB = arrA.slice()
arrB[0] = 42
console.log(arrA)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>[0, 1, 2, 3, 4, 5]</p>
</details>
</section>

<!-- 6 -->
<section>
<h3>Вопрос № 6</h3>
<pre>
<code class="lang-js">
const arrA = [ {prop1: 'элемент массива А'} , {prop2: 'еще один элемент массива А'}, 3, 4, 5 ]
let arrB = arrA
arrB[0].prop1 = 42
console.log(arrA)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>[ {prop1: 42} , {prop2: 'еще один элемент массива А'}, 3, 4, 5 ]</p>
</details>
</section>

<!-- 7 -->
<section>
<h3>Вопрос № 7</h3>
<pre>
<code class="lang-js">
const arrA = [ {prop1: 'элемент массива А'} , {prop2: 'еще один элемент массива А'}, 3, 4, 5 ]
let arrB = arrA.slice()
arrB[0].prop1 = 42
arrB[3] = 24
console.log(arrA)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>[ {prop1: 'элемент массива А'} , {prop2: 'еще один элемент массива А'}, 3, 4, 5 ]</p>
</details>
</section>

<h3>Поднятие переменных</h3>
<!-- 1 -->
<section>
<h3>Вопрос № 1</h3>
<pre>
<code class="lang-js">
console.log(id)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>ReferenceError: id is not defined</p>
</details>
</section>

<!-- 2 -->
<section>
<h3>Вопрос № 2</h3>
<pre>
<code class="lang-js">
console.log(id)
var id = '123abc'
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined</p>
</details>
</section>

<!-- 3 -->
<section>
<h3>Вопрос № 3</h3>
<pre>
<code class="lang-js">
var id = '123abc'
(function () {
    console.log(id)
    var id = '321cba'
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined</p>
</details>
</section>

<!-- 4 -->
<section>
<h3>Вопрос № 4</h3>
<pre>
<code class="lang-js">
var id = '123abc'
(function () {
    console.log(id)
    var id = '321cba'
    (function () {
        var id = 'abc123'
    })()
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined</p>
</details>
</section>

<!-- 5 -->
<section>
<h3>Вопрос № 5</h3>
<pre>
<code class="lang-js">
(function () {
    console.log(typeof f)
    var f = function () {
        console.log('Привет, я нахожусь внутри f.')
    }
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined</p>
</details>
</section>

<!-- 6 -->
<section>
<h3>Вопрос № 6</h3>
<pre>
<code class="lang-js">
var id = '123abc'
function foo () {
    id = 'abc123'
    return;
}
foo()
console.log(id)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>abc123</p>
</details>
</section>

<!-- 7 -->
<section>
<h3>Вопрос № 7</h3>
<pre>
<code class="lang-js">
var id = '123abc'

function foo () {
    id = 'abc123'
    return;

    function id () {}
}
foo()
console.log(id)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>123abc</p>
</details>
</section>

<!-- 8 -->
<section>
<h3>Вопрос № 8</h3>
<pre>
<code class="lang-js">
var id = '123abc'

function foo () {
    id = 'abc123'
    return;

    function id () {
        console.log(typeof id)
    }
}
foo()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>function</p>
</details>
</section>

<!-- 9 -->
<section>
<h3>Вопрос № 9</h3>
<pre>
<code class="lang-js">
function foo () {
    id()
    var product = 'Автомобиль'
    return;

    function id () {
        console.log(product)
    }
}

foo()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined</p>
</details>
</section>

<!-- 10 -->
<section>
<h3>Вопрос № 10</h3>
<pre>
<code class="lang-js">
(function foo () {
    bar()

    function bar () {
        baz()
        console.log(typeof baz)
    }

    function baz() {
        console.log(typeof bar)
    }
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>function function</p>
</details>
</section>

<h3>Объекты</h3>
<!-- 1 -->
<section>
<h3>Вопрос № 1</h3>
<pre>
<code class="lang-js">
(function () {
    'use strict'

    var person = {
        name: 'Ванька'
    }
    person.salary = '100000'
    person['country'] = 'Россия'

    Object.defineProperty(person, 'phone', {
        value: '+123456789',
        enumerable: true
    })

    console.log(Object.keys(person))
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>[ 'name', 'salary', 'country', 'phone' ]</p>
</details>
</section>

<!-- 2 -->
<section>
<h3>Вопрос № 2</h3>
<pre>
<code class="lang-js">
(function () {
    'use strict'

    var person = {
        name: 'Ванька'
    }
    person.salary = '100000'
    person['country'] = 'Россия'

    Object.defineProperty(person, 'phone', {
        value: '+123456789',
        enumerable: false
    })

    console.log(Object.keys(person))
}())
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>[ 'name', 'salary', 'country' ]</p>
</details>
</section>

<!-- 3 -->
<section>
<h3>Вопрос № 3</h3>
<pre>
<code class="lang-js">
(() => {
    const objA = {
        foo: 'foo',
        bar: 'bar'
    }
    const objB = {
        foo: 'foo',
        bar: 'bar'
    }

    console.log(objA == objB)
    console.log(objA === objB)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>false false</p>
</details>
</section>

<!-- 4 -->
<section>
<h3>Вопрос № 4</h3>
<pre>
<code class="lang-js">
(() => {
    const objA = new Object({ foo: 'foo' })
    const objB = new Object({ foo: 'foo' })

    console.log(objA == objB)
    console.log(objA === objB)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>false false</p>
</details>
</section>

<!-- 5 -->
<section>
<h3>Вопрос № 5</h3>
<pre>
<code class="lang-js">
(() => {
    const objA = Object.create({
        foo: 'foo'
    })
    const objB = Object.create({
        foo: 'foo'
    })

    console.log(objA == objB)
    console.log(objA === objB)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>false false</p>
</details>
</section>

<!-- 6 -->
<section>
<h3>Вопрос № 6</h3>
<pre>
<code class="lang-js">
!function () {
    const objA = Object.create({
        foo: 'foo'
    })
    const objB = Object.create(objA)

    console.log(objA == objB)
    console.log(objA === objB)
}()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>false false true</p>
</details>
</section>

<!-- 7 -->
<section>
<h3>Вопрос № 7</h3>
<pre>
<code class="lang-js">
(function () {
    const objA = Object.create({
        foo: 'foo'
    })
    const objB = Object.create(objA)

    console.log(objA.toString() == objB.toString())
    console.log(objA.toString() === objB.toString())
}())
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>true true</p>
</details>
</section>

<!-- 8 -->
<section>
<h3>Вопрос № 8</h3>
<pre>
<code class="lang-js">
+function () {
    const objA = Object.create({
        foo: 'foo'
    })
    const objB = objA

    console.log(objA == objB)
    console.log(objA === objB)

    console.log(objA.toString() == objB.toString())
    console.log(objA.toString() === objB.toString())
}()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>true true true true NaN</p>
</details>
</section>

<!-- 9 -->
<section>
<h3>Вопрос № 9</h3>
<pre>
<code class="lang-js">
(() => {
    const objA = Object.create({
        foo: 'foo'
    })
    const objB = objA

    objB.foo = 'bar'

    console.log(objA.foo)
    console.log(objB.foo)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>bar bar</p>
</details>
</section>

<!-- 10 -->
<section>
<h3>Вопрос № 10</h3>
<pre>
<code class="lang-js">
new function () {
    const objA = Object.create({
        foo: 'foo'
    })
    const objB = objA

    objB.foo = 'bar'

    delete objA.foo

    console.log(objA.foo)
    console.log(objB.foo)
}
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>foo foo {}</p>
</details>
</section>

<!-- 11 -->
<section>
<h3>Вопрос № 11</h3>
<pre>
<code class="lang-js">
new function () {
    const objA = {
        foo: 'foo'
    }
    const objB = objA

    objB.foo = 'bar'

    delete objA.foo

    console.log(objA.foo)
    console.log(objB.foo)
}()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined undefined {}</p>
</details>
</section>

<h3>Массивы</h3>
<!-- 1 -->
<section>
<h3>Вопрос № 1</h3>
<pre>
<code class="lang-js">
(() => {
    const array = new Array('100')
    console.log(array)
    console.log(array.length)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>['100'] 1</p>
</details>
</section>

<!-- 2 -->
<section>
<h3>Вопрос № 2</h3>
<pre>
<code class="lang-js">
(() => {
    const array1 = []
    const array2 = new Array(100)
    const array3 = new Array(['1', 2, '3', 4, 5.6])

    console.log(
        array1,
        array2,
        array3,
        array3.length
    )
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Зависит от браузера. В Chrome выводится следующее: [] (100) [empty × 100] [Array(5)] 1</p>
</details>
</section>

<!-- 3 -->
<section>
<h3>Вопрос № 3</h3>
<pre>
<code class="lang-js">
(() => {
    const array = new Array('a', 'b', 'c', 'd', 'e')
    array[10] = 'f'
    delete array[10]
    console.log(array.length)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>11</p>
</details>
</section>

<!-- 4 -->
<section>
<h3>Вопрос № 4</h3>
<pre>
<code class="lang-js">
(() => {
    const animals = ['корова', 'лошадь']

    animals.push('кошка')
    animals.push('собака', 'осел', 'козел')
    console.log(animals.length)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>6</p>
</details>
</section>

<!-- 5 -->
<section>
<h3>Вопрос № 5</h3>
<pre>
<code class="lang-js">
(() => {
    const animals = ['корова', 'лошадь']

    animals.push('кошка')
    animals.unshift('собака', 'осел', 'козел')
    console.log(animals)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>["собака", "осел", "козел", "корова", "лошадь", "кошка"]</p>
</details>
</section>

<!-- 6 -->
<section>
<h3>Вопрос № 6</h3>
<pre>
<code class="lang-js">
(() => {
    const array = [1,2,3,4,5]

    console.log(array.indexOf(2))

    console.log([{ name: 'Ванька' }, { name: 'Петька' }].indexOf({ name: 'Ванька' }))

    console.log([[1],[2],[3],[4]].indexOf(2))

    console.log('abcdef'.indexOf('c'))
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>1 -1 -1 2</p>
</details>
</section>

<!-- 7 -->
<section>
<h3>Вопрос № 7</h3>
<pre>
<code class="lang-js">
(() => {
    const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6]

    console.log(array.indexOf(2))
    console.log(array.indexOf(2,3))
    console.log(array.indexOf(2,10))
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>1 6 -1</p>
</details>
</section>

<!-- 8 -->
<section>
<h3>Вопрос № 8</h3>
<pre>
<code class="lang-js">
(() => {
    const nums = [2, 3, 4, 8, 9, 11, 13, 12, 16]

    const even = nums.filter((el, i) => el % 2 === 0)
    console.log(even)

    const divBy3 = nums.some((el, i) => el % 3 === 0)
    console.log(divBy3)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>[2, 4, 8, 12, 16] true</p>
</details>
</section>

<!-- 9 -->
<section>
<h3>Вопрос № 9</h3>
<pre>
<code class="lang-js">
(() => {
    var array = [2, 0, false, '', '12', true]

    var array = array.filter(Boolean)
    console.log(array)

    var array = array.filter(Number)
    console.log(array)

    var array = array.filter(String)
    console.log(array)

    var array = array.filter(Object)
    console.log(array)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>[2,'12',true] <br>
[2,'12',true] <br>
[2,'12',true] <br>
[2,'12',true]</p>
</details>
</section>

<!-- 10 -->
<section>
<h3>Вопрос № 10</h3>
<pre>
<code class="lang-js">
(() => {
    const list = ['foo', 'bar', 'baz', 'qux']

    console.log(\`
    &#36;{list.slice(1)}\\n
    &#36;{list.slice(1,3)}\\n
    &#36;{list.slice()}\\n
    &#36;{list.slice(2,2)}\\n
    &#36;{list}
    \`)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>
bar, baz, qux <br>
bar, baz <br>
foo, bar, baz, qux <br>
(пусто) <br>
foo, bar, baz, qux <br>
</p>
</details>
</section>

<!-- 11 -->
<section>
<h3>Вопрос № 11</h3>
<pre>
<code class="lang-js">
(() => {
    const list = ['foo', 'bar', 'baz']

    console.log(\`
    &#36;{list.splice(1)}\\n
    &#36;{list.slice(1,2)}\\n
    &#36;{list}
    \`)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>
bar, baz <br>
(пусто) <br>
foo <br>
</p>
</details>
</section>

<!-- 12 -->
<section>
<h3>Вопрос № 12</h3>
<pre>
<code class="lang-js">
(() => {
    const nums = [2, 8, 15, 16, 23, 42]
    nums.sort().reverse()
    console.log(nums)

    nums.reverse().sort((x, y) => x - y)
    console.log(nums)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>
[8, 42, 23, 2, 16, 15]
[2, 8, 15, 16, 23, 42]
</p>
</details>
</section>

<h3>Функции</h3>
<!-- 1 -->
<section>
<h3>Вопрос № 1</h3>
<pre>
<code class="lang-js">
function f1 () {
    console.log('f1', this)
    ;(function f2 () {
        console.log('f2', this)
        ;(function f3 () {
            console.log('f3', this)
        })()
    })()
}

f1()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>
f1 Window {…} <br>
f2 Window {…} <br>
f3 Window {…}
</p>
</details>
</section>

<!-- 2 -->
<section>
<h3>Вопрос № 2</h3>
<pre>
<code class="lang-js">
const obj = {
    message: 'Привет!',
    innerMessage: !(() => {
        console.log(this.message)
    })()
}

obj.innerMessage()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined true</p>
</details>
</section>

<!-- 3 -->
<section>
<h3>Вопрос № 3</h3>
<pre>
<code class="lang-js">
const obj = {
    message: 'Привет!',
    innerMessage: function () {
        console.log(this.message)
    }
}

console.log(obj.innerMessage())
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Привет!</p>
</details>
</section>

<!-- 4 -->
<section>
<h3>Вопрос № 4</h3>
<pre>
<code class="lang-js">
const obj = {
    message: 'Привет!',
    innerMessage: () => {
        (() => {
            console.log(this.message)
        })()
    }
}
obj.innerMessage()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined</p>
</details>
</section>

<!-- 5 -->
<section>
<h3>Вопрос № 5</h3>
<pre>
<code class="lang-js">
const obj = {
    message: 'Привет!',
    innerMessage: function () {
        const self = this
        ;(function () {
            console.log(self.message)
        })()
    }
}
obj.innerMessage()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Привет!</p>
</details>
</section>

<!-- 6 -->
<section>
<h3>Вопрос № 6</h3>
<pre>
<code class="lang-js">
function f () {
    console.log(this.message)
}
f.message = 'Привет!'

f()
f.call(f)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined Привет!</p>
</details>
</section>

<!-- 7 -->
<section>
<h3>Вопрос № 7</h3>
<pre>
<code class="lang-js">
function f () {
    console.log(f.message)
}
f.message = 'Привет!'

f()
f.bind(f)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Привет! f () {...}</p>
</details>
</section>

<!-- 8 -->
<section>
<h3>Вопрос № 8</h3>
<pre>
<code class="lang-js">
function f1 () {
    f1.message = 'Привет!'
    console.log(f1.message)
}
function f2 () {
    f2.message = 'Пока!'
}
f1()
f1.bind(f2)()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Привет! Привет!</p>
</details>
</section>

<!-- 9 -->
<section>
<h3>Вопрос № 9</h3>
<pre>
<code class="lang-js">
function f1 (par1, par2) {
    console.log(arguments.length)
    console.log(arguments)
}
function f2 (...rest) {
    console.log(rest.length)
    console.log(rest)
}

f1()
f1(1, 2)
f1(1, 2, 3, 4)

f2()
f2(1, 2)
f2(1, 2, 3, 4)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>
2 [] 2 [1, 2] 2 [1, 2, 3, 4] <br>
0 [] 0 [1, 2] 0 [1, 2, 3, 4]
</p>
</details>
</section>

<!-- 10 -->
<section>
<h3>Вопрос № 10</h3>
<pre>
<code class="lang-js">
function f1 (par1, par2) {
    console.log(arguments.length)
}
function f2 (...rest) {
    console.log(rest.length)
}

f1()
f1(1,2)
f1(1,2,3,4)

f2()
f2(1,2)
f2(1,2,3,4)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>
0 2 4
0 2 4
</p>
</details>
</section>

<h3>Область видимости</h3>
<!-- 1 -->
<section>
<h3>Вопрос № 1</h3>
<pre>
<code class="lang-js">
function f () {
    const password = '12345'
    this.name = 'Ванька'
    return {
        pwd: password
    }
}
const info = f()
console.log(info.pwd)
console.log(info.name)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>12345 undefined</p>
</details>
</section>

<!-- 2 -->
<section>
<h3>Вопрос № 2</h3>
<pre>
<code class="lang-js">
const id = '123abc'
function F () {
    this.id = 'abc123'
}
console.log(F.id)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined</p>
</details>
</section>

<!-- 3 -->
<section>
<h3>Вопрос № 3</h3>
<pre>
<code class="lang-js">
const foo = 'foo'
function F () {
    this.foo = 'bar'
}
console.log(new F().foo)

F.prototype.foo = 'baz'
F.prototype.bar = 'qux'
console.log(new F().bar)
console.log(new F().foo)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>bar qux bar</p>
</details>
</section>

<!-- 4 -->
<section>
<h3>Вопрос № 4</h3>
<pre>
<code class="lang-js">
const foo = 'foo'
;(function F () {
    try {
        throw 'bar'
    } catch (foo) {
        console.log(foo)
    }
    console.log(foo)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>bar foo</p>
</details>
</section>

<h3>Call, Apply, Bind</h3>
<!-- 1 -->
<section>
<h3>Вопрос № 1</h3>
<pre>
<code class="lang-js">
(() => {
    const greet = 'Привет, народ!'
    const toGreet = [].filter.call(greet, (el, i) => i &lt; 6)
    console.log(toGreet)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>["П", "р", "и", "в", "е", "т"]</p>
</details>
</section>

<!-- 2 -->
<section>
<h3>Вопрос № 2</h3>
<pre>
<code class="lang-js">
(() => {
    const foo = {
        name: 'foo',
        amount: 4000,
        deduct: function (amount) {
            this.amount -= amount
            return \`Осталось &#36;{this.amount}\`
        }
    }

    const bar = {
        name: 'bar',
        amount: 6000
    }

    const amountBy = total =>
        foo.deduct.bind(bar, total)

    console.log(amountBy(1000)())
    console.log(amountBy(2000)())
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Осталось 5000 Осталось 3000</p>
</details>
</section>

<!-- 3 -->
<section>
<h3>Вопрос № 3</h3>
<pre>
<code class="lang-js">
(() => {
    const foo = {
        name: 'foo',
        amount: 4000,
        deduct: function (amount) {
            this.amount -= amount
            return \`Осталось &#36;{this.amount}\`
        }
    }

    const bar = {
        name: 'bar',
        amount: 6000
    }

    const amountBy = total =>
        foo.deduct.apply(bar, [total])

    console.log(amountBy(1000))
    console.log(amountBy(2000))
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Осталось 5000 Осталось 3000</p>
</details>
</section>

<!-- 4 -->
<section>
<h3>Вопрос № 4</h3>
<pre>
<code class="lang-js">
const user1 = (name = 'Ванька', age = 24) => ({
    name,
    age,
    getInfo() {
        console.log(\`&#36;{this.name} &#36;{this.age}\`)
    }
})

const user2 = (name = 'Петька', age = 42) => ({name, age})

user1().getInfo()
user1().getInfo.bind(user2())()
user1().getInfo.call(user2('Васька', 30))
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Ванька 24 <br>
Петька 42 <br>
Васька 30</p>
</details>
</section>

<!-- 5 -->
<section>
<h3>Вопрос № 5</h3>
<pre>
<code class="lang-js">
(function () {
    console.log(\`Привет, &#36;{this.name}!\`)
}.bind({
    name: 'Ванька'
}))()

;(function () {
    console.log(\`Пока, &#36;{this.name}!\`)
}).call({
    name: 'Петька'
})
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Привет, Ванька! <br>
Пока, Петька!</p>
</details>
</section>

<h3>Колбек</h3>
<!-- 1 -->
<section>
<h3>Вопрос № 1</h3>
<pre>
<code class="lang-js">
function getData () {
    const name = 'Ванька'
    return {
        then: function (f) {
            f(name)
        }
    }
}

getData().then(name => console.log(name))
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Ванька</p>
</details>
</section>

<!-- 2 -->
<section>
<h3>Вопрос № 2</h3>
<pre>
<code class="lang-js">
(() => {
    const nums = [2, 8, 15, 16, 23, 42]
    Array.prototype.sort = (a, b) => a - b
    nums.sort()
    console.log(nums)
})()

;(() => {
    const nums = [2, 8, 15, 16, 23, 42]
    nums.sort((a, b) => {
        (a === b)
            ? 0
            : a &lt; b ? -1 : 1
    })
    console.log(nums)
})()

;(() => {
    const nums = [2, 8, 15, 16, 23, 42]
    nums.sort((a, b) => b - a)
    console.log(nums)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>[ 2, 8, 15, 16, 23, 42 ] <br>
[ 2, 8, 15, 16, 23, 42 ] <br>
[ 2, 8, 15, 16, 23, 42 ]</p>
</details>
</section>

<h3>Return</h3>
<!-- 1 -->
<section>
<h3>Вопрос № 1</h3>
<pre>
<code class="lang-js">
(() => {
    function hello () {
        const name = 'Ванька'
        return
        {
            greet: \`Привет, &#36;{name}!\`
        }
    }
    console.log(hello().greet)
})()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>TypeError: Cannot read property 'greet' of undefined</p>
</details>
</section>

<!-- 2 -->
<section>
<h3>Вопрос № 2</h3>
<pre>
<code class="lang-js">
function getNums () {
    return (2, 3, 4)
}
const nums = getNums()
console.log(nums)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>4</p>
</details>
</section>

<!-- 3 -->
<section>
<h3>Вопрос № 3</h3>
<pre>
<code class="lang-js">
function getNum () {
    return
}
const num = getNum()
console.log(num)
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>undefined</p>
</details>
</section>

<!-- 4 -->
<section>
<h3>Вопрос № 4</h3>
<pre>
<code class="lang-js">
function mult(x) {
    return function (y) {
        return [x * y, function (z) {
            return x * y + z
        }]
    }
}
console.log(mult(2)(3)[0])
console.log(mult(2)(3)[1](4))
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>6 10</p>
</details>
</section>

<!-- 5 -->
<section>
<h3>Вопрос № 5</h3>
<pre>
<code class="lang-js">
function mult(x) {
    return function (y) {
        return {
            result: x * y,
            add: function (z) {
                return x * y + z
            }
        }
    }
}
console.log(mult(2)(3).result)
console.log(mult(2)(3).add(4))
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>6 10</p>
</details>
</section>

<!-- 6 -->
<section>
<h3>Вопрос № 6</h3>
<pre>
<code class="lang-js">
const calc = a => b => c => d => {
    switch (d) {
        case '*': return a * b * c
        case '/': return a / b / c
        case '+': return a + b + c
        case '-': return a - b - c
        default: return 'Некорректная операция!'
    }
}

console.log(calc(1)(2)(3)('*'))
console.log(calc(2)(3)(4)('+'))
console.log(calc(6)(3)(1)('-'))
console.log(calc(6)(3)(2)('x'))
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>6 9 2 Некорректная операция!</p>
</details>
</section>

<!-- 7 -->
<section>
<h3>Вопрос № 7</h3>
<pre>
<code class="lang-js">
function getName1() {
    console.log(this.name)
}

Object.prototype.getName2 = () => console.log(this.name)

const person = {
    name: 'Ванька',
    displayName: getName1
}

person.displayName()
person.getName2()
</code>
</pre>

<details>
<summary>Ответ</summary>
<p>Ванька undefined</p>
</details>
</section>
`