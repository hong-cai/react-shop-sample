import React from 'react';
import ProductList from './ProductList';
import Title from '../Title';
import Textblock from '../Textblock';


const Products = () => {
    return (
        <><Title title=" main products" name="our" /><Textblock content="Click to see the details of the product" /><ProductList /></>
    )
}



export default Products