import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = () => {
	return (
		<div className="flex flex-row justify-between items-center p-2 rounded-md bg-gray-300 text-sm text-gray-600">
			<div>Search</div>
			<div>
				<BsSearch />
			</div>
		</div>
	)
}

export default Search
