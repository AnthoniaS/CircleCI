import Product from '../src/model/product'
import sell from '../src/service/sellProduct'

test('deve validar baixa de estoque da venda de uma unidade', () => {
    let produto = new Product('Celular', 500.00, 980.00, 10);
    sell(produto, 1);
    expect(produto.stock).toBe(9);
})
