import request from 'superagent'

const stapiURL = 'http://stapi.co/api/v1/rest/species/search'

export function getSpecies () {
  return request.get(stapiURL)
    .then(res => {
      console.log(res.body.species)
      return res.body.species
    })
}

// module.exports = getSpecies

// O2Iq6jiWxbIpL1iQ5RRsmnZ3oL2dmZhbbLsBKbcB