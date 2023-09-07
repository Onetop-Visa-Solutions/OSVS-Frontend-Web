const { hsl } = require('@cssninja/bulma-css-vars')

const appColors = {
  white: hsl(0, 0, 100),
  black: hsl(0, 0, 4),
  primary: hsl(191, 100, 88),
  dark: hsl(191, 94, 34),
  link: hsl(191, 100, 88),
  info: hsl(211, 82, 48),
  success: hsl(128, 22, 62),
  warning: hsl(41, 88, 58),
  danger: hsl(337, 98, 50),
}

module.exports = {
  jsOutputFile: 'src/scss/bulma-generated/bulma-colors.ts',
  sassOutputFile: 'src/scss/bulma-generated/generated-vars.sass',
  cssFallbackOutputFile: 'src/scss/bulma-generated/generated-fallback.css',
  colorDefs: appColors,
  sassEntryFile: 'src/scss/main.scss',
  transition: null,
}
