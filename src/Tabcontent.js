import React from 'react';
import { useEffect } from 'react';
const Tabcontent = ({ tab, setSwit, swit }) => {
    useEffect(() => {
        setSwit(true);
    }, [swit]);

    if (tab === 0) {
        return <div>0번째 내용입니다</div>;
    } else if (tab === 1) {
        return <div>1번째 내용입니다</div>;
    } else if (tab === 2) {
        return <div>2번째 내용입니다</div>;
    }
};

export default Tabcontent;
