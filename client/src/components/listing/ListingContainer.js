import React from 'react';

export default function ListingtContainer({children}) {
    return (
        <div className="container d-flex w-1 flex-wrap justify-content-center mt-5">
            {/* <div className='card-group'> */}
            {children}
        </div>
    );
};
