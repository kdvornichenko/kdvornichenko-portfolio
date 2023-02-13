import { Box, Grid, Grow, Paper, Stack, Typography } from '@mui/material'

import iconA from '../../../../assets/img/icons/A.svg'
import iconD from '../../../../assets/img/icons/D.svg'
import iconS from '../../../../assets/img/icons/S.svg'
import iconSpace from '../../../../assets/img/icons/Space.svg'
import iconW from '../../../../assets/img/icons/W.svg'

const InstructionControlKeys = ({ canvasIsLoad, styleTransform }) => {
	const keysData = [
		{
			title: 'Вверх',
			icon: iconW,
			iconSize: '23px',
		},
		{
			title: 'Влево',
			icon: iconA,
		},
		{
			title: 'Вниз',
			icon: iconS,
		},
		{
			title: 'Вправо',
			icon: iconD,
		},
		{
			title: 'Прыжок',
			icon: iconSpace,
			iconSize: '60px',
			size: 10,
			width: '100%',
			paddings: '16px 0 16px 16px',
		},
	]

	return (
		<Grow in={canvasIsLoad} style={styleTransform} timeout={2000}>
			<Stack>
				<Typography variant="body2" sx={{ opacity: 0.8 }}>
					Управление котом:
				</Typography>
				<Box>
					<Grid
						container
						spacing={2}
						sx={{
							background:
								'linear-gradient(180deg, #BAAED1 0%, rgba(116, 43, 255, 0.2) 100%)',
							boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
							border: '2px solid rgba(255, 255, 255, 0.5)',
							borderRadius: '20px',
							mt: 1,
							ml: 0,
						}}
					>
						{keysData.map((item) => {
							return (
								<Grid
									item
									key={item.title}
									xs={item.size ? item.size : 6}
									sx={{ padding: item.paddings ? item.paddings : '16px' }}
								>
									<Grid container spacing={2}>
										<Grid item xs={item.size ? item.size : 6}>
											<Paper
												variant="outlined"
												sx={{
													width: item.width ? item.width : 44,
													height: 44,
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
													boxShadow: '0 0 5px 1px #b49dbe',
												}}
											>
												<img
													src={item.icon}
													alt={item.title}
													style={{
														width: item.iconSize ? item.iconSize : '18px',
													}}
												/>
											</Paper>
										</Grid>
										<Grid
											item
											xs={2}
											sx={{
												display: 'flex',
												alignItems: 'center',
												opacity: 0.6,
											}}
										>
											<Typography variant="subtitle1" component="span">
												{item.title}
											</Typography>
										</Grid>
									</Grid>
								</Grid>
							)
						})}
					</Grid>
				</Box>
			</Stack>
		</Grow>
	)
}

export default InstructionControlKeys
