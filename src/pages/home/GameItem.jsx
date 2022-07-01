import React from 'react';
import "./GameItem.css";
import { Link } from 'react-router-dom';

const GameItem = (props) => {
    const sections_link_classes = () => {
        return "sections-link " + props.item.id;
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
    const render_inner_game_item = () => {
        return (
            <div key={props.item.name} className="sections sections-hover">
                <div className="main-sub-title"><div className="sub-title">{props.item.title}</div></div>
                <div className="main-sub-contents">
                    <img src={props.item.image} alt={props.item.title} />
                    <div className="sub-description">{props.item.views}</div>
                    {render_tags()}
                </div>
            </div>
        );
    };

    const render_game_item = () => {
        if (props.item.id === "not-found") {
            return (
            <div className={`sections-link ${props.item.id} hide`}>
                {render_inner_game_item()}
            </div>
            )
        } else {
            return (
                <Link to={"/game/"+props.item.id} className={sections_link_classes()}>
                    {render_inner_game_item()}
                </Link> 
            )
        }
    };

    return render_game_item()
};

export default GameItem;