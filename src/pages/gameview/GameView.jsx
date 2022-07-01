import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "./GameView.css";
import { GAME_ITEMS, NOT_FOUND_GAME_VIEW_ITEM } from '../../utils/utils';
import GameItemForView from './GameItemForView';
import anime from 'animejs';

const GameView = (props) => {
    useEffect(() => {
        window.scrollTo(0,0);
        anime({
            targets: '.game-view',
            scaleX:0.99,
            scaleY:0.99,
            duration: 800
          });
    });
    
    let params = useParams();

    const pull_this_game_item = () => {
        for (let item in GAME_ITEMS) {
            if (GAME_ITEMS[item].id === params.id) {
                return (<GameItemForView key={GAME_ITEMS[item].title} item={GAME_ITEMS[item]} />);
            }
        }
        return <GameItemForView key={"not-found-games"} item={NOT_FOUND_GAME_VIEW_ITEM} />;
    };

    return (
        <div className="game-view-container">
            <div className="sections-container">
                <div className="game-view">{pull_this_game_item()}</div>
            </div>
        </div>
    )
};

export default GameView;