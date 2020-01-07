import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appx from './component/Appx'

function App() {
  return (
    <div >
      {/* <h1>hello</h1> */}
      <Appx />
    </div>
  );
}

export default App;




// redux store: store is global object that the appication state, it allow a state to be updated
//by dispatch action

//action are just plain javascript objects, action creator are more like a function
//must have

// function() {
//     return {
//         type: 'ADD_REMINDER',
//         payload: {}
//     }

// }


