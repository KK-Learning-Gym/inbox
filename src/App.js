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

import { BsList } from 'react-icons/bs'
import { IconContext } from 'react-icons'

const MailCol = () => {
	const checkFilter = (mail, filter) => {
		const meta = mail.attributes
		switch (filter) {
			case 'TRASH':
				return meta.includes('DEL')
			case 'SENT':
				return mail.from === 'Tom Ivanov' && !meta.includes('DEL')
			case 'IMPORTANT':
				return meta.includes('IMP') && !meta.includes('DEL')
			case 'INBOX':
			default:
				return mail.to === 'Tom Ivanov' && !meta.includes('DEL')
		}
	}
	const filter = useSelector(state => state.filter)
	const mails = useSelector(state => state.mails).filter(mail =>
		checkFilter(mail, filter)
	)

	return mails.length > 0 ? (
		<div className="flex flex-col mt-4 space-y-2 scroll-y scroll-hide">
			{mails.map(mail => (
				<MailWidget mail={mail} key={mail.id} />
			))}
		</div>
	) : (
		<div className="m-auto">
			<div className="lds-ripple">
				<div></div>
				<div></div>
			</div>
		</div>
	)
}

const Hamburger = () => {
	return (
		<div className="absolute mt-2 ml-1">
			<IconContext.Provider value={{ size: '1.5rem', color: '#4A5568' }}>
				<BsList />
			</IconContext.Provider>
		</div>
	)
}

const Mails = () => {
	return (
		<section className="w-2/6 flex flex-col px-8 pt-8 bg-gray-200 thin vh-100">
			<Search />
			<MailCol />
		</section>
	)
}

const Sidebar = () => {
	return (
		<div className="w-1/6 flex flex-col regular">
			<Compose />
			<div className="divide-y-2">
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
		<div className="w-3/6 divide-y-2">
			<Menu />
			<Content message={mail} />
		</div>
	)
}

const App = () => {
	const dispatch = useDispatch()
	const hook = () => {
		// Remove when fetching
		setTimeout(() => dispatch(setMails(data)), 2000)
	}

	useEffect(hook, [])
	return (
		<>
			<div className="flex text-sm">
				<Sidebar />
				<Mails />
				<View />
			</div>
		</>
	)
}

export default App
