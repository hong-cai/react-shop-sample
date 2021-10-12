import React, { useReducer, useEffect } from 'react'
// import { getPet } from './getPet'
import Pet from './Pet'




const initialState = {
	loading: false,
	selectedPet: "nothing",
	petData: null
};

const petsReducer = (state, action) => {
	switch (action.type) {
		case "PET_SELECTED": {
			return {
				...state,
				selectedPet: action.payload
			};
		}
		case "FETCH_PET": {
			return {
				...state,
				loading: true,
				petData: null
			};
		}
		case "FETCH_PET_SUCESS": {
			return {
				...state,
				loading: false,
				petData: action.payload
			}
		}
		case "RESET": {
			return initialState;
		}
		default: {
			throw new Error(`not supported action ${action.type}`);
		}
	}
}

export const Pets = () => {
	const [pets, dispatch] = useReducer(petsReducer, initialState)





	const handleChange = (event) => {
		console.log(event.currentTarget.value)
		let changedValue = event.currentTarget.value;
		dispatch({ type: 'PET_SELECTED', payload: event.currentTarget.value })
	}

	// useEffect(() => {
	// 	// if (pets.selectedPet !== "") {
	// 	// 	dispatch({ type: 'FETCH_PET' });
	// 	// }
	// 	console.log('when this executed?')
	// })


	return (
		<div>
			<select name="choose a pet" value="PETS" onChange={(e) => handleChange(e)}>
				<option value="">Select a pet </option>
				<option value="cats">Cats</option>
				<option value="dogs">Dogs</option>
			</select>
			{/* {pets.loading && <div>Loading...</div>}
			{pets.petsData && <Pet {...pets.petData} />} */}
		</div>
	)
}


