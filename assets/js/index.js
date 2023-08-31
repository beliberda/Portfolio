// массив объектов, где один объект - один проект
projectMass = [
    {
        // У каждого проекта есть изображение, заголовок, текст и ссылка
        // ВНИМАНИЕ! Путь до изображения должен быть относительно index.html, а не index.js
        image: './assets/images/project.png',
        title: 'Parallax3D',
        text:'Site with 3D Effect, rain and relax music',
        link:'https://beliberda.github.io/Parallax3D/'
    },
    {
        image: './assets/images/project.png',
        title: 'Бункер',
        text:'Генератор персонажей для настольной игры Бункер',
        link:'https://beliberda.github.io/Parallax3D/'
    },
    {
        image: './assets/images/project.png',
        title: 'Мафия',
        text:'Сайт для распределения ролей в игре "Мафия"',
        link:'https://beliberda.github.io/Parallax3D/'
    },
    {
        image: './assets/images/project.png',
        title: 'Fukuro',
        text:'Сайт продажи авто из Японии',
        link:'https://beliberda.github.io/Parallax3D/'
    },
]
// Получаем элемент с id "project-list"
let list = document.getElementById("project-list")
// Проходим по массиву с проектами с помощью метода map
projectMass.map((project)=>{
    // Обращаемся к list и внутрь вставляем html код
    
    list.insertAdjacentHTML('afterbegin',
    // Обратите внимаение на кавычки, они обратные, чтобы можно было вставить переменные
    // Обращаемся к текущему проекту и к его полям 
    `<article class="project-item">
    <h2>${project.title}</h2>
    <img
      class="project-item__image"
      src="${project.image}"
      alt=""
    />
    <hr />
    <p>
    ${project.text}
    </p>
    <a href="${project.link}"><button>look it up</button></a>
  </article>`)
})
// Тут вместо получения по id используем получение через селектор и класс
let techList = document.querySelector(".technology-list")

let techMass = [
    {
        title: "Html",
        lvl: 80
    },
    {
        title: "CSS",
        lvl: 80
    },
    {
        title: "Js",
        lvl: 60
    },
    {
        title: "React",
        lvl: 50
    },
    {
        title: "NextJs",
        lvl: 40
    },
    {
        title: "VueJs",
        lvl: 30
    },
    {
        title: "Ionic",
        lvl: 20
    },
    {
        title: "TypeScript",
        lvl: 20
    }
]

techMass.forEach((item)=>{
    // Второй способ пройти по массиву объектов через foreach, тоже цикл
    // На 96 строчке ставим условие, если lvl меньше 40, тогда вставляем Beginner, иначе снова проверяем < 60 
    techList.insertAdjacentHTML("beforeend", `<li class="technology-item">
            <div class="technology-item__top">
              <h2 class="technology-item__title">${item.title}</h2>
              <h3 class="technology-item__level">${item.lvl < 40 ? "Beginner": item.lvl < 60 ? "Advanced" : "Pro"}</h3>
            </div>
            <div class="technology-item__bottom">
              <div style="width:${item.lvl}%" class="technology-item__top-line"></div>
            </div>
          </li>`)
})
