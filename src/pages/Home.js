import React from 'react';
import Title from 'components/Title';
import Textblock from 'components/Textblock';
import ProductList from 'components/Products/ProductList';
import FeaturedProducts from 'components/FeaturedProducts/FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Title name='company' title='home' />
            <Textblock content="The products data is based on a real Wordpress project" />
            <FeaturedProducts />
            <ProductList />
        </div>
    )
}
export default Home;