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

    const elmTitle = $('#description h3')[0]
    const elmDescription = $(elmTitle).next()

    shop['id'] = $('meta[property="og:url"]').attr('content')

    shop['link'] = $('meta[property="og:url"]').attr('content')

    shop['name'] = $(elmTitle).text()

    shop['description'] = elmDescription.text()

    shop['address'] = $($('.address-phone-container .content')[0]).text()

    const pictures = []
    /* $('#description .detail img').each((key, image) => {
      pictures.push($(image).attr('src'))
    }) */
    pictures.push($('meta[property="og:image"]').attr('content'))
    shop['pictures'] = pictures

    const rate = $($(elmDescription.next().next().children()[0]).children()[1]).text()
    shop['rate'] = rate

    return new Shop(shop)
  }
}
