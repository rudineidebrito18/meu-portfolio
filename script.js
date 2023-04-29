const lightMode = document.getElementById("lightMode");
const root = document.getElementsByTagName('html')[0]

let checked = true;
lightMode.addEventListener('change', () => {
    root.classList.toggle('lightMode', checked);
    checked = !checked;
});

const menuLinks = document.querySelectorAll('a.menuLink');
const menuChecked = document.getElementById('hamburgerButtonCheck')

function bodyScrollBar(state) {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflowY = state
}

menuChecked.addEventListener('change', () => {
    if (menuChecked.checked) {
        bodyScrollBar('hidden')
    } else {
        bodyScrollBar('auto')
    }
})

menuLinks.forEach(e => {
    e.addEventListener('click', event => {
        event.preventDefault()
        const tamScreen = root.offsetHeight
        if (menuChecked.checked) {
            menuChecked.checked = false
            scrollToIdOnClick(event, tamScreen)
        } else {
            scrollToIdOnClick(event)
        }
        bodyScrollBar('auto')
    })
});

function scrollToIdOnClick(event, tamScreen = 0) {
    const id = event.target.getAttribute('href')
    const to = document.querySelector(id).offsetTop
    
    window.scroll(0, to - tamScreen - 80)
}