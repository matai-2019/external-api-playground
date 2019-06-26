import request from 'superagent'
const hpUrl = 'https://www.potterapi.com/v1/characters?key=$2a$10$ZbeMuQMa5WtxQ4XOtqwywOFe.nwFFXu27Z3egbPP5gz59aIuvIWAS'
const url = 'https://www.potterapi.com/v1/characters/5a0fa4daae5bc100213c232e?key=$2a$10$ZbeMuQMa5WtxQ4XOtqwywOFe.nwFFXu27Z3egbPP5gz59aIuvIWAS'

export function getCharacters () {
  return request
    .get(hpUrl)
    .then(res => {
      console.log(res.body)
      return res.body
      // res.send(res)
    })
}

export function getCharDetails () {
  for (let i = 0; i < res.body.length; i++) {
    let id = res.body[i].id
  }
  const url = `https://www.potterapi.com/v1/characters/${id}?key=$2a$10$ZbeMuQMa5WtxQ4XOtqwywOFe.nwFFXu27Z3egbPP5gz59aIuvIWAS`
  return request
    .get(url)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}
