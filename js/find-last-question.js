export const findLastQuestion = () => {
    const n = localStorage.getItem('numberOfQuestion') || 1

    const q = main.querySelector(`section[data-name="${n}"]`)

    const p = Math.round(q.getBoundingClientRect().y)

    scrollTo({
        top: p
    })
}