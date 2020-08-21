export const createModal = () => {
    const modalBox = document.createElement('div')
    modalBox.className = 'modal-box'

    const template = `
    <a href="https://harryheman.github.io/WTFJS" target="_blank">Что за черт, JavaScript?</a>
    <a href="https://nodejs-guide.netlify.app" target="_blank">Руководство по Node.js</a>
    <button>Закрыть</button>
    `

    modalBox.innerHTML = template
    document.body.append(modalBox)

    modalBox.style.top = '-1.25em'

    modalBox.querySelector('button')
        .addEventListener('click', () => modalBox.remove(), {
            once: true
        })
}