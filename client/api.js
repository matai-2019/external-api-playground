import Request from 'superagent'

const nasaURL = 'https://api.nasa.gov/planetary'
const apiKey = '/apod?apid_key='
const key = process.env.NASA_KEY || 'MWWr6ZAYpkuRtQPfdGac99yftGfp0PHwIrACfY8S'

export function getPicOfTheDay(callback) {
  return Request
    .get('https://api.nasa.gov/planetary/apod?api_key=MWWr6ZAYpkuRtQPfdGac99yftGfp0PHwIrACfY8S')
    .end(function (err, res) {
      callback(err, res)
    })
}

export function translateToYodish(text, callback) {
  return Request
    .post('https://yodish.p.rapidapi.com/yoda.json')
    .set('X-RapidAPI-Key','1a50e19f46msh88d5e2b0b27f644p1c8765jsn81d5d2cac5cc')
    .query({ text: text })
    .end(function (err, res) {
      callback(err, res)
    })
}


