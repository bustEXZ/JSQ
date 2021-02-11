const cartModule = (() => {
  const cart = []

  function getProductCount() {
    return cart.length
  }

  function getTotalPrice() {
    let total = 0
    for (const item of cart) {
      total += item.price
    }
    return total
  }

  return {
    addProducts(products) {
      products.forEach((product) => {
        cart.push(product)
      })
    },
    removeProduct(product) {
      const key = Object.keys(product)[0]
      const value = Object.values(product)[0]

      const index = cart.findIndex((item) => item[key] === value)

      cart.splice(index, 1)
    },
    getInfo() {
      console.log(
        `В корзине ${getProductCount()} товар(а) на ${
          getProductCount() > 1 ? 'общую ' : ''
        }сумму ${getTotalPrice()} рублей`
      )
    }
  }
})()

const products = [
  {
    id: '1',
    title: 'Хлеб',
    price: 50
  },
  {
    id: '2',
    title: 'Масло',
    price: 150
  },
  {
    id: '3',
    title: 'Молоко',
    price: 100
  }
]

cartModule.addProducts(products)
cartModule.getInfo()
// В корзине 3 товар(а) на общую сумму 300 рублей

cartModule.removeProduct({ id: '2' })
cartModule.getInfo()
// В корзине 2 товар(а) на общую сумму 250 рублей

cartModule.removeProduct({ title: 'Молоко' })
cartModule.getInfo()
// В корзине 1 товар(а) на сумму 100 рублей

console.log(cartModule.cart) // undefined
// cartModule.getProductCount() // Uncaught TypeError: cartModule.getProductCount is not a function
