import React from 'react'
import { IconContext } from 'react-icons'
import { useSelector, useDispatch } from 'react-redux'
import {
	BsChevronLeft,
	BsChevronRight,
	BsTrash2,
	BsHeart,
	BsFolder,
} from 'react-icons/bs'
import { setMail, setImportant } from '../reducers/mailReducer'

const Menu = () => {
	const dispatch = useDispatch()
	const current = useSelector(state => state.currentMail)
	const noOfMails = useSelector(state => state.mails.length)
	const prevHandler = () => {
		if (current > 1) {
			dispatch(setMail(current - 1))
		}
	}
	const nextHandler = () => {
		if (current < noOfMails) {
			dispatch(setMail(current + 1))
		}
	}
	const markImportant = () => {
		dispatch(setImportant(current))
	}
	return (
		<div className="flex justify-between my-4 text-gray-600 my-4 mx-6">
			<IconContext.Provider value={{ size: '1.3em' }}>
				<div className="flex space-x-4">
					<button type="button">
						<BsHeart onClick={markImportant} />
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
						<BsChevronLeft onClick={prevHandler} />
					</button>
					<button type="button">
						<BsChevronRight onClick={nextHandler} />
					</button>
				</div>
			</IconContext.Provider>
		</div>
	)
}

export default Menu
