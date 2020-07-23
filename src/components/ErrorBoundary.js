import React from 'react';

class ErrorBoundary extends React.Component{
	constructor(){
		super();
		this.state={
			hasError: false
		}
	}
	componentDidCatch(error,info){
		this.setStet({hasError : true})
	}

	render(){
		if(this.state.hasError){
			return <h1>OOOOOOPS ! That is not good</h1>
		}
		else{
			return this.props.children
		}
	}
}

export default ErrorBoundary;