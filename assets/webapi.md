# Примеры использования Web API

[На главную](../README.md)

> Данный раздел находится в разработке

## Оглавление

- [Beacon API](#beacon)
- [BroadcastChannel API](#broadcast)
- [Clipboard API](#clipboard)
- [Fetch API](#fetch)
- [Storage API](#storage)

## Beacon API <a name="beacon"></a>

Данный интерфейс предназначен для гарантированной отправки данных на сервер перед выгрузкой (перезагрузкой, закрытием) страницы. Он является альтернативой синхронного (блокирующего) XMLHttpRequest в колбеке обработчика события "unload" или "beforeunload" и, как правило, используется для отправки на сервер статистики (аналитики) об использовании страницы.

Сигнатура:

```js
navigator.sendBeacon(url, data?)
```

- `url` - адрес сервера
- `data` - данные в формате ArrayBuffer, ArrayBufferView, Blob, DOMString, FormData или объект "URLSearchParams" с данными для отправки

Общий пример:

```js
document.addEventListener('visibilitychange', () => {
  if (!('sendBeacon' in navigator)) return

  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon('/log', someData)
  }
})
```

Пример с формой:

```xml
<!-- На самом деле, атрибуты action="/login" method="POST" enctype="multipart/form-data" позволяют обойтись без JS -->
<form>
  <label>Email:
    <input
      type="email"
      name="email"
      placeholder="Email"
      autofocus
      autocomplete="off"
    >
  </label>
  <label>Password:
    <input
      type="password"
      name="password"
      placeholder="Password"
      pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    >
  </label>
  <input type="submit" value="Send">
</form>
```

```js
const form = document.forms[0]

form.onsubmit = async (e) => {
  e.preventDefault()

  const data = new FormData(form)

  if ('sendBeacon' in navigator) {
    navigator.sendBeacon('/login', data)
  } else {
    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (!response.ok) throw new Error(response.statusText)
    } catch (err) {
      console.error(err.message)
    }
  }
}
```

## BroadcastChannel API <a name="broadcast"></a>

Данный интерфейс позволяет устанавливать канал коммуникации между контекстами браузера (окна, вкладки, фреймы, iframe) и воркерами в пределах одного источника.

Сигнатура:

```js
// Создание канала, name - название
const bc = new BroadcastChannel(name)

// Отправка сообщения, message - любой объект, все, что можно клонировать
// FormData отправить не получится
bc.postMessage(message)

// Получение и обработка сообщения
bc.onmessage = e => {
  console.log(e)
}
// или
bc.addEventListener('message', e => {
  console.log(e)
})
// MessageEvent {isTrusted: true, data: {…}, origin: "http://127.0.0.1:5500", ... }

// Закрытие канала
bc.close()
```

Пример использования:

```xml
<!-- user.html -->
<form>
  <label for="first">Firstname:</label>
  <input type="text" id="first" value="John">

  <label>Lastname:</label>
  <input type="text" id="last" value="Smith">

  <input type="submit" value="Send">
</form>

<script>
  const form = document.forms[0]
  const fisrt = document.getElementById('first')
  const last = document.getElementById('last')

  form.onsubmit = e => {
    e.preventDefault()
    const data = {
      firstname: first.value.trim(),
      lastname: last.value.trim()
    }

    const bc = new BroadcastChannel('username')

    bc.postMessage(data)

    bc.close()
  }
</script>
```

```xml
<!-- index.html -->
<iframe src="./user.html" frameborder="0"></iframe>

<script>
  const bc = new BroadcastChannel('username')

  bc.onmessage = e => {
    console.log(e)

    const {firstname, lastname} = e.data

    const template = `<h2>Hi, ${firstname} ${lastname}!</h2>`

    document.body.insertAdjacentHTML('beforeend', template)
  }
</script>
```

Похожий интерфейс предоставляет <a href="https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API">Channel Messaging API</a>. Он поддерживается лучше, чем BroadcastChannel API, но взаимодействие между контекстами реализуется не напрямую, а через порты.

## Clipboard API <a name="clipboard"></a>

Данный интерфейс предназначен для работы с буфером обмена. Он является альтернативой признанного устаревшим <a href="https://developer.mozilla.org/ru/docs/Web/API/Document/execCommand">document.execCommand()</a>.

Сигнатура:

```js
// Запись в буфер обмена
navigator.clipboard
  .writeText()
  .then(() => {
    console.log('Success')
  })
  .catch((err) => {
    console.error(err.message)
  })
// Для записи других данных используется метод "write()" и ClipboardItem

// Чтение из буфера обмена
navigator.clipboard.readText().then(data => {
  console.log(data)
}).catch(err => {
  console.error(err.message)
})
// Для чтения других данных используется метод "read()"
```

Пример использования:

```xml
<head>
  <style>
    #tooltip {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #f0f0f0;
      border-radius: 2px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
      padding: .5rem;
    }
  </style>
</head>
<body>
  <div>
    <input type="text" value="Some text to copy" id="copy_input">
    <button id="copy_button">Copy</button>
  </div>
  <br>
  <div>
    <input type="text" placeholder="Input to paste" id="paste_input">
    <button id="paste_button">Paste</button>
  </div>
</body>
```

```js
const getEl = (id, el = document) => el.getElementById(id)

const copyI = getEl('copy_input')
const copyB = getEl('copy_button')
const pasteI = getEl('paste_input')
const pasteB = getEl('paste_button')

const showTooltip = (msg) => {
  const existingTooltip = getEl('tooltip')
  if (existingTooltip) existingTooltip.remove()

  const newTooltip = document.createElement('span')
  newTooltip.id = 'tooltip'
  newTooltip.textContent = msg
  document.body.append(newTooltip)

  const timerId = setTimeout(() => {
    newTooltip.remove()
    clearTimeout(timerId)
  }, 1000)
}

copyB.onclick = async () => {
  try {
    await navigator.clipboard.writeText(copyI.value.trim())
    showTooltip('Text has been copied to the clipboard')
  } catch (err) {
    showTooltip(err.message)
  }
}

pasteB.onclick = async () => {
  try {
    const text = await navigator.clipboard.readText()
    pasteI.value = text.toUpperCase()
    showTooltip('Text has been pasted to the target element')
  } catch (err) {
    showTooltip(err.message)
  }
}
```

## Fetch API <a name="fetch"></a>

```js
const SERVER_URL = 'http://localhost:5000/todos'

const POST = 'POST'
const PUT = 'PUT'
const DELETE = 'DELETE'

export const client = async (method, payload, endpoint = SERVER_URL) => {
  let config = {}

  if (method) {
    config = {
      method,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    if (method === POST || method === PUT) {
      config.body = JSON.stringify(payload.body)
    }

    if (method === DELETE || method === PUT) {
      endpoint = `${endpoint}/${payload.id}`
    }
  }

  try {
    const response = await fetch(endpoint, config)
    if (response.ok) {
      let message

      switch (method) {
        case POST: {
          message = 'Data has been added'
          break
        }
        case DELETE: {
          message = 'Data has been removed'
          break
        }
        case PUT: {
          message = 'Data has been updated'
          break
        }
        default: {
          message = 'Data has been received'
        }
      }

      console.log(message)

      const result = await response.json()
      return result
    }
    throw new Error(response.statusText)
  } catch (err) {
    console.error(err.message || err)
  }
}

client.post = (payload, endpoint) => client(POST, payload, endpoint)

client.put = (payload, endpoint) => client(PUT, payload, endpoint)

client.delete = (payload, endpoint) => client(DELETE, payload, endpoint)
```

## Storage API <a name="storage"></a>

```js
export const storage = {
  get: (key) => JSON.parse(window.localStorage.getItem(key)),
  set: (key, value) => window.localStorage.setItem(key, JSON.stringify(value)),
  remove: (key) => window.localStorage.removeItem(key),
  clear: () => window.localStorage.clear()
}
```