import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ shoe }) => {
    const navigate = useNavigate();
    return (
        <div
            className='col-md-4'
            onClick={() => {
                navigate('/detail/' + shoe.id);
            }}
        >
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
