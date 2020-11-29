import links from './links.js'

export const createLinks = () => {
  main.innerHTML = links
  const sections = [...main.querySelectorAll('section')]
  sections.forEach((section) => {
    section.id = sections.indexOf(section) + 1
  })
}
