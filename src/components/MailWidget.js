import React from 'react'
import { useDispatch } from 'react-redux'
import { setMail } from '../reducers/mailReducer'

import man1 from '../img/man1.jpg'

const MailWidget = ({ mail }) => {
	const dispatch = useDispatch()
	const handleClick = event => {
		const id = event.currentTarget.getAttribute('value')
		dispatch(setMail(id))
	}

	return (
		<div
			className="flex justify-around p-4 rounded-md bg-white"
			onClick={handleClick}
			value={mail.id}
		>
			<img className="w-10 h-10 rounded-full fit" src={man1} alt="Some Guy" />
			<div className="ml-4">
				<div className="flex justify-between">
					<div className="bold">{mail.from}</div>
					<div className="text-sm text-gray-600">Just Now</div>
				</div>
				<div>{mail.subject}</div>
				<div className="text-sm text-gray-600">{mail.body}</div>
			</div>
		</div>
	)
}

export default MailWidget
