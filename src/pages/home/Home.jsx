import React, {useEffect} from 'react';
import "./Home.css";
import {SEARCHABLE_URL} from "../../utils/utils";
import { Link } from 'react-router-dom';
import anime from 'animejs';

const Home = (props) => {
    
    useEffect(() => {
        anime({
            targets: '.home-sections-container',
            scaleX:0.99,
            scaleY:0.99,
            duration: 800
          });
    })

    return (
        <div className="home">
            <div className="home-sections-container">
                <Link to={SEARCHABLE_URL}>
                    <div className="sections-link home-screen home-screen-hover">
                        <div className="sections">
                            <div className="home-sub-contents">
                                <div className="home-sub-title">Welcome to the Game Browser!</div>
                                <p>This is a concept for a browsing console made in React to view games and videos easily. The search functionality is written from scratch and is able to be reworked to handle any type of data from JSON.</p>
                                <img src="/game-browser-images//vector/default-monochrome-black.svg" alt="Zuvvii Logo" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
};

export default Home;