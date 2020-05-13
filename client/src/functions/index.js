// This function takes as argument string. Its a class of the element we want to select.
// For example <div className='header'></div>  we need to pass '.header' as an argument - animateToView('.header')

export const animateToView = classString => {
  const element = document.querySelector(`${classString}`)

  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = element.getBoundingClientRect()
  const offset = elemRect.top - bodyRect.top

  const applyEffectAt = offset - window.innerHeight / 1.6

  const apply = bodyRect.y + applyEffectAt

  if (apply <= 0) {
    element.style.opacity = 1
    return (element.style.transform = "translateX(0)")
  } else {
    element.style.opacity = 0
    return (element.style.transform = "translateX(-100%)")
  }
}
