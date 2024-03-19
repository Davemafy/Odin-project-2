const header = document.querySelector('header')
const input = document.querySelector('input')
const output = document.querySelectorAll('.output')
const searchBtn = document.querySelector('.search-icon')
const cookieMenu = document.querySelector('.cookie-menu')

const acceptCookies = () => {
  cookieMenu.remove()
}

input.addEventListener('input', () => {
  output.forEach((box) => {
    box.textContent = `${input.value}`
  })
})

searchBtn.addEventListener('mouseenter', () => {
  header.classList.add('search')
})

fonts.forEach((box) => {
  box.classList.add('hidden');
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden')
      } else {
        entry.target.classList.add('hidden')
      }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));
