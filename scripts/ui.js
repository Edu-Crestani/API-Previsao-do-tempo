import dias from "./render.js"

const active = document.querySelector('.active')

active.addEventListener('click', () => {
    const sectionInfos = document.querySelector('#section__infos')
    sectionInfos.classList.remove('hidden')
})

const closeW = document.querySelector('.close__window')

closeW.addEventListener('click', () => {
    const sectionInfos = document.querySelector('#section__infos')
    sectionInfos.classList.add('hidden')
})



const li = document.querySelectorAll('.li__upcoming__days')
let i = 0

function arrow(x){
        i = (i + x + li.length) % li.length
        li.forEach(element => {
            //tava pegando o h2 n o li
            element.classList.remove('active')
        });
        li[i].classList.add('active')
        console.log(li.length, i)
}

console.log(
    [...li].map(el => el.classList.contains('active'))
)

window.addEventListener('keydown', (key) => {
    if (key.key === 'ArrowRight') {
        arrow(+1)
    }
})

window.addEventListener('keydown', (key) => {
    if (key.key === 'ArrowLeft') {
        arrow(-1)
    }
})

