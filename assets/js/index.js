// массив объектов, где один объект - один проект
// воспользуемся импортом массива из соотвествующего файла

// !!!!!! НЕ забудьте при подключении скрипта прописать type="module"


import projectMass from './projects.js'
// Получаем элемент с id "project-list"
let list = document.getElementById("project-list");
// Проходим по массиву с проектами с помощью метода map
projectMass.map((project) => {
    // Обращаемся к list и внутрь вставляем html код

    list.insertAdjacentHTML(
        "afterbegin",
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
  </article>`
    );
});

// Тут вместо получения по id используем получение через селектор и класс
let techList = document.querySelector(".technology-list");

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

techMass.forEach((item) => {
    // Второй способ пройти по массиву объектов через foreach, тоже цикл
    // На 82 строчке ставим условие, если lvl меньше 40, тогда вставляем Beginner, иначе снова проверяем < 60 
    techList.insertAdjacentHTML("beforeend", `<li class="technology-item">
            <div class="technology-item__top">
              <h2 class="technology-item__title">${item.title}</h2>
         
              <h3 class="technology-item__level">${item.lvl >= 80 ? "Senior" : item.lvl >= 60 ? "Middle" : "Junior"
        }</h3>
            </div>
            <div class="technology-item__bottom">
              <div style="width:${item.lvl
        }%" class="technology-item__top-line"></div>
            </div>
          </li>`)
    //   на 85 строке в зависимости от уровня меняем ширину линии
})

