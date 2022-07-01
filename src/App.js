import React, { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import MainPageLayout from "./components/layout/MainPageLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalState} from "./utils/utils.js";
import NotFound from "./pages/notfound/NotFound";
import GameView from "./pages/gameview/GameView";
import Games from "./pages/games/Games";

import { Toaster } from "react-hot-toast";

const INITIAL_GLOBAL_STATE = {
  screen_selection: null,
  is_logged_in: null,
  last_search_query: null,
  search_button_navigated: false,
  is_initial_load: true
};

function App() {
  const [global_state_is, set_global_state_is] = useState(
    INITIAL_GLOBAL_STATE
  );

  const set_this_global_state = (incoming_global_state) => {
    set_global_state_is({
      screen_selection: incoming_global_state.screen_selection,
      is_logged_in: incoming_global_state.is_logged_in,
      last_search_query: incoming_global_state.last_search_query,
      search_button_navigated: incoming_global_state.search_button_navigated,
      is_initial_load: incoming_global_state.is_initial_load
    });
  };


  return (
    <div className="app">
     <div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerStyle={{
            top: 5,
            right:5,
          }}
        />
     </div>
      <GlobalState.Provider value={global_state_is}>
        <MainPageLayout set_this_global_state={set_this_global_state}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/games" />} />
              <Route path="/games" element={<Games set_this_global_state={set_this_global_state} />} />
              <Route path="/about" element={<Home set_this_global_state={set_this_global_state} />} />
              <Route path="/login" element={<Login set_this_global_state={set_this_global_state} />} />
              <Route path="/register" element={<Register set_this_global_state={set_this_global_state} />} />
              <Route path="/game/:id" element={<GameView set_this_global_state={set_this_global_state} />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
        </MainPageLayout>
      </GlobalState.Provider>
    </div>
  );
}

export default App;
