import React from 'react'

import { BsCircle } from 'react-icons/bs'

const Labels = () => {
	const labels = ['Work', 'Clients', 'Family', 'Friends']
	return (
		<>
			<ul>
				{labels.map(label => (
					<li className="my-4">
						<button type="button" className="flex justify-start items-center">
							<BsCircle className="mr-3" />
							{label}
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default Labels
