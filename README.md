# MoostoreJS - Gojek

This library is extension of MoostoreJS

## TOC

- [Requirement](#requirement)
- [Installation](#installation)
- [Usage](#usage)

## Requirement

- moostorejs: ^1.0.0

## Installation

## Usage

> Some data may be cant be fetched,
> this library is just fetch any data that existed on visited page, and it depend on site itself

### Init

firstly, import the base required library
```ts
import MoostoreJS from 'moostorejs'
import Gofood from 'moostorejs-gofood'
```

then we can init the object on a constant
```ts
const moostore = new MoostoreJS()

const gofood = new Gofood(moostore)
```

### Get Shop Detail From URL

Here is the sample how to get shop detail from an url

> Use full shop url like below

```ts
const shopURL = 'https://gofood.co.id/bandung/restaurant/soto-sate-ayam-pa-somad-karees-timur-6f98f851-e797-471a-bb72-31c6c85ef09d'

gofood
  .shop()
  .getFromURL(shopURL)
  .then((response) => {
    const data = response.getData()
    console.log('Response : ', data)
  })
  .catch((err) => {
    // handle error in here
  })
```

### Get Product Lists From Shop URL

Here is the sample how to get product lists from shop url

> Use full shop url like below

```ts
const shopURL = 'https://gofood.co.id/bandung/restaurant/soto-sate-ayam-pa-somad-karees-timur-6f98f851-e797-471a-bb72-31c6c85ef09d'

gofood
  .shop()
  .getProducts(shopURL)
  .then((response) => {
    const data = response.getData()
    console.log('Response : ', data)
  })
  .catch((err) => {
    // handle error in here
  })
```