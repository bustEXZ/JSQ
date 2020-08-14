import assets from './assets.js'
import createGame from './create-game.js'
import createModal from './create-modal.js'

const main = document.querySelector('main')

const createQuestions = () => {
    assets.map(i => {
        const {
            question,
            rightAnswer,
            explanation
        } = i

        const answers = i.answers
            .split('\n')
            .slice(1, -1)
            .map(i => i.trim())

        const num = assets.indexOf(i) + 1

        const template = `
        <section class="${num}">
            <h3>Вопрос № ${num}:</h3>
            <code>${question}</code>

            <ul>
                ${answers.reduce((html, i) => html += `<li>${i}</li>`, '')}
            </ul>
    
            <details>
                <summary>Показать правильный ответ</summary>
                <article>
                    <h3>Правильный ответ: ${rightAnswer}</h3>
                    <p>${explanation}</p>
                </article>
            </details>
        </section>
        <hr>
        `

        main.insertAdjacentHTML('beforeend', template)
    })

    // need to fix
    main.getElementsByClassName('152')[0].id = 'too-long'
    main.getElementsByClassName('153')[0].id = 'too-long'

}

const findLastQuestion = () => {
    const num = localStorage.getItem('numberOfQuestion') || 1

    const q = document.getElementsByClassName(num)[0]

    const pos = Math.round(q.getBoundingClientRect().y)

    scrollTo({
        top: pos
    })
}

const createObserver = () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                localStorage.setItem('numberOfQuestion', entry.target.className)
            } else return
        })
    }, {
        threshold: 0.25
    })

    const sections = Array.from(main.querySelectorAll('section'))
    sections.map(i => observer.observe(i))
}

createQuestions()
findLastQuestion()
createObserver()

main.querySelector('.game-button')
    .addEventListener('click', () => {
        const set = new Set()

        while (set.size < 30) {
            const i = Math.floor(1 + Math.random() * (assets.length + 1 - 1))

            set.add(assets[i])
        }

        createGame(Array.from(set))
    })

const template = `
<details>
        <summary class="bonus-button">Бонус</summary>
        <p>В разработке...</p>
</details>
`

main.insertAdjacentHTML('beforeend', template)

document.querySelector('.modal-button')
    .addEventListener('click', () => {
        if (document.querySelector('.modal-box') === null) {
            createModal()
        } else return
    })

navigator.serviceWorker
    .register('./sw.js')
    .catch(e => console.error(e))