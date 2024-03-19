const testTextInput = document.querySelector('#test-input')
const output = document.querySelectorAll('.output')

testTextInput.addEventListener('input', () => {
    console.log(testTextInput.value)
  output.forEach((box) => {
    box.textContent = `${testTextInput.value}`
  })
})

// searchBtn.addEventListener('mouseenter', () => {
//   header.classList.add('search')
// })

// fonts.forEach((box) => {
//   box.classList.add('hidden');
// })

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.remove('hidden')
//       } else {
//         entry.target.classList.add('hidden')
//       }
//     })
// })

// const hiddenElements = document.querySelectorAll('.hidden');

// hiddenElements.forEach((el) => observer.observe(el));
