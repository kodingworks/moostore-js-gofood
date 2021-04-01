import Parameter from 'moostorejs/lib/parameter'

export default class Shop {
  parameters: Parameter

  constructor(parameters: Parameter) {
    this.parameters = parameters
  }

  getFromURL(url: string) {
  }
}
