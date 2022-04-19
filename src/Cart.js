import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

const Cart = (props) => {
    return (
        <div>
            <Table responsive>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                {props.state.map((st, i) => {
                    return (
                        <tr key={i}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td>{st.quan}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        props.dispatch({ type: 'plus' });
                                    }}
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => {
                                        props.dispatch({ type: 'minus' });
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

const redux = (state) => {
    return {
        state: state,
    };
};

export default connect(redux)(Cart);
