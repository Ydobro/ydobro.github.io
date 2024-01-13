/**
 * The function `preloadFonts` is a JavaScript function that preloads custom fonts using the WebFont
 * API.
 * See: https://github.com/typekit/webfontloader
 *
 * @param [families] - The `families` parameter is an array of font families that you want to preload.
 * Each font family should be specified as a string.
 * @returns The `preloadFonts` function returns a Promise.
 */
const preloadFonts = (families = []) => {
  return new Promise((resolve) => {
    WebFont.load({
      custom: {
        families
      },
      active: resolve
    })
  })
}

/**
 * Preloads images specified by the CSS selector.
 *
 * @param {string} [selector='img'] - CSS selector for target images.
 * @returns {Promise} - Resolves when all specified images are loaded.
 */
const preloadImages = (selector = 'img') => {
  return new Promise((resolve) => {
    // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
    imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve)
  })
}

// Exporting utility functions for use in other modules.
export { preloadImages, preloadFonts }
