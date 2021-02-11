class Cart {
  #cart = []

  #getProductCount() {
    return this.#cart.length
  }

  #getTotalPrice() {
    return this.#cart.reduce((total, { price }) => (total += price), 0)
  }

  addProducts(products) {
    this.#cart.push(...products)
  }

  removeProduct(product) {
    for (const key in product) {
      const value = product[key]
      this.#cart = this.#cart.filter((item) => item[key] !== value)
    }
  }

  getInfo() {
    console.log(
      `В корзине ${this.#getProductCount()} товар(а) на ${
        this.#getProductCount() > 1 ? 'общую ' : ''
      }сумму ${this.#getTotalPrice()} рублей`
    )
  }
}

const cart = new Cart()

cart.addProducts(products)
cart.getInfo()
// В корзине 3 товар(а) на общую сумму 300 рублей

cart.removeProduct({ id: '2' })
cart.getInfo()
// В корзине 2 товар(а) на общую сумму 200 рублей

cart.removeProduct({ title: 'Молоко' })
cart.getInfo()
// В корзине 1 товар(а) на сумму 50 рублей

console.log(cart.cart) // undefined
// console.log(cart.#cart) // Uncaught SyntaxError: Private field '#cart' must be declared in an enclosing class
// cart.getTotalPrice() // TypeError: cart.getTotal is not a function
// cart.#getTotalPrice() // Error
