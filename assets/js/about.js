// динамически задаем размер полоски timeline в секции about
let about_card = document.querySelector(".about-card").offsetWidth
let block_timeline = document.querySelector(".about__block-timeline")

// размер регулируем с помощью отступов
block_timeline.style.padding = `0 ${about_card / 2}px`

// кнопка для прокрутки наверх
let top = document.getElementById("top")

// при нажатии на кнопку Наверх, нас перекинет к нулевой позиции по Y
// за плавность отвечает smooth 
top.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}))