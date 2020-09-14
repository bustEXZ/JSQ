export const toggleClass = name => {
    header.querySelector('.active').classList.remove('active')
    header.querySelector(`button[data-name="${name}"`).classList.add('active')
}