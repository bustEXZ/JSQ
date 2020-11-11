import tasks from './tasks.js'

export const createTasks = () => {
  main.innerHTML = tasks
  const sections = [...main.querySelectorAll('section')]
  sections.forEach((section) => {
    section.id = sections.indexOf(section) + 1
  })
}
