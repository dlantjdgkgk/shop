import React from 'react';

const Latest = ({ shoes }) => {
    let arr = localStorage.getItem('watched');
    arr = JSON.parse(arr);
    console.log(arr);
    console.log(shoes);
    return (
        <>
            <div>
                {shoes.map((shoe, index) => {
                    return <>{shoe.title}</>;
                })}
            </div>
        </>
    );
};
export default Latest;
