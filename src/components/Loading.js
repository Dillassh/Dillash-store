import "./Loading.css";

function Loading() {
	return (
		<div className='loader'>
			<div className='ball'></div>
			<div className='ball'></div>
			<div className='ball'></div>
			<span>Loading...</span>
		</div>
	);
}

export default Loading;
