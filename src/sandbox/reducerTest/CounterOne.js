import React, { useReducer } from 'react'

function CounterOne() {



	const initialState = {
		count: 0,
		loading: false
	}

	const numReducer = (state, action) => {
		let { count, loading } = state;
		switch (action.type) {
			case "INCREASE": {
				return {
					...state,
					count: ++count
				};
			}
			case "DECREASE": {
				return {
					...state,
					count: count > 0 ? --count : 0
				}
			}
			case "RESET": {
				return initialState;
			}
			default: {
				return state.count
			}
		}
	}


	const [state, dispatch] = useReducer(numReducer, initialState)


	return (
		<div>
			<h3>{state.count}</h3>
			<button onClick={() => { dispatch({ type: 'INCREASE' }) }}>Increment</button>
			<button onClick={() => { dispatch({ type: 'DECREASE' }) }}>Decrement</button>
			<button onClick={() => { dispatch({ type: 'RESET' }) }}>Reset</button>
		</div>
	)
}

export default CounterOne
