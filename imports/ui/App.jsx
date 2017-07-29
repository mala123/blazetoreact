import React, { Component } from 'react'

export class App extends React.Component {
	constructor(props) {
		super(props);
		  this.state = {count: 0}
	}

	handleClick() {
	  this.setState({count: this.state.count + 1 });
  }
  render(){
    return(
			<div>
				<h1>welcome to meteor</h1>
				<button  onClick={this.handleClick.bind(this)} type="button">clickhere</button>
				  <p>You've pressed the button {this.state.count} times.</p>

		  <div>
			<h2>Learn Meteor!</h2>
          <ul>
            <li><a href="https://www.meteor.com/try" target="_blank">Do the Tutorial</a></li>
            <li><a href="http://guide.meteor.com" target="_blank">Follow the Guide</a></li>
            <li><a href="https://docs.meteor.com" target="_blank">Read the Docs</a></li>
            <li><a href="https://forums.meteor.com" target="_blank">Discussions</a></li>
          </ul>
			  </div>
			</div>
    )
	}
}
