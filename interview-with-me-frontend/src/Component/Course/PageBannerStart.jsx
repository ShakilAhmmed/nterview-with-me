import React from 'react'

export default function PageBannerStart(props) {
    return (
        <>
            <div className="section page-banner-section bg-color-1">
                <img className="shape-1" src="/assets/images/shape/shape-5.png" alt="shape" />
                <img className="shape-2" src="/assets/images/shape/shape-6.png" alt="shape" />
                <img className="shape-3" src="/assets/images/shape/shape-7.png" alt="shape" />
                <img className="shape-4" src="/assets/images/shape/shape-21.png" alt="shape" />
                <img className="shape-5" src="/assets/images/shape/shape-21.png" alt="shape" />
                <div className="container">
                    <div className="page-banner-content">
                        <h2 className="title">{props.name}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
