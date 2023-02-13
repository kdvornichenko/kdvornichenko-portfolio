import { Grid } from '@mui/material'

import InstructionControlKeys from './InstructionControlKeys'
import InstructionInteraction from './InstructionInteraction'

const Instruction = ({ canvasIsLoad, styleTransform, setSplineTarget }) => {
	return (
		<Grid container spacing={2} sx={{ mt: { xs: 0.5, md: 2 }, gap: '40px' }}>
			<Grid item sx={{ display: { xs: 'none', md: 'block' } }} md={5}>
				<InstructionControlKeys
					canvasIsLoad={canvasIsLoad}
					styleTransform={styleTransform}
				/>
			</Grid>
			<Grid item xs={12} sm={6}>
				<InstructionInteraction
					setSplineTarget={setSplineTarget}
					canvasIsLoad={canvasIsLoad}
					styleTransform={styleTransform}
				/>
			</Grid>
		</Grid>
	)
}

export default Instruction
