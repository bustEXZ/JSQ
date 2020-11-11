import snippets from './snippets.js'

export const createSnippets = () => {
  main.innerHTML = snippets
  const sections = [...main.querySelectorAll('section')]
  sections.forEach((section) => {
    section.id = sections.indexOf(section) + 1
  })
}
