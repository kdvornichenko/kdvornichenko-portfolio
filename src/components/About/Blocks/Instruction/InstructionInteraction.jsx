import ComputerIcon from '@mui/icons-material/Computer'
import DataObjectIcon from '@mui/icons-material/DataObject'
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined'
import LightIcon from '@mui/icons-material/Light'
import SnowboardingIcon from '@mui/icons-material/Snowboarding'
import TvIcon from '@mui/icons-material/Tv'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import {
	Grow,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Stack,
	Switch,
	Typography,
} from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

const InstructionInteraction = ({
	canvasIsLoad,
	styleTransform,
	setSplineTarget,
}) => {
	const listData = [
		{
			icon: <LightIcon />,
			label: 'Свет',
			target: 'LightSwitch',
			isActive: true,
		},
		{
			icon: <TvIcon />,
			label: 'Телевизор',
			target: 'TV',
			isActive: false,
		},
		{
			icon: <KeyboardAltOutlinedIcon />,
			label: 'Перейти в рабочее место',
			target: 'SlideDoor2',
			isActive: false,
		},
		{
			icon: <ComputerIcon />,
			label: 'Компьютер',
			target: 'iMac',
			isActive: false,
		},
		{
			icon: <VolumeUpIcon />,
			label: 'Музыка',
			target: 'MusicPlayer',
			isActive: false,
		},
		{
			icon: <DataObjectIcon />,
			label: 'Hard Skills',
			target: 'Paint1',
			isActive: false,
		},
		{
			icon: <SnowboardingIcon />,
			label: 'Soft Skills',
			target: 'Paint2',
			isActive: false,
		},
	]

	const [checked, setChecked] = useState([])
	const dataRefs = []
	const switchRef = []

	listData.forEach((_) => {
		dataRefs.push(React.createRef(null))
		switchRef.push(React.createRef(null))
	})

	useEffect(() => {
		dataRefs.forEach((item) => {
			item.current.dataset.active == 'true'
				? (item.current.children[0].style.color = '#1976d2')
				: (item.current.children[0].style.color = '#000')
		})
	}, [canvasIsLoad])

	const handleToggle = (index, target) => () => {
		const currentTargetIconColor = dataRefs[index].current.children[0].style

		const currentIndex = checked.indexOf(index)
		const newChecked = [...checked]

		if (currentIndex === -1) {
			newChecked.push(index)

			currentTargetIconColor.color == 'rgb(25, 118, 210)'
				? (currentTargetIconColor.color = 'rgb(0, 0, 0)')
				: (currentTargetIconColor.color = 'rgb(25, 118, 210)')

			setSplineTarget({ target: target, isActive: true })
		} else {
			newChecked.splice(currentIndex, 1)

			currentTargetIconColor.color == 'rgb(0, 0, 0)'
				? (currentTargetIconColor.color = 'rgb(25, 118, 210)')
				: (currentTargetIconColor.color = 'rgb(0, 0, 0)')

			setSplineTarget({ target: target, isActive: false })
		}

		setChecked(newChecked)
	}

	return (
		<Grow in={canvasIsLoad} style={styleTransform} timeout={2500}>
			<Stack>
				<Typography variant="body2" sx={{ opacity: 0.8 }}>
					Взаимодействие:
				</Typography>
				<List dense sx={{ width: '100%', p: 0 }}>
					{listData.map((item, index) => {
						const labelId = `checkbox-list-secondary-label-${index}`
						return (
							<ListItem
								key={index}
								secondaryAction={
									<Switch
										edge="end"
										onChange={handleToggle(index, item.target)}
										checked={
											item.isActive
												? checked.indexOf(index) == -1
												: checked.indexOf(index) !== -1
										}
										ref={switchRef[index]}
										inputProps={{ 'aria-labelledby': labelId }}
									/>
								}
								disablePadding
							>
								<ListItemButton sx={{ ml: -2, gap: '15px' }}>
									<ListItemAvatar
										sx={{
											display: 'flex',
											alignItems: 'center',
											minWidth: 'fit-content',
										}}
										ref={dataRefs[index]}
										index={index}
										data-active={item.isActive}
									>
										{item.icon}
									</ListItemAvatar>
									<ListItemText
										id={labelId}
										disableTypography
										sx={{ my: { xs: 0 }, mb: { lg: 0.4 } }}
									>
										<Typography variant="subtitle2" component="span">
											{item.label}
										</Typography>
									</ListItemText>
								</ListItemButton>
							</ListItem>
						)
					})}
				</List>
			</Stack>
		</Grow>
	)
}

export default InstructionInteraction
