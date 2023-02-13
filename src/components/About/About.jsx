import { Stack } from '@mui/system';



import Description from './Blocks/Description';
import Heading from './Blocks/Heading';
import Instruction from './Blocks/Instruction/Instruction';


const About = ({ canvasIsLoad, setSplineTarget }) => {
	const styleTransform = { transformOrigin: '0 0 0' }

	return (
		<Stack height={1} justifyContent="center">
			<Heading canvasIsLoad={canvasIsLoad} styleTransform={styleTransform} />
			<Description
				canvasIsLoad={canvasIsLoad}
				styleTransform={styleTransform}
			/>
			<Instruction
				setSplineTarget={setSplineTarget}
				canvasIsLoad={canvasIsLoad}
				styleTransform={styleTransform}
			/>
		</Stack>
	)
}

export default About