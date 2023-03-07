import { Component } from 'react';

import User from './User';
import classes from './Users.module.css';

const DUMMY_USERS = [
	{ id: 'u1', name: 'Max' },
	{ id: 'u2', name: 'Manuel' },
	{ id: 'u3', name: 'Julie' },
];

class Users extends Component {
	constructor() {
		super();
		this.state = {
			showUsers: true,
			more: 'test',
		};
	}

	toggleUsersHandler() {
		// this.state.showUsers = false // NOT
		this.setState((curState) => {
			// allways take an object
			return { showUsers: !curState.showUsers };
		});
	}

	render() {
		const usersList = (
			<ul>
				{DUMMY_USERS.map((user) => (
					<User
						key={user.id}
						name={user.name}
					/>
				))}
			</ul>
		);

		return (
			<div className={classes.users}>
				<button onClick={this.toggleUsersHandler.bind(this)}>
					{this.showUsers ? 'Hide' : 'Show'} Users
				</button>
				{this.state.showUsers && usersList}
			</div>
		);
	}
}

export default Users;

/* before transformation to a Class based function 

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;

*/
