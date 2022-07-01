import React, { useEffect, useState } from 'react';
import './Navigation.css';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { q, MAX_WIDTH_FOR_SEARCH_PLACEHOLDER, GAME_ITEMS, MAX_SEARCH_POPOP_LENGTH, GlobalState, SEARCHABLE_URL } from "../../utils/utils.js"
import anime from 'animejs';

export default function Navigation(props) {
    const [search_input_value, set_search_input] = useState("");
    let selected_popup_item = 0;
    const global_state_is = React.useContext(GlobalState);
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        if (global_state_is.search_button_navigated) {
            console.log("resetting search input");
            props.set_this_global_state({
                screen_selection: SEARCHABLE_URL,
                is_logged_in: false,
                last_search_query: search_input_value,
                search_button_navigated: false 
            });

            search_process();
        }


        placeholder_responsive();
        if (search_input_value === "") {
            window.addEventListener("resize", window_resize_event_listener);
            document.addEventListener("click", click_for_modal_popup_hiding);
        }
        
        return () => {
            //console.log("Exit cleanly");
            if (search_input_value === "") {
                window.removeEventListener("resize", window_resize_event_listener);
                document.removeEventListener("click", click_for_modal_popup_hiding);
            }
        }
    });

    const click_for_modal_popup_hiding = (evt) => {
        if (evt.target.classList.contains("search-popup") || evt.target.classList.contains("search") || evt.target.classList.contains("search-popup-item")) {}
        else {
            q(".search-popup").classList.add("hide");
        }
    };

    const is_searchable_path = () => {
        return location.pathname === SEARCHABLE_URL;
    };

    const window_resize_event_listener = () => {
        placeholder_responsive();
    };

    const placeholder_responsive = () => {
        if (window.innerWidth <= MAX_WIDTH_FOR_SEARCH_PLACEHOLDER) {
            q(".search").setAttribute("placeholder", "Search...")
        } else {
            q(".search").setAttribute("placeholder", "Search for games, or tags...")
        }
    };

    const search_process = () => {
            if (is_searchable_path()) {
            let this_container = q(".sections-container");
            let this_index_lowercase = null;
            let this_tags_lowercase = null;

            let these_found_items = [];

            for (let item in GAME_ITEMS) {
                this_index_lowercase = GAME_ITEMS[item].title.toLowerCase();
                this_tags_lowercase = GAME_ITEMS[item].tags.toString().toLowerCase();

                if (this_index_lowercase.includes(search_input_value.toLowerCase())) {
                    these_found_items.push(GAME_ITEMS[item].id);
                } else if (this_tags_lowercase.includes(search_input_value.toLowerCase())) {
                    these_found_items.push(GAME_ITEMS[item].id);
                }
            }
            

            if (these_found_items.length === 0) {
                these_found_items.push("not-found");
            }
            
            for (let first_class_lookup = 0; first_class_lookup < this_container.children.length; first_class_lookup++) {
                this_container.children[first_class_lookup].classList.add("hide");
            }

           for (let class_lookup = 0; class_lookup < this_container.children.length; class_lookup++) {
                for (let found_item = 0; found_item < these_found_items.length; found_item++) {

                    if (this_container.children[class_lookup].classList.contains(these_found_items[found_item])) {
                        this_container.children[class_lookup].classList.remove("hide");
                    }

                }   
            }

        }
    };

    const does_popup_menu_have_item_selected = () => {
        let this_search_list = q(".search-popup ul");
        for (let i = 0; i < this_search_list.children.length; i++) {
            if (this_search_list.children[i].classList.contains("selected-popup")) {
                return [true, this_search_list.children[i]];
            }
        }
        
        return [false, null];
    };
    const redirect_to_specific_game = () => {
        let does_popup_have_selected = does_popup_menu_have_item_selected();
        let get_this_id_for_routing = does_popup_have_selected[1].getAttribute('data-id');
        set_search_input("");
        does_popup_have_selected[1].classList.remove("selected-popup");
        navigate(`/game/${get_this_id_for_routing}`)
    };
    
    const redirect_to_specific_game_from_link = (evt) => {
        let get_this_id_for_routing = evt.target.getAttribute("data-id");
        set_search_input("");
        q(".search-popup").classList.add("hide");
        navigate(`/game/${get_this_id_for_routing}`)
    };
    
    const enter_key_pressed_process = () => {
        console.log("Attempting popup")
        q(".search-popup").classList.add("hide");
        let does_popup_have_selected = does_popup_menu_have_item_selected();
        if (does_popup_menu_have_item_selected()[0]) {
            if (does_popup_have_selected[1].classList.contains("popup-input-item")) {
                //Then it's the default input search value
                check_or_navigate_to_home_then_search();
            } else {
                redirect_to_specific_game();
            }
        } else {
            check_or_navigate_to_home_then_search();
        }
    };

    const input_key_up_pressed = (evt) => {
        //if (evt.target.value !== "") {
        q(".search-popup").classList.remove("hide");
        //}

        let this_search_list = q(".search-popup ul");

        if (evt.keyCode === 13) {
            enter_key_pressed_process();
        } else if (evt.keyCode === 40) {
            if (!this_search_list.classList.contains("hide")) {
                for (let i = 0; i < this_search_list.children.length; i++) {
                    if (this_search_list.children[i].classList.contains("selected-popup")) {
                        if (i+1 >= this_search_list.children.length) {
                            selected_popup_item = 0;
                        } else {
                            selected_popup_item = i+1;
                        }
                        this_search_list.children[i].classList.remove("selected-popup");
                        break;
                    }
                }
                this_search_list.children[selected_popup_item].classList.add("selected-popup");
            }
        } else if (evt.keyCode === 38) {
            if (!this_search_list.classList.contains("hide")) {
                for (let k = 0; k < this_search_list.children.length; k++) {
                    if (this_search_list.children[k].classList.contains("selected-popup")) {
                        if (k-1 < 0) {
                            selected_popup_item = this_search_list.children.length-1;
                        } else {
                            selected_popup_item = k-1;
                        }
                        this_search_list.children[k].classList.remove("selected-popup");
                        break;
                    }
                }
                this_search_list.children[selected_popup_item].classList.add("selected-popup");
            }
        }


        /*props.set_this_global_state({
            screen_selection: location.pathname,
            is_logged_in: false,
            last_search_query: search_input_value,
            search_button_navigated: false,
            is_initial_load: false
        });*/

        
    };

    const check_or_navigate_to_home_then_search = () => {
        if (is_searchable_path()) { 
            console.log("Continue search process");
            /* For if switching to button press for search and not live searching */ 
            search_process();
        } else {
            console.log("Attempting redirection then search");
            props.set_this_global_state({
                screen_selection: SEARCHABLE_URL,
                is_logged_in: false,
                last_search_query: search_input_value,
                search_button_navigated: true 
            });
            navigate(SEARCHABLE_URL);
        }
        
        q(".search-popup").classList.add("hide");
    };

    const update_search_value = (evt) => {
        set_search_input(evt.target.value);
        if (evt.target.value !== "") {
            q(".search-popup").classList.remove("hide");
        }
    };

    const clicking_on_input = () => {
        q(".search-popup").classList.remove("hide");
    };

    const animate_logo = () => {
        anime({
            targets: '.logo',
            scaleX:0.9,
            scaleY:0.9,
            duration: 50,
            complete: () => {
                anime({
                    targets: '.logo',
                    scaleX:1,
                    scaleY:1,
                    duration: 200
                  });
            }
          });
    };

    const clear_selected_popup_items = () => {
        let this_search_list = q(".search-popup ul");
        for (let i = 0; i < this_search_list.children.length; i++) {
            this_search_list.children[i].classList.remove("selected-popup");
        }
    };

    const render_popup = () => {
        let this_index_lowercase = null;
        let this_tags_lowercase = null;

        let these_found_items = [];
        if (search_input_value !== "") {
            clear_selected_popup_items();
            these_found_items.push(<li className="popup-input-item search-popup-item selected-popup" key={`popup_${search_input_value}`}>{search_input_value}</li> )
        }
        for (let item in GAME_ITEMS) {
            this_index_lowercase = GAME_ITEMS[item].title.toLowerCase();
            this_tags_lowercase = GAME_ITEMS[item].tags.toString().toLowerCase();
            if (these_found_items.length < MAX_SEARCH_POPOP_LENGTH) {
                if (this_index_lowercase.includes(search_input_value.toLowerCase())) {
                    these_found_items.push(<li onClick={redirect_to_specific_game_from_link} data-id={GAME_ITEMS[item].id} className="search-popup-item" key={`popup_${GAME_ITEMS[item].id}`}>{GAME_ITEMS[item].title}</li>);
                } else if (this_tags_lowercase.includes(search_input_value.toLowerCase())) {
                    these_found_items.push(<li onClick={redirect_to_specific_game_from_link} data-id={GAME_ITEMS[item].id} className="search-popup-item" key={`popup_tags_${GAME_ITEMS[item].id}`}>{GAME_ITEMS[item].title}</li>);
                }
            }
        }

        if (these_found_items.length === 0) {
            these_found_items.push(<li key={"popup_not_found"}>{"Not found"}</li> );
        }
        
        return these_found_items;

    };
    
    return (
        <nav className="top-header">
            <div className="main-header">
                <Link to="/about"><img onClick={animate_logo} className="pointer logo" src="/game-browser-images//vector/default-monochrome-white.svg" alt="Game browser logo"/></Link>
            </div>
            <div className="search-box-container">
                <div className="search-box">
                    <input tabIndex="0" onKeyUp={input_key_up_pressed} onClick={clicking_on_input} className="search" onChange={update_search_value} value={search_input_value}></input>
                    <button onClick={check_or_navigate_to_home_then_search} className="search-button">Search</button>
                </div>
                <div className="search-popup hide">
                    <ul>
                    {render_popup()}
                    </ul>
                </div>
            </div>
            <div className="header-right">
                <div className="link-container"><Link to="/login"><button tabIndex="-1" className="button-secondary button">Login</button></Link></div>
                <div className="link-container"><Link to="/register"><button tabIndex="-1" className="button-primary button">Register</button></Link></div>
            </div>
        </nav>
    );
};