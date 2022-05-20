import { useState } from "react";
import "./Search.css";

function Search({ handleSearch }) {
	const [inputSearch, setInputSearch] = useState("");

	console.log(inputSearch);

	return (
		<div className='container_search'>
			<input
				value={inputSearch}
				type='text'
				placeholder='Search...'
				onChange={(e) => {
					setInputSearch(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					handleSearch(inputSearch);
				}}>
				Search
			</button>
		</div>
	);
}

export default Search;
