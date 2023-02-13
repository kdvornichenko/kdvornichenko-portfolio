import { createTheme } from '@mui/material/styles'

let theme = createTheme({})
let customTypography = createTheme({
	typography: {
		fontFamily: ['Spline Sans Mono', 'monospace'].join(','),
		h1: {
			fontWeight: 700,
			[theme.breakpoints.down('sm')]: {
				fontSize: 30,
				lineHeight: '34px',
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 40,
				lineHeight: '44px',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 52,
				lineHeight: '60px',
			},
		},
		h2: {
			[theme.breakpoints.down('sm')]: {
				fontSize: 20,
				lineHeight: '20px',
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 32,
				lineHeight: '32px',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 44,
				lineHeight: '44px',
			},
		},
		body1: {
			marginTop: '10px',
			[theme.breakpoints.down('sm')]: {
				fontSize: 18,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 22,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 28,
			},
		},
		body2: {
			[theme.breakpoints.down('sm')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 18,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 22,
			},
		},
		subtitle1: {
			[theme.breakpoints.down('sm')]: {
				fontSize: 12,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 14,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 17,
			},
		},
		subtitle2: {
			[theme.breakpoints.down('sm')]: {
				fontSize: 11,
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: 13,
			},
			[theme.breakpoints.up('md')]: {
				fontSize: 16,
			},
		},
	},
}).typography

let customBreakpoints = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 640,
			md: 940,
			lg: 1240,
			xl: 1576,
		},
	},
}).breakpoints

theme = createTheme(theme, {
	typography: customTypography,
	breakpoints: customBreakpoints,
})

// typography: {
// 	fontFamily: ['Spline Sans Mono', 'sans-serif'].join(','),
// 	h1: {
// 		fontSize: 52,
// 		fontWeight: 700,
// 		lineHeight: '60px',
// 	},
// 	h2: {
// 		fontSize: 44,
// 		lineHeight: '44px',
// 	},
// 	body1: {
// 		marginTop: '10px',
// 		fontSize: 28,
// 	},
// 	body2: {
// 		fontSize: 22,
// 	},
// 	subtitle1: {
// 		fontSize: 17,
// 	},
// 	subtitle2: {
// 		fontSize: 16,
// 	},
// },

export default theme
