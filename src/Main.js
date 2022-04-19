import './App.css';
import { Button } from 'react-bootstrap';
import React from 'react';
import Product from './product';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = ({ shoes, setShoes }) => {
    return (
        <div>
            <Header />
            <div className='background'>
                <h1>20% Season off</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                </p>
                <p>
                    <Button variant='primary'>Learn more</Button>
                </p>
            </div>

            <div className='container'>
                <div className='row'>
                    {shoes.map((shoe, index) => {
                        return (
                            <>
                                <Product shoe={shoe} key={index} />
                            </>
                        );
                    })}
                </div>
                <button
                    className='btn btn-primary'
                    onClick={() => {
                        axios
                            .get(
                                'https://codingapple1.github.io/shop/data2.json'
                            )
                            .then((result) => {
                                console.log(result.data);
                                setShoes([...shoes, ...result.data]);
                            })
                            .catch(() => {
                                console.log('실패입니다');
                            });
                    }}
                >
                    더보기
                </button>
            </div>
        </div>
    );
};
export default Main;
