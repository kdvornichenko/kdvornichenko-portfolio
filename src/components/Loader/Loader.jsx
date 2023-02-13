import { Box, Stack, Typography } from '@mui/material'

import LoaderCat from './LoaderCat'

const Loader = () => {
	return (
		<Box
			margin="auto"
			position="absolute"
			top={0}
			bottom={0}
			left={0}
			right={0}
			bgcolor="white"
		>
			<Stack height={1} spacing={2} justifyContent="center" alignItems="center">
				<Typography variant="h2" component="h2">
					Loading...
				</Typography>
				<LoaderCat />
			</Stack>
		</Box>
	)
}

export default Loader
