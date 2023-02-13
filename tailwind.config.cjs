const { white } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#E30B13'

module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			primary,
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			yellow: {
				700: '#F5C521',
			},
			gray: {
				300: '#d9dae8',
				500: '#999aa5',
				600: '#66676e',
				700: '#39393f',
				800: '#242529',
				900: '#191b1f',
				950: '#101215',
			},
		},
		extend: {
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			fontSize: {
				'2lg': '1.38rem',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			transitionDuration: {
				DEFALUT: '200ms ',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.air-block': {
					color: theme('color.white'),
					backgroundColor: theme('color.gray.950'),
					borderRadius: theme('borderRadius.layout'),
					boxShadow: theme('boxShadow.lg'),
				},

				'.btn-primary': {
					color: white,
					backgroundColor: primary,
					borderRadius: '0.65rem',
					transition: 'background-color .3s ease-in-out',
					'&:hover': {
						backgroundColor: '#ff0009',
					},
				},

				'.text-link': {
					color: 'rgba(255,255,255, .9)',
					textUnderlineOffset: 4,
					textDecorationColor: 'rgba(255,255,255, .2)',
					textDecorationLine: 'underline',
					transition: 'text-decoration-color .3s ease-in-out',
					'&:hover': {
						textDecorationColor: 'rgba(255,255,255, .9)',
					},
				},
			})
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0,0,0,0.4)',
				},

				'.outline-border-none': {
					border: 'none',
					outline: 'none',
				},

				'.flex-center-between': {
					alignItems: 'center',
					display: 'flex',
					justifyContent: 'space-between',
				},

				'.image-like-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none',
				},
			})
		}),
	],
}
