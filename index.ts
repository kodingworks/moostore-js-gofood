import MoostoreJS from 'moostorejs'
import Shop from './lib/shop'
import Factory from 'moostorejs/lib/factory'
import Product from './lib/product'

export default class Gofood extends Factory {
  moostore: MoostoreJS

  constructor(moostore: MoostoreJS) {
    super()
    this.moostore = moostore
  }

  product(): Product {
    if (!this.hasService('product')) {
      this.addService('product', new Product(this.moostore))
    }

    return this.getService('product')
  }

  shop(): Shop {
    if (!this.hasService('shop')) {
      this.addService('shop', new Shop(this.moostore))
    }

    return this.getService('shop')
  }
}
