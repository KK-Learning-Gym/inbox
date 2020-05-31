import React from 'react'
import './App.css'
import data from './data.json'

import {
	BsSearch,
	BsPencil,
	BsInboxes,
	BsHeart,
	BsTrash2,
	BsFileEarmark,
	BsCircle,
} from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'

import man1 from './img/man1.jpg'

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

const Compose = () => {
	return (
		<button
			type="button"
			className="flex justify-center items-center bg-indigo-500 p-2 rounded text-white"
		>
			<BsPencil className="mr-2" />
			Compose
		</button>
	)
}

const Category = props => {
	return (
		<li className="my-4">
			<button className="flex justify-start items-center w-full">
				{props.children}
				{props.text}
			</button>
		</li>
	)
}

const Categories = () => {
	return (
		<div className="my-8">
			<ul className="list-none">
				<Category text="Inbox">
					<BsInboxes className="mr-2" />
				</Category>
				<Category text="Important">
					<BsHeart className="mr-2" />
				</Category>
				<Category text="Drafts">
					<BsFileEarmark className="mr-2" />
				</Category>
				<Category text="Sent">
					<FiSend className="mr-2" />
				</Category>
				<Category text="Trash">
					<BsTrash2 className="mr-2" />
				</Category>
			</ul>
		</div>
	)
}

const Labels = () => {
	const labels = ['Work', 'Clients', 'Family', 'Friends']
	return (
		<>
			<ul>
				{labels.map(label => (
					<li className="flex justify-start items-center my-4">
						<BsCircle className="mr-3" />
						{label}
					</li>
				))}
			</ul>
		</>
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
