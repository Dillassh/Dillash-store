import { useState } from "react";
import "./Search.css";

function Search({ history }) {
	return (
		<form>
			<div className='container_search'>
				<input type='text' placeholder='Search...' />
				<button>search</button>
			</div>
		</form>
	);
}

export default Search;
