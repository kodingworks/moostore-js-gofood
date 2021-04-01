import Response from 'moostorejs/lib/messages/response'
import ResponseInterface from 'moostorejs/lib/messages/response_interface'
import Shop from 'moostorejs/lib/entities/shop'

export default class ResponseFromURL
  extends Response
  implements ResponseInterface {
  getData() {
    let data = this.mapData(this.parseHTML(this.data))

    return data
  }

  mapData($) {
    const shop = {
      id: null,
      link: null,
      name: null,
      description: null,
      address: null,
      pictures: [],
      rate: null,
    }

    shop['name'] = $($('h3')[0]).text()

    shop['description'] = $($('h3')[0]).next().text()

    shop['address'] = $($('.address-phone-container .content')[0]).text()

    return new Shop(shop)
  }
}
