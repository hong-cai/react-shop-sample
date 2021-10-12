import React, { useState, useEffect, useRef } from 'react';



function TestUseEffect() {
	console.warn("testuseeffect is loading")
	const initialState = 0;
	const [count, setCount] = useState(initialState);
	const [count2, setCount2] = useState(initialState);
	const [count3, setCount3] = useState(initialState);


	const incrementNum = () => {
		console.log('incrementNum: 1st component loading I am incrementing')
		setCount(count + 1)
		console.log('incrementNum? count: ' + count)
	}
	const incrementPrev = () => {
		console.log('incrementPrev:2nd component loading ')
		setCount2(count2++)
		console.log('incrementNum? count2: ' + count2)
	}
	const incrementPrev3 = () => {
		console.log('incrementPrev:3rd component loading ')
		setCount3(count += 1)
		console.log('incrementNum? count3: ' + count3)
	}
	useEffect(() => {
		console.log('1??? i am loading')
		// Update the document title using the browser API    
		const watchIncrease = () => {
			console.log('count: ' + count)
		}
		const watchAbove = () => {
			console.log("this function is executing because the one above executes when useeffect works")
		}
		document.addEventListener('click', incrementNum);

		return () => {
			console.log('i am cleaning...')
		}
	}, [])



	return (
		<div>
			<p>You clicked {count} times</p>
			<TestButton handleClick={incrementNum}>

			</TestButton>
			<TestButton handleClick={incrementPrev}>

			</TestButton>
			<TestButton handleClick={incrementPrev3}>

			</TestButton>
		</div>
	);
}



const TestButton = ({ handleClick, children }) => {
	return (<button onClick={handleClick}>add</button>)
}
export default TestUseEffect