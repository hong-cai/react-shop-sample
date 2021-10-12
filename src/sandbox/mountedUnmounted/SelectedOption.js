import React, { useReducer, useEffect } from 'react'
import Pet from './Pet'

const optionReducer = (state, action) => {
	switch (action.type) {
		case "selecting":
			console.log('is selecting')
			return {
				...state,
				loading: true,
				pet_selected: action.payload
			}

		case "fetch_pet":
			console.log('is fetching pet')
			return {
				...state,
				loading: true,
				pet: state.pet_selected,
				err_message: 'error'
			}

		case "finish_selecting":
			console.log('finish selecting')
			return {
				...state,
				loading: false,
				pet_selected: action.payload
			}


		case "reset":
			console.log('reset')
			return initialState


		default: {
			throw new Error(`Not supported action ${action.type}`);
		}
	}
}

const pets = {
	dogs: { name: 'dogs', avatar: "🐶" },
	cats: { name: 'cats', avatar: "🐱" }
}


const initialState = {
	loading: false,
	pet_selected: '',
	pet: '',
	err_message: ''
}





function SelectedOption() {
	const [state, dispatch] = useReducer(optionReducer, initialState);



	const handleChange = (e) => {
		dispatch({ type: 'selecting', payload: e.target.value })
	}


	const getData = (type) => {
		return new Promise(
			(resolve, reject) => {
				(setTimeout(() => {
					if (pets[type]) {
						resolve(pets[type])
					} else {
						reject('failed')
					}
				}, 1000))

			}
		)
	}

	useEffect(() => {
		console.log('first: ' + state.pet_selected)
		if (state.pet_selected != '') {
			dispatch({ type: 'fetch_pet' })
			let option = state.pet_selected;
			getData(option).then((result) => { dispatch({ type: 'finish_selecting', payload: result }) }).catch((e) => { console.log(e) })
		} else {
			dispatch({ type: 'reset' })
		}
	}, [initialState])


	return (
		<div>
			<select name="choose a pet" value={state.pet_selected} onChange={handleChange}>
				<option value="">Select a pet </option>
				<option value="cats">Cats</option>
				<option value="dogs">Dogs</option>
			</select>
			<h3>{state.loading ? <p>Loading...</p> : <Pet value={state.pet_selected} />}</h3>
			{/* <h3>{state.pet_selected && }</h3> */}
		</div>
	)
}

export default SelectedOption
