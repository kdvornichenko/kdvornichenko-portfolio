import Spline from '@splinetool/react-spline'
import { useEffect, useRef } from 'react'

const House = ({ setCanvasIsLoad, canvasIsLoad, splineTarget }) => {
	const spline = useRef()

	const onLoad = (splineApp) => {
		setCanvasIsLoad(true)
		spline.current = splineApp
	}

	useEffect(() => {
		splineTarget.target !== ''
			? splineTarget.isActive
				? spline.current.emitEvent('mouseDown', `${splineTarget.target}`)
				: spline.current.emitEventReverse('mouseDown', `${splineTarget.target}`)
			: null
	}, [splineTarget])

	return (
		<Spline
			onLoad={onLoad}
			scene="https://prod.spline.design/6XFN6s2V6bBA8eq2/scene.splinecode"
		/>
	)
}

export default House
