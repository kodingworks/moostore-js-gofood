import Configuration from 'moostorejs/configuration'
import Request from 'moostorejs/lib/messages/request'
import Parameter from 'moostorejs/lib/parameter'
import RequestInterface from 'moostorejs/lib/messages/request_interface'
import ResponseFromURL from './response_from_url'
import ResponseInterface from 'moostorejs/lib/messages/response_interface'

export default class RequestFromURL
  extends Request
  implements RequestInterface {
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

  async execute() {
    const html = await this.getPage()
    const response = new ResponseFromURL()
    response.setData(html)

    return response
  }
}
