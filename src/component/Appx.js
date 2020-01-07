import React, {Component} from 'react';
import '../App.css';

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







class Appx extends Component{
    render(){
        return (
            <div className="App">
                <div className="title">
                Logger
                </div>

                <div className="form-inline">
                    <div className="form-group">
                        <input className="form-control" placeholder="I have to..." />
                    
                    </div>

                    <button type="button" className="btn btn-success"> Add Reminder




                    </button>

                </div>

            </div>
        )
    }
}

export default Appx