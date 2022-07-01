import React from 'react';
import "./NotFound.css";

const NotFound = (props) => {
    return (
            <div className="not-found-page">
                <div className="sections-container">
                    <div className="sections-link not-found">
                        <div className="sections">
                            <div className="main-sub-title">
                                <div className="sub-title">Looks like a 404!</div>
                            </div>
                            <div className="main-sub-contents">
                                <img src="/game-browser-images//vector/default-monochrome-black.svg" alt="Not found!" />
                                    <div className="sub-description"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default NotFound;