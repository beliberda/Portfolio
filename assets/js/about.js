let about_card = document.querySelector(".about-card").offsetWidth
let block_timeline = document.querySelector(".about__block-timeline")

console.log(about_card);
console.log(block_timeline.style);
block_timeline.style.padding = `0 ${about_card / 2}px`


let projectLink = document.getElementById("projects")
let technologyLink = document.getElementById("technology")
let aboutLink = document.getElementById("about")



// кнопка для прокрутки наверх
let top = document.getElementById("top")

top.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}))