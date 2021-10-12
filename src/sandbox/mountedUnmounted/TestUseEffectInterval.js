import React from 'react'

export default function TestUseEffectInterval() {
	const [num, setNum] = React.useState(0);
	const [toggled, setToggle] = React.useState(false)
	const [timer, setTimer] = React.useState(false);
	let startTicking;
	const handleClick = () => {
		setTimer(!timer, () => console.log('what\'s timer: ' + timer))
		console.log('what\'s num: ' + num)

		if (timer === true) {
			startTicking = setInterval(() => {
				setNum(num => num + 1);
			}, 1000);
		}
	}
	React.useEffect(() => {
		console.log('i am just watching: ' + num)
		return () => {
			if (timer === false)
				clearInterval(startTicking)
			console.log("I have cleaned up the messs")
		}
	}, []);
	// React.useEffect(() => {
	// 	console.log('a', num);
	// }, [num]);
	// React.useEffect(() => {
	// 	console.log('b', num);
	// }, [num]);
	return (
		<div>
			<button onClick={handleClick}>Toggle timer</button>
			<button onClick={() => setToggle(!toggled)}>{toggled ? "ye" : "na"}</button>
			<h5>Timer: {num}</h5>
		</div>
	)
}
