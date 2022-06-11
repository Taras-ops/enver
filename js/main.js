const changePerPage = (width) => {
  if(width < 620) {
    return 1
  } else if(width < 1270) {
    return 2
  } else {
    return 3
  }
}


window.addEventListener("optimizedResize", function() {
    const widowWidth = window.innerWidth
    splidePages = changePerPage(widowWidth)
});

let splidePages = changePerPage(window.innerWidth)
let splideFocus = splidePages == 3 ? 'center' : ''

const splide =  new Splide( '.splide', {
  type   : 'loop',
  perPage: splidePages,
  focus  : splideFocus,
} );

splide.mount()

// burger


const burgerBtn = document.getElementById('burgerBtn')
const body = document.querySelector('body')
const headerNav = document.getElementById('headerNav')
const headerLinksWrapper = document.getElementById('headerLinksWrapper')

const mainBtn = document.getElementById('mainBtn')
const headerLink = document.querySelectorAll('.header__link')
const headerBtn = document.getElementById('headerBtn')

let open = false

const changeOpen = () => {
  open = (!open)
}

const removeClassList = () => {
  burgerBtn.classList.remove('active')
  body.classList.remove('overflow')
  headerNav.classList.remove('show')
  changeOpen()
}

const bodyCloseNav = () => {

  body.addEventListener('click', (e) => {
    if(e.target != headerNav && e.target != burgerBtn && e.target != headerLinksWrapper) {
      removeClassList()
      console.log(e.target)
    }
  })

}

headerBtn.addEventListener('click', () => {
  removeClassList()
})

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active')
  body.classList.toggle('overflow')
  headerNav.classList.toggle('show')
  changeOpen()

  if(open) {
    bodyCloseNav()
  }
})



// smooth scroll

function handleButtonClick(item) {
  let elemId = item.getAttribute('scrollto')
   let element = document.getElementById(`${elemId}`)
   element.scrollIntoView({block: "center", behavior: "smooth"});
}

mainBtn.addEventListener('click', () => {
  handleButtonClick(mainBtn)
})

headerBtn.addEventListener('click', () => {
  handleButtonClick(headerBtn)
})

headerLink.forEach((e) => {
  e.addEventListener('click', () => {
    handleButtonClick(e)
  })
})

