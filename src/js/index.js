import { preloadFonts } from './utils.js'

preloadFonts(['Impact']).then(() => {
  document.body.classList.add('loaded')
  setTimeout(() => {
    document.body.classList.remove('loading')
  }, 350)
})
