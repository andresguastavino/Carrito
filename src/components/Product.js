import React, { Component } from 'react';
import '../styles/Product.css';

export default class Product extends Component {
    constructor(props) {
        super(props);
    }
    
    addToCart() {
        console.log(this.props.product);
    }

    render() {
        var product = this.props.product;

        return (
            <div onClick={this.addToCart} className="product">
                <div className='product-image'>
                    <img src={product.image} alt={product.alt} />
                </div>
                <div className='product-info'>
                    <div className='product-name'>
                        {product.name}
                    </div>
                    <div className='product-description'>
                        {product.description}
                    </div>
                </div>
            </div>
        );
    }
}