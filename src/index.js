import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mailReducer from './reducers/mailReducer'

import './tailwind.generated.css'

import App from './App'

const store = createStore(mailReducer)

store.subscribe(() => {
	const storeNow = store.getState()
	console.log(storeNow)
})

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)
