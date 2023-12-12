import { preloadFonts } from './utils.js'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

preloadFonts(['Impact']).then(() => {
  document.body.classList.add('loaded')
  setTimeout(() => {
    document.body.classList.remove('loading')
  }, 350)

  init()
})

const init = () => {
  initPathAnimation()
}

const initPathAnimation = () => {
  // All path elements in the page
  const paths = [...document.querySelectorAll('path.js-path-animated')]

  // Animate the d attribute (path initial) to the value in data-path-to;
  // start when the top of its SVG reaches the bottom of the viewport and
  // end when the bottom of its SVG reaches the top of the viewport
  paths.forEach((el) => {
    const svgEl = el.closest('svg')
    const pathTo = el.dataset.pathTo

    if (pathTo) {
      gsap
        .timeline({
          // See: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
          scrollTrigger: {
            trigger: svgEl,
            start: 0,
            scrub: true
          }
        })
        .to(el, {
          ease: 'none',
          attr: { d: pathTo }
        })
    }
  })
}
