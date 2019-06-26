import request from 'superagent'

let numberURL = 'http://numbersapi.com/'

export function getNumberFact (num, fact) {
  numberURL = numberURL + num
  fact && (numberURL = numberURL + `/${fact}`)
  console.log(`\nHitting the getNumberFact(${num})\n`)
  console.log('Number url is: ', numberURL)
  return request.get(numberURL)
    .then(res => res.text)
}

// export function whatType (num) {
//   numberURL = numberURL + num
//   return request.get(numberURL)
//   .then(res => res.type)
// }
