import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const states = useSelector((state) => state);
    let dispatch = useDispatch();

    return (
        <div>
            <Table responsive>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                {states.map((state, index) => {
                    return (
                        <tr key={index}>
                            <td>{state.id}</td>
                            <td>{state.name}</td>
                            <td>{state.quan}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        dispatch({
                                            type: 'plus',
                                            payload: state.id,
                                        });
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch({
                                            type: 'minus',
                                            payload: state.id,
                                        });
                                    }}
                                >
                                    -
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </Table>

            <div className='my-alert2'>
                <p>지금 구매하시면 신규할인 20%</p>
            </div>
        </div>
    );
};

export default Cart;
