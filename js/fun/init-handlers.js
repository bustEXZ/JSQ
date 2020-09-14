import {
    generatePage
} from './generate-page.js'
import {
    toggleClass
} from './toggle-class.js'
import {
    createGame
} from './create-game.js'

export const initHandlers = () => {
    document.addEventListener('click', ev => {
        if (ev.target.dataset.name) {
            if (ev.target.classList.contains('active')) {
                return
            }

            const name = ev.target.dataset.name

            if (name === 'game') {
                createGame()
                return
            }

            generatePage(name)

            toggleClass(name)
        } else if (ev.target.tagName === 'SUMMARY') {
            const details = ev.target.parentElement
            details.addEventListener('toggle', () => {
                details.className === 'active' ?
                    details.classList.remove('active') :
                    details.classList.add('active')
            }, {
                once: true
            })
        }
    })
}