const axios = require('axios')
const { request, response } = require('express')

const getCanciones = (req = request, res = response) => {
  const {image = '', nombre = '', genero = '', reproducciones = '', isfavorite = '' } = req.query
  console.log(image, nombre, genero, reproducciones, isfavorite)

  let filtro = '' // Variable para ver si hay filtro

  if (image) {
    filtro += `?image=${image}`
  }
  
  if (nombre) {
    filtro += `?nombre=${nombre}`
  }

  if (genero) {
    filtro += filtro ? `&genero=${genero}` : `?genero=${genero}`
  }

  if (reproducciones) {
    filtro += filtro ? `&reproducciones=${reproducciones}` : `?reproducciones=${reproducciones}`
  }

  if (isfavorite) {
    filtro += filtro ? `&isfavorite=${isfavorite}` : `?isfavorite=${isfavorite}`
  }

  axios.get(`https://66dc500547d749b72acb464f.mockapi.io/api/canciones${filtro}`)
    .then((response) => {
      const { data = [] } = response // manejar éxito
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => { // manejar error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

const getCancion = (req = request, res = response) => {
  const { id = '' } = req.params
  console.log(id)

  axios.get(`https://66dc500547d749b72acb464f.mockapi.io/api/canciones/${id}`)
    .then((response) => {
      const { data } = response
      res.status(200).json({
        msg: 'Ok',
        data
      })
    })
    .catch((error) => {
      // handle error
      console.log(error)
      res.status(400).json({
        msg: 'Error',
        error
      })
    })
}

module.exports = {
  getCanciones,
  getCancion
}
