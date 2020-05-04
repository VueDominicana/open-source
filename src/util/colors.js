// @ts-check
/** Convert hex color to rgb
 * @param {string} hex
 * @returns {(object|null)}
 * @see https://stackoverflow.com/a/5624139/3367568
 */
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    };
  }

  return null;
}

/** Set the contrast based on brightness of a rgb color
 * @param {Object} rgb
 * @returns {string}
 * @see https://stackoverflow.com/questions/11867545/change-text-color-based-on-brightness-of-the-covered-background-area#comment80648498_11868159
 */
export function setContrast(rgb) {
  return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000 > 125 ? "black" : "white";
}
