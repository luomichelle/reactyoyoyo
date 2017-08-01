import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';


//map each item in the array to a special anonymous function 
//that just returns a HelloWorld component.
//key:This is because for React to know which element to modify/remove/etc when one of the elements in your list changes, 
//it has to be able to uniquely identify which element it is, so here we’re just specifying the key as the name.

class HelloWorldList extends Component {

	constructor(props) {
	  super(props);
	  this.state = { greetings: ['Michelle', 'Simon', 'Roni'] };
	}
	renderGreetings() {
	  return this.state.greetings.map(name => (
	    <HelloWorld key={name} name={name}/>
	  ));
	}

	render() {
	  return (
	    <div className="HelloWorldList">
	      {this.renderGreetings()}
	    </div>
	  );
	}
}
export default HelloWorldList;