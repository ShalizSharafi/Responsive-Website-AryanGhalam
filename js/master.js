
//card scroll effect
const card = document.querySelectorAll('.card')

card.forEach((val)=>{
       val.classList.add(val.getAttribute('data-shaliz'))
       val.parentElement.parentElement.setAttribute('data-top',val.parentElement.parentElement.offsetTop)
})

window.addEventListener('scroll',()=>{
       let scrollT = window.scrollY +600
       card.forEach((val)=>{
              if(scrollT > val.parentElement.parentElement.getAttribute('data-top')){
                     val.classList.remove(val.getAttribute('data-shaliz'))
              }
       })
})
//AboutFigurs scroll effect
const aboutFigures = document.querySelectorAll('.aboutFigures')

aboutFigures.forEach((val)=>{
       val.classList.add(val.getAttribute('data-shaliz'))
       val.parentElement.parentElement.parentElement.setAttribute('data-top',val.parentElement.parentElement.parentElement.offsetTop)
})

window.addEventListener('scroll',()=>{
       let scrollT = window.scrollY +300
       aboutFigures.forEach((val)=>{
              if(scrollT > val.parentElement.parentElement.parentElement.getAttribute('data-top')){
                     val.classList.remove(val.getAttribute('data-shaliz'))
              }
       })
})

