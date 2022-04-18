import React from 'react';

const Product = ({ shoe }) => {
    return (
        <div className='col-md-4'>
            <img
                src={`https://codingapple1.github.io/shop/shoes${
                    shoe.id + 1
                }.jpg`}
                width='100%'
            />
            <h4>{shoe.title}</h4>
            <p>
                {shoe.content} & {shoe.price}
            </p>
        </div>
    );
};

export default Product;
