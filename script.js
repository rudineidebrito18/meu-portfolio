const darkMode = document.getElementById("darkMode");
const root = document.getElementsByTagName('html')[0]

let checked = true;
darkMode.addEventListener('change', () => {
    root.classList.toggle('darkMode', checked);
    checked = !checked;
    console.log(darkMode.checked);
});

const menuLinks = document.querySelectorAll('a.menuLink');
const menuChecked = document.getElementById('hamburgerButtonCheck')

function bodyScrollBar(state) {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = state
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
        console.log({menuChecked})
        if (menuChecked.checked) {
            menuChecked.checked = false
        }
        bodyScrollBar('auto')
    })
});