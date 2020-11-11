export const createObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          localStorage.setItem('sectionNum', entry.target.id)
        }
      })
    },
    {
      threshold: 0.1,
    }
  )

  const sections = main.querySelectorAll('section')
  sections.forEach((s) => observer.observe(s))
}
