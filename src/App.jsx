import { ThemeProvider } from '@mui/material/styles'
import { Container } from '@mui/system'
import { useState } from 'react'

import Loader from './components/Loader/Loader'
import MainScreen from './components/MainScreen/MainScreen'
import theme from './theme/theme'

const App = () => {
	const [canvasIsLoad, setCanvasIsLoad] = useState(false)

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="xl">
				{canvasIsLoad ? null : <Loader />}
				<MainScreen
					canvasIsLoad={canvasIsLoad}
					setCanvasIsLoad={setCanvasIsLoad}
				/>
			</Container>
		</ThemeProvider>
	)
}

export default App
