import React from 'react'

const petsDB = {
	dogs: { name: "Dogs", voice: "Woof!", avatar: "dog image" },
	cats: { name: "Cats", voice: "Miauuu", avatar: "cat image" }
}

export const getPet = (type) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(petsDB[type])
		}, 1000);
	})
}
