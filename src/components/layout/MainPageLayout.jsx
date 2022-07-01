import React from 'react';
import './MainPageLayout.css';
import Navigation from '../nav/Navigation';

export default function MainPageLayout(props) {
  console.log("Layout props");
  console.log(props);
  
  return (
    <main>
      <Navigation set_this_global_state={props.set_this_global_state}/>
      {props.children}
    </main>
  );
};