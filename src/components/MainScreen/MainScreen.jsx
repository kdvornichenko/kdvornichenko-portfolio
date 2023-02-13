import { Fade, Grid } from '@mui/material'
import { useState } from 'react'

import About from '../About/About'
import House from '../House/House'

const MainScreen = ({ setCanvasIsLoad, canvasIsLoad }) => {
	const [splineTarget, setSplineTarget] = useState({
		target: '',
		isActive: false,
	})

	return (
		<Grid container spacing={2} mt={2} sx={{ alignItems: 'center' }}>
			<Grid item xs={12} lg={6} sx={{ p: 0 }}>
				<About setSplineTarget={setSplineTarget} canvasIsLoad={canvasIsLoad} />
			</Grid>
			<Fade in={canvasIsLoad} timeout={1500} style={{ transitionDelay: 500 }}>
				<Grid
					item
					xs={12}
					lg={6}
					sx={{
						w: 1 / 2,
						height: { xs: 320, sm: 400, md: 550, lg: 715, xl: 800 },
						border: '1px solid #cfcfcf',
						borderRadius: 6,
						overflow: 'hidden',
						ml: { xs: 2, lg: 0 },
						mt: { xs: 2, lg: 0 },
					}}
					style={{ padding: 0 }}
				>
					<House
						canvasIsLoad={canvasIsLoad}
						splineTarget={splineTarget}
						setCanvasIsLoad={setCanvasIsLoad}
					/>
				</Grid>
			</Fade>
		</Grid>
	)
}

export default MainScreen
