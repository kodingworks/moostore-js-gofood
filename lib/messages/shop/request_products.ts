import Configuration from 'moostorejs/configuration'
import Request from 'moostorejs/lib/messages/request'
import RequestInterface from 'moostorejs/lib/messages/request_interface'
import Parameter from 'moostorejs/lib/parameter'
import ResponseProducts from './response_products'
import * as fs from 'fs'

export default class RequestProducts extends Request implements RequestInterface {
  parameters: Parameter

  constructor(configuration: Configuration, parameters: Parameter) {
    super(configuration)
    this.parameters = parameters
  }

  getURL(): string {
    if (this.parameters.has('q')) {
      return this.parameters.get('q')
    }

    return null
  }

  getData(): object {
    return {}
  }

  async postRequestCallback(page) {
    // await page.waitForSelector('section .main-container')
  }

  async execute() {
    const html = await this.getPage()
    const response = new ResponseProducts()
    response.setData(html)

    fs.writeFile('log.html', html, () => {})

    return response
  }
}
