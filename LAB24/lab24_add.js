const button = document.getElementById('myButton')
const tooltip = document.getElementById('tooltip')

button.addEventListener('mouseout', () => {
  tooltip.style.visibility = 'hidden'
})
button.addEventListener('mouseover', () => {
  tooltip.style.visibility = 'visible'
})