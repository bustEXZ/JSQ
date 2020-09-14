import { generatePage } from '../fun/generate-page.js'
import assets from '../assets.js'
import { hljs } from '../hl.js'

export const createGame = () => {
    if (main.querySelector('.game-box') !== null) {
        main.querySelector('.game-box').remove()
    }

    const template = `
    <section class="game-box">
        <button class="close">Закрыть</button>
        <h3 class="game-title">Что будет выведено в консоль?</h3>
        <output class="score"></output>
        <output class="progress"></output>
        <div class="question-box"></div>
    </section>
    `

    main.innerHTML = template

    main.querySelector('.close').addEventListener('click', ev => {
        ev.target.parentElement.remove()
        generatePage('practice')
    }, {
        once: true
    })

    const set = new Set()

    while (set.size < 20) {
        const i = Math.floor(Math.random() * (assets.length + 1))

        if (i > assets.length) {
            i = 0
        }

        set.add(assets[i])
    }

    const array = [...set]

    const questionBox = document.querySelector('.question-box')
    const score = document.querySelector('.score')
    const progress = document.querySelector('.progress')

    let rightAnswers = 0
    let wrongAnswers = 0
    let i = 0

    updateScoreAndProgress()

    function updateScoreAndProgress() {
        score.innerHTML =
            `<span class="right">${rightAnswers}</span> - <span class="wrong">${wrongAnswers}</span>`

        progress.textContent = `${i + 1} / ${array.length}`
    }

    createQuestion()

    function createQuestion() {
        if (i === array.length) {
            showResult()
            return
        }

        const {
            question,
            rightAnswer,
            explanation
        } = array[i]

        const answers = array[i].answers
            .split('\n')
            .slice(1, -1)
            .map(i => i.trim())

        const template = `
        <pre><code class="lang-js">${question}</code></pre>
        <ul>
        ${answers.reduce((html, i) => html += `<li class="answer">${i}</li>`, '')}
        </ul>
        <button>Ответить</button>
        <details>
        <summary>Показать правильный ответ</summary>
        <article>
            <h3>Правильный ответ: ${rightAnswer}</h3>
            <p>${explanation}</p>
        </article>
        </details>
        `

        questionBox.innerHTML = template

        hljs(globalThis)

        questionBox.querySelector('.answer').classList.add('checked')

        questionBox.addEventListener('click', ev => {
            if (ev.target.className === 'answer') {
                if (ev.target.classList.contains('checked')) {
                    return
                }

                questionBox.querySelector('.checked').classList.remove('checked')

                ev.target.classList.add('checked')
            }
        })

        const button = questionBox.querySelector('button')

        button.addEventListener('click', () => {
            const answers = Array.from(questionBox.querySelectorAll('.answer'))

            const userAnswerEl = answers.find(ans => ans.classList.contains('checked'))
            const rightAnswerEl = answers.find(ans => ans.textContent[0] === rightAnswer)

            const userAnswer = userAnswerEl.textContent.substr(0, 1)

            checkAnswer(userAnswerEl, rightAnswerEl, userAnswer, rightAnswer, button)
        }, {
            once: true
        })
    }

    function checkAnswer(userAnswerEl, rightAnswerEl, userAnswer, rightAnswer, button) {
        let isRight = true

        if (userAnswer === rightAnswer) {
            rightAnswers++
        } else {
            wrongAnswers++
            isRight = false
        }

        if (isRight) {
            userAnswerEl.classList.add('right')
        } else {
            userAnswerEl.classList.add('wrong')
            rightAnswerEl.click()
            rightAnswerEl.classList.add('right')
            questionBox.querySelector('summary').click()
        }

        button.textContent = 'Дальше'

        button.addEventListener('click', () => {
            i++
            updateScoreAndProgress()
            createQuestion()
        }, {
            once: true
        })
    }

    function showResult() {
        const percentage = (rightAnswers / array.length * 100).toFixed()

        let result

        if (percentage >= 80) {
            result = `Отличный результат! Вы прекрасно знаете JavaScript.`
        } else if (percentage > 50) {
            result = `Неплохой результат, но есть к чему стремиться. Дерзайте!`
        } else {
            result = `Похоже, вы только начали изучать JavaScript. Удачи!`
        }

        main.querySelector('.game-title').remove()
        score.remove()
        progress.remove()

        questionBox.innerHTML = `
        <h3>Ваш результат</h3>
        <p>Правильных ответов: <span class="right">${rightAnswers}</span></p>
        <p>Неправильных ответов: <span class="wrong">${wrongAnswers}</span></p>
        <p>Процент правильных ответов: ${percentage}</p>
        <p>${result}</p>
        `
    }
}