export const findLastQuestion = () => {
    const n = localStorage.getItem('numberOfQuestion') || 1

    const q = document.getElementById(n)

    const p = Math.round(q.getBoundingClientRect().y)

    scrollTo({
        top: p
    })
}