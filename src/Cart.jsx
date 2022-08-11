import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const states = useSelector((state) => state.stock);
    console.log(states);

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>{states[0].name}</td>
                    <td>{states[0].count}</td>
                    <td>안녕</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>{states[1].name}</td>
                    <td>{states[1].count}</td>
                    <td>안녕</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default Cart;
