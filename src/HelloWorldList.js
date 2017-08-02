import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';
import AddGreeter from './AddGreeter';

//

//map each item in the array to a special anonymous function 
//that just returns a HelloWorld component.
//key:This is because for React to know which element to modify/remove/etc when one of the elements in your list changes, 
//it has to be able to uniquely identify which element it is, so here we’re just specifying the key as the name.

class HelloWorldList extends Component {

	constructor(props) {
	  super(props);
	  this.state = { greetings: ['Michelle', 'Simon', 'Roni'] };
	  this.addGreeting = this.addGreeting.bind(this);
	  this.removeGreeting = this.removeGreeting.bind(this);
	}


	// our renderGreetings function needs to be updated to pass this function down to each HelloWorld child.
	renderGreetings() {
	  return this.state.greetings.map(name => (
	    <HelloWorld
	      key={name}
	      name={name}
	      removeGreeting={this.removeGreeting}
	    />
	  ));
	}

	
	//the start of the array should remain this.state.greetings, 
	//but I also want you to add newName onto the end of the array. 
	//This should return a new modified copy of the array but not change the original.

	addGreeting(newName){
	  this.setState({ 
	  	//remain this.state.greetings
	  	greetings: [...this.state.greetings, newName] 
	  });
	}
	////////////////////////////////////////////////////////////
	//This calls the “addGreeting” function that was passed in via props and passes that function (remember the newName argument?) 
	//our greetingName out of state. After that, it clears out the greetingName state from our component. 
	//Finally, we’ll need to modify our render() function a bit to work with this new function:
	//////////////////////////////////////////////////////////////
	//Since this is modifying state and being passed to a child, we need to explicitly bind this inside of the constructor:
	removeGreeting(removeName) {   //remove element inside of the heelowworld file.
	  const filteredGreetings = this.state.greetings.filter(name => {
	    return name !== removeName;
	  });
	  this.setState({ greetings: filteredGreetings });
	}


	render() {
	  return (
	    <div className="HelloWorldList">
	      <AddGreeter addGreeting={this.addGreeting}/>
	      {this.renderGreetings()}
	    </div>
	  );
	}
}
export default HelloWorldList;