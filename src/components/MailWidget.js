import React from 'react'
import man1 from '../img/man1.jpg'

const MailWidget = ({ mail }) => {
	return (
		<div className="flex flex-row justify-around my-4 p-4 rounded-md bg-white">
			<img className="w-10 h-10 rounded-full fit" src={man1} alt="Some Guy" />
			<div className="ml-4">
				<div className="flex flex-row justify-between">
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
