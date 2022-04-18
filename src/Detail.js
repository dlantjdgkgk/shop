import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { Nav } from 'react-bootstrap';
import Tabcontent from './Tabcontent';
import { CSSTransition } from 'react-transition-group';

let Main = styled.div`
    padding: 20px;
`;

let Box = styled.div`
    padding: 20px;
`;
let Title = styled.h4`
    font-size: 25px;
    color: ${(props) => props.color};
`;

const Detail = ({ shoes, stock }) => {
    const [alert, setAlert] = useState(true);
    const [tab, setTab] = useState(0);
    const [swit, setSwit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [alert]);

    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Main>
                <div className='container'>
                    <Box>
                        <Title className='red'>Detail</Title>
                    </Box>
                    {alert === true ? (
                        <div className='my-alert'>
                            <p>재고가 얼마 남지 않았습니다.</p>
                        </div>
                    ) : null}

                    <div className='row'>
                        <div className='col-md-6'>
                            <img
                                src={`https://codingapple1.github.io/shop/shoes1.jpg`}
                                width='100%'
                            />
                        </div>
                        <div className='shoes_info'>
                            <h4 className='pt-5'>{shoes[id]?.title}</h4>
                            <p>{shoes[id]?.content}</p>
                            <p>{shoes[id]?.price}</p>
                            <p>재고 : {stock[0]}</p>
                            <button className='btn btn-danger'>주문하기</button>
                            <button
                                onClick={() => {
                                    navigate(`/`);
                                }}
                                className='btn btn-danger'
                            >
                                뒤로가기
                            </button>
                        </div>
                    </div>
                    <Nav
                        className='mt-5'
                        variant='tabs'
                        defaultActiveKey='link-0'
                    >
                        <Nav.Item>
                            <Nav.Link
                                eventKey='link-0'
                                onClick={() => {
                                    setSwit(false);
                                    setTab(0);
                                }}
                            >
                                Active
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                eventKey='link-1'
                                onClick={() => {
                                    setSwit(false);
                                    setTab(1);
                                }}
                            >
                                Option 2
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <CSSTransition in={swit} classNames='wow' timeout={500}>
                        <Tabcontent tab={tab} setSwit={setSwit} swit={swit} />
                    </CSSTransition>
                </div>
            </Main>
        </>
    );
};

export default Detail;
