const menuIcon = document.querySelector('.icon-menu') ; 
const menuBody = document.querySelector('.menu__body') ; 
menuIcon.addEventListener('click' , function () {
  this.classList.toggle('__active') ; 
  menuBody.classList.toggle('__active') ; 

})
const tabsTitle = document.querySelectorAll('.tabs__title') ; 
const contentCareerBody = document.querySelectorAll('.content-career__body') ; 
for (let i = 0 ; i < tabsTitle.length ; i++ ) {
  tabsTitle[i].addEventListener('click' , function () {
    if (document.querySelector('._active-load')) document.querySelector('._active-load').classList.remove('._active-load') ; 
    document.querySelectorAll('._tab-active').forEach(item => item.classList.remove('_tab-active')); 
    document.querySelectorAll('._active-content').forEach(item => item.classList.remove('_active-content')); 
      
    this.classList.add('_tab-active') ; 
    contentCareerBody[i].classList.add('_active-content') ;
    document.querySelector('._active-content').style.cssText = `opacity: 0 ; visibility: hidden ; ` ; 
    setTimeout(function () { 
      document.querySelector('._active-content').style.cssText = `opacity: 1 ; visibility: visible ; ` ; 
    } , 1)
      console.log(document.querySelectorAll('._tab-active').children) 
  })
}


const swiper = new Swiper('.portfolio__slider' , {
    spaceBetween: 20 , 
    observer: true , 
    loop: true , 
    observeParents: true , 
    slidesPerView: 3 , 
    speed: 800 , 
    navigation: {
      prevEl: '.portfolio__arrow_left' , 
      nextEl: '.portfolio__arrow_right' , 
    } , 
    breakpoints: {
      320: { 
        slidesPerView: 2 ,  
      } , 
      767: { 
        slidesPerView: 2 ,  
      } , 
      992: { 
        slidesPerView: 3 ,  
      } 
    }
})

const form = document.querySelector('.form') ; 
const formInputs = document.querySelectorAll('.form__input') ;
const formError = document.querySelectorAll('.form__error')  ; 
form.addEventListener('submit' , function (e) {
   for (let i = 0 ; i < formInputs.length ; i++ ) {
    if (formInputs[i].value === '') {
        e.preventDefault() ; 
        formError[i].classList.add('_active') ; 
    } else {
      formError[i].classList.remove('_active') ; 
    }
  }
}) 
