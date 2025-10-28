/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Quicksand', 'sans-serif'],
				display: ['Pacifico', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				// Paleta "Pastel Dreams"
				primary: {
					DEFAULT: '#FFB3BA', // Rosa pastel
					foreground: '#8B5A73', // Marrón para texto
				},
				secondary: {
					DEFAULT: '#B3D9FF', // Celeste suave
					foreground: '#4A6FA5', // Marrón para texto
				},
				accent: {
					DEFAULT: '#FFE5B3', // Amarillo suave
					foreground: '#CCAA6B', // Marrón para texto
				},
				muted: {
					DEFAULT: '#FFF8F0', // Crema cálido
					foreground: '#8B5A73', // Marrón para texto
				},
				card: {
					DEFAULT: '#FFFFFF',
					foreground: '#8B5A73',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'heartbeat': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.1)' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'heartbeat': 'heartbeat 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}