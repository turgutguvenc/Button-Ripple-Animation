const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // this values are the location of where we click on the entire view port (only in this event listener which is works on the button)
    const x = e.clientX
    const y = e.clientY

    // e.target here target, which is always the element that the event fires of off in this case button
    
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    // Now we are getting where normalized locations by doing this. basically substracting where we click on the button from the button location
    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top= yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})