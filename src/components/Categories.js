import React from 'react'
import { useDispatch } from 'react-redux'
import { IconContext } from 'react-icons'

import { setCategory } from '../reducers/mailReducer'

import { BsInboxes, BsHeart, BsTrash2, BsFileEarmark } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'

const Category = props => {
	const dispatch = useDispatch()
	const toUpper = text => String.prototype.toUpperCase.call(text)
	return (
		<li className="my-4">
			<button
				type="button"
				className="flex justify-start items-center w-full"
				onClick={() => dispatch(setCategory(toUpper(props.label)))}
			>
				{props.children}
				{props.label}
			</button>
		</li>
	)
}

const Categories = () => {
	return (
		<div className="mx-4">
			<ul className="list-none">
				<IconContext.Provider value={{ size: '1.3em' }}>
					<Category label="Inbox">
						<BsInboxes className="mr-2" />
					</Category>
					<Category label="Important">
						<BsHeart className="mr-2" />
					</Category>
					<Category label="Drafts">
						<BsFileEarmark className="mr-2" />
					</Category>
					<Category label="Sent">
						<FiSend className="mr-2" />
					</Category>
					<Category label="Trash">
						<BsTrash2 className="mr-2" />
					</Category>
				</IconContext.Provider>
			</ul>
		</div>
	)
}

export default Categories
