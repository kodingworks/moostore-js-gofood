import MoostoreJS from 'moostorejs'
import Configuration from 'moostorejs/configuration'
import Gofood from '..'
import * as fs from 'fs'
const cheerio = require('cheerio')

export default class Usage {
  main() {
    const credentials = ''
    const baseURL = ''

    const configuration = new Configuration({
      credentials,
      baseURL,
      cachePath: './cache'
    })

    const moostore = new MoostoreJS(configuration)

    const gofood: Gofood = new Gofood(moostore)

    console.log('Fetch start')

    gofood
      .shop()
      .getFromURL(
        'https://gofood.co.id/english/jakarta/restaurant/xiboba-cilandak-9569459c-ebf7-43a1-8109-590c3ae68663'
      )
      .then((response) => {
        const data = response.getData()
        console.log('Data fetched')
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })


    /* gofood
      .shop()
      .getProducts(
        'https://gofood.co.id/english/jakarta/restaurant/xiboba-cilandak-9569459c-ebf7-43a1-8109-590c3ae68663'
      )
      .then((response) => {
        const data = response.getData()
        console.log('Data fetched')
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      }) */
  }
}

new Usage().main()
