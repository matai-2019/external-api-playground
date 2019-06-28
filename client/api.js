import request from 'superagent'

const spellsAPI = 'https://www.potterapi.com/v1/spells/?$2a$10$iYEHz1lcW52P/c6K3L7lU.7KX8ds6Ddx8.LQESdDKXynj5F9.UM8a'


const Key = '$2a$10$iYEHz1lcW52P/c6K3L7lU.7KX8ds6Ddx8.LQESdDKXynj5F9.UM8a'

export function getSpells () {
  return request.get(spellsAPI)
    .set('Key')
    .then(res => {
      return res.body.text
    })
}
