import { Grid, Grow, Typography } from '@mui/material'
import { Stack } from '@mui/system'

import arrow from './../../../assets/img/icons/arrow.svg'

const Description = ({ canvasIsLoad, styleTransform }) => {
	return (
		<Grow in={canvasIsLoad} style={styleTransform} timeout={1500}>
			<Grid container>
				<Grid item xs={12} lg={10} sx={{ mt: { xs: 2, lg: 3 } }}>
					<Stack>
						<Typography variant="body1">
							Это мое интерактивное портфолио
						</Typography>
						<Typography variant="body1">
							Информация о моих навыках, увлечениях и, конечно, мои работы -
							находятся в доме у кота
						</Typography>
						<Typography variant="body2" sx={{ mt: { xs: 1, lg: 3 } }}>
							Ниже немного информации о возможностях "умного" дома с котом
						</Typography>
					</Stack>
				</Grid>
				<Grid
					item
					sx={{
						display: { xs: 'none', lg: 'block' },
						m: 'auto',
						transform: 'rotate(15deg)',
					}}
					lg={1.5}
				>
					<img src={arrow} alt="Arrow" />
				</Grid>
			</Grid>
		</Grow>
	)
}

export default Description
