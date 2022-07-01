import React from 'react';
import "../home/GameItem.css";

const GameVideo = (props) => {

    const sections_link_classes = () => {
        return "sections sections-link " + props.item.id;
    };

    return (
            <div className={sections_link_classes()}>
                <div key={props.item.title}>
                    <div className="main-sub-title"><div className="sub-title">{props.item.title}</div></div>
                    <div className="main-sub-contents">
                        <iframe src={`https://www.youtube.com/embed/${props.item.url}`}
                            frameBorder='0'
                            allow='autoplay; encrypted-media'
                            allowFullScreen
                            title='video'
                            loading='lazy'
                        />
                    </div>
                </div>   
            </div>
    )
};

export default GameVideo;