import './App.css'
import { useTransition, useState } from 'react'

function App() {
	const [isPending, startTransition] = useTransition()
	const [count, setCount] = useState(0)

	function handleClick() {
		startTransition(() => {
			setCount(c => c + 1)
		})
	}

	return (
		<div className='App'>
			<button onClick={handleClick}>{count} Click me</button>
			{isPending && (
				<div>
					<h1>Loading...</h1>
				</div>
			)}
		</div>
	)
}

export default App
