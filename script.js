const darkMode = document.getElementById("darkMode");
const root = document.getElementsByTagName('html')[0]

let checked = true;
darkMode.addEventListener('change', () => {
    root.classList.toggle('darkMode', checked);
    checked = !checked;
    console.log(darkMode.checked);
});