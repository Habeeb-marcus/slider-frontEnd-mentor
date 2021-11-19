const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slide = document.querySelectorAll('.slide');



let i = 0


const nextSlide = () => { 
    i++
         if(i > slide.length -1){
             i = 0
         } 
          slide.forEach(slide => {
        slide.style.display= 'none'
    })
         slide[i].style.display = 'flex'
}

const prevSlide = () => { 
    i--
         if(i < 0){
             i = slide.length -1
         } 
          slide.forEach(slide => {
        slide.style.display= 'none'
    })
         slide[i].style.display = 'flex'
}


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);