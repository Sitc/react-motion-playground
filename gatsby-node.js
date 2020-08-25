exports.createPages = ({ actions: { createPage } }) => {
  try {

    const products = require("./src/data/products.json")
    const ProductComponent = require.resolve("./src/templates/product.js")

    products.forEach(product => {
      createPage({
        path: `/product/${product.id}`,
        component: ProductComponent,
        context: product,
      })
    })
    return Promise.resolve()
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}