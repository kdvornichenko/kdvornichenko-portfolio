import { Grow, ThemeProvider, Typography, createTheme } from '@mui/material'

const Heading = ({ canvasIsLoad, styleTransform }) => {
	return (
		<Grow in={canvasIsLoad} style={styleTransform} timeout={1000}>
			<Typography variant="h1" component="h1">
				Привет! <br /> Меня зовут Кирилл <br /> Я - Fronted разработчик
			</Typography>
		</Grow>
	)
}

export default Heading
