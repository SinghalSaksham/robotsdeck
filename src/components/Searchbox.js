import React from 'react';

const Searchbox =({searchchange}) =>{
	return (
		<div className="pa2">
			<input className="ba b--green bg-lightest-blue pa2" type="search" placeholder="Enter Robots" onChange={searchchange}  />
		</div>
	);
}

export default Searchbox;