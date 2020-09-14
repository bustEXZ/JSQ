import {
    hljs
} from '../hl.js'
import {
    createObserver
} from '../fun/create-observer.js'

const pages = {
    theory: import('../temp/theory.min.js'),
    practice: import('../temp/practice.min.js')
}

export const generatePage = async name => {
    const page = await pages[name]
    main.innerHTML = page.default
    hljs(globalThis)
    createObserver()
    localStorage.setItem('pageName', name)
}