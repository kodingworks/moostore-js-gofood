import Configuration from 'moostorejs/configuration'
import ResponseInterface from 'moostorejs/lib/messages/response_interface'
import Parameter from 'moostorejs/lib/parameter'
import RequestFromURL from './messages/shop/request_from_url'

export default class Shop {
  configuration: Configuration
  parameters: Parameter

  constructor({ configuration, parameters }) {
    this.configuration = configuration
    this.parameters = parameters
  }

  getFromURL(url: string): Promise<ResponseInterface> {
    this.parameters.set('q', url)

    const request = new RequestFromURL(this.configuration, this.parameters)
    return request.execute()
  }
}
