export const findLastSection = () => {
  const n = localStorage.getItem('sectionNum') || 1

  const q = document.getElementById(n)

  const p = Math.round(q.offsetHeight)

  scrollTo({
    top: p,
  })
}
