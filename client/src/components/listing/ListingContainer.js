import React from 'react';

export default function ListingtContainer({children}) {
    return (
        <div
            className="container d-flex flex-wrap justify-content-center mt-2 px-0 overflow-scroll"
            // style={{ height: "700px" }}
            style={{
                height: "700px",
                borderRadius: "25px",
                border: " 1px solid var(--orange)",
            }}
        >
            {/* <div
                className="container my-3 overflow-scroll"
                style={{
                    height: "700px",
                    borderRadius: "25px",
                    border: " 1px solid var(--orange)",
                }}
            >
            </div> */}
            {children}
        </div>
    );
};
