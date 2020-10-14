import React, { Component } from 'react';
import Product from './Product';

export default class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                //{'name': 'Product 1', 'image': 'https://s1.eestatic.com/2019/08/15/omicrono/Omicrono_421718717_132328427_1024x576.jpg', 'alt': 'Tee 1', 'description': 'A tshirt bruh'},
                {'name': 'Product 2', 'image': 'https://http2.mlstatic.com/remera-circuito-electro-galactico-D_NQ_NP_723275-MLA27595106230_062018-F.jpg', 'alt': 'Tee 2', 'description': 'Another one'},
                {'name': 'Product 3', 'image': 'https://http2.mlstatic.com/remera-dice-sword-para-dungeon-master-dragons-en-dungeons-ta-D_NQ_NP_901762-MLA27595145093_062018-F.jpg', 'alt': 'Tee 3', 'description': 'And another one'},
                {'name': 'Product 4', 'image': 'https://pakvariety.com/wp-content/uploads/2019/03/IMG-20190329-WA0053.jpg', 'alt': 'Tee 4', 'description': 'Last one i swear'}
            ]
        }
    }

    render() {
        var productsList = this.state.products.map((product) => {
            return <Product product={product}></Product>
        });

        return (
            <div style={{width: '50%', backgroundColor: 'blue'}}>
                <h1>Products</h1>
                <div>
                    {productsList}
                </div>
            </div>
        );
    }
}