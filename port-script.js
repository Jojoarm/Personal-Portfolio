const toggleButton = document.querySelector('.fa-bars')
const closeButton = document.querySelector('.fa-times')
const navMenu = document.querySelector('.nav-menu')

toggleButton.addEventListener('click', ()=>{
    navMenu.classList.add('active')
    toggleButton.classList.add('remove')
    closeButton.classList.remove('remove')
    closeButton.classList.add('active')
})

closeButton.addEventListener('click', ()=>{
    navMenu.classList.remove('active')
    toggleButton.classList.remove('remove')
    closeButton.classList.add('remove')
})