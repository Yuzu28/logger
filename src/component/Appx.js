import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
//The connect() function connects a React component to a Redux store.

import { addReminder } from '../actions/index';
import { bindActionCreators} from 'redux';


class Appx extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }


    addReminder(){
        // console.log('this', this);
        this.props.addReminder(this.state.text);
    }
    render(){
        console.log('this.props', this.props)
        return (
            <div className="App">
                <div className="title">
                Logger
                </div>

                <div className="form-inline">
                    <div className="form-group">
                        <input className="form-control" 
                        placeholder="I have to..."
                        onChange={event => this.setState({text: event.target.value})}

                        
    
                        />
                    
                    </div>

                    <button 
                        type="button" 
                        className="btn btn-success" 
                        onClick={() => this.addReminder()}> 
                        Add Reminder




                    </button>

                </div>

            </div>
        )
    }
}

//this is one way of doing it but don't really need to 

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addReminder}, dispatch)

// }
// export default connect(null, mapDispatchToProps)(Appx);

function mapStateToProps(state){
    // console.log('state', state);
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addReminder})(Appx);