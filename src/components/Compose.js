import React from 'react'
import { BsPencil } from 'react-icons/bs'

const Compose = () => {
	return (
		<button
			type="button"
			className="flex justify-center items-center bg-indigo-500 p-2 rounded text-white"
		>
			<BsPencil className="mr-2" />
			Compose
		</button>
	)
}

export default Compose
