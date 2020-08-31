export const createObserver = () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                localStorage.setItem('numberOfQuestion', entry.target.dataset.name)
            }
        })
    }, {
        threshold: 0.25
    })

    const sections = Array.from(main.querySelectorAll('section'))
    sections.map(i => observer.observe(i))
}