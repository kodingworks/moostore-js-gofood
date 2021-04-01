import MoostoreJS from 'moostorejs'
import Configuration from 'moostorejs/configuration'
import Gofood from '..'

export default class Usage {
  main() {
    const moostore = new MoostoreJS

    const gofood: Gofood = new Gofood(moostore)

    console.log('Fetch start')

    gofood
      .product()
      .getFromURL(
        'https://gofood.co.id/bandung/restaurant/soto-sate-ayam-pa-somad-karees-timur-6f98f851-e797-471a-bb72-31c6c85ef09d'
      )
      .then((response) => {
        const data = response.getData()
        console.log('Data fetched')
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

new Usage().main()