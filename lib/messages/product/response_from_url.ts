import Response from 'moostorejs/lib/messages/response'
import ResponseInterface from 'moostorejs/lib/messages/response_interface'
import Product from 'moostorejs/lib/entities/product'

export default class ResponseFromURL
  extends Response
  implements ResponseInterface {
  getData() {
    let data = this.mapData(this.parseHTML(this.data))

    return data
  }

  mapData($) {
    const product = {
      link: null,
      name: null,
      description: null,
      category: null,
      weight: null,
      condition: null,
      pictures: [],
      stock: null,
      price: null,
      rate: null,
    }

    product['name'] = $($('h3')[0]).text()

    return new Product(product)
  }
}
