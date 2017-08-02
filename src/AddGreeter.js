import React, { Component } from 'react';
import './AddGreeter.css';


//We import React and Component, as well as our component-specific stylesheet. 
//We declare our component and create a constructor for it, 
//accepting props and passing that to the parent. 
//We also set an initial state called “greetingName” and set it to a blank value.
class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
	this.addGreeting = this.addGreeting.bind(this);
  }


//in our handleUpdate function, we accept in an event and set the state based on that event’s target’s value. 
//This means every time that input is modified, it will trigger this function and update the component’s state based on what is put in/removed 
//from the input.
  handleUpdate(event) {
  	//change value:
    this.setState({ greetingName: event.target.value });
  }


//This calls the “addGreeting” function that was passed in via props and passes that function (remember the newName argument?)
// our greetingName out of state. After that, it clears out the greetingName state from our component. 
  addGreeting() {
  	//passing value that when user click
	  this.props.addGreeting(this.state.greetingName);
	//clear greeting state
	  this.setState({ greetingName: '' });
   } 

   render() {
	  return (
	    <div className="AddGreeter">
	      <input
	        type="text"
	        onChange={this.handleUpdate}
	        value={this.state.greetingName}
	      />
	      &nbsp;&nbsp;
	      <button onClick={this.addGreeting}>Add</button>
	    </div>
	  );
	}
}

export default AddGreeter;