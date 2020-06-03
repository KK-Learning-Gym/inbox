import React from 'react'

const Content = ({ message }) => {
	return (
		<div className="my-4">
			<div className="justify-between py-6 mx-6">
				<div>
					<span className="bold">{message.from}</span>
					<span className="text-gray-600"> to </span>
					<span className="bold">{message.to}</span>
				</div>
				<div className="text-gray-600">Just now</div>
			</div>
			<div className="space-y-4 mx-6">
				<div className="text-3xl thin">{message.subject}</div>
				<div className="text-gray-800">{message.body}</div>
			</div>
		</div>
	)
}

export default Content
