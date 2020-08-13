const createModal = () => {
    const modalBox = document.createElement('div')
    modalBox.className = 'modal-box'

    const template = `
    <p>MasterCard: 5368 2900 5024 0466</p>
    <p>Яндекс.Деньги: 4100 1815 4810 268</p>
    <p>WebMoney: </p>
    <p>Спасибо!</p>
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

export default createModal