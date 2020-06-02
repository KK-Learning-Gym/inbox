const initialState = {
	currentMail: 1,
	mails: [],
}

const mailReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'OPEN':
			return { ...state, currentMail: action.data }
		case 'INIT':
			return { ...state, mails: action.data }
		case 'MARK':
			const mails = state.mails
			const mailToMark = mails.find(mail => mail.id === action.data)
			const editedMail = { ...mailToMark, important: true }
			const newMails = mails.map(mail =>
				mail.id !== action.data ? mail : editedMail
			)
			return { ...state, mails: newMails }
		default:
			return state
	}
}

export const setMail = id => {
	return {
		type: 'OPEN',
		data: Number(id),
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
		data: Number(id),
	}
}

export default mailReducer
