import React, { useState } from 'react';

const increment = (n) => {
	console.log(n + 1)
	return n + 1;
}


const testCallback = (x) => {
	return x++
}


function TestState() {
	// const [n, setN] =
	const result = useState({ x: 5, y: 1 });
	console.log(result[0]);
	// console.log('re-render' + n);

	// const increment = () => {
	// 	setN(n + 1);
	// 	console.log(n)
	// }


	return (
		<div>
			<h5>plain text</h5>
			{/* <span>{n}</span> */}
			{/* <button onClick={() => { setN(increment) }}>Increment </button> */}
		</div>
	);
}

export default TestState;