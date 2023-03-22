import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../Data';

const Single = () => {
    const { productId } = useParams();
    const product = products.find((item) => item.id === productId);
    const { image, name } = product
    return (
        <section className='section product'>
            <div className='hover'>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <Link to='/products'>back to products</Link>
            </div>
        </section>
    );
}

export default Single;
