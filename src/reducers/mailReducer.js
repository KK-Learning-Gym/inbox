const initialState = {
	currentMail: 1,
	mails: [],
	filter: 'INBOX',
}

const mailReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'OPEN':
			return { ...state, currentMail: action.key }
		case 'INIT':
			return { ...state, mails: action.data }
		case 'MARK':
			const mails = state.mails
			const mailToMark = mails.find(mail => mail.id === action.key)
			const editedMail = { ...mailToMark, important: true }
			const newMails = mails.map(mail =>
				mail.id !== action.data ? mail : editedMail
			)
			return { ...state, mails: newMails }
		case 'FILTER':
			return { ...state, filter: action.data }
		default:
			return state
	}
}

export const setMail = id => {
	return {
		type: 'OPEN',
		key: Number(id),
	}
}

export const setMails = arr => {
	return {
		type: 'INIT',
		data: arr,
	}
}

export const setImportant = id => {
	return {
		type: 'MARK',
		key: Number(id),
	}
}

export const setCategory = filter => {
	return {
		type: 'FILTER',
		data: filter,
	}
}

export default mailReducer
