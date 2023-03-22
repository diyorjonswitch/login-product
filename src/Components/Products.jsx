import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App';
import products from '../Data';
import Modal from './Modal';
const Products = () => {

    return (
        <section className='section'>
        <h2>products</h2>
        <div className='products'>
          {products.map((product) => {
            return (
              <article key={product.id}>
                <h4>{product.name}</h4>
                <Link to={`/products/${product.id}`}>more info</Link>
              </article>
            );
        })}
        </div>
      </section>
    );
}

export default Products;
