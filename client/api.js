import request from 'superagent'
import keys from '../keys'

const nasaUrl = `https://api.nasa.gov/planetary/apod?${keys.nasaKey}`

// const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=OgnSEJ0P2BEKUoi48lXMeAgPhXMLXRdjARuf11aZ'

export function picOfADay () {
  return request.get(nasaUrl)
    .then(res => {
      return res.body
    })
}
