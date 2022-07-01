import React, {useEffect} from 'react';
import GameItem from "../home/GameItem";
import { GAME_ITEMS, NOT_FOUND_GAME_ITEM } from '../../utils/utils';

import "./Games.css";
import anime from 'animejs';

const Games = (props) => {
    
    useEffect(() => {
        anime({
            targets: '.sections-container',
            scaleX:0.99,
            scaleY:0.99,
            duration: 800
          });
    })

    const render_games = () => {
        let builder = [];
        for (let item in GAME_ITEMS) {
            builder.push(<GameItem is_link={true} key={GAME_ITEMS[item].title} item={GAME_ITEMS[item]} />)
        }
        builder.push(<GameItem key={"not-found-games"} item={NOT_FOUND_GAME_ITEM} />);
        return builder;
    };

    return (
        <div className="games">
            <div className="sections-container">
                {render_games()}
            </div>
        </div>
    )
};

export default Games;