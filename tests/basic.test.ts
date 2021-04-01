import MoostoreJS from 'moostorejs'
import Configuration from 'moostorejs/configuration'
import Request from 'moostorejs/lib/messages/request'
import Product from '../lib/product'
import Gofood from './../index'

let configuration: Configuration
let moostore: MoostoreJS

describe('test init object', () => {
  it('check configuration object', () => {
    const credentials = {
      username: '',
    }
    const baseURL = 'https://base-url.com'

    configuration = new Configuration({
      credentials,
      baseURL,
    })
    expect(configuration.getBaseURL()).toBe(baseURL)
    expect(configuration.getCredentials()).toBe(credentials)
  })

  it('check gofood object', () => {
    moostore = new MoostoreJS(configuration)

    const gofood: Gofood = new Gofood(moostore)

    expect(gofood.product()).toStrictEqual(new Product(moostore))
  })
})

describe('test request', () => {
  it('check request product from url', (done) => {
    moostore = new MoostoreJS(configuration)
    const gofood = new Gofood(moostore)

    gofood
      .product()
      .getFromURL(
        'https://gofood.co.id/bandung/restaurant/soto-sate-ayam-pa-somad-karees-timur-6f98f851-e797-471a-bb72-31c6c85ef09d'
        ).then(data => {
          data = data.getData()
          done(data)
      }).catch(err => {
        done(err)
      })
  })
})