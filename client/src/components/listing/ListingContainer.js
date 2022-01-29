import React from 'react';

export default function ListingtContainer({children}) {
    return (
        <div
            className="container d-flex flex-wrap justify-content-center mt-2 px-0"
            // style={{ height: "700px" }}
        >
            {children}
        </div>
    );
};
