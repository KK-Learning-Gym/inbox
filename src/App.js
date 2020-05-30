import React from 'react'
import './App.css'
// import data from './data.json'

import { BsSearch } from 'react-icons/bs'
import man1 from './img/man1.jpg'

const Search = () => {
	return (
		<div className="flex flex-row justify-between items-center p-2 rounded-md bg-gray-300">
			<div>Search</div>
			<div>
				<BsSearch />
			</div>
		</div>
	)
}

const MailWidget = () => {
	return (
		<div className="flex flex-row justify-around my-4 p-4 rounded-md bg-white">
			<img className="w-10 h-10 rounded-full fit" src={man1} />
			<div>
				<div className="flex flex-row justify-between">
					<div className="bold">Ben Oswald</div>
					<div className="text-gray-600">Just Now</div>
				</div>
				<div>Moodboard Update</div>
				<div className="text-gray-600">
					Hi Den! I've been thinking about one thing. Do you realise that it's so damn...
				</div>
			</div>
		</div>
	)
}

const MailCol = () => {
	return (
		<div className="flex flex-col">
			<MailWidget />
			<MailWidget />
			<MailWidget />
      <MailWidget />
      <MailWidget />
		</div>
	)
}

const Mails = () => {
	return (
		<section className="flex flex-col p-8 bg-gray-200">
			<Search />
			<MailCol />
		</section>
	)
}

const App = () => {
	return (
		<div className="thin">
			<Mails />
		</div>
	)
}

export default App
