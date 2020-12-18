import questions from './questions.js'
import { createGame } from './create-game.js'

export const createQuestions = () => {
  let html = `
  <section>
    <h2>230 вопросов</h2>
    <h3>Каким будет вывод?</h3>
    <button id="game_btn">Игра</button>
  </section>
  `

  for (const q of questions) {
    const { question, answers, rightAnswer, explanation } = q

    const answersArray = answers.trim().split('\n')

    const id = questions.indexOf(q) + 1

    html += `
    <section>
      <h3>Вопрос № ${id}</h3>
      <pre><code class="lang-js">
        ${question}
      </code></pre>
      <ul>
      ${answersArray.reduce(
        (html, answer) =>
          (html += `
              <li>${answer}</li>
          `),
        ''
      )}
      </ul>
      <details>
        <summary>Ответ</summary>
        <div>
          <h4>Правильный ответ: ${rightAnswer}</h4>
          <p>${explanation}</p>
        </div>
      </details>
    </section>
    `
  }

  html += `<a href="#top"><button id="top_btn">Наверх</button></a>`

  return html
}
