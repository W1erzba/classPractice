import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
	render() {
		return <li className={classes.user}>{this.props.name}</li>;
	}
}

/*
Function version of component above.
 To transform function to Class we have to import Component from react and extends our component with  it "... extends Component {" and use React build in method "render() {" besides the returning state, and when we expect props then we have to add this. key before props.name

  const User = (props) => {
	return <li className={classes.user}>{props.name}</li>;
};

*/

export default User;
