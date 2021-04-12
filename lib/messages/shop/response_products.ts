import Response from 'moostorejs/lib/messages/response';
import ResponseInterface from 'moostorejs/lib/messages/response_interface';
import Product from 'moostorejs/lib/entities/product'

export default class ResponseProducts extends Response implements ResponseInterface {
  getData() {
    let data = this.mapData(this.parseHTML(this.data))

    return data
  }

  mapData($) {
    const products = []

    $('section .main-container').each((key, item) => {
      const textContainer = $(item).find('.text-container p')

      const title = $(textContainer.get(0))
      const price = $(textContainer[1])

      let priceAmount =
        price.get(0).children[1] !== undefined &&
        price.get(0).children[1] !== ''
          ? $(price.get(0).children[1]).text()
          : price.get(0).children[0] !== undefined &&
            price.get(0).children[0] !== ''
          ? $(price.get(0).children[0]).text()
          : 0
      priceAmount = parseInt(String(priceAmount).replace('.', ''))

      let priceDiscount =
        price.get(0).children[1] !== undefined &&
        price.get(0).children[1] !== ''
          ? $(price.get(0).children[0]).text()
          : 0
      priceDiscount = parseInt(String(priceDiscount).replace('.', ''))

      if (parseInt(priceDiscount) > 0) {
        priceDiscount = parseInt(priceAmount) - parseInt(priceDiscount)
      }

      const product = {
        link: null,
        name: $(title.get(0).children[0].children).text(),
        description:
          title.get(0).children[1] !== undefined
            ? $(title.get(0).children[1]).text()
            : null,
        category: null,
        weight: null,
        condition: null,
        pictures: [$($('section .main-container')[0]).find('img').attr('src')],
        stock: null,
        price: {
          amount: priceAmount,
          discount: priceDiscount,
        },
        rate: null,
      }

      products.push(new Product(product))
    })

    return products
  }
}
