import React from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends React.Component{
	constructor(){
		super()
		this.state={
			robots :[],
			searchfield : ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
			return response.json()
		}).then(user=>{
			this.setState({robots : user})
		})
	}
	onSearchChange=(event)=>{
		this.setState({searchfield : event.target.value});
	}
	render(){
		const {robots , searchfield} = this.state;
		const filteredrobots = robots.filter(robot=>{
					return robot.name.toLowerCase().includes(searchfield.toLowerCase())
			})
		return !robots.length ?
			<h1 className="tc">Loading</h1> :
		(
					<div className="tc">
						<h1 className="f1">Robotsdeck</h1>
						<Searchbox searchchange={this.onSearchChange}/>
						<Scroll>
							<ErrorBoundary>
								<Cardlist robots={filteredrobots} />
							</ErrorBoundary>
						</Scroll>
					</div>
		);
		
	}

}
export default App;