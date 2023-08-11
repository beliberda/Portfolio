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