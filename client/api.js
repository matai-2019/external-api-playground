import Request from 'superagent'

const nasaURL = 'https://api.nasa.gov/planetary'
const apiKey = '/apod?apid_key='
const key = process.env.NASA_KEY || 'MWWr6ZAYpkuRtQPfdGac99yftGfp0PHwIrACfY8S'

export function getPicOfTheDay(callback) {
  console.log(key)
  return Request.get('https://api.nasa.gov/planetary/apod?api_key=MWWr6ZAYpkuRtQPfdGac99yftGfp0PHwIrACfY8S')
    .end(function (err, res) {
      callback(err, res)
    })
}