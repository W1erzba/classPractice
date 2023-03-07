import { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinders.module.css';

export const DUMMY_USERS = [
	{ id: 'u1', name: 'Max' },
	{ id: 'u2', name: 'Manuel' },
	{ id: 'u3', name: 'Julie' },
	{ id: 'u4', name: 'Bartosz' },
	{ id: 'u5', name: 'Madzia' },
	{ id: 'u6', name: 'Marcysia' },
];

class UserFinder extends Component {
	constructor() {
		super();
		this.state = {
			filteredUsers: DUMMY_USERS,
			searchTerm: '',
		};
	}

	/* 
    componentDidMount() {
       TODO: *Send http request...* TODO:
        this.setState({ filteredUsers: DUMMY_USERS })
    }

 */
	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm) {
			this.setState({
				filteredUsers: DUMMY_USERS.filter((user) =>
					user.name.includes(this.state.searchTerm)
				),
			});
		}
	}

	searchChangeHandler(event) {
		this.setState({ searchTerm: event.target.value });
	}

	render() {
		return (
			<Fragment>
				<div className={classes.finder}>
					<input
						type='search'
						onChange={this.searchChangeHandler.bind(this)}
					/>
				</div>

				<Users users={this.state.filteredUsers} />
			</Fragment>
		);
	}
}

export default UserFinder;

/*
 UserFinders component before it was transformed to a Class based

 import { Fragment, useState, useEffect } from 'react';

import Users from './Users';
import classes from './UserFinders.module.css';

export const DUMMY_USERS = [
	{ id: 'u1', name: 'Max' },
	{ id: 'u2', name: 'Manuel' },
	{ id: 'u3', name: 'Julie' },
];

const UserFinder = () => {
	const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		setFilteredUsers(DUMMY_USERS.filter((user) => user.name.includes(searchTerm)));
	}, [searchTerm]);

	const searchChangeHandler = (event) => {
		setSearchTerm(event.target.value);
	};

	return (
		<Fragment>
			<div className={classes.finder}>
				<input
					type='search'
					onChange={searchChangeHandler}
				/>
			</div>

			<Users users={filteredUsers} />
		</Fragment>
	);
};

export default UserFinder;

*/
