import React from 'react'
import './App.css'
import data from './data.json'

import MailWidget from './components/MailWidget'
import Search from './components/Search'
import Compose from './components/Compose'
import Categories from './components/Categories'
import Labels from './components/Labels'

import {
	BsChevronLeft,
	BsChevronRight,
	BsTrash2,
	BsHeart,
	BsFolder,
} from 'react-icons/bs'
import { IconContext } from 'react-icons'

const MailCol = ({ mails }) => {
	return (
		<div className="flex flex-col mt-4 space-y-2 scroll-y scroll-hide">
			{mails.map(mail => (
				<MailWidget mail={mail} key={mail.id} />
			))}
		</div>
	)
}

const Mails = ({ mails }) => {
	return (
		<section className="flex flex-col px-8 pt-8 bg-gray-200 w-2/6 thin vh-100">
			<Search />
			<MailCol mails={mails} />
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

const Menu = () => {
	return (
		<div className="flex justify-between my-4 text-gray-600">
			<IconContext.Provider value={{ size: '1.3em' }}>
				<div className="flex space-x-4">
					<button type="button">
						<BsHeart />
					</button>
					<button type="button">
						<BsFolder />
					</button>
					<button type="button">
						<BsTrash2 />
					</button>
				</div>
				<div className="flex justify-between">
					<button type="button">
						<BsChevronLeft />
					</button>
					<button type="button">
						<BsChevronRight />
					</button>
				</div>
			</IconContext.Provider>
		</div>
	)
}

const Content = ({ message }) => {
	return (
		<div>
			<div className="flex justify-between py-6">
				<div>
					<span className="bold">{message.from}</span>
					<span className="text-gray-600"> to </span>
					<span className="bold">{message.to}</span>
				</div>
				<div className="text-gray-600">Just now</div>
			</div>
			<div className="space-y-4">
				<div className="text-3xl thin">{message.subject}</div>
				<div className="text-gray-800">{message.body}</div>
			</div>
		</div>
	)
}

const View = ({ mail }) => {
	return (
		<div className="w-3/6 divide-y-2 py-4 px-6">
			<Menu />
			<Content message={mail} />
		</div>
	)
}

const App = () => {
	return (
		<div className="flex text-sm">
			<Sidebar />
			<Mails mails={data} />
			<View mail={data[0]} />
		</div>
	)
}

export default App
