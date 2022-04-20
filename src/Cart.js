import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const state = useSelector((state) => state);
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
                {state.map((st, index) => {
                    return (
                        <tr key={index}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.quan}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        dispatch({
                                            type: 'plus',
                                            payload: index,
                                        });
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch({
                                            type: 'minus',
                                            payload: index,
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
