import React from 'react'
import './App.css'
import data from './data.json'

import MailWidget from './components/MailWidget'
import Search from './components/Search'
import Compose from './components/Compose'
import Categories from './components/Categories'
import Labels from './components/Labels'

const MailCol = ({ mails }) => {
	return (
		<div className="flex flex-col">
			{mails.map(mail => (
				<MailWidget mail={mail} key={mail.id} />
			))}
		</div>
	)
}

const Mails = ({ mails }) => {
	return (
		<section className="flex flex-col p-8 bg-gray-200 w-3/6 thin">
			<Search />
			<MailCol mails={mails} />
		</section>
	)
}

const Sidebar = () => {
	return (
		<div className="flex flex-col w-1/6 p-4 regular text-sm">
			<Compose />
			<div className="my-4 divide-y-2">
				<Categories />
				<Labels />
			</div>
		</div>
	)
}

const App = () => {
	return (
		<div className="flex flex-row text-base">
			<Sidebar />
			<Mails mails={data} />
		</div>
	)
}

export default App
