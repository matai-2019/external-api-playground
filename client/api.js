import request from 'superagent'
import keys from '../keys'

const nasaUrl = `https://api.nasa.gov/planetary/apod?${keys.nasaKey}`

export function picOfADay () {
  return request.get(nasaUrl)
    .then(res => {
      return res.body
    })
}
