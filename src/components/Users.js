import { Component } from 'react';

import User from './User';
import classes from './Users.module.css';

class Users extends Component {
	constructor() {
		super();
		this.state = {
			showUsers: true,
			more: 'test',
		};
	}

	componentDidUpdate() {
		// try {
		//	 someCodeWithMightFail()
		// } catch (err) {
		//   // handle error
		// }
		if (this.props.users.length === 0) {
			throw new Error('No users provided');
		}
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
				{this.props.users.map((user) => (
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
