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

// Exporting utility functions for use in other modules.
export { preloadFonts }
