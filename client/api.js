import request from 'superagent'

const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=OgnSEJ0P2BEKUoi48lXMeAgPhXMLXRdjARuf11aZ'

export function picOfADay () {
  return request.get(nasaUrl)
    .then(res => {
      return res.body
    })
}
