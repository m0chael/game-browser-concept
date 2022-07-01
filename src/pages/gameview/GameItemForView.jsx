import React from 'react';
import "../home/GameItem.css";
import GameVideo from './GameVideo';

const GameItem = (props) => {

    const sections_link_classes = () => {
        return "sections sections-link " + props.item.id;
    };
    
    const render_tags = () => {
        let builder = [];
        let this_key = 0;
        for (let i = 0; i < props.item.tags.length; i++){
            this_key = "game-tag-"+i;
            builder.push(<div key={this_key} className="game-tags">{props.item.tags[i]}</div>)
        }
        return builder;
    };

    const render_videos = () => {
        let builder = [];
        for (var i = 0; i < props.item.game_videos.length; i++) {
            builder.push(<GameVideo key={`${props.item.id}_video_${props.item.game_videos[i].id}`} item={props.item.game_videos[i] }/>)
        }
        return <div className="videos-grid">{builder}</div>;
    }
    
    const render_item = () => {
        return (
            <div className="sections-container video-grid-header">
                <div key={props.item.name} className={sections_link_classes()}>
                    <div className="main-sub-title"><div className="sub-title">{props.item.title}</div></div>
                    <div className="main-sub-contents game-video-item">
                        <img src={props.item.image} alt={props.item.title} />
                        <div className="sub-description">{props.item.views}</div>
                        {render_tags()}
                    </div>          
                </div>
            </div>
        )
    };

    const render_game_item_for_vide = () => {
        if (props.item.game_videos.length === 0) {
            return render_item();
        } else {
            return render_videos();
        }
    };

    return (
      render_game_item_for_vide()
    )
};

export default GameItem;