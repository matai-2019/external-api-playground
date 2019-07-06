import request from 'superagent'
const hpUrl = 'https://www.potterapi.com/v1/characters?key=$2a$10$ZbeMuQMa5WtxQ4XOtqwywOFe.nwFFXu27Z3egbPP5gz59aIuvIWAS'

export function getCharacters () {
  return request
    .get(hpUrl)
    .then(res => {
      console.log(res.body)
      return res.body
      // res.send(res)
    })
}

// export function getCharDetails (req) {
//   const url = `https://www.potterapi.com/v1/characters/${req.params.id}?key=$2a$10$ZbeMuQMa5WtxQ4XOtqwywOFe.nwFFXu27Z3egbPP5gz59aIuvIWAS`
//   return request
//     .get(url)
//     .then(res => {
//       console.log(res.body)
//       return res.body
//     })
// }

export function getCharDetails (id) {
  const url = `https://www.potterapi.com/v1/characters/${id}?key=$2a$10$ZbeMuQMa5WtxQ4XOtqwywOFe.nwFFXu27Z3egbPP5gz59aIuvIWAS`
  return request
    .get(url)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}
