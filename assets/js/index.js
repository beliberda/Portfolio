projectMass = [
    {
        image: './assets/images/project.png',
        title: 'Parallax3D',
        text:'Site with 3D Effect, rain and relax music',
        link:'https://beliberda.github.io/Parallax3D/'
    },
    {
        image: './assets/images/project.png',
        title: 'Parallax3D',
        text:'Site with 3D Effect, rain and relax music',
        link:'https://beliberda.github.io/Parallax3D/'
    },
    {
        image: './assets/images/project.png',
        title: 'Parallax3D',
        text:'Site with 3D Effect, rain and relax music',
        link:'https://beliberda.github.io/Parallax3D/'
    },
    {
        image: './assets/images/project.png',
        title: 'Parallax3D',
        text:'Site with 3D Effect, rain and relax music',
        link:'https://beliberda.github.io/Parallax3D/'
    },
]

let list = document.getElementById("project-list")

projectMass.map((project)=>{
    list.insertAdjacentHTML('afterbegin', `<article class="project-item">
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
    techList.insertAdjacentHTML("beforeend", `<li class="technology-item">
            <div class="technology-item__top">
              <h2 class="technology-item__title">${item.title}</h2>
              <h3 class="technology-item__level">${item.lvl < 40 ? "Beginner": "Advanced"}</h3>
            </div>
            <div class="technology-item__bottom">
              <div style="width:${item.lvl}%" class="technology-item__top-line"></div>
            </div>
          </li>`)
})
