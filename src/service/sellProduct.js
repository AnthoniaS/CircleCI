
/**
 * A quantidade vendida pode ser de 1 ou mais unidades
 * --> Se estoque ficar negativo uma exception deve ser lançada
 * --> O valor de venda não pode ser maior que o valor de compra
 * @param {*} product 
 * @param {*} amount 
 */

import Product from '../model/product'

export default function sellProduct(product, amount){
    product.stock -= amount;
    return product;
}