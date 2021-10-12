import React, { useEffect, useState } from "react";
import "./styles.css";
function DemoFetchZ() {
	let data = { title: "Waiting for Data" };
	const [todo, setTodo] = useState(data);
	const [isData, setData] = useState(false);
	const [isFetching, setFetching] = useState(false);

	useEffect(() => {
		// called after the first render
		async function fetchData() {
			console.log(
				" ----------- cause the re-render ----------- 2 ",
				"setFetching = true"
			);
			setFetching(true); // causing re-render - 2
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/todos/1"
			);
			console.log("response = ", response);
			let data = await response.json();
			console.log(" ----------- cause the re-render ----------- 3 ", "setTodo");
			setTodo(data); //updt state
			console.log(
				" ----------- cause the re-render ----------- 4 ",
				"setFetching = false"
			);
			setFetching(false);
			console.log(" ----------- cause the re-render ----------- 5 ", "setData");
			setData(true);
			console.log("Data = ", data);
		}
		fetchData();
	}, []); //[isData] null value will execute once only?

	if (isFetching) {
		console.log("data loading ......", { isFetching });
		// alert("data loading");
		return <div>...Data Loading.....</div>;
	}

	return (
		<div>
			- Fetch
			<br /> {console.log("..DONE...")}
			<span>Title: {todo.title}</span>
		</div>
	);
}
export default function TestUseeffect() {
	return (
		<div>
			<h1>Hello CodeSandbox</h1>
			<DemoFetchZ />
		</div>
	);
}
