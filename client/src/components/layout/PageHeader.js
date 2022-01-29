import '../css/lost_found.css'
import React from 'react';

export default function PageHeader({title, subTitle}) {
    return (
            <div className="container my-1 pt-4 lost_found">
                <div className="container">
                    <h2 className="display-5 text-light text-center">
                        {title}
                    </h2>
                    <p className="text-white text-center">
                        {subTitle}
                    </p>
                </div>
            </div>
    )
}
