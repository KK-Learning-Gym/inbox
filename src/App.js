import React, { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { setMails } from './reducers/mailReducer'
import data from './data.json'

import MailWidget from './components/MailWidget'
import Search from './components/Search'
import Compose from './components/Compose'
import Categories from './components/Categories'
import Labels from './components/Labels'
import Menu from './components/Menu'
import Content from './components/Content'

const MailCol = () => {
	const mails = useSelector(state => state.mails)
	return (
		<div className="flex flex-col mt-4 space-y-2 scroll-y scroll-hide border">
			{mails.map(mail => (
				<MailWidget mail={mail} key={mail.id} />
			))}
		</div>
	)
}

const Mails = () => {
	return (
		<section className="flex flex-col px-8 pt-8 bg-gray-200 w-2/6 thin vh-100">
			<Search />
			<MailCol />
		</section>
	)
}

const Sidebar = () => {
	return (
		<div className="flex flex-col w-1/6 p-4 regular">
			<Compose />
			<div className="my-4 divide-y-2">
				<Categories />
				<Labels />
			</div>
		</div>
	)
}

const View = () => {
	const key = useSelector(state => state.currentMail)
	const mail = data.find(mail => mail.id === key)
	return (
		<div className="w-3/6 divide-y-2 py-4 px-6">
			<Menu />
			<Content message={mail} />
		</div>
	)
}

const App = () => {
	const dispatch = useDispatch()
	const hook = () => {
		dispatch(setMails(data))
	}

	useEffect(hook, [])
	return (
		<div className="flex text-sm">
			<Sidebar />
			<Mails />
			<View />
		</div>
	)
}

export default App
