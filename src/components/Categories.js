import React from 'react'

import { BsInboxes, BsHeart, BsTrash2, BsFileEarmark } from 'react-icons/bs'

import { FiSend } from 'react-icons/fi'
import { IconContext } from 'react-icons'

const Category = props => {
	return (
		<li className="my-4">
			<button type="button" className="flex justify-start items-center w-full">
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
				<IconContext.Provider value={{ size: '1.3em' }}>
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
				</IconContext.Provider>
			</ul>
		</div>
	)
}

export default Categories
