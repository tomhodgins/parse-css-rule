import parseStylesheet from 'https://unpkg.com/parse-css-stylesheet/index.js'

export default function(string='') {
  return parseStylesheet(string).cssRules[0]
}