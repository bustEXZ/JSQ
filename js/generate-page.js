const pages = {
    theory: import('./theory-template.js'),
    practice: import('./practice-template.js')
}

export const generatePage = async name => {
    const page = await pages[name]
    main.innerHTML = page.default
}