import React from 'react';

export default function PageHeader({title, subTitle}) {
    return (
        <>
            <header className="container my-1 pt-4 header-image page-header">
                <div className="container">
                    <h2 className="display-5 text-light text-center">
                        {title}
                    </h2>
                    <p className="text-white text-center">
                        {subTitle}
                    </p>
                </div>
            </header>
        </>
    )
}
